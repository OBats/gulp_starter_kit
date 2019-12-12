const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const gulpSass = require('gulp-sass');
const mqpacker = require('@lipemat/css-mqpacker');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sortCSSmq = require('sort-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config');

const processors = [
  autoprefixer({
    overrideBrowserslist: ['last 2 versions'],
    cascade: false,
  }),
  mqpacker({
    sort: sortCSSmq.desktopFirst,
  }),
];

const sass = () => {
  return src(config.src.sass + '/main.scss')
    .pipe(gulpIf(!config.production, sourcemaps.init()))
    .pipe(gulpSass())
    .on('error', config.errorHandler)
    .pipe(postcss(processors))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulpIf(!config.production, sourcemaps.write('./')))
    .pipe(dest(config.dest.css));
};

exports.sass = sass;
