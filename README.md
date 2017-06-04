# gulp-gitflow-diff [![Build Status](https://travis-ci.org/myshov/gulp-gitflow-diff.svg?branch=master)](https://travis-ci.org/myshov/gulp-gitflow-diff)
Gulp plugin for fitlering files that differ from some base git branch

This plugin is useful when you have a pretty large project with adopted git-flow/github-flow organization of development process. And for example you want to lint files on git push hook. Why do you should lint every single file when only several of them actually have been changed? This plugin will help to filter only those files that actually have been changed relatively of base branch (usually `master` or `origin/master`).

# Installation

```sh
$ npm install gulp-gitflow-diff --save-dev
```

# Usage

```js
var gulp = require('gulp');
var gulpGitflowDiff = require('gulp-gitflow-diff');


gulp.task('default', function () {
    return gulp.src('./src/**/*.js')
        .pipe(gulpGitflowDiff({baseBranch: 'master'}))
        .pipe(gulp.dest('dest'));
});
```

# License

MIT
