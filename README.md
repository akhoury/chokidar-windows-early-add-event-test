# chokidar-windows-early-add-event-test
a chokidar test case to duplicate add-event firing too early on windows

## Steps

* add a large file, by the name `largeFile` in `./chokidar-test/source/largeFile` or just run this

```
mkdirp ./chokidar-test/source
wget --output-document=./chokidar-test/source/largeFile https://speed.hetzner.de/100MB.bin
```

* then `npm start` to see results

