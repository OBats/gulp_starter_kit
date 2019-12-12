const { src } = require('gulp');
const config = require('../config');
const sassLint = require('gulp-sass-lint');

const lintSass = () => {
  return src(config.src.sass + '/**/*.{sass,scss}')
    .pipe(
      sassLint({
        configFile: '.sass-lint.yml',
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};

exports.lintSass = lintSass;
