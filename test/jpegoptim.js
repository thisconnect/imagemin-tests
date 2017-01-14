import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminJpegoptim from 'imagemin-jpegoptim'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/jpegoptim.*.jpg'))
  .then(files => files.map(file => rm(file)))
})

const jpegoptim = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminJpegoptim({
        // progressive: false,
        // max: 80,
        // size:
      })]
    }))
    .then(buffer => writeFile(join(build, file, 'jpegoptim.default.jpg'), buffer))
  }))
}

// requires libjpeg
// https://github.com/imagemin/jpegoptim-bin/commit/acf8a07bbfb731b0ce1e6b788f32d7e5dc39208d
test.skip('jpegoptim', t => {
  return find('*.jpg', { cwd: images })
  .then(jpegoptim)
  .then(() => find(join(build, '**/jpegoptim.*.jpg')))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} jpegoptim's`))
})
