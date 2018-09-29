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
    return array[0];
  };
  
  this.getUnit = function(input) {
    const array = input.match(/[^\d]+|\d+/g);
    return array[1];
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit.toLowerCase()) {
      case 'gal':
          return 'L';
          break;
      case 'L':
          return 'gal';
          break;
      case 'lbs':
          return 'kg';
          break;
      case 'kg':
          return 'lbs';
          break;
      case 'mi':
          return 'km';
          break;
      case 'km':
          return 'mi';
          break;
      default:
          return 'invalid unit';
    }
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    const index = input.indexOf(unit.toLowerCase());
    return output[index];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let formula;
    let operator;
    switch(initUnit) {
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
