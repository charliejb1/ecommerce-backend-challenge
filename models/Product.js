// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Product extends Model {}

// Fields and rules for Product model
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      isDecimal: true,
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      isNumeric: true,
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
