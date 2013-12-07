require('../../index.js');
var assert = require("assert");

////////////////////////////////////////
// js_extend.js
describe('js_extend.js', function() {
	describe('String.prototype.replaceAll', function() {
		it('should exist', function() {
			assert.notEqual(''.replaceAll, undefined);
		});
	});
});

////////////////////////////////////////
// underscore_extend.js
describe('underscore_extend.js', function() {
	describe('_', function() {
		it('should exist', function() {
			assert.notEqual(_, undefined);
		});
	});
});

////////////////////////////////////////
// Class.js
describe('Class.js', function() {
	describe('Class', function() {
		it('should exist', function() {
			assert.notEqual(_.Class, undefined);
		});
	});
	describe('instance attribute', function() {
		it('should return "hello moto"', function() {
			var A = _.Class.extend({
				hello: 'hello moto'
			});
			a = new A();
			assert.equal(a.hello, 'hello moto');
		});
	});
});