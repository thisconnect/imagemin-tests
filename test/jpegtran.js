import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'

test.before(t => {
  return find('build/**/jpegtran.*.jpg')
  .then(files => files.map(file => rm(file)))
})

const jpegtran = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminJpegtran({
        // progressive: false,
        // arithmetic: false
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'jpegtran.default.jpg'), buffer))
  }))
}

test('jpegtran', t => {
  return find('*.jpg', { cwd: 'images' })
  .then(jpegtran)
  .then(() => find('build/**/jpegtran.*.jpg'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} jpegtran's`))
})
