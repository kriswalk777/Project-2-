const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = new express();

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT. ExtractJwt;

const opts = {
    jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
    SecretOrKey: process.env.SECRET_OR_KEY
};

const strategy = new JwtStrategy(opts, (payload,next) => {
//TODO: GET USER FROM DB
const user = null;
next(null, user);
});
passport.use(strategy);
app.use(passport.initialize());

app.get('/', (req, res) =>{
    res.send('Hello world');
});

const PORT = process.env.PORT || 3000;
app.listen();
