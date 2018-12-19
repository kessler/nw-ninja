nw-ninja 
======

A minimalistic NW.js starter project for ninjas

```
npm install -g gulp
git clone https://github.com/kessler/nw-ninja
npm install && cd nwapp && npm install
```

### develop
**important:** nw-ninja has moved to **gulp@4** (for security reasons actually)
```
gulp run
```
use --debug=[true|false] (default: true)

### build
```
gulp build
```

### other tasks

#### preBuildClean
clean / delete files before build, to customize, edit preBuildCleanList.json. The paths are relative to ninjaConfig.appDir, this task is run before build task too
```
gulp preBuildClean
```

### config

There are two configuration contexts, one for the nw-ninja envelope and one for the actual application.

The envelope configuration is just [rc](https://github.com/dominictarr/rc)
