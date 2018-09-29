/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const array = input.match(/[^\d]+|\d+/g);
    let number = array[0] || "";
    number = number.split('/');
    if (number[0] === '') { number = [] }
    switch(number.length) {
      case 0:
        return 1;
        break;
      case 1:
        return number[0];
        break;
      case 2:
        return +number[0] / +number[1];
        break;
      default:
        return 'invalid number';
    }
  };
  
  this.getUnit = function(input) {
    const array = input.match(/[^\d]+|\d+/g);
    const units = ['gal','l','mi','km','lbs','kg'];
    if (units.indexOf(array[1]) < 0) {
      return "invalid unit";
    } else {
      return array[1];
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['L','gal','km','mi','kg','lbs'];
    const index = input.indexOf(initUnit.toLowerCase());
    if (index < 0) {
      return "invalid unit"
    } else {  
      return output[index];
    }
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    const index = input.indexOf(unit.toLowerCase());
    if (index < 0) {
      return "invalid unit"
    } else {  
      return output[index];
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let formula;
    let operator;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        formula = galToL;
        operator = 'multiply';
          break;
      case 'L':
        formula = galToL;
        operator = 'divide';
          break;
      case 'lbs':
        formula = lbsToKg;
        operator = 'multiply';
          break;
      case 'kg':
        formula = lbsToKg;
        operator = 'divide';
          break;
      case 'mi':
        formula = miToKm;
        operator = 'multiply';
          break;
      case 'km':
        formula = miToKm;
        operator = 'divide';
          break;
      default:
          return undefined;
    }
    let result;
    let parsed = parseFloat(initNum);
    if (typeof parsed === "number") {
      if (operator === 'multiply') {
        result = initNum * formula;
      } else {
        result = initNum / formula;
      }
      return parseFloat((result).toFixed(5));
    } else {
      return "invalid number";
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (typeof initNum !== "number" && returnUnit === "invalid unit") {
      return "invalid number and unit";
    } else if (typeof initNum !== "number") {
      return "invalid number";
    } else if (returnUnit === "invalid unit") {
      return "invalid unit";
    } else {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    }
  };
  
}

module.exports = ConvertHandler;
