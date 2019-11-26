const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const sourceDir = path.join(__dirname, 'chokidar-test/source')
const targetDir = path.join(__dirname, 'chokidar-test/target')
const largeFilename = 'largeFile'
const largeFilepath = path.join(sourceDir, largeFilename);

(async () => {
  const filename = filepath => filepath.split(path.sep).pop()

  try {
    await fs.remove(targetDir)
  } catch (e) {}

  await fs.ensureDir(sourceDir)
  await fs.ensureDir(targetDir)

  chokidar.watch(targetDir, {
    ignored: /(^|[/\\])\../ // ignore dotfiles
    // usePolling: true,
    // interval: 300,
    // binaryInterval: 300,
    // useFsEvents: false,
    // awaitWriteFinish: {
    //   stabilityThreshold: 5000,
    //   pollInterval: 300
    // }
  }).on('add', async (filepath) => {
    console.timeEnd(`${filename(filepath)}---WHEN-ADD-FIRES`)
  })

  if (!await fs.exists(largeFilepath)) {
    throw new Error(`You must first create a large file here: ${largeFilepath}`)
  }

  const target1 = path.join(targetDir, `${largeFilename}_using_await_fs.copyFile`)
  const target2 = path.join(targetDir, `${largeFilename}_using_fs.copyFile_with_cb`)
  const target3 = path.join(targetDir, `${largeFilename}_using_fs.copyFileSync`)

  console.time(`${filename(target1)}---WHEN-ADD-FIRES`)
  console.time(`${filename(target1)}----WHEN-COPY-DONE`)
  await fs.copyFile(largeFilepath, target1)
  console.timeEnd(`${filename(target1)}----WHEN-COPY-DONE`)

  console.time(`${filename(target2)}---WHEN-ADD-FIRES`)
  console.time(`${filename(target2)}----WHEN-COPY-DONE`)
  fs.copyFile(largeFilepath, target2, () => {
    console.timeEnd(`${filename(target2)}----WHEN-COPY-DONE`)
  })

  console.time(`${filename(target3)}---WHEN-ADD-FIRES`)
  console.time(`${filename(target3)}----WHEN-COPY-DONE`)
  fs.copyFileSync(largeFilepath, target3)
  console.timeEnd(`${filename(target3)}----WHEN-COPY-DONE`)

  process.exit()
})()
