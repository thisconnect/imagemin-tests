import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminJpegoptim from 'imagemin-jpegoptim'

test.before(t => {
  return find('build/**/jpegoptim.*.jpg')
  .then(files => files.map(file => rm(file)))
})

const jpegoptim = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminJpegoptim({
        // progressive: false,
        // max: 80,
        // size:
      })]
    }))
    .then(buffer => writeFile(join('build', file, 'jpegoptim.default.jpg'), buffer))
  }))
}

// requires libjpeg
test.skip('jpegoptim', t => {
  return find('*.jpg', { cwd: 'images' })
  .then(jpegoptim)
  .then(() => find('build/**/jpegoptim.*.jpg'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} jpegoptim's`))
})
