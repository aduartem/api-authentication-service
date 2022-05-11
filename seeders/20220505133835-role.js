module.exports = {
  async up(queryInterface) {
    const date = new Date();
    const roles = [
      {
        name: 'Admin',
        created_at: date,
        updated_at: date,
      },
      {
        name: 'Dev',
        created_at: date,
        updated_at: date,
      },
    ];
    await queryInterface.bulkInsert('roles', roles, {});
  },
};
