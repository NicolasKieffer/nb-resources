/* global module */
/* jslint node: true */
/* jslint indent: 2 */
'use strict';

let fs = require("fs");

module.exports = {
  "trainings": {
    "SHS": require("./trainings/SHS.json"),
    "STM": require("./trainings/001-002.json"),
    "001": require("./trainings/001.json"),
    "002": require("./trainings/002.json"),
    "001A": require("./trainings/001A.json"),
    "001B": require("./trainings/001B.json"),
    "001C": require("./trainings/001C.json"),
    "001D": require("./trainings/001D.json"),
    "001E": require("./trainings/001E.json"),
    "002A": require("./trainings/002A.json"),
    "002B": require("./trainings/002B.json")
  },
  "mapping": require("./mapping.json"),
  "verbalization": require("./verbalization.json"),
  "template": "./fragment.tei.xml.tpl"
};