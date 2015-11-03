var vows = require('vows');
var assert = require('assert');
var util = require('util');
var steam = require('passport-buddy');


vows.describe('passport-buddy').addBatch({

    'module': {
        'should report a version': function (x) {
            assert.isString(buddy.version);
        }
    }

}).export(module);