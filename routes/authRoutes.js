const express = require('express')
const router = express.Router()
const authControll = require('../controllers/authControllers')
const passport = require('passport')

router.get('/signin',authControll)

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

  router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router