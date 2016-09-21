import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminJpegoptim from 'imagemin-jpegoptim'

const dir = 'build/jpegoptim'

test.before(t => rm(dir))

// requires libjpeg
test.skip('jpegoptim', t => imagemin(['images/*.jpg'], dir, {
  plugins: [imageminJpegoptim({
    // progressive: false,
    // max: 80,
    // size:
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
