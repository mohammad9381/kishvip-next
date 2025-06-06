const latinToPersianMap = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
const persianToLatinMap = [
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
  /۰/g,
];
const latinNumbers = [
  /1/g,
  /2/g,
  /3/g,
  /4/g,
  /5/g,
  /6/g,
  /7/g,
  /8/g,
  /9/g,
  /0/g,
];
const latinToNumbersMap = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const arabicToPersianMap = ["۴", "۵", "۶"];
const arabicNumbers = [/٤/g, /٥/g, /٦/g];

export function latinToPersian(string) {
  let result = String(string);

  for (let index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

export function PersianToLatin(string) {
  let result = String(string);

  for (let index = 0; index < 10; index++) {
    result = result.replace(persianToLatinMap[index], latinToNumbersMap[index]);
  }

  return result;
}

export function formatNumber(number, dec = false) {
  number = number.toFixed(2) + "";
  let x = number.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + (dec ? x2 : "");
}
