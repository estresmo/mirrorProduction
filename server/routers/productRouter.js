"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getProducts = require("../controllers/getProducts.js");

var router = (0, _express.Router)();
router.get("/api/checkprod/", _getProducts.checkifexistproduct);
router.get("/api/checkcolor/", _getProducts.checkifexistcolor);
router.get("/api/checksize/", _getProducts.checkifexistsize);
router.get("/api/getsizes/", _getProducts.getsizes);
router.get("/", _getProducts.HomePage);
router.post("/", _getProducts.createProducts);
router.post("/add-variant/color/", _getProducts.CreateVariantColor);
router.post("/add-variant/size/", _getProducts.CreateVariantSize);
router.post("/delete-product/", _getProducts.DeleteProduct);
router.post("/delete-color/", _getProducts.DeleteColor);
router.post("/delete-size/", _getProducts.DeleteSize); //Apartir de aqui colocaremos todo lo relacionado a los excel

router.get("/form/", _getProducts.formPage);
router.post("/formexcel/", _getProducts.ReadAyndExcel);
router.get("/download-excel/", _getProducts.DownloadExcel);
router.post("/delete-excel/", _getProducts.DeleteExcelProducts);
var _default = router;
exports["default"] = _default;