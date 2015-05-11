'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    sourcemapscss = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    ngAnnotate = require('gulp-ng-annotate'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('gulp-rimraf'),
    templateCache = require('gulp-angular-templatecache'),
    minifyHtml = require('gulp-minify-html'),
    bowerFiles = require('main-bower-files'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    dist:   {
        base: 'dist/',
        jade: 'dist/js',
        js:   'dist/js',
        css:  'dist/css',
        img:  'dist/images',
        font: 'dist/fonts'
    },
    src:    {
        app:   'src/app/app.module.js',
        jade:  'src/app/**/*.jade',
        index: 'src/index.jade',
        js:    'src/app/**/*.js',
        css:   'src/assets/css/**.css',
        img:   'src/assets/img/**/*.{gif,jpg,png,svg}'
    },
    watch:  {
        jade: 'src/app/**/*.jade',
        js:   'src/app/**/*.js',
        img:  'src/img/**/*.{gif,jpg,png,svg}'
    },
    ignore: {
        index: '!src/index.jade'
    },
    clean:  './dist',
    bower:  './bower_components',
    npm:    './node_modules'
};

var config = {
    server: {
        baseDir: path.dist.base
    },
    tunnel: false,
    host:   'localhost',
    port:   8888
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function () {
    return gulp.src(path.clean, {read: false})
        .pipe(rimraf());
});

gulp.task('js', function () {
    gulp.src([path.src.app, path.src.js])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(reload({stream: true}));
});

gulp.task('templates', function () {
    gulp.src([path.ignore.index, path.src.jade])
        .pipe(jade({pretty: false}))
        .pipe(templateCache('templates.js', {standalone: true}))
        .pipe(gulp.dest(path.dist.jade))
        .pipe(reload({stream: true}));
});

gulp.task('index', function () {
    gulp.src([path.src.index])
        .pipe(jade({pretty: false}))
        .pipe(gulp.dest(path.dist.base))
        .pipe(reload({stream: true}));
});

gulp.task('jade', ['index', 'templates']);

gulp.task('vendor-css', function () {
    gulp.src(path.src.cs1s)
        .pipe(gulp.dest(path.dist.css));
});

gulp.task('vendor', ['vendor-css']);

gulp.task('bower-js', function () {
    var files = bowerFiles({includeDev: false});
    return gulp.src(
        files,
        [path.bower, './bower_components/angular-bootstrap/ui-bootstrap-tpls.js']
    )
        .pipe(filter('**/*.js'))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(reload({stream: true}));
});

gulp.task('bower-font', function () {
    return gulp.src([path.bower + '/fontawesome/fonts/**.*'])
        .pipe(gulp.dest(path.dist.font));
});

gulp.task('bower-font-semantic', function () {
    return gulp.src(path.bower + '/semantic/dist/themes/**/*.*')
        .pipe(gulp.dest(path.dist.css + '/themes'));
});

gulp.task('bower-css', function () {
    var files = bowerFiles({includeDev: false});
    return gulp.src(
        files,
        {base: path.bower}
    )
        .pipe(filter('**/*.css'))
        .pipe(sourcemapscss.init())
        .pipe(concat('lib.css'))
        .pipe(sourcemapscss.write('.'))
        .pipe(gulp.dest(path.dist.css))
        .pipe(reload({stream: true}));
});

gulp.task('bower', ['bower-js', 'bower-css', 'bower-font','bower-font-semantic']);

//gulp.task('copy-index', function () {
//    gulp.src(path.src.index)
//        .pipe(gulp.dest(path.dist.base))
//        .pipe(reload({stream: true}));
//});

gulp.task('watch', function () {
    gulp.watch(path.src.js, ['js']);
    gulp.watch([path.ignore.index, path.src.jade], ['templates']);
    gulp.watch(path.src.index, ['index']);
    gulp.watch(path.bower, ['bower']);
    gulp.watch(path.src.img, ['image']);
});

//gulp.task('copy-bower-components', function () {
//    gulp.src('./bower_components/**')
//        .pipe(gulp.dest('dist/bower_components'));
//});

gulp.task('image', function () {
    gulp.src(path.src.img)
        .use(imagemin.jpegtran({progressive: true}))
        .pipe(gulp.dest(path.dist.img))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['js', 'jade', 'bower']);

gulp.task('default', ['build', 'webserver', 'watch']);
