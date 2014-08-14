var toolkit = window.$t = {
    findPositionInWindow: function(obj) {
        var curleft = 0;
        var curtop = 0;

        if (obj.offsetParent) {

            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;

            } while (obj = obj.offsetParent);
        }

        return {
            left: curleft,
            top: curtop
        };
    },

    isAudioSupported: function() {
        var test_audio = toolkit.createElement("audio"); //try and create sample audio element
        //var test_video = document.createElement("video"); //try and create sample video element
        //var mediasupport = { audio: (test_audio.play) ? true : false, video: (test_video.play) ? true : false };
        return (test_audio.play) ? true : false;
    },

    isArray: function(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    },

    wrap: function(existing, newElement) {
        existing.parentNode.replaceChild(newElement, existing);
        newElement.appendChild(existing);
    },

    swap: function(existingNode, newNode) {
        existingNode.parentNode.replaceChild(newNode, existingNode);
    },

    insertBefore: function(existingNode, newNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode);
    },

    getDocumentBody: function() {
        var result = document.getElementsByTagName('body');

        if (result.length > 0)
            return result[0];
        else
            this.log('body tag not found!');
    },

    createElement: function(tag, attrs, container) {
        var element = document.createElement(tag);

        for (var attr in attrs)
            element[attr] = attrs[attr];

        // just create the element and return it, dont append it to anything
        if (container === null) return element;

        container = container || this.getDocumentBody();

        if (container)
            container.appendChild(element);
        else
            this.log("could not add element to container");

        return element;
    },

    shallowStringify: function(map) {
        var result = '';

        for (var key in map) {
            var s = '&' + encodeURIComponent(key) + '=' + encodeURIComponent(map[key]);
            result += s;
        }

        // get rid of & prefix if needed
        return result;
    },

    visitTextNodes: function(node, includeWhitespaceNodes, visitor) {
        var whitespace = /^\s*$/;

        function visitTextNodesImpl(node) {
            if (node.nodeType == 3) {
                if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
                    visitor(node);
                }
            }
            else {
                for (var i = 0, len = node.childNodes.length; i < len; ++i) {

                    visitTextNodesImpl(node.childNodes[i]);
                }
            }
        }

        visitTextNodesImpl(node);
    },

    // in debug mode we'll replace this with another function
    log: function() {},

    random: function(start, end) {
        var range = end - start;
        return Math.floor((Math.random() * range) + start);
    },

    byId: function(id) {
        return document.getElementById(id);
    },

    byClass: function(clazz, parent) {
        parent = parent || document;

        return parent.getElementsByClassName(clazz);
    },

    style: function(element, styledata) {
        var elstyle = element.style;
        for (var attr in styledata)
        elstyle[attr] = styledata[attr];
    },

    escapeRegexp: function(text) {
        var t = text.replace(/\\/g, '\\\\');
        return t.replace(/[\^\$\*\+\?\.\(\)\|\{\}\[\]]/g, '\\' + '$&');
    },

    injectScript: function(url, container) {
        var tag = document.createElement('script');

        tag.src = url;

        // container -> head -> body -> script tag
        if (container) {
            container.appendChild(tag);
        } else {
            var head = document.getElementsByTagName('head')[0];

            if (head) {
                head.appendChild(tag);
            } else {
                //try body
                var body = document.getElementsByTagName('body')[0];
                if (body) {
                    body.appendChild(tag);
                } else {
                    var othertag = document.getElementsByTagName('script')[0];
                    if (othertag) {
                        othertag.parentNode.insertBefore(tag, othertag);
                    } else {
                        toolkit.log('couldnt inject script anywhere');
                        return;
                    }
                }
            }
        }

        return tag;

    },

    toQueryString: function(object) {
        var result = [];

        for (var p in object) {
            result.push(encodeURIComponent(p) + '=' + encodeURIComponent(object[p]));
        }

        return result.join('&');
    }
};