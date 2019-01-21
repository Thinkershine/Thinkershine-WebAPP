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
