"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../db/connection.js"));

var Categories = _connection["default"].define('categories', {
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
});

var _default = Categories;
exports["default"] = _default;