let a = 10;

export const fizzBuzz = (a) => {
  if (a % 5 === 0 && a % 3 === 0) return "fizzBuzz";
  if (a % 5 === 0) return "fizz";
  if (a % 3 === 0) return "Buzz";
  return a.toString();
};
