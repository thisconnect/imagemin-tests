import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'

const dir = 'build/jpegtran'

test.before(t => rm(dir))

test('jpegtran', t => imagemin(['images/*.jpg'], dir, {
  plugins: [imageminJpegtran({
    // progressive: false,
    // arithmetic: false
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
