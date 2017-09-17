// Formats the date so that its contents are unabbreviated and properly suffixed, i.e. 'Mon' will
// become 'Monday', 'Aug' will become 'August', '04' will become '4th', etc.
function formatDate(dateInMilliseconds) {
  const unixTimeStamp = new Date(dateInMilliseconds * 1000);
  const str = unixTimeStamp.toString();
  const splitString = str.split(' ');
  let [ day, month, date ] = splitString;

  switch (day) {
    case 'Mon':
      day = 'Monday';
      break;
    case 'Tue':
      day = 'Tuesday';
      break;
    case 'Wed':
      day = 'Wednesday';
      break;
    case 'Thu':
      day = 'Thursday';
      break;
    case 'Fri':
      day = 'Friday';
      break;
    case 'Sat':
      day = 'Saturday';
      break;
    case 'Sun':
      day = 'Sunday';
      break;
    default:
      throw new Error('Day of the week abbreviation not recognised.');
  }

  date = parseInt(date, 10);

  if (date === 1 || date === 21 || date === 31) {
    date += 'st';
  } else if (date === 2 || date === 22) {
    date += 'nd';
  } else if (date === 3 || date === 23) {
    date += 'rd';
  } else if ((date >= 4 && date <= 20) || (date >= 24 && date <= 30)) {
    date += 'th';
  } else {
    throw new Error('Date is not valid.');
  }

  return `${day}, ${month} ${date}`;
} // End of formatDate().

export default formatDate;
