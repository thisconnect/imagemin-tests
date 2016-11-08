[![Build Status](https://img.shields.io/travis/thisconnect/imagemin-tests/master.svg?style=flat-square&maxAge=1800)](https://travis-ci.org/thisconnect/imagemin-tests)
[![Dependencies](https://img.shields.io/david/thisconnect/imagemin-tests.svg?style=flat-square&maxAge=1800)](https://david-dm.org/thisconnect/imagemin-tests)
[![AppVeyor](https://img.shields.io/appveyor/ci/thisconnect/imagemin-tests/master.svg?style=flat-square&maxAge=1800)](https://ci.appveyor.com/project/thisconnect/imagemin-tests)

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
ls -Rogh test/**/*

-rw-r--r--@ 1    5.1M Sep 28 13:12 test/images/120-cell-inner.gif
-rw-r--r--@ 1    110K Sep 21 16:14 test/images/Ghostscript_Tiger.gif1000.gif
-rw-r--r--@ 1    487K Sep 21 15:42 test/images/Ghostscript_Tiger.jpg1000.jpg
-rw-------@ 1    352K Sep 21 15:39 test/images/Ghostscript_Tiger.png1000.png
-rw-r--r--@ 1     67K Sep 21 15:38 test/images/Ghostscript_Tiger.svg
-rw-r--r--@ 1    279K Sep 28 12:56 test/images/Hilbert_Curve_Animation.gif
-rw-r--r--@ 1    1.4M Sep 28 13:09 test/images/Mercuryorbitsolarsystem.gif
-rw-r--r--@ 1    6.5K Sep 21 08:57 test/images/RGB_12bits_palette.png
-rw-r--r--@ 1    9.9K Sep 21 08:57 test/images/RGB_15bits_palette.png
-rw-r--r--@ 1     18K Sep 21 08:57 test/images/RGB_16bits_palette.png
-rw-r--r--@ 1     15K Sep 21 08:57 test/images/RGB_18bits_palette.png
-rw-------@ 1    187K Sep 21 11:05 test/images/Telefunken_wide.jpg
-rw-r--r--@ 1     57K Sep 21 08:49 test/images/Testbild.png
-rw-r--r--@ 1    117K Sep 21 08:46 test/images/Testbild.svg
-rw-r--r--  1    1.0K Sep 28 13:17 test/images/readme.md

test/build/120-cell-inner.gif:
total 10376
-rw-r--r--  1    5.1M Sep 29 11:11 gifsicle.default.gif

test/build/Ghostscript_Tiger.gif1000.gif:
total 224
-rw-r--r--  1    110K Sep 29 11:11 gifsicle.default.gif

test/build/Ghostscript_Tiger.jpg1000.jpg:
total 1464
-rw-r--r--  1    160K Sep 29 11:11 jpeg-recompress.default.jpg
-rw-r--r--  1    487K Sep 29 11:11 jpegtran.default.jpg
-rw-r--r--  1     76K Sep 29 11:11 webp.default.webp

test/build/Ghostscript_Tiger.png1000.png:
total 1912
-rw-r--r--  1    256K Sep 29 11:11 optipng.default.png
-rw-r--r--  1    255K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1    104K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1     87K Sep 29 11:11 webp.default.webp
-rw-r--r--  1    246K Sep 29 11:12 zopfli.default.png

test/build/Ghostscript_Tiger.svg:
total 136
-rw-r--r--  1     67K Sep 29 11:11 svgo.default.svg

test/build/Hilbert_Curve_Animation.gif:
total 544
-rw-r--r--  1    268K Sep 29 11:11 gifsicle.default.gif

test/build/Mercuryorbitsolarsystem.gif:
total 2760
-rw-r--r--  1    1.3M Sep 29 11:11 gifsicle.default.gif

test/build/RGB_12bits_palette.png:
total 48
-rw-r--r--  1    2.7K Sep 29 11:11 optipng.default.png
-rw-r--r--  1    2.6K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1    6.5K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1    3.5K Sep 29 11:11 webp.default.webp
-rw-r--r--  1    2.2K Sep 29 11:11 zopfli.default.png

test/build/RGB_15bits_palette.png:
total 56
-rw-r--r--  1    3.8K Sep 29 11:11 optipng.default.png
-rw-r--r--  1    3.8K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1    9.9K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1    3.3K Sep 29 11:11 webp.default.webp
-rw-r--r--  1    3.2K Sep 29 11:11 zopfli.default.png

test/build/RGB_16bits_palette.png:
total 80
-rw-r--r--  1    4.5K Sep 29 11:11 optipng.default.png
-rw-r--r--  1    4.6K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1     13K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1    3.3K Sep 29 11:11 webp.default.webp
-rw-r--r--  1    3.9K Sep 29 11:11 zopfli.default.png

test/build/RGB_18bits_palette.png:
total 80
-rw-r--r--  1    4.6K Sep 29 11:11 optipng.default.png
-rw-r--r--  1    4.6K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1     13K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1    3.2K Sep 29 11:11 webp.default.webp
-rw-r--r--  1    3.9K Sep 29 11:11 zopfli.default.png

test/build/Telefunken_wide.jpg:
total 552
-rw-r--r--  1    106K Sep 29 11:11 jpeg-recompress.default.jpg
-rw-r--r--  1    134K Sep 29 11:11 jpegtran.default.jpg
-rw-r--r--  1     32K Sep 29 11:11 webp.default.webp

test/build/Testbild.png:
total 400
-rw-r--r--  1     50K Sep 29 11:11 optipng.default.png
-rw-r--r--  1     51K Sep 29 11:11 pngcrush.default.png
-rw-r--r--  1     26K Sep 29 11:11 pngquant.default.png
-rw-r--r--  1     17K Sep 29 11:11 webp.default.webp
-rw-r--r--  1     45K Sep 29 11:12 zopfli.default.png

test/build/Testbild.svg:
total 144
-rw-r--r--  1     69K Sep 29 11:11 svgo.default.svg
```
