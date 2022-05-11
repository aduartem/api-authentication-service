module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: DataTypes.STRING(50),
      last_name: DataTypes.STRING(50),
      username: DataTypes.STRING(50),
      password: DataTypes.STRING(250),
      role_id: DataTypes.INTEGER,
    },
    {
      underscored: true,
    },
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, {
      as: 'Role',
      foreignKey: 'role_id',
    });
  };
  return User;
};
