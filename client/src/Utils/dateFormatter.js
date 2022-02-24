import e from "cors";

export const dateFormatter = (date) => {
  let year, month, dateVal;
  if (date) {
    year = new Date(date).getUTCFullYear();
    month = new Date(date).getUTCMonth() + 1;
    dateVal = new Date(date).getUTCDate();
  } else {
    year = new Date().getUTCFullYear();
    month = new Date().getUTCMonth() + 1;
    dateVal = new Date().getUTCDate();
  }
  if (month.toString().length === 1) {
    let monthStr = "0" + month.toString();
    month = monthStr;
  }
  if (dateVal.toString().length === 1) {
    let dateValStr = "0" + dateVal.toString();
    dateVal = dateValStr;
  }
  return `${year}-${month}-${dateVal}`;
};
