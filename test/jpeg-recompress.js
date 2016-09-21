import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminJpegRecompress from 'imagemin-jpeg-recompress'

const dir = 'build/jpeg-recompress'

test.before(t => rm(dir))

test('jpeg-recompress', t => imagemin(['images/*.jpg'], dir, {
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
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
