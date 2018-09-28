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
    switch(initUnit) {
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
          return undefined;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'gal':
          return 'gallons';
          break;
      case 'L':
          return 'liters';
          break;
      case 'lbs':
          return 'pounds';
          break;
      case 'kg':
          return 'kilograms';
          break;
      case 'mi':
          return 'miles';
          break;
      case 'km':
          return 'kilometers';
          break;
      default:
          return undefined;
    }
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
    if (operator === 'multiply') {
      result = initNum * formula;
    } else {
      result = initNum / formula;
    }
    return parseFloat((result).toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
