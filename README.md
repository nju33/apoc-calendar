# apoc-calendar

[![npm: apoc-calendar](https://img.shields.io/npm/v/apoc-calendar.svg)](https://www.npmjs.com/package/apoc-calendar)
[![CircleCI: nju33/apoc-calendar](https://circleci.com/gh/nju33/apoc-calendar.svg?style=svg&circle-token=e42b790d474eaba0c90f55c0d90a803511f4736f)](https://circleci.com/gh/nju33/apoc-calendar)
[![Coverage Status](https://coveralls.io/repos/github/nju33/apoc-calendar/badge.svg?branch=master)](https://coveralls.io/github/nju33/apoc-calendar?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: mit](https://img.shields.io/packagist/l/doctrine/orm.svg)

## Install

```bash
yarn add apoc-calendar
npm i apoc-calendar
```

## Usage

### HTML

```
<script src="path/to/apoc-calendar.js></script>
<script>

const calendar = new ApocCalendar({
  target: document.getElementById('calendar'),
  data: {
    month: 5
  },
});

</script>
```
