const _ = require('lodash');

const logger = require('../config/winston');
const { User } = require('../models');

class UserRepository {
  constructor() {
    this.className = _.camelCase(this.constructor.name);
  }

  async findUser(username, password) {
    const method = 'findUser';
    logger.info(`[${this.className}][${method}] init`);
    const query = {
      include: 'Role',
      attributes: ['id', 'first_name', 'last_name', 'username'],
      where: {
        username,
        password,
      },
    };
    const result = await User.findOne(query);
    return result;
  }

  async getUsersDev() {
    const method = 'findUser';
    logger.info(`[${this.className}][${method}] init`);
    const query = {
      attributes: ['id', 'first_name', 'last_name', 'username'],
      where: {
        role_id: 2,
      },
    };
    const result = await User.findAll(query);
    return result;
  }
}

module.exports = new UserRepository();
