import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminPngcrush from 'imagemin-pngcrush'

test.before(() => {
  return find('build/**/pngcrush.*.png')
  .then(files => files.map(file => rm(file)))
})

const pngcrush = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminPngcrush({
        // reduce: false
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'pngcrush.default.png'), buffer))
  }))
}

test('pngcrush', t => {
  return find('*.png', { cwd: 'images' })
  .then(pngcrush)
  .then(() => find('build/**/pngcrush.*.png'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} pngcrush's`))
})
