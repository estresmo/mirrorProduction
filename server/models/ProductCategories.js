"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _connection = _interopRequireDefault(require("../db/connection.js"));

var _Product = _interopRequireDefault(require("./Product"));

var _Categories = _interopRequireDefault(require("./Categories.js"));

var ProductCategories = _connection["default"].define('ProductCategories', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _Product["default"],
      key: 'id'
    }
  }
});

_Product["default"].belongsToMany(_Categories["default"], {
  through: ProductCategories
});

_Categories["default"].belongsToMany(_Product["default"], {
  through: ProductCategories
});

var _default = ProductCategories;
exports["default"] = _default;