import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminOptipng from 'imagemin-optipng'

test.before(() => {
  return find('build/**/optipng.*.png')
  .then(files => files.map(file => rm(file)))
})

const optipng = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminOptipng({
        // optimizationLevel: 3,
        // bitDepthReduction: true,
        // colorTypeReduction: true,
        // paletteReduction: true,
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'optipng.default.png'), buffer))
  }))
}

test('optipng', t => {
  return find('*.png', { cwd: 'images' })
  .then(optipng)
  .then(() => find('build/**/optipng.*.png'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} optipng's`))
})
