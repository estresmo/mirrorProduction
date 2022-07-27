"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = getProducts;
exports.getVariant = getVariant;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var _Variant_Color = _interopRequireDefault(require("../models/Variant_Color"));

var _Variant_Size = _interopRequireDefault(require("../models/Variant_Size"));

var _Categories = _interopRequireDefault(require("../models/Categories"));

var _ProductCategories = _interopRequireDefault(require("../models/ProductCategories"));

function getProducts(_x, _x2) {
  return _getProducts.apply(this, arguments);
}

function _getProducts() {
  _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var exactProduct, relatedProducts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getExactProduct(req.params.codebar);

          case 3:
            exactProduct = _context.sent;
            _context.next = 6;
            return getProductsRelated(exactProduct.dataValues);

          case 6:
            relatedProducts = _context.sent;
            res.json({
              "product": exactProduct,
              "related": relatedProducts
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              "error": _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getProducts.apply(this, arguments);
}

function getExactProduct(_x3) {
  return _getExactProduct.apply(this, arguments);
}

function _getExactProduct() {
  _getExactProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(code) {
    var size_exact, color_exact, all_colors, list_of_id, all_sizes, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Variant_Size["default"].findOne({
              where: {
                codebar: code
              }
            });

          case 2:
            size_exact = _context2.sent;
            _context2.next = 5;
            return _Variant_Color["default"].findOne({
              where: {
                id: size_exact.variant_color_id
              }
            });

          case 5:
            color_exact = _context2.sent;
            _context2.next = 8;
            return _Variant_Color["default"].findAll({
              where: {
                productId: color_exact.dataValues.productId
              }
            });

          case 8:
            all_colors = _context2.sent;
            list_of_id = all_colors.map(function (obj) {
              return obj.dataValues.id;
            });
            _context2.next = 12;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: list_of_id
              }
            });

          case 12:
            all_sizes = _context2.sent;
            _context2.next = 15;
            return _Product["default"].findOne({
              where: {
                id: color_exact.dataValues.productId
              }
            });

          case 15:
            product = _context2.sent;
            product.dataValues.colors = all_colors;
            product.dataValues.sizes = all_sizes;
            return _context2.abrupt("return", product);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getExactProduct.apply(this, arguments);
}

function getProductsRelated(_x4) {
  return _getProductsRelated.apply(this, arguments);
} //La idea de esta funcion es dado un producto conseguir sus datos


function _getProductsRelated() {
  _getProductsRelated = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(obj) {
    var preproductCategories, productCategories, list_of_id, queryReturn, i;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _ProductCategories["default"].findOne({
              where: {
                productId: obj.id
              }
            });

          case 2:
            preproductCategories = _context3.sent;
            _context3.next = 5;
            return _ProductCategories["default"].findAll({
              where: {
                categoryId: preproductCategories.dataValues.categoryId
              }
            });

          case 5:
            productCategories = _context3.sent;
            list_of_id = productCategories.map(function (product) {
              return product.dataValues.productId;
            });
            queryReturn = {};
            i = 0;

          case 9:
            if (!(i < list_of_id.length)) {
              _context3.next = 16;
              break;
            }

            _context3.next = 12;
            return getSubData(list_of_id[i]);

          case 12:
            queryReturn[i] = _context3.sent;

          case 13:
            i++;
            _context3.next = 9;
            break;

          case 16:
            return _context3.abrupt("return", queryReturn);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getProductsRelated.apply(this, arguments);
}

function getSubData(_x5) {
  return _getSubData.apply(this, arguments);
}

function _getSubData() {
  _getSubData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productId) {
    var product, colors, list_of_id, sizes;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Product["default"].findOne({
              where: {
                id: productId
              }
            });

          case 2:
            product = _context4.sent;
            _context4.next = 5;
            return _Variant_Color["default"].findAll({
              where: {
                productId: product.dataValues.id
              }
            });

          case 5:
            colors = _context4.sent;
            list_of_id = colors.map(function (obj) {
              return obj.dataValues.id;
            });
            _context4.next = 9;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: list_of_id
              }
            });

          case 9:
            sizes = _context4.sent;
            product.dataValues.colors = colors;
            product.dataValues.sizes = sizes;
            return _context4.abrupt("return", product);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSubData.apply(this, arguments);
}

function getVariant(_x6, _x7) {
  return _getVariant.apply(this, arguments);
}

function _getVariant() {
  _getVariant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var colors;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Variant_Color["default"].findAll({
              where: {
                productId: req.params.product
              }
            });

          case 3:
            colors = _context5.sent;
            res.json({
              "colors": colors
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.json({
              "error": _context5.t0
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _getVariant.apply(this, arguments);
}