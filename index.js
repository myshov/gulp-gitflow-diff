'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var execSync = require('child_process').execSync;

function diffBranches(options) {
    var filesChanged = [];

    if (!options.baseBranch) {
        throw new gutil.PluginError('gulp-gitflow-diff', 'baseBranch param is required');
    }

    var cmd = 'git diff --name-only $(git merge-base ' + options.baseBranch + ' HEAD)..HEAD';
    filesChanged = execSync(cmd, {encoding: 'utf8'});
    filesChanged = filesChanged.split("\n");
    // last entry is just empty string
    filesChanged.pop();

    return through.obj(
        function (file, enc, cb) {
            if (isFileChanged(file, filesChanged)) {
                this.push(file);
            }
            cb();
        }
    );
};

function isFileChanged(file, filesChanged) {
    var currentFile = file.path.substr(process.cwd().length + 1);
    if (filesChanged.indexOf(currentFile) != -1) {
        return true;
    } else {
        return false;
    }
}

module.exports = diffBranches;
module.exports.isFileChanged = isFileChanged;
