[![Build Status](https://img.shields.io/travis/thisconnect/imagemin-tests/master.svg?style=flat-square&maxAge=1800)](https://travis-ci.org/thisconnect/imagemin-tests)
[![AppVeyor](https://img.shields.io/appveyor/ci/thisconnect/imagemin-tests/master.svg?style=flat-square&maxAge=1800)](https://ci.appveyor.com/project/thisconnect/imagemin-tests)
[![Dependencies](https://img.shields.io/david/thisconnect/imagemin-tests.svg?style=flat-square&maxAge=1800)](https://david-dm.org/thisconnect/imagemin-tests)

This repository contains all (? or most) imagemin plugins up to this date.
It is intended as a playground to test different
compressions on the same set on images and compare their output.
Plugins default options should be in place, but commented out.

It might help to decide which plugin fits best to you.


## install

```bash
git clone https://github.com/thisconnect/imagemin-tests
cd imagemin-tests
npm install
```


## test

- place images to test/images
- by default there are already a few images,
  just remove them if you don't want to test on the default set,
  see [test/images](https://github.com/thisconnect/imagemin-tests/tree/master/test/images)
- run `npm t` to run all 'enabled' plugins
- or just run one plugin, i.e. `ava --verbose test/zopfli.js`


## list directory contents


```bash
$ ls -Rogh test/**/*
-rw-r--r--@ 1    947K Sep 29  2016 test/images/Deltoidalicositetrahedron.gif
-rw-r--r--@ 1    110K Sep 21  2016 test/images/Ghostscript_Tiger.gif1000.gif
-rw-r--r--@ 1    487K Sep 21  2016 test/images/Ghostscript_Tiger.jpg1000.jpg
-rw-------@ 1    352K Sep 21  2016 test/images/Ghostscript_Tiger.png1000.png
-rw-r--r--@ 1     67K Sep 21  2016 test/images/Ghostscript_Tiger.svg
-rw-r--r--@ 1    279K Sep 28  2016 test/images/Hilbert_Curve_Animation.gif
-rw-r--r--@ 1    1.4M Sep 28  2016 test/images/Mercuryorbitsolarsystem.gif
-rw-r--r--@ 1    6.5K Sep 21  2016 test/images/RGB_12bits_palette.png
-rw-r--r--@ 1    9.9K Sep 21  2016 test/images/RGB_15bits_palette.png
-rw-r--r--@ 1     18K Sep 21  2016 test/images/RGB_16bits_palette.png
-rw-r--r--@ 1     15K Sep 21  2016 test/images/RGB_18bits_palette.png
-rw-------@ 1    187K Sep 21  2016 test/images/Telefunken_wide.jpg
-rw-r--r--@ 1     57K Sep 21  2016 test/images/Testbild.png
-rw-r--r--@ 1    117K Sep 21  2016 test/images/Testbild.svg
-rw-r--r--  1    1.2K Sep 29  2016 test/images/readme.md

test/build/Deltoidalicositetrahedron.gif:
total 1896
-rw-r--r--  1    947K Dec 28 12:04 gifsicle.default.gif

test/build/Ghostscript_Tiger.gif1000.gif:
total 224
-rw-r--r--  1    110K Dec 28 12:04 gifsicle.default.gif

test/build/Ghostscript_Tiger.jpg1000.jpg:
total 1832
-rw-r--r--  1    183K Dec 28 12:05 guetzli.default.jpg
-rw-r--r--  1    160K Dec 28 12:04 jpeg-recompress.default.jpg
-rw-r--r--  1    487K Dec 28 12:04 jpegtran.default.jpg
-rw-r--r--  1     76K Dec 28 12:04 webp.default.webp

test/build/Ghostscript_Tiger.png1000.png:
total 2424
-rw-r--r--  1    251K Dec 28 12:04 advpng.default.png
-rw-r--r--  1    256K Dec 28 12:04 optipng.default.png
-rw-r--r--  1    255K Dec 28 12:05 pngcrush.default.png
-rw-r--r--  1    104K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1     91K Dec 28 12:04 webp.default.webp
-rw-r--r--  1    246K Dec 28 12:06 zopfli.default.png

test/build/Ghostscript_Tiger.svg:
total 136
-rw-r--r--  1     67K Dec 28 12:04 svgo.default.svg

test/build/Hilbert_Curve_Animation.gif:
total 544
-rw-r--r--  1    268K Dec 28 12:04 gifsicle.default.gif

test/build/Mercuryorbitsolarsystem.gif:
total 2760
-rw-r--r--  1    1.3M Dec 28 12:04 gifsicle.default.gif

test/build/RGB_12bits_palette.png:
total 56
-rw-r--r--  1    3.3K Dec 28 12:04 advpng.default.png
-rw-r--r--  1    2.7K Dec 28 12:04 optipng.default.png
-rw-r--r--  1    2.6K Dec 28 12:04 pngcrush.default.png
-rw-r--r--  1    6.5K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1    3.5K Dec 28 12:04 webp.default.webp
-rw-r--r--  1    2.2K Dec 28 12:04 zopfli.default.png

test/build/RGB_15bits_palette.png:
total 72
-rw-r--r--  1    6.5K Dec 28 12:04 advpng.default.png
-rw-r--r--  1    3.8K Dec 28 12:04 optipng.default.png
-rw-r--r--  1    3.8K Dec 28 12:04 pngcrush.default.png
-rw-r--r--  1    9.9K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1    3.3K Dec 28 12:04 webp.default.webp
-rw-r--r--  1    3.2K Dec 28 12:04 zopfli.default.png

test/build/RGB_16bits_palette.png:
total 112
-rw-r--r--  1     14K Dec 28 12:04 advpng.default.png
-rw-r--r--  1    4.5K Dec 28 12:04 optipng.default.png
-rw-r--r--  1    4.6K Dec 28 12:04 pngcrush.default.png
-rw-r--r--  1     13K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1    3.3K Dec 28 12:04 webp.default.webp
-rw-r--r--  1    3.9K Dec 28 12:04 zopfli.default.png

test/build/RGB_18bits_palette.png:
total 112
-rw-r--r--  1     12K Dec 28 12:04 advpng.default.png
-rw-r--r--  1    4.6K Dec 28 12:04 optipng.default.png
-rw-r--r--  1    4.6K Dec 28 12:04 pngcrush.default.png
-rw-r--r--  1     13K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1    3.2K Dec 28 12:04 webp.default.webp
-rw-r--r--  1    3.9K Dec 28 12:04 zopfli.default.png

test/build/Telefunken_wide.jpg:
total 808
-rw-r--r--  1    125K Dec 28 12:06 guetzli.default.jpg
-rw-r--r--  1    106K Dec 28 12:04 jpeg-recompress.default.jpg
-rw-r--r--  1    134K Dec 28 12:04 jpegtran.default.jpg
-rw-r--r--  1     32K Dec 28 12:04 webp.default.webp

test/build/Testbild.png:
total 520
-rw-r--r--  1     57K Dec 28 12:04 advpng.default.png
-rw-r--r--  1     50K Dec 28 12:04 optipng.default.png
-rw-r--r--  1     51K Dec 28 12:04 pngcrush.default.png
-rw-r--r--  1     26K Dec 28 12:04 pngquant.default.png
-rw-r--r--  1     17K Dec 28 12:04 webp.default.webp
-rw-r--r--  1     45K Dec 28 12:05 zopfli.default.png

test/build/Testbild.svg:
total 144
-rw-r--r--  1     69K Dec 28 12:04 svgo.default.svg
```
