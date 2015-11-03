# Passport-Buddy

[Passport](http://passportjs.org/) strategy for authenticating with [Buddy](https://buddy.works/)
using the OAuth 2.0 API.

This module lets you authenticate using Buddy in your Node.js applications.
By plugging into Passport, Buddy authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-buddy

## Usage

#### Configure Strategy

The Buddy authentication strategy authenticates users using a Buddy account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new BuddyStrategy({
        clientID: BUDDY_CLIENT_ID,
        clientSecret: BUDDY_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/buddy/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ buddyId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'buddy'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/buddy',
      passport.authenticate('buddy'));

    app.get('/auth/buddy/callback', 
      passport.authenticate('buddy', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/bylek/passport-buddy.png)](http://travis-ci.org/bylek/passport-buddy)

## Credits

  - [Paweł Kapała](http://github.com/bylek)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Paweł Kapała

