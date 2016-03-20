# gulp-gitflow-diff
Gulp plugin for fitlering files that differ from some base git branch

This plugin will be useful when you have a pretty large project with adopted git-flow/github-flow organization of development process. And for example you want to lint files on git push hook. Why do you should lint every single file only several of them actuall have been changed? At this moment this plugin will help you. Because it filter only those files that actually have been changed relatively base branch (usually `origin/master`).

# Installation

```sh
$ npm install gulp-gitflow-diff --save-dev
```

# Usage

```js
var gulp = require('gulp');
var gulpPrefixer = require('./gulp-prefixer');


gulp.task('default', function () {
    return gulp.src('./src/**/*.js')
        .pipe(gulpGitflowDiff({baseBranch: 'master'}))
        .pipe(gulp.dest('dest'));
});
```

# License

MIT
