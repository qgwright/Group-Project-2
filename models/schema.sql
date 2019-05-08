DROP DATABASE IF EXISTS callo;
CREATE DATABASE callo;
USE callo;

CREATE TABLE meals (
 id int(10) AUTO_INCREMENT PRIMARY KEY,
 
 callo int(5) NOT NULL,
 numMeals int(1) NOT NULL,
 calsPerMeal int(5) GENERATED ALWAYS AS (callo/numMeals),
 
 m1_foods varchar(255) NOT NULL,
 m1_cal int(5) NOT NULL,
 m1_over boolean GENERATED ALWAYS AS (m1_cal > calsPerMeal),
 
 m2_foods varchar(255),
 m2_cal int(5),
 m2_over boolean GENERATED ALWAYS AS (m2_cal > calsPerMeal),
  
 m3_foods varchar(255),
 m3_cal int(5),
 m3_over boolean GENERATED ALWAYS AS (m3_cal > calsPerMeal),

 m4_foods varchar(255),
 m4_cal int(5),
 m4_over boolean GENERATED ALWAYS AS (m4_cal > calsPerMeal),
  
 m5_foods varchar(255),
 m5_cal int(5),
 m5_over boolean GENERATED ALWAYS AS (m5_cal > calsPerMeal),
  
 m6_foods varchar(255),
 m6_cal int(5),
 m6_over boolean GENERATED ALWAYS AS (m6_cal > calsPerMeal)
);