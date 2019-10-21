import 'big.js';
var Operate = (function () {

  let mod = {};
  mod.operate = function (calcObj, button) {
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
  Operate,
};