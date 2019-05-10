module.exports = function (sequelize, DataTypes) {
	var Meal = sequelize.define("Meal", {
		callo: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1, 5]
			}
		},

		numMeals: {
			type: DataTypes.STRING,
			allowNull: false
		},
		
		m1_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m1_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},

		m2_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m2_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},

		m3_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m3_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},

		m4_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m4_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},

		m5_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m5_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},

		m6_foods: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1, 255]
			}
		},

		m6_cal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				len: [1, 5]
			}
		},


	});
	return Meal;
};
