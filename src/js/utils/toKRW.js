export default function (num) {
  if (num.length <= 3) return num;

  let result = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {

    if (i % 3 === 0 && i !== 0) {
      result = num[num.length - i - 1] + "," + result;
      continue;
    }

    result = num[num.length - i - 1] + result; 
  }
  
  return result;
};

export const toNum = (str) => {
  return parseInt(str.split(" ")[0].split(",").join(""), 10);
}

export const removeChildNodes = (el) => {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
}