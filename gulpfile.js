'use strict'

var gulp = require('gulp')
var frontMatter = require('gulp-front-matter')
var markdown = require('gulp-markdown')
var pug = require('pug')
var path = require('path')
var through = require('through2').obj

// Options -----------------------------------------------------

var paths = {
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
    return gulp.src(paths.src)
        .pipe(frontMatter(fmOpts))
        .pipe(markdown())
        .pipe(template(pugOpts))
        .pipe(gulp.dest(paths.dest))
})

/*
 * Watch task ------------------------------------------------
 * run the build task before starting `watch`
 */
gulp.task('watch:html', function () {
    var htmlFiles = '{' + paths.src + ',' + pugOpts.basedir + '**/*.pug}'
    var watch = gulp.watch( htmlFiles, ['build:html'])
    // If changed file is already cached by Pug, delete the cached version
    watch.on('change', function (event) {
        var changed = path.relative(process.cwd(), event.path)
        var match = Object.keys(pug.cache).find(function (key) {
                var cached = path.normalize(key)
                if (cached === changed) return key
        })
        if (match) delete pug.cache[match]
    })
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
