const crypto = require('crypto');

module.exports = {
  async up(queryInterface) {
    const date = new Date();
    const users = [
      {
        first_name: 'María',
        last_name: 'Duarte',
        username: 'melena',
        password: crypto.createHash('sha256').update('qwerty').digest('hex'),
        role_id: 1,
        created_at: date,
        updated_at: date,
      },
      {
        first_name: 'Andrés',
        last_name: 'Duarte',
        username: 'aduartem',
        password: crypto.createHash('sha256').update('123').digest('hex'),
        role_id: 2,
        created_at: date,
        updated_at: date,
      },
      {
        first_name: 'Franco',
        last_name: 'Porra',
        username: 'franco1',
        password: crypto.createHash('sha256').update('123').digest('hex'),
        role_id: 2,
        created_at: date,
        updated_at: date,
      },
    ];
    await queryInterface.bulkInsert('users', users, {});
  },
};
