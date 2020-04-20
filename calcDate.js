const cd = require("calculate-date");
const df = require("date-format");

const calcDate = {
  AddDays: function (a, b) {
    if (Object.prototype.toString.call(a) !== "[object String]") {
      throw new TypeError("the first param should be String");
    }
    const time = new Date(a);
    return df.asString("yyyy.MM.dd", cd.AddDays(time, b));
  },
  AddDuration: function (a, duration) {
    let b;
    if (duration == "1月") {
      b = 30;
    } else if (duration == "3月") {
      b = 90;
    } else if (duration == "半年") {
      b = 180;
    } else {
      b = 365;
    }
    return this.AddDays(a, b);
  },
};

module.exports = calcDate;
