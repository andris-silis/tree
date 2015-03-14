
import gulp from 'gulp';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import livereload from 'gulp-livereload';
import mainBowerFiles from 'main-bower-files';
import filter from 'gulp-filter';
import react from 'gulp-react';
import symlink from 'gulp-sym';
import minifyCSS from 'gulp-minify-css';
import autoprefixer from 'gulp-autoprefixer';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack-config';


var cssSrc = ['src/**/*.css'];

var outputDestination = './www/compiled';
var jsOutputDestination = `${outputDestination}/js`;
var cssOutputDestination = `${outputDestination}/css`;

var cssFile = 'main.css';
var vendorsCSSFile = 'vendors.css';


gulp.task('concat-js', () => {
  gulp
    .src('src/js/app.jsx')
    .pipe(webpack(webpackConfig()))
    .on('error', gutil.log)
    .pipe(gulp.dest(jsOutputDestination));
});


gulp.task('concat-vendor-css', () => {
  gulp
    .src(
    mainBowerFiles({
      checkExistence: true
    })
  )
    .pipe(filter(['*.css']))
    .pipe(autoprefixer())
    .on('error', gutil.log)
    .pipe(concat(vendorsCSSFile))
    .pipe(gulp.dest(cssOutputDestination));
});


gulp.task('concat-css', () => {
  gulp
    .src(cssSrc)
    .pipe(autoprefixer())
    .on('error', gutil.log)
    .pipe(concat(cssFile))
    .pipe(gulp.dest(cssOutputDestination));
});


gulp.task('minify-public-css', () => {
  gulp.src(`${cssOutputDestination}/*.css`)
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssOutputDestination));
});


gulp.task('minify-public', ['minify-public-css']);


gulp.task(
  'build',
  [
    'concat-js', 'concat-css', 'concat-vendor-css'
  ],
  () => {
    if (process.env.NODE_ENV === 'production' && !process.env.NO_MINIFY) {
      gulp.start('minify-public', function () {
        return gutil.log('Build done');
      });
    } else {
      return gutil.log('Build done');
    }
  }
);


gulp.task('build-prod', () => {
  process.env.NODE_ENV = 'production';
  gulp.start('build');
});


gulp.task('watch', () => {
  livereload.listen();

  var webpackConfigObj = webpackConfig();
  webpackConfigObj.watch = true;
  gulp
    .src('src/js/app.jsx')
    .pipe(webpack(webpackConfigObj))
    .on('error', gutil.log)
    .pipe(gulp.dest(jsOutputDestination));

  gulp
    .watch(cssSrc, ['concat-css'])
    .on('error', gutil.log);

  gulp
    .watch(`${outputDestination}/**`)
    .on('change', livereload.changed);

});




gulp.task('default', () => {});
