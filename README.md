nw-ninja (WIP)
==============

node-webkit starter project for ninjas

```
git clone https://github.com/kessler/nw-ninja
```

### develop:
```
	gulp run
```
An auto reload script will be added to the page. It will reload the content inside node-webkit when stuff changes (nodeMain code will not be affected)

### run, but not in debug mode:
```
	gulp run --debug=false
```
### build:
```
gulp build
```
### launch (implies build): (TBD)
```
gulp launch
```

### config

There are two configuration contexts, one for the nw-ninja envelope and one for the actual application.

The envelope configuration is just [rc](https://github.com/dominictarr/rc)

The application configuration is also [rc](https://github.com/dominictarr/rc) but it is exposes through the window object as $appConfig. This is done so I can take in command line arguments given to node-webkit and incorporate them into [rc](https://github.com/dominictarr/rc) using nw.gui module.