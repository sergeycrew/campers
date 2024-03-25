const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatDate = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();

  const formattedDate = `${MONTHS[monthIndex]} ${day}, ${DAYS_OF_WEEK[dayOfWeekIndex]}`;
  return formattedDate;
};
