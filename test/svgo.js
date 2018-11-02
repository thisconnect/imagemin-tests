import test from 'ava'
import { readFile, writeFile, find, rm } from 'fildes-extra'
import { join } from 'path'
import imagemin from 'imagemin'
import imageminSvgo from 'imagemin-svgo'

const images = join(__dirname, 'images')
const build = join(__dirname, 'build')

test.before(() => {
  return find(join(build, '**/svgo.*.svg'))
    .then(files => files.map(file => rm(file)))
})

const svgo = files => {
  return Promise.all(files.map(file => {
    return readFile(join(images, file))
      .then(buffer => imagemin.buffer(buffer, {
        plugins: [imageminSvgo({
          // https://github.com/svg/svgo#what-it-can-do
        })]
      }))
      .then(buffer => writeFile(join(build, file, 'svgo.default.svg'), buffer))
  }))
}

test('svgo', t => {
  return find('*.svg', { cwd: images })
    .then(svgo)
    .then(() => find(join(build, '**/svgo.*.svg')))
    .then(imgs => t.truthy(imgs.length, `found ${imgs.length} svgo's`))
})
