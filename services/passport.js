const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');


const User = mongoose.model('users');
//fetches a collection named User
//It is a model class

//The "user" which is passed as an argument to the serialize function is from the callback from the google Strategy. 
//passport will set this unique identifier automatially. 
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//The first argument of deserialize function is the ID that is stuffed into the cookie.
//turn ID into a mongoose model instance
//Anytime we are accesing a mongoose DB, its an asynchronus action - that is the reaosn we are using promises. 
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then((user)=>{
        done(null, user);
        //the first argument of done function is an error object if one exists. 
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    //route that user will be redirected to after they grant permission to our application.
}, 
   async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id});
        if(existingUser){
            //we already have a user with that googleId
            return done(null, existingUser);
        }
        //creating a record of new user inside the DB
        const user = await new User({ googleId : profile.id }).save();
        done(null, user);
    }
));