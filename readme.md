[![Dependencies](https://img.shields.io/david/thisconnect/imagemin-tests.svg?style=flat-square)](https://david-dm.org/thisconnect/imagemin-tests)

This repository contains all (? or most) imagemin plugins up to this date.
It is intended as a playground to test different
compressions on the same set on images and compare their output.
Plugins default options should be in place, but commented out.

It might help to decide which plugin fits to you.


## install

```bash
git clone https://github.com/thisconnect/imagemin-tests
cd imagemin-tests
npm install
```


## test

- place images to test/images
- run `npm t` to run all 'enabled' plugins
- or just run one plugin, i.e. `ava --verbose test/zopfli.js`


## list directory contents


```bash
ls -Rogh test/**/*

-rw-r--r--@ 1    6.5K Sep 21 08:57 test/images/RGB_12bits_palette.png
-rw-r--r--@ 1    9.9K Sep 21 08:57 test/images/RGB_15bits_palette.png
-rw-r--r--@ 1     18K Sep 21 08:57 test/images/RGB_16bits_palette.png
-rw-r--r--@ 1     15K Sep 21 08:57 test/images/RGB_18bits_palette.png
-rw-------@ 1    187K Sep 21 11:05 test/images/Telefunken_wide.jpg
-rw-r--r--@ 1     57K Sep 21 08:49 test/images/Testbild.1000.png
-rw-r--r--@ 1    117K Sep 21 08:48 test/images/Testbild.2000.png
-rw-r--r--@ 1     29K Sep 21 08:48 test/images/Testbild.500.png
-rw-r--r--@ 1    117K Sep 21 08:46 test/images/Testbild.svg
-rw-r--r--  1    293B Sep 21 08:59 test/images/readme.md

test/build/jpeg-recompress:
total 216
-rw-r--r--  1    106K Sep 21 14:56 Telefunken_wide.jpg

test/build/jpegtran:
total 272
-rw-r--r--  1    134K Sep 21 14:56 Telefunken_wide.jpg

test/build/optipng:
total 424
-rw-r--r--  1    2.7K Sep 21 14:56 RGB_12bits_palette.png
-rw-r--r--  1    3.8K Sep 21 14:56 RGB_15bits_palette.png
-rw-r--r--  1    4.5K Sep 21 14:56 RGB_16bits_palette.png
-rw-r--r--  1    4.6K Sep 21 14:56 RGB_18bits_palette.png
-rw-r--r--  1     50K Sep 21 14:56 Testbild.1000.png
-rw-r--r--  1    107K Sep 21 14:56 Testbild.2000.png
-rw-r--r--  1     25K Sep 21 14:56 Testbild.500.png

test/build/pngcrush:
total 432
-rw-r--r--  1    2.6K Sep 21 14:56 RGB_12bits_palette.png
-rw-r--r--  1    3.8K Sep 21 14:56 RGB_15bits_palette.png
-rw-r--r--  1    4.6K Sep 21 14:56 RGB_16bits_palette.png
-rw-r--r--  1    4.6K Sep 21 14:56 RGB_18bits_palette.png
-rw-r--r--  1     51K Sep 21 14:56 Testbild.1000.png
-rw-r--r--  1    108K Sep 21 14:56 Testbild.2000.png
-rw-r--r--  1     25K Sep 21 14:56 Testbild.500.png

test/build/pngquant:
total 320
-rw-r--r--  1    6.5K Sep 21 14:56 RGB_12bits_palette.png
-rw-r--r--  1    9.9K Sep 21 14:56 RGB_15bits_palette.png
-rw-r--r--  1     13K Sep 21 14:56 RGB_16bits_palette.png
-rw-r--r--  1     13K Sep 21 14:56 RGB_18bits_palette.png
-rw-r--r--  1     26K Sep 21 14:56 Testbild.1000.png
-rw-r--r--  1     65K Sep 21 14:56 Testbild.2000.png
-rw-r--r--  1     11K Sep 21 14:56 Testbild.500.png

test/build/webp:
total 232
-rw-r--r--  1    3.5K Sep 21 14:56 RGB_12bits_palette.webp
-rw-r--r--  1    3.3K Sep 21 14:56 RGB_15bits_palette.webp
-rw-r--r--  1    3.3K Sep 21 14:56 RGB_16bits_palette.webp
-rw-r--r--  1    3.2K Sep 21 14:56 RGB_18bits_palette.webp
-rw-r--r--  1     32K Sep 21 14:56 Telefunken_wide.webp
-rw-r--r--  1     17K Sep 21 14:56 Testbild.1000.webp
-rw-r--r--  1     33K Sep 21 14:56 Testbild.2000.webp
-rw-r--r--  1    8.8K Sep 21 14:56 Testbild.500.webp
```
