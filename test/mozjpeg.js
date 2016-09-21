import test from 'ava'
import { readdir, rm } from 'fildes-extra'
import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'

const dir = 'build/mozjpeg'

test.before(t => rm(dir))

// disabled due to missing mozjpeg requirements on OSX
test.skip('mozjpeg', t => imagemin(['images/*.jpg'], dir, {
  plugins: [imageminMozjpeg({
    // quality: 100,
    // progressive: true,
    // targa: false,
    // revert: false,
    // fastcrush: false,
    // dcScanOpt: 1,
    // notrellis: false,
    // notrellisDC: false,
    // tune: 'hvs-psnr',
    // noovershoot: false,
    // arithmetic: false,
    // quantTable:
    // smooth:
    // maxmemory:
  })]
})
.then(() => readdir(dir))
.then(imgs => t.truthy(imgs.length, dir)))
