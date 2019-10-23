import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = '';
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  switch (operation) {
    case '+':
      total = number1.plus(number2).toString();
      break;
    case '-':
      total = number1.minus(number2).toString();
      break;
    case 'x':
      total = number1.times(number2).toString();
      break;
    case '/':
      total = number1.div(number2).toString();
      break;
    case '%':
      total = number1.mod(number2).toString();
      break;
    default:
      alert(`operation '${operation}' not available `);
  }
  return total;
}
