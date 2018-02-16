/* eslint-disable no-undef */

(() => {
  const now = new Date();
  // eslint-disable-next-line
  const multiLeft = new ApocCalendar(
    document.getElementById('multi-left'),
    {
      'date.min': now,
      'date.max': dateFns.addMonths(now, 13),
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
      'color.sunday.backgorund': '#fb8aa1',
      'color.saturday.text': '#fff',
      'color.saturday.backgorund': '#1f4089',
      'color.pager.background': '#40a8e2',
    }
  );

  // eslint-disable-next-line
  const multiRight = new ApocCalendar(
    document.getElementById('multi-right'),
    {
      ref: multiLeft,
      'pager.prev': false,
      'pager.next': false,
    }
  );

  // eslint-disable-next-line
  const multiRight2 = new ApocCalendar(
    document.getElementById('multi-right2'),
    {
      ref: multiLeft,
      'pager.prev': false,
    }
  );

  multiLeft.on('onUpdateDates', dates => {
    console.log(dates);
  });
  multiLeft.on('onReachLowerLimit', function () {
    console.log('aaaaa');
    console.log(arguments);
  });
  multiLeft.on('onReachUpperLimit', function () {
    console.log(arguments);
  });

  document.getElementById('reset').addEventListener('click', () => {
    multiLeft.reset();
  });

  console.log(multiLeft);
  multiLeft.restore([
    '2018-02-15',
    '2018-04-04',
  ]);
})();
