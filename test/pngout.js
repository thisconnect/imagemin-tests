import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminPngout from 'imagemin-pngout'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/pngout.*.png'))
    .then(files => files.map(file => rm(file)))
})

const pngout = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
      .then(buffer => imagemin.buffer(buffer, {
        plugins: [imageminPngout({
          // strategy: 0
        })]
      }))
      .then(buffer => writeFile(join(build, file, 'pngout.default.png'), buffer))
  }))
}

test('pngout', t => {
  return find('*.png', { cwd: images })
    .then(pngout)
    .then(() => find(join(build, '**/pngout.*.png')))
    .then(imgs => t.truthy(imgs.length, `found ${imgs.length} pngout's`))
})
