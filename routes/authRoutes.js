const passport = require('passport');

module.exports = (app) =>{
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};



/*app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});*/

//const PORT = process.env.PORT - used in production environment
//To run in a dev environment - sometimes it might not be set by Heroku therefore we'll use 5000 instead.