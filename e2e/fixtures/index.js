(() => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const calendar = new ApocCalendar({
    target: document.getElementById('calendar'),
    data: {
      name: 'hoge',
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
