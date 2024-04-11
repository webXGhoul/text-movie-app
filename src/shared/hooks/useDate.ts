enum Days {
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
}
enum Months {
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
}

export const useDate = (date: string): string[] => {
  const dateArr = date.split("-");
  
  const dateYear = dateArr[0]
  const dateMonth = Months[+dateArr[1]]
  
  const day = +dateArr[2];
  const remainder = day % 7;
  const dateDay = Days[remainder]; 
  
  const finallyDate = [dateYear, dateMonth, dateDay];
  
  return finallyDate
};
