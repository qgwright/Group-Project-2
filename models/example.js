module.exports = function(sequelize, DataTypes) {
  var meals = sequelize.define("meals", {
    m1_foods: DataTypes.STRING,
    m1_cal: DataTypes.INTEGER,
    m2_foods: DataTypes.STRING,
    m2_cal: DataTypes.INTEGER,
    m3_foods: DataTypes.STRING,
    m3_cal: DataTypes.INTEGER,
    m4_foods: DataTypes.STRING,
    m4_cal: DataTypes.INTEGER,
    m5_foods: DataTypes.STRING,
    m5_cal: DataTypes.INTEGER,
    m6_foods: DataTypes.STRING,
    m6_cal: DataTypes.INTEGER


  });
  return meals;
};

