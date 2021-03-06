'use strict';

const fs = require('fs');
const SVGO = require('svgo');
const path = require('path');

let svgo = new SVGO({
  plugins: [{
      removeViewBox: false
    },
    {
      removeAttrs: {
        attrs: ['(data-name|path|rect|circle|polygon|line|polyline|g|ellipse|class)']
      }
    },
    {
      removeTitle: true
    },
    {
      removeStyleElement: true
    },
    {
      removeDimensions: true
    },
    {
      removeComments: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      cleanupIDs: {
        remove: true,
        prefix: 'svgicon-'
      }
    },
    {
      convertShapeToPath: true
    }]
});

module.exports = function(dest, files) {
  files.forEach(file => {
    file = path.join(dest, file)
    let data = fs.readFileSync(file, 'utf8')

    svgo.optimize(data).then(function(result) {
      fs.writeFileSync(file, result.data)
    })
  })
}
