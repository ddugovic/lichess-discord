const LichessStrategy = require('passport-lichess').Strategy;
const { appId } = require('./config.json');

async function login(username) {

  // TODO: move to API server
  passport.use(
    new LichessStrategy(
      {
        clientID: appId,
        callbackURL: 'http://127.0.0.1:3000/auth/lichess/callback',
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ lichessId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  );
}
  
module.exports = { login };
