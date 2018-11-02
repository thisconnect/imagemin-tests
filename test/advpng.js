import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminAdvpng from 'imagemin-advpng'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/advpng.*.png'))
    .then(files => files.map(file => rm(file)))
})

const advpng = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
      .then(buffer => imagemin.buffer(buffer, {
        plugins: [imageminAdvpng({
          // optimizationLevel: 3
        })]
      }))
      .then(buffer => writeFile(join(build, file, 'advpng.default.png'), buffer))
  }))
}

test('advpng', t => {
  return find('*.png', { cwd: images })
    .then(advpng)
    .then(() => find(join(build, '**/advpng.*.png')))
    .then(imgs => t.truthy(imgs.length, `found ${imgs.length} advpng's`))
})
