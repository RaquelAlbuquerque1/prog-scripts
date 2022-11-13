const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

const newArray = numbers.map((number) => {
  if (number % 4 === 0) return "PI";
  return number;
});

for (i = 0; i <= 99; i++) console.log(newArray[i]);
