module.exports = function toReadable (number) {
  const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  const numberStr = number.toString();

  if (number <= 20) {
    return numbers[number];
  } else if (numberStr.length < 3) {
    return number % 10 === 0 ? numbers[number] : numbers[numberStr[0] + 0] + " " + numbers[numberStr[1]];
  } else if (numberStr.length < 4) {
    const Tens = number - (numberStr[0] + '00');
    const HundredsString = numbers[numberStr[0]] + " hundred";
    let NameTens = '';
    
    if (Tens <= 0) {
      return HundredsString;
    } else if (Tens <= 20) {
      NameTens = numbers[Tens];
    } else {
      NameTens = numbers[numberStr[1] + 0] + (numberStr[2] != 0 ? " " + numbers[numberStr[2]] : "");
    }

    return HundredsString + " " + NameTens;
  }
}
