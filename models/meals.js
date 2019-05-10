module.exports = function(sequelize, DataTypes) {
	var meals = sequelize.define("meals", {
	  m1_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m1_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
	  m2_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m2_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
	  m3_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m3_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
	  m4_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m4_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
	  m5_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m5_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
	  m6_foods: { 
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1, 50]
		}
	  },
  
	  m6_cal:{
		type:  DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1,4]
		}
	  },
  
  
	});
	return meals;
  };
  
//   module.exports = function(sequelize, DataTypes) {
// 	var meals = sequelize.define("meals", {
// 	  m1_foods: DataTypes.STRING,
// 	  m1_cal: DataTypes.INTEGER,
// 	  m2_foods: DataTypes.STRING,
// 	  m2_cal: DataTypes.INTEGER,
// 	  m3_foods: DataTypes.STRING,
// 	  m3_cal: DataTypes.INTEGER,
// 	  m4_foods: DataTypes.STRING,
// 	  m4_cal: DataTypes.INTEGER,
// 	  m5_foods: DataTypes.STRING,
// 	  m5_cal: DataTypes.INTEGER,
// 	  m6_foods: DataTypes.STRING,
// 	  m6_cal: DataTypes.INTEGER
  
  
// 	});
// 	return meals;
//   };