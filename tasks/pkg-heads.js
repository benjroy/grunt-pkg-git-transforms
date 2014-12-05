'use strict';

module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');
    grunt.log.ok('pkg', pkg);

    var getDeps = function () {
        grunt.config.requires('unshrink.url');
        var config = grunt.config.get('unshrink');
        grunt.log.ok('config', config);

        var deps = Object.keys(pkg.dependencies).reduce(function (memo, key) {
            var matches = pkg.dependencies[key].match(config.url);
            if (matches) {
                memo[key] = pkg.dependencies[key];
            }
            return memo;
        }, {});
        console.log('deps', deps);

        return deps;
    };

    grunt.registerTask('unshrink', function() {
        var deps = getDeps();
        console.log('getDeps', deps);
        // var modulesToTrack = 
        // var shrinkwrap = grunt.file.readJSON('npm-shrinkwrap.json');

    });
};
