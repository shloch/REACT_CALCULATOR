import Big from 'big.js';

export default function operate(numbernumber1, numbernumber2, operation) {
  const number1 = Big(numbernumber1);
  const number2 = Big(numbernumber2);
  switch (operation) {
    case '+':
      return number1.plus(number2).toString();
    case '-':
      return number1.minus(number2).toString();
    case 'x':
      return number1.times(number2).toString();
    case '/':
      if (number2 === 0) {
        alert(`Division by Zero unauthorized`);
        return;
      }
      else {
        return number1.div(number2).toString();
      }
    case '%':
      return number1.mod(number2).toString();
    default:
      alert(`operation '${operation}' not available `);
  }
}
