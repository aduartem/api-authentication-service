const router = require('express').Router();

const usersController = require('../controllers/users-controller');

router.get('/role/dev/users', usersController.getUsersDev.bind(usersController));

module.exports = router;
