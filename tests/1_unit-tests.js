/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  chai.suite('Function convertHandler.getNum(input)', function() {
    
    chai.test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    chai.test('Decimal Input', function(done) {
      var input = '3.2km';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
    });
    
    chai.test('Fractional Input', function(done) {
      var input = '1/2mi';
      assert.equal(convertHandler.getNum(input),.5);
      done();
    });
    
    chai.test('Fractional Input w/ Decimal', function(done) {
      var input = '1.5/4gal';
      assert.equal(convertHandler.getNum(input),.375);
      done();
    });
    
    chai.test('Invalid Input (double fraction)', function(done) {
      var input = '2/3/7km';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    chai.test('No Numerical Input', function(done) {
      var input = 'lb';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  chai.suite('Function convertHandler.getUnit(input)', function() {
    
    chai.test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });
    
    chai.test('Unknown Unit Input', function(done) {
      var input = "40mm"
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });  
    
  });
  
  chai.suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    chai.test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  chai.suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    chai.test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters', 'miles', 'kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  chai.suite('Function convertHandler.convert(num, unit)', function() {
    
    chai.test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    chai.test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    chai.test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    chai.test('Km to Mi', function(done) {
      var input = [5, 'km'];
      var expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    chai.test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    chai.test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.02310;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});