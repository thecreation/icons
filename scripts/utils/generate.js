'use strict';

let fs = require('graceful-fs');
let path = require('path');
let Handlebars = require('handlebars');

module.exports = function(outputFile, templateFile, data = {}) {
  var source = fs.readFileSync(templateFile);
  var template = Handlebars.compile(source.toString());
  var output = template(data);

  return fs.writeFileSync(outputFile, output);
}
