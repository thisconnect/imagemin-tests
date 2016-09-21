import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminZopfli from 'imagemin-zopfli'

const dir = 'build/zopfli'

test.before(t => rm(dir))

test('zopfli', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminZopfli({
    // 8bit: false,
    // transparent: false,
    // iterations: 15,
    // iterationsLarge: 5,
    // more: false,
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
