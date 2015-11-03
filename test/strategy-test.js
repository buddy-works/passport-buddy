var vows = require('vows');
var assert = require('assert');
var util = require('util');
var BuddyStrategy = require('passport-buddy').Strategy;


vows.describe('BuddyStrategy').addBatch({

    'strategy': {
        topic: function() {
            return new BuddyStrategy({ returnURL: 'https://www.example.com/auth/buddy/callback' },
                function() {}
            );
        },

        'should be named steam': function (strategy) {
            assert.equal(strategy.name, 'buddy');
        },
        'should have correct provider URL': function (strategy) {
            assert.equal(strategy._providerURL, 'https://api.buddy.works/user');
        }
    }

}).export(module);