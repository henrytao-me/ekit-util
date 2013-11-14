'use strict';

module.exports = function(grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // for test:server task coverage
    // require('blanket')({
    //     // Only files that match the pattern will be instrumented
    //     pattern: '/src/'
    // });

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['libs/js_extend.js', 'node_modules/underscore/underscore-min.js', 'libs/underscore_extend.js', 'libs/Class.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        mochaTest: {
            test: {
                src: ['test/server/*.js'],
                options: {
                    reporter: 'xunit',
                    captureFile: 'test/results/server.xml'
                }
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    // use the quiet flag to suppress the mocha console output
                    quiet: true,
                    // specify a destination file to capture the mocha
                    // output (the quiet option does not suppress this)
                    captureFile: 'test/results/coverage.html',
                },
                src: ['libs/**/*.js', 'index.js', 'test/server/*.js']
            }
        },
        mocha_phantomjs: {
            options: {
                'reporter': 'xunit',
                'output': 'test/results/client.xml'
            },
            all: ['test/client/*.html']
        }
    });

    // Grunt task(s)
    grunt.registerTask('test', function(target) {
        if (target === 'server') {
            return grunt.task.run(['mochaTest']);
        };
        if (target === 'client') {
            return grunt.task.run(['mocha_phantomjs']);
        };
    });

    grunt.registerTask('build', ['uglify']);

    grunt.registerTask('default', ['uglify']);

};