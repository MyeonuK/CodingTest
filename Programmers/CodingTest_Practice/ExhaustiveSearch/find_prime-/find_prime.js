let solution = function (numbers) {
  let numbersArr = numbers.split("").sort();

  return makeNum(numbersArr);

  function makeNum(arr) {
    let length = arr.length;
    let num = 0;
    let temp = "";

    for (let i = 0; i < length; i++) {
      if (arr[i] == temp) {
        continue;
      }
      temp = arr[i];
      let nArr = [];
      for (let j = 0; j < length; j++) {
        num;
      }
      num += makeNum(nArr);
    }

    return num;
  }
};

console.log(solution("17"));
