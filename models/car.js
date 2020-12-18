"use-strict";
const models = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      age: DataTypes.INTEGER,
      color: DataTypes.STRING,
      eco: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );

    Car.associate = models => {
        Car.belongsToMany(models.Owner, {through : 'car_owner', timestamps : false})
    }

  return Car;
};
