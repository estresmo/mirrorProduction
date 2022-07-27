"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _apiProductsRefactor = require("../controllers/apiProducts(Refactor).js");

var router = (0, _express.Router)();
router.get("/variant/:product", _apiProductsRefactor.getVariant);
router.get("/:codebar", _apiProductsRefactor.getProducts);
var _default = router;
exports["default"] = _default;