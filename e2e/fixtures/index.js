(() => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const calendar = new ApocCalendar({
    target: document.getElementById('calendar'),
    data: {
      head(year, month) {
        return `${year}年${month}月`;
      },
      // day(day) {
      //   return 'a';
      // },

      // min: '2018-01-01',
      max: '2018-12-31',
    },
  });
  calendar.on('change', ({data}) => {
    console.log(data);
  });

  document.getElementById('reset').addEventListener('click', () => {
    console.log(calendar);
    calendar.reset();
  });
})();
