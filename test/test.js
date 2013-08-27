var should = require('should');
var assert = require('assert');

var rander = require('../rander');


function getLength () {
  var len = 0;
  do {
    len = parseInt(rander.number(2), 10);
  } while ( len == 0 );
  return len;
}

function times (max, cb) {
  for (var i = 0; i < max; i++) {
    cb();
  }
}

describe('random string test', function () {
  it('should generate a string with default length', function () {
    times(10, function () {
      var r = rander.string();
      // console.log(r);
      // console.log(typeof r);
      assert.ok(typeof r == 'string');
    });
  });
  
  it('should generate a string with a given length', function () {
    times(10, function () {
      var len = getLength();
      var r = rander.string(len);
      assert.ok(typeof r == 'string');
      assert.ok(r.length == len);
    });
  });
  
  it('should generate a number with default length', function () {
    times(10, function () {
      var r = rander.number();
      assert.ok(typeof r == 'string');
      assert.ok(!isNaN(r));
    });
  });
  
  it('should generate a number with a given length', function () {
    times(10, function () {
      var len = getLength();
      var r = rander.number(len);
      assert.ok(typeof r == 'string');
      assert.ok(!isNaN(r));
    });
  });
  
  it('should fetch the first char', function () {
    var right = false;
    times(1000, function () {
      var c = rander.number(1, '012345');
      if (c == '0') {
        right = true;
      }
    });
    
    assert.ok(right);
  });
  
  it('should fetch the last char', function () {
    var right = false;
    times(1000, function () {
      var c = rander.number(1, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz');
      if (c == 'z') {
        right = true;
      }
    });
    
    assert.ok(right);
  });
});

