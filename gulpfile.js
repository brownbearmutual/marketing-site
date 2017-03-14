'use strict'

var gulp = require('gulp')
var frontMatter = require('gulp-front-matter')
var markdown = require('gulp-markdown')
var pug = require('pug')
var through = require('through2').obj

// Options -----------------------------------------------------

var path = {
    src:  './src/content/**/*.md',
    dest: './dist/',
}

var fmOpts = {
    property: 'data',
    remove: true
}
var pugOpts = {
    basedir: './src/templates/',
    cache: true
}

/*
 * Create Static HTML Pages ------------------------------------
 * Simple build pipeline that takes markdown files
 * from `src`, extracts data from the YAML front matter
 * and then interpolates them with Pug templates
 */
gulp.task('build:html', function () {
    return gulp.src(path.src)
        .pipe(frontMatter(fmOpts))
        .pipe(markdown())
        .pipe(template(pugOpts))
        .pipe(gulp.dest(path.dest))
})

/*
 * Watch task ------------------------------------------------
 */
gulp.task('watch:html',function () {
    gulp.watch(path.src, ['build:html'])
})

/*
 * Template renderer and -------------------------------------
 * Custom through-stream used to interpolate
 * content files with Pug templates.
 */
function template (opts) {
    return through(function (file, enc, cb) {
        var template = opts.basedir + file.data.template
        // Add file data to `opts` before passing it to Pug
        Object.keys(file.data).forEach(function (key) {
            opts[key] = file.data[key]
        })
        // convert buffer and strip newline characters
        opts.content = file.contents
            .toString()
            .replace(/(\r\n|\n|\r)/gm,'')

        file.contents = new Buffer(pug.renderFile(template, opts))
        this.push(file)
        cb()
    })
}
