function createCalendar(year, month) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const calendar = [];

  let date = 1;
  for (let week = 0; week < 6; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDayOfMonth) {
        days.push(null); // add null for non-existent days before the 1st day of the month
      } else if (date > lastDateOfMonth) {
        days.push(null); // add null for non-existent days after the last day of the month
      } else {
        days.push(date);
        date++;
      }
    }
    calendar.push(days);
    if (date > lastDateOfMonth) {
      break;
    }
  }
  return calendar;
}

module.exports = createCalendar;
