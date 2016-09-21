import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminGifsicle from 'imagemin-gifsicle'

const dir = 'build/gifsicle'

test.before(t => rm(dir))

test('gifsicle', t => imagemin(['images/*.gif'], dir, {
  plugins: [imageminGifsicle({
    // interlaced: false,
    // optimizationLevel: 1,
    // colors:
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
