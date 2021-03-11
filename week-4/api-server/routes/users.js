var express = require('express');
var router = express.Router();
const passport = require('passport');

const jwt = require('jsonwebtoken');

const User = require('../model/User')

router.post('/register', async (req, res, next) => {
  const body = req.body;
  const user = new User({ ...body })
  user.save((err) => {
    if (err)
      throw err
    res.status(201).json("New user saved")
  })
});


router.post('/login', async (req, res, next) => {

  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred');
          return next(error);
        }
        req.login(user, { session: false },
          async (error) => {
            if (error) return next(error);
            const body = { name: user.name, email: user.email, company: 'cognizant' };
            const token = jwt.sign({ user: body }, 'shhhhh');
            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);

})


module.exports = router;
