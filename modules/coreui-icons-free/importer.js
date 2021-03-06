const generateCss = require('../../scripts/utils/generateCss');
const generateJson = require('../../scripts/utils/generateJson');
const prepareIcons = require('../../scripts/utils/prepareIcons');
const extraFromJson = require('../../scripts/utils/extraFromJson');
const detectLicense = require('../../scripts/utils/detectLicense');
const getIconsMap = require('../../scripts/utils/getIconsMap');
const getIconsFromCss = require('../../scripts/utils/getIconsFromCss');
const getSvgs = require('../../scripts/utils/getSvgs');
const copySvgs = require('../../scripts/utils/copySvgs');
const optimizeSvgs = require('../../scripts/utils/optimizeSvgs');
const getFonts = require('../../scripts/utils/getFonts');
const copyFonts = require('../../scripts/utils/copyFonts');
const copyLicense = require('../../scripts/utils/copyLicense');
const jsonfile = require('../../scripts/utils/jsonfile');
const clean = require('../../scripts/utils/clean');
const path = require('path');

let options = {
  source: path.join(`${__dirname}/node_modules/`, '@coreui', 'icons'),
  name: 'coreui-icons-free',
  class: 'cil',
  prefix: 'cil-',
  className: 'CoreuiIconsFree',
  title: 'CoreUI Icons Free',
  description: 'CoreUI Icons is an open-source icon set with more than 1500 icons in multiple formats SVG, PNG, and Webfonts.',
  classifiable: false
};

let paths = {
  package: path.join(options.source, 'package.json'),
  css: path.join(options.source, 'css', 'free.css'),
  fonts: path.join(options.source, 'fonts'),
  svgs: path.join(options.source, 'svg', 'free'),
  url: 'https://coreui.io/icons/',
  dest: __dirname,
  svgsDest: path.join(__dirname, 'icons')
};

let info = extraFromJson(paths.package, ['homepage', 'description', 'version', 'author', 'license']);

options.license = info.license;
options.author = info.author.name;
options.homepage = info.homepage;
// options.description = info.description;
options.version = info.version;
options.fonts = getFonts(paths.fonts, "CoreUI-Icons-Free");
options.svgs = getSvgs(paths.svgs);

module.exports = function(callback) {
  options.icons = getIconsFromCss(paths.css, 'cil-');
  options = prepareIcons(options);
  clean(paths.dest)
  generateCss(paths.dest, options.name, options);
  generateJson(paths.dest, options);
  copyFonts(paths.dest, paths.fonts, options);
  options.svgs = copySvgs(paths.svgsDest, paths.svgs, options.svgs, 'cil-');
  optimizeSvgs(paths.svgsDest, options.svgs);
  copyLicense(paths.dest, path.join(options.source, 'LICENSE'));
  jsonfile(paths.dest, options);
  callback()
};
