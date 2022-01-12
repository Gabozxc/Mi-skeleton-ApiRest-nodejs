const express = require('express'),
      router = express.Router();
      userControllers = require('../controllers/userControllers');

router.post('/', userControllers.newUser);

module.exports = router;