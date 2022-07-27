"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateVariantColor = CreateVariantColor;
exports.CreateVariantSize = CreateVariantSize;
exports.DeleteColor = DeleteColor;
exports.DeleteExcelProducts = DeleteExcelProducts;
exports.DeleteProduct = DeleteProduct;
exports.DeleteSize = DeleteSize;
exports.DownloadExcel = DownloadExcel;
exports.HomePage = HomePage;
exports.ReadAyndExcel = ReadAyndExcel;
exports.checkifexistcolor = checkifexistcolor;
exports.checkifexistproduct = checkifexistproduct;
exports.checkifexistsize = checkifexistsize;
exports.createProducts = createProducts;
exports.formPage = formPage;
exports.getsizes = getsizes;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var _Variant_Size = _interopRequireDefault(require("../models/Variant_Size"));

var _Variant_Color = _interopRequireDefault(require("../models/Variant_Color"));

var _Categories = _interopRequireDefault(require("../models/Categories"));

var _ProductCategories = _interopRequireDefault(require("../models/ProductCategories"));

var _promises = require("node:fs/promises");

var _errors = require("../helpers/errors");

var _connection = _interopRequireDefault(require("../db/connection"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var writeXlsxFile = require('write-excel-file/node');

var readXlsxFile = require('read-excel-file/node');

var fs = require('fs');

function checkifexistproduct(_x, _x2) {
  return _checkifexistproduct.apply(this, arguments);
}

function _checkifexistproduct() {
  _checkifexistproduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var productexists;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product["default"].findAll({
              where: {
                title: req.query.title
              }
            });

          case 3:
            productexists = _context.sent;
            return _context.abrupt("return", res.json({
              "result": productexists
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.json({
              "error": _context.t0
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _checkifexistproduct.apply(this, arguments);
}

function checkifexistcolor(_x3, _x4) {
  return _checkifexistcolor.apply(this, arguments);
}

function _checkifexistcolor() {
  _checkifexistcolor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var color;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Variant_Color["default"].findAll({
              where: {
                productId: req.query.product_id,
                color: '#' + req.query.color
              }
            });

          case 3:
            color = _context2.sent;
            return _context2.abrupt("return", res.json({
              "result": color
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.json({
              "error": _context2.t0
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _checkifexistcolor.apply(this, arguments);
}

function checkifexistsize(_x5, _x6) {
  return _checkifexistsize.apply(this, arguments);
} //Esta vista se queda igual 


function _checkifexistsize() {
  _checkifexistsize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var size;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Variant_Size["default"].findAll({
              where: {
                size: req.query.size,
                variant_color_id: req.query.color_id
              }
            });

          case 3:
            size = _context3.sent;
            return _context3.abrupt("return", res.json({
              "result": size
            }));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.json({
              "error": _context3.t0
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _checkifexistsize.apply(this, arguments);
}

function HomePage(_x7, _x8) {
  return _HomePage.apply(this, arguments);
}

function _HomePage() {
  _HomePage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var query, color, sizes, categories;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Product["default"].findAll();

          case 2:
            query = _context4.sent;
            _context4.next = 5;
            return _Variant_Color["default"].findAll();

          case 5:
            color = _context4.sent;
            _context4.next = 8;
            return _Variant_Size["default"].findAll();

          case 8:
            sizes = _context4.sent;
            _context4.next = 11;
            return _Categories["default"].findAll();

          case 11:
            categories = _context4.sent;
            res.render('panel', {
              "query": query,
              "color": color,
              "sizes": sizes,
              "categories": categories
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _HomePage.apply(this, arguments);
}

function formPage(req, res) {
  res.render("read_excel");
} //Esta vista es solo para crear los productos


function createProducts(_x9, _x10) {
  return _createProducts.apply(this, arguments);
} //Esta vista es para crear variantes de color del producto


function _createProducts() {
  _createProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var product, category, productCategory;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Product["default"].create({
              title: req.body.nameproduct,
              description: req.body.description,
              price: req.body.price
            });

          case 2:
            product = _context5.sent;
            _context5.next = 5;
            return _Categories["default"].findOne({
              where: {
                name: req.body.category
              }
            });

          case 5:
            category = _context5.sent;
            console.log(category);

            if (category) {
              _context5.next = 11;
              break;
            }

            _context5.next = 10;
            return _Categories["default"].create({
              name: req.body.category
            });

          case 10:
            category = _context5.sent;

          case 11:
            _context5.next = 13;
            return _ProductCategories["default"].create({
              productId: product.dataValues.id,
              categoryId: category.dataValues.id
            });

          case 13:
            productCategory = _context5.sent;
            console.log("Se subio el producto correctamente");
            res.redirect("/");

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createProducts.apply(this, arguments);
}

function CreateVariantColor(_x11, _x12) {
  return _CreateVariantColor.apply(this, arguments);
}

function _CreateVariantColor() {
  _CreateVariantColor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var sampleFile, uploadPath, isWin, path;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!req.files || Object.keys(req.files).length === 0)) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt("return", res.status(400).send('No files were uploaded.'));

          case 2:
            sampleFile = req.files.sampleFile;
            isWin = process.platform === "win32";

            if (isWin) {
              uploadPath = __dirname.split("\controllers")[0] + "\public\\" + sampleFile.name;
            } else {
              uploadPath = __dirname.split("/controllers")[0] + "/public/" + sampleFile.name;
            }

            path = require('path');
            sampleFile.mv(uploadPath, function (err) {
              if (err) return res.status(500).send(err);

              if (!err) {
                var color = _Variant_Color["default"].build({
                  color: req.body.variant_color,
                  image: sampleFile.name,
                  productId: req.body.product_id
                });

                color.save();
                console.log("Se subio la variante correctamente");
                res.redirect("/");
              }
            });

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _CreateVariantColor.apply(this, arguments);
}

function CreateVariantSize(_x13, _x14) {
  return _CreateVariantSize.apply(this, arguments);
} //Esta funcion es para borrar el producto


function _CreateVariantSize() {
  _CreateVariantSize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var size;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            size = _Variant_Size["default"].build({
              size: req.body.variant_size,
              stock: req.body.stock,
              codebar: req.body.codebar,
              variant_color_id: req.body.variant_color_id
            });
            size.save();
            console.log("Se subio la variante de talla correctamente");
            res.redirect("/");

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _CreateVariantSize.apply(this, arguments);
}

function DeleteProduct(_x15, _x16) {
  return _DeleteProduct.apply(this, arguments);
}

function _DeleteProduct() {
  _DeleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var product, colors, list_of_color_id, sizes;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log(req.body);
            _context8.next = 3;
            return _Product["default"].findOne({
              where: {
                id: req.body.product_Id_delete
              }
            });

          case 3:
            product = _context8.sent;
            _context8.prev = 4;
            _context8.next = 7;
            return _Variant_Color["default"].findAll({
              where: {
                productId: product.id
              }
            });

          case 7:
            colors = _context8.sent;
            list_of_color_id = colors.map(function (obj) {
              return obj.id;
            });
            _context8.next = 11;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: list_of_color_id
              }
            });

          case 11:
            sizes = _context8.sent;
            sizes.map(function (obj) {
              _Variant_Size["default"].destroy({
                where: {
                  id: obj.id
                }
              });
            });
            colors.map(function (obj) {
              _Variant_Color["default"].destroy({
                where: {
                  id: obj.id
                }
              });
            });
            _context8.next = 19;
            break;

          case 16:
            _context8.prev = 16;
            _context8.t0 = _context8["catch"](4);
            console.log("error");

          case 19:
            product.destroy();
            console.log("Hello World");
            res.redirect("/");

          case 22:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 16]]);
  }));
  return _DeleteProduct.apply(this, arguments);
}

function DeleteColor(_x17, _x18) {
  return _DeleteColor.apply(this, arguments);
}

function _DeleteColor() {
  _DeleteColor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var color, sizes;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            console.log(req.body);
            _context9.next = 3;
            return _Variant_Color["default"].findOne({
              where: {
                id: req.body.variant_color_id
              }
            });

          case 3:
            color = _context9.sent;
            _context9.prev = 4;
            _context9.next = 7;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: req.body.variant_color_id
              }
            });

          case 7:
            sizes = _context9.sent;
            sizes.map(function (obj) {
              _Variant_Size["default"].destroy({
                where: {
                  id: obj.id
                }
              });
            });
            color.destroy();
            _context9.next = 15;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](4);
            console.log("error");

          case 15:
            console.log("Hello World");
            res.redirect("/");

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[4, 12]]);
  }));
  return _DeleteColor.apply(this, arguments);
}

