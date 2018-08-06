require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const app = express();

const {
  SESSION_SECRET,
  CONNECTION_STRING,
  PORT,
  REACT_APP_HOME_URL
} = process.env;

const { strat, getUser, logoutUser } = require("./controllers/authCtrl");
const { getCars } = require("./controllers/carCtrl");

app.use(json());
app.use(cors());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

passport.serializeUser((user, done) => {
  console.log(user);
  app
    .get("db")
    .auth.get_user_by_auth_id(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .auth.add_user_by_auth_id([user.displayName, user.id, user.picture])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

// Auth Endpoints
app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: REACT_APP_HOME_URL,
    failureRedirect: REACT_APP_HOME_URL
  })
);

app.get("/api/user", getUser);
app.get("/logout", logoutUser);

//Car endpoints
app.get("/api/car", getCars);

let port = PORT || 3001;
app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
