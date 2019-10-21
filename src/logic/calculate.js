var Calculator = (function () {

  let mod = {};
  mod.calculate = function (calcObj, button) {
    let { total, next, operation } = calcObj;
    if (button === '+/1') {
      total *= -1;
      next *= -1;
    }
    return { total, next, operation }

  }

  return mod;
})();

export {
  Calculator,
};