function DeleteSize(_x19, _x20) {
  return _DeleteSize.apply(this, arguments);
}

function _DeleteSize() {
  _DeleteSize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var size;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            console.log(req.body);
            _context10.next = 3;
            return _Variant_Size["default"].findOne({
              where: {
                id: req.body.size_id
              }
            });

          case 3:
            size = _context10.sent;

            try {
              size.destroy();
            } catch (_unused3) {
              console.log("error");
            }

            console.log("Hello World");
            res.redirect("/");

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _DeleteSize.apply(this, arguments);
}

function getsizes(_x21, _x22) {
  return _getsizes.apply(this, arguments);
}
/* Funciones para despejar un poco el código */


function _getsizes() {
  _getsizes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var sizes;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _Variant_Size["default"].findAll({
              where: {
                variant_color_id: req.query.color_id
              }
            });

          case 3:
            sizes = _context11.sent;
            res.json({
              "size": sizes
            });
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            res.json({
              "error": _context11.t0
            });

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return _getsizes.apply(this, arguments);
}

function get_or_create() {
  return _get_or_create.apply(this, arguments);
}

function _get_or_create() {
  _get_or_create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
    var condition_array,
        current_object,
        ifcreated,
        where_array,
        obj_elements,
        _args12 = arguments;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            condition_array = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
            current_object = _args12.length > 1 ? _args12[1] : undefined;
            ifcreated = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : {};

            /*Función que devuelve un objeto, revisa si existe sino lo crea*/
            where_array = {
              where: condition_array
            };
            _context12.next = 6;
            return current_object.count(where_array);

          case 6:
            _context12.t0 = _context12.sent;

            if (!(_context12.t0 > 0)) {
              _context12.next = 13;
              break;
            }

            _context12.next = 10;
            return current_object.findOne(where_array);

          case 10:
            return _context12.abrupt("return", _context12.sent);

          case 13:
            obj_elements = _objectSpread(_objectSpread({}, condition_array), ifcreated);
            _context12.next = 16;
            return current_object.create(obj_elements);

          case 16:
            return _context12.abrupt("return", _context12.sent);

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _get_or_create.apply(this, arguments);
}

