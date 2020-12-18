"use-strict";
'use-strict'
const models = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owner",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      underscored: true,
      timestamps : false
    }
  );

  return Owner;
};
