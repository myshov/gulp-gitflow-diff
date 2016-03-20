var assert = require('assert');
var rewire = require('rewire');

var gulpGitFlowDiff = rewire('../');
gulpGitFlowDiff.__set__({
    process: {
        cwd: function() {
            return '/home/user/dev'
        }
    }
});

describe('gulp-giflow-diff isFileChanged', function() {
    process.cwd = function() {
        return '/home/user/dev'
    };

    it('should return true if there is file in list of changed files', function(done) {
        var fileMocked = {};
        fileMocked.path = '/home/user/dev/src/file33.js';
        var filesChanged = [
            'src/file11.js',
            'src/file22.js',
            'src/file33.js'
        ];
        var result = gulpGitFlowDiff.isFileChanged(fileMocked, filesChanged);
        assert.equal(result, true);
        done();
    });

    it('should return false if there is no file in list of changed files', function(done) {
        var fileMocked = {};
        fileMocked.path = '/usr/home/user/dev/src/file44.js';
        var filesChanged = [
            'src/file11.js',
            'src/file22.js',
            'src/file33.js'
        ];
        var result = gulpGitFlowDiff.isFileChanged(fileMocked, filesChanged);
        assert.equal(result, false);
        done();
    });
});
