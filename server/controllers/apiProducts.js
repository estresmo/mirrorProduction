"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProducts = GetProducts;
exports.getCountofProduct = getCountofProduct;
exports.getExactProduct = getExactProduct;
exports.getProductByCodeBar = getProductByCodeBar;
exports.getRandomProducts = getRandomProducts;
exports.getVariantOfProduct = getVariantOfProduct;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = _interopRequireDefault(require("../db/connection"));

var _Product = _interopRequireDefault(require("../models/Product"));

var _Variant_Color = _interopRequireDefault(require("../models/Variant_Color"));

var _Variant_Size = _interopRequireDefault(require("../models/Variant_Size"));

var _Categories = _interopRequireDefault(require("../models/Categories"));

var _ProductCategories = _interopRequireDefault(require("../models/ProductCategories"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function GetProducts(_x, _x2) {
  return _GetProducts.apply(this, arguments);
}

function _GetProducts() {
  _GetProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var product, variant_color, variant_Size, categories, productCategorie;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Product["default"].findAll();

          case 2:
            product = _context.sent;
            _context.next = 5;
            return _Variant_Color["default"].findAll();

          case 5:
            variant_color = _context.sent;
            _context.next = 8;
            return _Variant_Size["default"].findAll();

          case 8:
            variant_Size = _context.sent;
            _context.next = 11;
            return _Categories["default"].findAll();

          case 11:
            categories = _context.sent;
            _context.next = 14;
            return _ProductCategories["default"].findAll();

          case 14:
            productCategorie = _context.sent;
            res.json({
              "product": product,
              "color": variant_color,
              "variant_Size": variant_Size,
              "categories": categories,
              "productCategorie": productCategorie
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _GetProducts.apply(this, arguments);
}

function getExactProduct(_x3, _x4) {
  return _getExactProduct.apply(this, arguments);
}

function _getExactProduct() {
  _getExactProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var query, variant_color, variant_Size;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Product["default"].findOne({
              where: {
                id: req.params.id
              }
            });

          case 2:
            query = _context2.sent;
            _context2.next = 5;
            return _Variant_Color["default"].findAll({
              where: {
                productId: query.dataValues.id
              }
            });

          case 5:
            variant_color = _context2.sent;
            list_of_id = variant_color.map(function (obj) {
              return obj.id;
            });
            _context2.next = 9;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: list_of_id
              }
            });

          case 9:
            variant_Size = _context2.sent;
            return _context2.abrupt("return", json({
              "product": query,
              "color": variant_color,
              "size": variant_Size
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getExactProduct.apply(this, arguments);
}

function getCountofProduct(_x5, _x6) {
  return _getCountofProduct.apply(this, arguments);
}

function _getCountofProduct() {
  _getCountofProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Product["default"].count();

          case 2:
            query = _context3.sent;
            res.json({
              query: query
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCountofProduct.apply(this, arguments);
}

function getRandomProducts(_x7, _x8) {
  return _getRandomProducts.apply(this, arguments);
}

function _getRandomProducts() {
  _getRandomProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var productcategories, list_of_id, query, colors;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ProductCategories["default"].findAll({
              where: {
                categoryId: req.params.id
              }
            });

          case 2:
            productcategories = _context4.sent;
            _context4.next = 5;
            return productcategories.map(function (obj) {
              return obj.dataValues.productId;
            });

          case 5:
            list_of_id = _context4.sent;
            _context4.next = 8;
            return _Product["default"].findAll({
              where: {
                id: list_of_id
              },
              order: _connection["default"].random(),
              limit: 3
            });

          case 8:
            query = _context4.sent;
            console.log(query);
            _context4.next = 12;
            return _Variant_Color["default"].findAll();

          case 12:
            colors = _context4.sent;
            res.json({
              "query": query,
              "colors": colors
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getRandomProducts.apply(this, arguments);
}

function getVariantOfProduct(_x9, _x10) {
  return _getVariantOfProduct.apply(this, arguments);
}

function _getVariantOfProduct() {
  _getVariantOfProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var query, list_of_id, sizes;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Variant_Color["default"].findAll({
              where: {
                productId: req.params.id
              }
            });

          case 2:
            query = _context5.sent;
            list_of_id = query.map(function (obj) {
              return obj.id;
            });
            _context5.next = 6;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: list_of_id
              }
            });

          case 6:
            sizes = _context5.sent;
            res.json({
              "query": query,
              "sizes": sizes
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getVariantOfProduct.apply(this, arguments);
}

function getProductByCodeBar(_x11, _x12) {
  return _getProductByCodeBar.apply(this, arguments);
}

function _getProductByCodeBar() {
  _getProductByCodeBar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var sizes, color, product;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Variant_Size["default"].findOne({
              where: {
                codebar: req.params.code
              }
            });

          case 3:
            sizes = _context6.sent;
            _context6.next = 6;
            return _Variant_Color["default"].findOne({
              where: {
                id: sizes.variant_color_id
              }
            });

          case 6:
            color = _context6.sent;
            _context6.next = 9;
            return _Product["default"].findOne({
              where: {
                id: color.productId
              }
            });

          case 9:
            product = _context6.sent;
            res.json({
              "product": product,
              "color": color,
              "sizes": sizes
            });
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              "error": "error"
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return _getProductByCodeBar.apply(this, arguments);
}