import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import concat  from 'gulp-concat';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat(project.cssProcessor.filename))
    .pipe(gulp.dest(project.copyCss.output));
};
