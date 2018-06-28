# TypeScript library starter

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/arta-tm/fa-normalize.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/arta-tm/fa-normalize.svg)](https://travis-ci.org/arta-tm/fa-normalize)
[![Coverage Status](https://coveralls.io/repos/github/arta-tm/fa-normalize/badge.svg?branch=master)](https://coveralls.io/github/arta-tm/fa-normalize?branch=master)
[![Dev Dependencies](https://david-dm.org/arta-tm/fa-normalize.svg)](https://david-dm.org/arta-tm/fa-normalize.svg?type=dev)

<div dir='rtl' align='right'>
کتابخانه جاوا اسکریپت تصحیح متن فارسی جهت استفاده در محیط های گرافیکی وب مانند canvas و یا svg
</div>  

A Javascript library for normalizing persian text in web graphic like svg or canvas

### Install

```bash
npm install fa-normalize
```

### Usage

```ts
import FaNormalize from 'fa-normalize'

FaNormalize('سجاد') // returns 'ﺩﺎﺠﺳ'
FaNormalize('سؤال', false) // returns 'ﺳﻮٔﺍﻝ'
```
