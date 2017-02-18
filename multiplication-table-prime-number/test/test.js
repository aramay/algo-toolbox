var assert = require('assert');
var init = require('../app.js')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe("Is prime multiplication table", function(){

    // var f = new isPrime(5)
    console.log("test ", prime)

    describe("#isPrime()", function(){
        it("should return prime numbers", function(){
            assert.equal(2, prime.isPrime(3))
        })
    })
})