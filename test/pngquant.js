import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminPngquant from 'imagemin-pngquant'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/pngquant.*.png'))
  .then(files => files.map(file => rm(file)))
})

const pngquant = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminPngquant({
        // floyd: 0.5,
        // nofs: false,
        // posterize:
        // quality:
        // speed: 3
        // verbose: false
      })]
    }))
    .then(buffer => writeFile(join(build, file, 'pngquant.default.png'), buffer))
  }))
}

test('pngquant', t => {
  return find('*.png', { cwd: images })
  .then(pngquant)
  .then(() => find(join(build, '**/pngquant.*.png')))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} pngquant's`))
})
