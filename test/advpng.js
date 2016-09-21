import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminAdvpng from 'imagemin-advpng'

const dir = 'build/advpng'

test.before(t => rm(dir))

// https://github.com/imagemin/imagemin-advpng/issues/3
test.skip('advpng', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminAdvpng({
    // optimizationLevel: 3
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
