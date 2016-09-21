import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

const dir = 'build/webp'

test.before(t => rm(dir))

test('webp', t => imagemin(['images/*.{jpg,png}'], dir, {
  plugins: [imageminWebp({
    // preset: 'default',
    // quality: 75,
    // alphaQuality: 100,
    // method: 4,
    // size:
    // sns: 80,
    // filter:
    // autoFilter: false,
    // sharpness: 0,
    // lossless: false
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
