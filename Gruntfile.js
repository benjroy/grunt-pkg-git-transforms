'use strict';

module.exports = function (grunt) {

	grunt.loadTasks('tasks');

	grunt.initConfig({
        unshrink: {
            url: /git\+ssh:\/\/git@github.com:benjroy\//
        }
	});
};
