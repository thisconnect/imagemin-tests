import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminPngquant from 'imagemin-pngquant'

const dir = 'build/pngquant'

test.before(t => rm(dir))

test('pngquant', t => imagemin(['images/*.png'], dir, {
  plugins: [imageminPngquant({
    // floyd: 0.5,
    // nofs: false,
    // posterize:
    // quality:
    // speed: 3
    // verbose: false
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
