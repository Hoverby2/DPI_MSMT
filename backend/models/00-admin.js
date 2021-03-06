export default (sequelize, DataTypes) => {
	const Admin = sequelize.define("Admin", {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
		freezeTableName: true, // model name equal to table name
    timestamps: false, // enable timestamps
	});

  Admin.associate = (models) => {
    Admin.hasMany(models.Template, {
      as: 'template',
      foreignKey: 'adminId',
    })
  };

	return Admin;
};
