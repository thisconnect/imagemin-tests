import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminGifsicle from 'imagemin-gifsicle'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/gifsicle.*.gif'))
    .then(files => files.map(file => rm(file)))
})

const gifsicle = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
      .then(buffer => imagemin.buffer(buffer, {
        plugins: [imageminGifsicle({
          // interlaced: false,
          // optimizationLevel: 1,
          // colors:
        })]
      }))
      .then(buffer => writeFile(join(build, file, 'gifsicle.default.gif'), buffer))
  }))
}

test('gifsicle', t => {
  return find('*.gif', { cwd: images })
    .then(gifsicle)
    .then(() => find(join(build, '**/gifsicle.*.gif')))
    .then(imgs => t.truthy(imgs.length, `found ${imgs.length} gifsicle's`))
})
