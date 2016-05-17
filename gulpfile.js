var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var liveReload   = require('gulp-livereload');
var exec = require('child_process').exec;
var gutil = require('gulp-util');
var concat = require('gulp-concat');

gulp.task('server', function (cb) {
  exec('httpster -d ./www/', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


var config = {
	paths : {
		sass: './sass/**/*.scss',
		css: './www/css',
    sourceJS: './js/**',
    distJS: './www/js',
    sourceFonts: './fonts/**',
    distFonts: './www/fonts',
		jade: './jade/*.jade',
		index: './www/index.html'
	}
}

 //SASS build task
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', function(params){
    	// sass.logError(params);
    	console.log(params);
    	gutil.beep();
    }))
    .pipe(autoprefixer({
        browsers: ['last 3 versions', 'ie >= 9'],
        cascade: false
    }))
    .pipe(gulp.dest(config.paths.css))
    .pipe(liveReload());
});


// Jade to HTML
gulp.task('jade', function() {
  var locals = {};
  gulp.src(config.paths.jade)
    .pipe(jade({
      locals: locals,
      pretty: true
    }))
    .pipe(gulp.dest('./www/'))
});

// scripts
gulp.task('scripts', function() {
  return gulp.src(config.paths.sourceJS)
    .pipe(gulp.dest(config.paths.distJS));
});

//fonts
gulp.task('fonts', function() {
  return gulp.src(config.paths.sourceFonts)
    .pipe(gulp.dest(config.paths.distFonts));
});


// Live Reload
gulp.task('livereload', function(){
	gulp.src(config.paths.index)
		.pipe(liveReload());
})

//Watch for file changes
gulp.task('watch', function () {
	liveReload.listen();
  gulp.watch(config.paths.sass, ['sass']);
  gulp.watch(config.paths.jade, ['jade']);
  gulp.watch(config.paths.jade, ['scripts']);
  gulp.watch(config.paths.index, ['livereload'])
});


//Default task: compile jade, sass and watch for changes
gulp.task('default', ['jade','sass', 'scripts', 'fonts', 'watch', 'server']);
