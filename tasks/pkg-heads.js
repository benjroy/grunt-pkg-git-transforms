'use strict';

module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');
    grunt.log.ok('pkg', pkg);

    grunt.registerTask('unshrink', function() {
	    grunt.config.requires('unshrink.url');
	    var config = grunt.config.get('unshrink');
	    grunt.log.ok('config', config);
        var deps = pkg.dependencies;
        var toTrack = Object.keys(pkg.dependencies).reduce(function (memo, key) {
            var matches = deps[key].match(config.url);
            console.log('matches', matches);
            if (matches) {

            }
        }, {});
        // var modulesToTrack = 
        // var shrinkwrap = grunt.file.readJSON('npm-shrinkwrap.json');

    });
};
