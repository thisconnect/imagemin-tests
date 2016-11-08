import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminAdvpng from 'imagemin-advpng'

test.before(() => {
  return find('build/**/advpng.*.png')
  .then(files => files.map(file => rm(file)))
})

const advpng = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminAdvpng({
        // optimizationLevel: 3
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'advpng.default.png'), buffer))
  }))
}

// https://github.com/imagemin/imagemin-advpng/issues/3
test.skip('advpng', t => {
  return find('*.png', { cwd: 'images' })
  .then(advpng)
  .then(() => find('build/**/advpng.*.png'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} advpng's`))
})
