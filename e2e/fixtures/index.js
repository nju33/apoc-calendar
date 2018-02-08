(() => {
  const today = new Date();

  // eslint-disable-next-line
  const single = new ApocCalendar({
    target: document.getElementById('single'),
    // data: {
    // pager: {
    //   prev: true,
    //   // next: true,
    //   step: 2,
    // },
    //
    // // onClickPagerPrev: () => {
    // // }
    //
    // head(year, month) {
    //   return `${year}年${month}月`;
    // },
    // // day(day) {
    // //   return 'a';
    // // },
    //
    // // min: '2018-01-01',
    // // max: '2018-12-31',
    // // eslint-disable-next-line
    // max: dateFns.addMonths(today, 12)
    // },
  });

  // eslint-disable-next-line no-undef
  // eslint-disable-next-line
  const multiLeft = new ApocCalendar({
    target: document.getElementById('multi-left'),
    data: {
      pager: {
        prev: true,
        // next: true,
        step: 2,
      },

      // onClickPagerPrev: () => {
      // }

      head(year, month) {
        return `${year}年${month}月`;
      },
      // day(day) {
      //   return 'a';
      // },

      // min: '2018-01-01',
      // max: '2018-12-31',
      // eslint-disable-next-line
      max: dateFns.addMonths(today, 11)
    },
  });

  // eslint-disable-next-line no-undef
  const multiRight = new ApocCalendar({
    target: document.getElementById('multi-right'),
    data: {
      pager: {
        // prev: true,
        next: true,
        step: 2,
      },

      // onClickPagerPrev: () => {
      // }

      head(year, month) {
        return `${month}月`;
      },
      // day(day) {
      //   return 'a';
      // },

      // eslint-disable-next-line
      min: dateFns.addMonths(today, 0),
      // eslint-disable-next-line
      initial: dateFns.addMonths(today, 1),
      // eslint-disable-next-line
      max: dateFns.addMonths(today, 11)
      // min: '2018-01-01',
      // max: '2018-12-31',
    },
  });
  multiLeft.on('change', ({data}) => {
    multiLeft.sync(multiRight);
    console.log(data);
  });
  multiRight.on('change', ({data}) => {
    multiRight.sync(multiLeft);
    console.log(data);
  });

  multiRight.on('cahnge', ({data}) => {
    console.log(data);
  });

  multiLeft.on('prev', () => {
    multiLeft.sync(multiRight);
    multiRight.prev();
  });
  multiRight.on('next', () => {
    multiRight.sync(multiLeft);
    multiLeft.next();
  });

  document.getElementById('reset').addEventListener('click', () => {
    console.log(multiLeft);
    multiLeft.reset();
    multiRight.reset();
  });
})();