function ReadAyndExcel(_x23, _x24) {
  return _ReadAyndExcel.apply(this, arguments);
}

function _ReadAyndExcel() {
  _ReadAyndExcel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var sampleFile, uploadPath, isWin;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if (!(!req.files || Object.keys(req.files).length === 0)) {
              _context15.next = 3;
              break;
            }

            console.log(req.files);
            return _context15.abrupt("return", res.status(400).send('No files were uploaded.'));

          case 3:
            sampleFile = req.files.sampleFile;
            isWin = process.platform === "win32";

            if (isWin) {
              uploadPath = __dirname.split("\controllers")[0] + "\public\\" + sampleFile.name;
            } else {
              uploadPath = __dirname.split("/controllers")[0] + "/public/" + sampleFile.name;
            }

            sampleFile.mv(uploadPath, /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(err) {
                return _regenerator["default"].wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        if (!err) {
                          _context14.next = 2;
                          break;
                        }

                        return _context14.abrupt("return", res.status(500).send(err));

                      case 2:
                        if (!err) {
                          try {
                            //Sabemos hasta este punto que nos mandaran un excel con los datos
                            readXlsxFile(uploadPath, {
                              sheet: 'Modelo Prueba'
                            }).then( /*#__PURE__*/function () {
                              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(rows) {
                                var errorList, condition, createdadd, i, genError, category, product, colors, list_of_colors, k, color_value, image_url, isWin, imgpath, colorModel, list_of_sizes, tmpstock, stocks, list_of_stocks, tmpcodebar, codebars, list_of_codebars, _i, arrayVarSize, variant_size_exist;

                                return _regenerator["default"].wrap(function _callee13$(_context13) {
                                  while (1) {
                                    switch (_context13.prev = _context13.next) {
                                      case 0:
                                        errorList = [];
                                        condition = {};
                                        createdadd = {};
                                        _context13.t0 = _regenerator["default"].keys(rows);

                                      case 4:
                                        if ((_context13.t1 = _context13.t0()).done) {
                                          _context13.next = 98;
                                          break;
                                        }

                                        i = _context13.t1.value;

                                        if (!(i !== "0")) {
                                          _context13.next = 96;
                                          break;
                                        }

                                        _context13.prev = 7;
                                        genError = {
                                          'product': rows[i][1]
                                        };
                                        condition = {
                                          name: rows[i][0]
                                        };
                                        _context13.next = 12;
                                        return get_or_create(condition, _Categories["default"]);

                                      case 12:
                                        category = _context13.sent;
                                        condition = {
                                          title: rows[i][1],
                                          description: rows[i][2],
                                          price: rows[i][3]
                                        };
                                        _context13.next = 16;
                                        return get_or_create(condition, _Product["default"]);

                                      case 16:
                                        product = _context13.sent;
                                        //Luego de esta parte debemos asociar cada categoria con un producto
                                        condition = {
                                          productId: product.dataValues.id,
                                          categoryId: category.dataValues.id
                                        }; //Si no existe alguna asociacion entonces la creamos

                                        _context13.next = 20;
                                        return get_or_create(condition, _ProductCategories["default"]);

                                      case 20:
                                        //A partir de aqui iremos con las variantes de color
                                        colors = rows[i][4];
                                        list_of_colors = colors.split(';');
                                        _context13.t2 = _regenerator["default"].keys(list_of_colors);

                                      case 23:
                                        if ((_context13.t3 = _context13.t2()).done) {
                                          _context13.next = 91;
                                          break;
                                        }

                                        k = _context13.t3.value;
                                        color_value = list_of_colors[k];
                                        image_url = rows[i][5].split(";")[k];
                                        genError['color'] = color_value;
                                        genError['reason'] = 'La imagen proporcionada no es valida';
                                        genError['sizes'] = rows[i][6].split(";")[k];

                                        if (!(image_url === "" || image_url === null)) {
                                          _context13.next = 33;
                                          break;
                                        }

                                        errorList.push(genError);
                                        return _context13.abrupt("continue", 23);

                                      case 33:
                                        isWin = process.platform === "win32";
                                        imgpath = "";

                                        if (isWin) {
                                          imgpath = image_url.substring(image_url.lastIndexOf("\\"), image_url.length);
                                          uploadPath = __dirname.split("\controllers")[0] + "\public\\" + imgpath;
                                        } else {
                                          imgpath = image_url.substring(image_url.lastIndexOf("/"), image_url.length);
                                          uploadPath = __dirname.split("/controllers")[0] + "/public/" + imgpath;
                                        }

                                        if (!fs.existsSync(image_url)) {
                                          _context13.next = 41;
                                          break;
                                        }

                                        _context13.next = 39;
                                        return (0, _promises.copyFile)(image_url, uploadPath);

                                      case 39:
                                        _context13.next = 43;
                                        break;

                                      case 41:
                                        errorList.push(genError);
                                        return _context13.abrupt("continue", 23);

                                      case 43:
                                        condition = {
                                          color: color_value,
                                          productId: product.dataValues.id
                                        };
                                        createdadd = {
                                          image: imgpath
                                        };
                                        _context13.next = 47;
                                        return get_or_create(condition, _Variant_Color["default"], createdadd);

                                      case 47:
                                        colorModel = _context13.sent;
                                        _context13.prev = 48;
                                        list_of_sizes = rows[i][6].split(";")[k]; // -> Devuelve string con las tallas

                                        tmpstock = rows[i][7];
                                        stocks = tmpstock === 'string' ? tmpstock : tmpstock.toString();
                                        list_of_stocks = stocks == 'undefined' ? '0' : stocks.split(";")[k];
                                        tmpcodebar = rows[i][8];
                                        codebars = typeof tmpcodebar === 'string' ? tmpcodebar : tmpcodebar.toString();
                                        list_of_codebars = codebars.split(";")[k];

                                        if (!(typeof list_of_codebars === 'undefined')) {
                                          _context13.next = 63;
                                          break;
                                        }

                                        genError['reason'] = 'No posee código de barras';
                                        genError['sizes'] = list_of_sizes;
                                        errorList.push(genError);
                                        return _context13.abrupt("continue", 23);

                                      case 63:
                                        list_of_stocks = typeof list_of_stocks === 'string' ? list_of_stocks : list_of_stocks.toString();
                                        list_of_codebars = typeof list_of_codebars === 'string' ? list_of_codebars : list_of_codebars.toString();
                                        list_of_sizes = list_of_sizes.split(",");
                                        list_of_stocks = list_of_stocks.split(",");
                                        list_of_codebars = list_of_codebars.split(",");
                                        _context13.t4 = _regenerator["default"].keys(list_of_sizes);

                                      case 69:
                                        if ((_context13.t5 = _context13.t4()).done) {
                                          _context13.next = 81;
                                          break;
                                        }

                                        _i = _context13.t5.value;
                                        arrayVarSize = {
                                          size: list_of_sizes[_i],
                                          stock: list_of_stocks[_i],
                                          codebar: list_of_codebars[_i],
                                          variant_color_id: colorModel.dataValues.id
                                        };
                                        _context13.next = 74;
                                        return _Variant_Size["default"].count({
                                          where: arrayVarSize
                                        });

                                      case 74:
                                        _context13.t6 = _context13.sent;
                                        variant_size_exist = _context13.t6 > 0;

                                        if (!(variant_size_exist === false)) {
                                          _context13.next = 79;
                                          break;
                                        }

                                        _context13.next = 79;
                                        return _Variant_Size["default"].create(arrayVarSize);

                                      case 79:
                                        _context13.next = 69;
                                        break;

                                      case 81:
                                        console.log("1 product Created");

                                      case 82:
                                        _context13.next = 89;
                                        break;

                                      case 84:
                                        _context13.prev = 84;
                                        _context13.t7 = _context13["catch"](48);
                                        genError['reason'] = 'La cantidad de tallas ,stocks, codigo de barras, colores NO es la misma ';
                                        errorList.push(genError);
                                        return _context13.abrupt("continue", 23);

                                      case 89:
                                        _context13.next = 23;
                                        break;

                                      case 91:
                                        _context13.next = 96;
                                        break;

                                      case 93:
                                        _context13.prev = 93;
                                        _context13.t8 = _context13["catch"](7);
                                        console.log(_context13.t8);

                                      case 96:
                                        _context13.next = 4;
                                        break;

                                      case 98:
                                        res.render('uploadedexcel', {
                                          "query": errorList
                                        });

                                      case 99:
                                      case "end":
                                        return _context13.stop();
                                    }
                                  }
                                }, _callee13, null, [[7, 93], [48, 84]]);
                              }));

                              return function (_x35) {
                                return _ref2.apply(this, arguments);
                              };
                            }());
                          } catch (err) {
                            res.json({
                              "error": "El nombre de la hoja de su excel debe ser 'Modelo Prueba' (sin comillas)"
                            });
                          }
                        }

                      case 3:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));

              return function (_x34) {
                return _ref.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _ReadAyndExcel.apply(this, arguments);
}

