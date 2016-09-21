import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminOptipng from 'imagemin-optipng'

const dir = 'build/optipng'

test.before(t => rm(dir))

test('optipng', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminOptipng({
    // optimizationLevel: 3,
    // bitDepthReduction: true,
    // colorTypeReduction: true,
    // paletteReduction: true,
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
