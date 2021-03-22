async function down(queryInterface, DataTypes) {
  await queryInterface.dropTable('Template');
}

async function up(queryInterface, DataTypes) {
  await queryInterface.createTable('Template', {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    adminId: {
      allowNull: false,
      references: {
        key: '_id',
        model: 'Admin'
      },
      type: DataTypes.UUID
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(36)
    },
    randomPosts: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('FACEBOOK') // 'REDDIT', 'TWITTER', 'INSTAGRAM'
    },
    videoPermission: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    audioPermission: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    cookiesPermission: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    qualtricsId: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    }
  });
  await queryInterface.addIndex('Template', ['adminId', 'name']);
}

module.exports = {
  up,
  down
};