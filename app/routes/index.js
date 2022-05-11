const express = require('express');
const authRouter = require('./auth-router');
const usersRouter = require('./users-router');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'ok',
  });
});

module.exports = [
  router,
  authRouter,
  usersRouter,
];
