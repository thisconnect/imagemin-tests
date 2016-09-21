import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminPngout from 'imagemin-pngout'

const dir = 'build/pngout'

test.before(t => rm(dir))

// https://github.com/imagemin/imagemin-pngout/issues/1
test.skip('pngout', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminPngout({
    // strategy: 0
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
