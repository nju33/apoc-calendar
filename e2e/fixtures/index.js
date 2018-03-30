'use strict';

/* eslint-disable no-undef */

(function () {
  const min = new Date();
  const max = dateFns.addMonths(min, 13);
  // eslint-disable-next-line
  var multiLeft = new ApocCalendar(document.getElementById('multi-left'), {
    'date.min': min,
    'date.max': max,
    'pager.next': false,

    'color.background': '#40a8e2',
    'color.header.background': '#40a8e2',
    'color.header.text': '#fff',
    'color.tableCell.background.default': '#fff',
    'color.tableCell.background.even': '#f3f3f3',
    'color.tableCell.background.blank': '#fff',
    'color.tableCell.background.active': '#c2e5fa',
    'color.tableCell.text.invalid': '#8a99a4',
    'color.tableCell.background.invalid': '#fff',
    'color.sunday.text': '#fff',
    'color.sunday.background': '#fb8aa1',
    'color.saturday.text': '#fff',
    'color.saturday.background': '#1f4089',
    'color.pager.background': '#40a8e2',
  });

  // eslint-disable-next-line
  var multiRight = new ApocCalendar(document.getElementById('multi-right'), {
    ref: multiLeft,
    'pager.prev': false,
    'pager.next': false,
  });

  // eslint-disable-next-line
  var multiRight2 = new ApocCalendar(document.getElementById('multi-right2'), {
    ref: multiLeft,
    'pager.prev': false,
  });

  // eslint-disable-next-line
  multiLeft.on('onUpdateDates', function (dates) {
    console.log(dates);
  });
  // eslint-disable-next-line
  multiLeft.on('onReachLowerLimit', function () {
    console.log('aaaaa');
    console.log(arguments);
  });
  // eslint-disable-next-line
  multiLeft.on('onReachUpperLimit', function () {
    console.log(arguments);
  });

  // eslint-disable-next-line
  document.getElementById('reset').addEventListener('click', function () {
    multiLeft.reset();
  });

  console.log(multiLeft);
  multiLeft.restore(['2018-02-15', '2018-04-04']);
})();
