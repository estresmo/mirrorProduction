"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _connection = _interopRequireDefault(require("../db/connection.js"));

var _Product = _interopRequireDefault(require("./Product.js"));

var VariantColor = _connection["default"].define('variant_color', {
  color: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});

_Product["default"].hasMany(VariantColor, {
  foreignKey: "productId"
});

VariantColor.belongsTo(_Product["default"], {
  foreignKey: "productId"
});
var _default = VariantColor;
exports["default"] = _default;