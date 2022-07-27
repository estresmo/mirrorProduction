"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _connection = _interopRequireDefault(require("../db/connection.js"));

var _Variant_Color = _interopRequireDefault(require("./Variant_Color"));

var VariantSize = _connection["default"].define('variant_Size', {
  size: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  codebar: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});

_Variant_Color["default"].hasMany(VariantSize, {
  foreignKey: "variant_color_id"
});

VariantSize.belongsTo(_Variant_Color["default"], {
  foreignKey: "variant_color_id"
});
var _default = VariantSize;
exports["default"] = _default;