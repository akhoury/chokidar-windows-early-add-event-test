# chokidar-windows-early-add-event-test
a chokidar test case to duplicate add-event firing too early on windows

## Steps

* `git clone https://github.com/akhoury/chokidar-windows-early-add-event-test.git`
* `cd chokidar-windows-early-add-event-test`
* `npm i` or `yarn`
* add a large file, by the name `largeFile` in `./chokidar-test/source/largeFile` or just run this

```
mkdir -p ./chokidar-test/source
wget --output-document=./chokidar-test/source/largeFile https://speed.hetzner.de/100MB.bin
```

or you can use an even larger files like https://speed.hetzner.de/1GB.bin or https://speed.hetzner.de/10GB.bin

* then `npm start` to see results

