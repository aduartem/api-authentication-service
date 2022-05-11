const _ = require('lodash');

const logger = require('../config/winston');
const userRepository = require('../repositories/user-repository');

class UsersController {
  constructor() {
    this.className = _.camelCase(this.constructor.name);
  }

  async getUsersDev(req, res) {
    const method = 'getUsersDev';
    logger.info(`[${this.className}][${method}] init`);
    try {
      const users = await userRepository.getUsersDev();
      logger.info(`[${this.className}][${method}] success`);
      return res.json({
        users,
      });
    } catch (e) {
      logger.error(`[${this.className}][${method}] error: %s`, e.message);
      return res.status(500).json({
        message: 'Hubo un error al intentar obtener el listado de usuarios con rol dev.',
      });
    }
  }
}

module.exports = new UsersController();
