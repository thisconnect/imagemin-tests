import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminJpegRecompress from 'imagemin-jpeg-recompress'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/jpeg-recompress.*.jpg'))
  .then(files => files.map(file => rm(file)))
})

const jpegRecompress = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
    .then(buffer => imagemin.buffer(buffer, {
      plugins: [imageminJpegRecompress({
        // accurate: false,
        // quality: 'medium',
        // method: 'ssim',
        // target: 0.9999,
        // min: 40,
        // max: 95,
        // loops: 6,
        // defish: 0
        // progressive: true,
        // subsample: 'default'
        // strip: true
      })]
    }))
    .then(buffer => writeFile(join(build, file, 'jpeg-recompress.default.jpg'), buffer))
  }))
}

test('jpeg-recompress', t => {
  return find('*.jpg', { cwd: images })
  .then(jpegRecompress)
  .then(() => find(join(build, '**/jpeg-recompress.*.jpg')))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} jpeg-recompress's`))
})
