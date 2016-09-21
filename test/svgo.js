import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminSvgo from 'imagemin-svgo'

const dir = 'build/svgo'

test.before(t => rm(dir))

test('svgo', t => imagemin(['images/*.svg'], dir, {
  plugins: [imageminSvgo({
    // https://github.com/svg/svgo#what-it-can-do
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
