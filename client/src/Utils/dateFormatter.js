import e from "cors";

export const dateFormatter = (date) => {
  if (date) {
    const year = new Date(date).getUTCFullYear();
    const month = new Date(date).getUTCMonth() + 1;
    const dateVal = new Date(date).getUTCDate();
    return `${month} - ${dateVal} - ${year}`;
  } else {
    const year = new Date().getUTCFullYear();
    let month = new Date().getUTCMonth() + 1;
    let dateVal = new Date().getUTCDate();
    // input type date requires specific format, the conditional updates the date to following format
    if (month.toString().length === 1) {
      let monthStr = "0" + month.toString();
      month = monthStr;
    }
    if (dateVal.toString().length === 1) {
      let dateValStr = "0" + dateVal.toString();
      dateVal = dateValStr;
    }
    return `${year}-${month}-${dateVal}`;
  }
};
