import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminPngcrush from 'imagemin-pngcrush'

const dir = 'build/pngcrush'

test.before(t => rm(dir))

test('pngcrush', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminPngcrush({
    // reduce: false
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
