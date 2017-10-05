/* global module */
/* jslint node: true */
/* jslint indent: 2 */
'use strict';

let resources = {
  "trainings": {},
  "mapping": require("./mapping.json"),
  "verbalization": require("./verbalization.json"),
  "template": "./fragment.tei.xml.tpl"
};

for (let key in resources.mapping) {
  resources.trainings[key] = require(resources.mapping[key]);
}

module.exports = resources;