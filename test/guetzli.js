import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminGuetzli from 'imagemin-guetzli'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/guetzli.*.jpg'))
  .then(files => files.map(file => rm(file)))
})

const guetzli = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminGuetzli({
        quality: 84
        // verbose: true
      })]
    }))
    .then(buffer => writeFile(join(build, file, 'guetzli.default.jpg'), buffer))
  }))
}

test('guetzli', t => {
  return find('*.jpg', { cwd: images })
  .then(guetzli)
  .then(() => find(join(build, '**/guetzli.*.jpg')))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} guetzli's`))
})
