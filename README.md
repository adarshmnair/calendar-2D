# Calendar 2D

Calendar 2D is an npm package that accepts a year and month index as input, and returns a two-dimensional array representing a calendar. Each array element corresponds to a week, and the function cleverly handles non-existent days by including them in the array as null values. This makes the calendar a perfect tool for displaying dates, as it's clear and easy to read.

# Installation

You can install Create Calendar using npm:

```shell
npm install calendar-2d
```

# Usage

To use Create Calendar, simply import the function and call it with a year and month index as arguments:

```javascript
const createCalendar = require("calendar-2d");
```

```javascript
const calendar = createCalendar(2023, 3); // April 2023
console.log(calendar);
```

This will output the following two-dimensional array:

```javascript
[
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, null, null, null, null, null, null],
];
```

Each inner array represents a week, and each element within the inner arrays represents a day of the week. Days that do not exist in the month are represented as null.

# Contributing

If you would like to contribute to Create Calendar, please feel free to submit a pull request or open an issue.

# License

Create Calendar is licensed under the MIT license. See the LICENSE file for more details.
