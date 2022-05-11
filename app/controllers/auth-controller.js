const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const _ = require('lodash');

const { accessKey, expiresIn } = require('../config/config').app.jwt;
const logger = require('../config/winston');
const userRepository = require('../repositories/user-repository');

class AuthController {
  constructor() {
    this.className = _.camelCase(this.constructor.name);
  }

  async login(req, res) {
    const method = 'login';
    logger.info(`[${this.className}][${method}] init`);
    try {
      logger.info(`[${this.className}][${method}] username: %s`, req.body.username);
      const passwd = crypto.createHash('sha256').update(req.body.password).digest('hex');
      const user = await userRepository.findUser(req.body.username, passwd);

      if (!user) {
        return res.status(401).json({
          message: 'Usuario o clave no válida.',
        });
      }

      const token = await this.buildToken(user);

      logger.info(`[${this.className}][${method}] success`);

      return res.json({
        token,
      });
    } catch (e) {
      logger.error(`[${this.className}][${method}] error: %s`, e.message);
      return res.status(500).json({
        message: 'Hubo un error al intentar iniciar sesión.',
      });
    }
  }

  async buildToken(user) {
    const method = 'buildToken';
    logger.info(`[${this.className}][${method}] init`);
    const {
      id, first_name: firstName, last_name: lastName, username, Role,
    } = user;
    const token = jwt.sign({
      id,
      firstName,
      lastName,
      username,
      roleId: Role.id,
      roleName: Role.name,
    }, accessKey, {
      expiresIn,
    });
    logger.info(`[${this.className}][${method}] success`);
    return token;
  }
}

module.exports = new AuthController();
