let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let browserify = require("browserify");
let source = require('vinyl-source-stream');
let tsify = require("tsify");
let del = require('del');

var paths = {
    pages: ['./core/**/*.html'],
    scss: ['./core/**/*.scss']
};

gulp.task("copy-html", () => {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist/core"));
});
gulp.task('copy-css', () => {
    return gulp.src(paths.scss)
        .pipe(gulp.dest("dist/core"));
})

gulp.task('script', () => {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['jdb-plg-ui.module.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .pipe(source())
        .pipe(gulp.dest("dist"));
});
gulp.task('script-node', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
})
gulp.task('clean', () => {
    del(['dist']);
});
gulp.task('default', ['copy-css', 'copy-html', 'script-node']);