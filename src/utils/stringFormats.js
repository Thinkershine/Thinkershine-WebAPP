export function formatCurrency(amountToFormat) {
  return amountToFormat.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export function formatDate(dateToFormat) {
  const formattedDate = new Date(dateToFormat);
  let month = (formattedDate.getMonth() + 1).toString();
  let day = formattedDate.getDate().toString();
  const year = formattedDate.getFullYear().toString();

  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  return [day, month, year].join("/");
}

export function formatDateWithWordForMonth(dateToFormat) {
  const formattedDate = new Date(dateToFormat);
  let month = formattedDate.getMonth() + 1;
  let day = formattedDate.getDate().toString();
  const year = formattedDate.getFullYear().toString();

  if (day.length < 2) {
    day = "0" + day;
  }

  switch (month) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }

  return [day, month.toUpperCase(), year].join(" ");
}
