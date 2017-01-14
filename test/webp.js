import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/webp.*.webp'))
  .then(files => files.map(file => rm(file)))
})

const webp = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminWebp({
        // preset: 'default',
        // quality: 75,
        // alphaQuality: 100,
        // method: 4,
        // size:
        // sns: 80,
        // filter:
        // autoFilter: false,
        // sharpness: 0,
        // lossless: false
      })]
    }))
    .then(buffer => writeFile(join(build, file, 'webp.default.webp'), buffer))
  }))
}

test('webp', t => {
  return find('*.{jpg,png}', { cwd: images })
  .then(webp)
  .then(() => find(join(build, '**/webp.*.webp')))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} webp's`))
})
