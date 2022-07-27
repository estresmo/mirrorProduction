"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _Product = _interopRequireDefault(require("./models/Product"));

var _Variant_Color = _interopRequireDefault(require("./models/Variant_Color"));

var _Variant_Size = _interopRequireDefault(require("./models/Variant_Size"));

var http = require("http");

var WebSocket = require("ws");

var app = (0, _express["default"])(); //initialize a simple http server

var server = http.createServer(app); //initialize the WebSocket server instance

var wss = new WebSocket.Server({
  server: server
});
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message, isBinary) {
    console.log(message.toString(), isBinary);
    wss.clients.forEach( /*#__PURE__*/function () {
      var _each = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client) {
        var buffer, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(client.readyState === WebSocket.OPEN)) {
                  _context.next = 8;
                  break;
                }

                buffer = JSON.parse(message.toString());
                console.log(buffer);
                _context.next = 5;
                return searchData(buffer);

              case 5:
                data = _context.sent;
                console.log(data);
                client.send(JSON.stringify(data));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function each(_x) {
        return _each.apply(this, arguments);
      }

      return each;
    }());
  });
}); //En este casi ya tenemos casi todo 
//start our server

server.listen(8002, function () {
  console.log("Server started on port ".concat(server.address().port, " :)"));
});

function searchData(_x2) {
  return _searchData.apply(this, arguments);
}

function _searchData() {
  _searchData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(buffer) {
    var size, color, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Variant_Size["default"].findOne({
              where: {
                id: buffer.message.id
              }
            });

          case 2:
            size = _context2.sent;
            _context2.next = 5;
            return _Variant_Color["default"].findOne({
              where: {
                id: size.variant_color_id
              }
            });

          case 5:
            color = _context2.sent;
            _context2.next = 8;
            return _Product["default"].findOne({
              where: {
                id: color.productId
              }
            });

          case 8:
            product = _context2.sent;
            return _context2.abrupt("return", {
              id: product.dataValues.id,
              title: product.dataValues.title,
              description: product.dataValues.description,
              color: color.dataValues.color,
              size: size.dataValues.size,
              codebar: size.codebar
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _searchData.apply(this, arguments);
}