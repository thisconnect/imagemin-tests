import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminZopfli from 'imagemin-zopfli'

test.before(t => {
  return find('build/**/zopfli.*.png')
  .then(files => files.map(file => rm(file)))
})

const zopfli = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminZopfli({
        // 8bit: false,
        // transparent: false,
        // iterations: 15,
        // iterationsLarge: 5,
        // more: false,
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'zopfli.default.png'), buffer))
  }))
}

test('zopfli', t => {
  return find('*.png', { cwd: 'images' })
  .then(zopfli)
  .then(() => find('build/**/zopfli.*.png'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} zopfli's`))
})
