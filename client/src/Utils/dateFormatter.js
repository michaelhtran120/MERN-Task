export const dateFormatter = (date) => {
  const year = new Date(date).getUTCFullYear();
  const month = new Date(date).getUTCMonth() + 1;
  const dateVal = new Date(date).getUTCDate();
  return `${month} - ${dateVal} - ${year}`;
};
