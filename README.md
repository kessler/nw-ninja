nw-ninja (WIP)
==============

node-webkit starter project for ninjas

```
git clone https://github.com/kessler/nw-ninja
```

```
gulp build
```

```
gulp run
```

```
gulp compile
```

```
gulp watch
```

### config

There are two configuration contexts, one for the nw-ninja envelope and one for the actual application.

The envelope configuration is just [rc](https://github.com/dominictarr/rc)

The application configuration is also [rc](https://github.com/dominictarr/rc) but it is exposes through the window object as $appConfig. This is done so I can take in command line arguments given to node-webkit and incorporate them into [rc](https://github.com/dominictarr/rc) using nw.gui module.