const Auth0Strategy = require("passport-auth0");

const { DOMAIN, CLIENT_ID, CLIENT_SECRET, REACT_APP_HOME_URL } = process.env;

const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

const getUser = (req, res) => {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    const db = req.app.set("db");

    db.auth.get_user_by_auth_id(req.user.auth_id).then(user => {
      res.status(200).json(user[0]);
    });
  }
};

const logoutUser = (req, res) => {
  console.log("Fired");
  req.session.destroy(() => {
    res.redirect(REACT_APP_HOME_URL);
  });
};

module.exports = {
  strat,
  getUser,
  logoutUser
};
