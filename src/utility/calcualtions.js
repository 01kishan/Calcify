export function calculateRes(input) {
  try {
    // Split numbers and operators
    const numbers = input.split(/[\+\-\*\/]/).map(Number);
    const operators = input.replace(/[0-9.]/g, "").split("");

    let result = numbers[0];

    if( operators.length == 0 )
      return input;

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const nextNum = numbers[i + 1];

      switch (operator) {
        case "+":
          result += nextNum;
          break;
        case "-":
          result -= nextNum;
          break;
        case "*":
          result *= nextNum;
          break;
        case "/":
          result /= nextNum;
          break;
        default:
          break;
      }
    }

    return result;
  } catch (error) {
    return "Error";
  }
}