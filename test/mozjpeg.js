import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'

test.before(() => {
  return find('build/**/mozjpeg.*.jpg')
  .then(files => files.map(file => rm(file)))
})

const mozjpeg = files => {
  return Promise.all(files.map(file => {
    return readFile(join('images', file))
    .then(buffer => imagemin.buffer(buffer, {
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
    }))
    .then(buffer => writeFile(join('build', file, 'mozjpeg.default.jpg'), buffer))
  }))
}

// disabled due to missing mozjpeg requirements on OSX
test.skip('mozjpeg', t => {
  return find('*.jpg', { cwd: 'images' })
  .then(mozjpeg)
  .then(() => find('build/**/mozjpeg.*.jpg'))
  .then(imgs => t.truthy(imgs.length, `found ${imgs.length} mozjpeg's`))
})
