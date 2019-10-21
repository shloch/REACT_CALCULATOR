import Big from 'big.js';

export default function operate(numbernumber1, numbernumber2, operation) {
  let total = '';
  const number1 = Big(numbernumber1);
  const number2 = Big(numbernumber2);
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
