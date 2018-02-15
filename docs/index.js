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

  multiLeft.restore([
    '2018-02-15',
    '2018-04-04',
  ]);
})();
