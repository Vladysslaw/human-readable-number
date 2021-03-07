module.exports = function toReadable (number) {
    let str = '';
    let units = ['zero' ,'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    let dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (number >= 0 && number < 10) {
      units.forEach((item, index) => {
        if (index == number) {
          str = item;
        }
      });
    }
    if (number >= 10 && number < 20) {
      dozens.forEach((item, index) => {
        if (index == number % 10) {
          str = item;
        }
      });
    }
    if (number >= 20 && number < 100) {
      tens.forEach((item, index) => {
        if (index + 2 == Math.trunc(number / 10)) {
          str = item;
        }
      });
      units.forEach((item, index) => {
        if (index == number % 10 && number % 10 != 0) {
          str += ` ${item}`;
        }
      });
    }
    if (number >= 100 && number < 1000 && Math.trunc(number / 10 % 10) != 1) {
      hundreds.forEach((item, index) => {
        if (index + 1 == Math.trunc(number / 100)) {
          str = item;
        }
      });
      tens.forEach((item, index) => {
        if (index + 2 == Math.trunc(number / 10 % 10)) {
          str += ` ${item}`;
        }
      });
      units.forEach((item, index) => {
        if (index == number % 10 && number % 10 != 0) {
          str += ` ${item}`;
        }
      });
    } else if (number >= 100 && number < 1000 && Math.trunc(number / 10 % 10) == 1) {    
        hundreds.forEach((item, index) => {
            if (index + 1 == Math.trunc(number / 100)) {
              str = item;
            }
        });  
        dozens.forEach((item, index) => {
            if (index + 10 == number % 100) {
                str += ` ${item}`;
            }
          });
    }
    return str;
  }

console.log(Math.trunc(981 / 10 % 10));