function createSizesExcel(_x25, _x26, _x27, _x28) {
  return _createSizesExcel.apply(this, arguments);
}

function _createSizesExcel() {
  _createSizesExcel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(list_of_sizes, list_of_stocks, list_of_codebars, colorModel) {
    var i, arrayVarSize, variant_size_exist;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            list_of_stocks = typeof list_of_stocks === 'string' ? list_of_stocks : list_of_stocks.toString();
            list_of_codebars = typeof list_of_codebars === 'string' ? list_of_codebars : list_of_codebars.toString();
            list_of_sizes = list_of_sizes.split(",");
            list_of_stocks = list_of_stocks.split(",");
            list_of_codebars = list_of_codebars.split(",");
            _context16.t0 = _regenerator["default"].keys(list_of_sizes);

          case 6:
            if ((_context16.t1 = _context16.t0()).done) {
              _context16.next = 18;
              break;
            }

            i = _context16.t1.value;
            arrayVarSize = {
              size: list_of_sizes[i],
              stock: list_of_stocks[i],
              codebar: list_of_codebars[i],
              variant_color_id: colorModel.dataValues.id
            };
            _context16.next = 11;
            return _Variant_Size["default"].count({
              where: arrayVarSize
            });

          case 11:
            _context16.t2 = _context16.sent;
            variant_size_exist = _context16.t2 > 0;

            if (!(variant_size_exist === false)) {
              _context16.next = 16;
              break;
            }

            _context16.next = 16;
            return _Variant_Size["default"].create(arrayVarSize);

          case 16:
            _context16.next = 6;
            break;

          case 18:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _createSizesExcel.apply(this, arguments);
}

function DownloadExcel(_x29, _x30) {
  return _DownloadExcel.apply(this, arguments);
}

function _DownloadExcel() {
  _DownloadExcel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var products, results, isWin;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _Product["default"].findAll();

          case 2:
            products = _context17.sent;
            results = [[{
              value: "Productos",
              fontWeight: 20
            }, {
              value: "Precio",
              fontWeight: 20
            }, {
              value: "ID",
              fontWeight: 20
            }]];
            products.map(function (obj) {
              results.push([{
                type: String,
                value: obj.dataValues.title
              }, {
                type: Number,
                value: obj.dataValues.price
              }, {
                type: Number,
                value: obj.dataValues.id
              }]);
            });
            isWin = process.platform === "win32";

            if (isWin) {
              _context17.next = 13;
              break;
            }

            _context17.next = 9;
            return writeXlsxFile(results, {
              filePath: __dirname + "/products.xlsx"
            });

          case 9:
            deleteFile(__dirname + "/products.xlsx");
            return _context17.abrupt("return", res.download(__dirname + "/products.xlsx"));

          case 13:
            _context17.next = 15;
            return writeXlsxFile(results, {
              filePath: __dirname + "\\products.xlsx"
            });

          case 15:
            deleteFile(__dirname + "\\products.xlsx");
            return _context17.abrupt("return", res.download(__dirname + "\\products.xlsx"));

          case 17:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _DownloadExcel.apply(this, arguments);
}

function deleteFile(_x31) {
  return _deleteFile.apply(this, arguments);
}

function _deleteFile() {
  _deleteFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(path) {
    var fs, sleep;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            fs = require('fs');

            sleep = function sleep(ms) {
              return new Promise(function (r) {
                return setTimeout(r, ms);
              });
            };

            _context18.next = 4;
            return sleep(5000);

          case 4:
            _context18.next = 6;
            return fs.unlinkSync(path);

          case 6:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _deleteFile.apply(this, arguments);
}

function DeleteExcelProducts(_x32, _x33) {
  return _DeleteExcelProducts.apply(this, arguments);
}

function _DeleteExcelProducts() {
  _DeleteExcelProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var sampleFile, uploadPath, isWin;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            if (!(!req.files || Object.keys(req.files).length === 0)) {
              _context21.next = 3;
              break;
            }

            console.log(req.files);
            return _context21.abrupt("return", res.status(400).send('No files were uploaded.'));

          case 3:
            sampleFile = req.files.sampleFile;
            isWin = process.platform === "win32";

            if (isWin) {
              uploadPath = __dirname.split("\controllers")[0] + "\public\\" + sampleFile.name;
            } else {
              uploadPath = __dirname.split("/controllers")[0] + "/public/" + sampleFile.name;
            }

            sampleFile.mv(uploadPath, /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(err) {
                return _regenerator["default"].wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        if (!err) {
                          _context20.next = 2;
                          break;
                        }

                        return _context20.abrupt("return", res.send(err));

                      case 2:
                        if (!err) {
                          readXlsxFile(uploadPath, {
                            sheet: 'Sheet1'
                          }).then( /*#__PURE__*/function () {
                            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(rows) {
                              var i, product, colors, list_of_color_id, sizes;
                              return _regenerator["default"].wrap(function _callee19$(_context19) {
                                while (1) {
                                  switch (_context19.prev = _context19.next) {
                                    case 0:
                                      _context19.t0 = _regenerator["default"].keys(rows);

                                    case 1:
                                      if ((_context19.t1 = _context19.t0()).done) {
                                        _context19.next = 20;
                                        break;
                                      }

                                      i = _context19.t1.value;

                                      if (!(i !== "0")) {
                                        _context19.next = 18;
                                        break;
                                      }

                                      console.log(rows[i]);
                                      _context19.next = 7;
                                      return _Product["default"].findOne({
                                        where: {
                                          "id": rows[i][2]
                                        }
                                      });

                                    case 7:
                                      product = _context19.sent;
                                      _context19.next = 10;
                                      return _Variant_Color["default"].findAll({
                                        where: {
                                          productId: product.id
                                        }
                                      });

                                    case 10:
                                      colors = _context19.sent;
                                      list_of_color_id = colors.map(function (obj) {
                                        return obj.id;
                                      });
                                      _context19.next = 14;
                                      return _Variant_Size["default"].findAll({
                                        where: {
                                          variant_color_id: list_of_color_id
                                        }
                                      });

                                    case 14:
                                      sizes = _context19.sent;
                                      sizes.map(function (obj) {
                                        _Variant_Size["default"].destroy({
                                          where: {
                                            id: obj.id
                                          }
                                        });
                                      });
                                      colors.map(function (obj) {
                                        _Variant_Color["default"].destroy({
                                          where: {
                                            id: obj.id
                                          }
                                        });
                                      });
                                      product.destroy();

                                    case 18:
                                      _context19.next = 1;
                                      break;

                                    case 20:
                                    case "end":
                                      return _context19.stop();
                                  }
                                }
                              }, _callee19);
                            }));

                            return function (_x37) {
                              return _ref4.apply(this, arguments);
                            };
                          }());
                        }

                      case 3:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              }));

              return function (_x36) {
                return _ref3.apply(this, arguments);
              };
            }());
            deleteFile(uploadPath);
            res.redirect("/form/");

          case 9:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _DeleteExcelProducts.apply(this, arguments);
}