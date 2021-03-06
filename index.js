/* global module */
/* jslint node: true */
/* jslint indent: 2 */
'use strict';

let fs = require('fs'),
  path = require('path');

let resources = {
  "trainings": {},
  "mapping": require("./mapping.json"),
  "verbalization": require("./verbalization.json"),
  "template": fs.readFileSync(path.join(__dirname, "fragment.tei.xml.tpl"), 'utf-8')
};

for (let key in resources.mapping) {
  resources.trainings[key] = require(resources.mapping[key]);
}

module.exports = resources;