var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should concatenate multiple number clicks', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('222')  })

  it('should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })



  it('should clear the running total without affecting the calculation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#clear')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
   })

   // test negative, decimals, large numbers, divide by zero

   it('should work with negative numbers', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number2')).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number4')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('-2')
   })

   it('should work with decimals', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number9')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('4.5')
   })

   it('should work with large numbers', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number9')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('900000000000')
   })

   it('should return not a number if divided by 0', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number9')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
   })



});
