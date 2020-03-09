const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form', { title: 'Admin page' });
});

router.post('/', 
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('password')
      .isLength({ min: 1 })
      .withMessage('Please enter password.'),
  ],

  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);


module.exports = router;