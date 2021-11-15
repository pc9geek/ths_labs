/*
1 x 8 + 1 = 9
12 x 8 + 2 = 98
123 x 8 + 3 = 987
1234 x 8 + 4 = 9876
12345 x 8 + 5 = 98765
123456 x 8 + 6 = 987654
1234567 x 8 + 7 = 9876543
12345678 x 8 + 8 = 98765432
123456789 x 8 + 9 = 987654321
*/

function problem1(value) {
    var first = 1;
    for (let i = 1; i <= value + 1; i++) {
      var second = value;
      var third = i;
      var result = first * second + third;
      console.log(`${first} * ${second} + ${third} = ${result}`);
      first = first * 10 + (third + 1);
    }
  }
  problem1(8);
  