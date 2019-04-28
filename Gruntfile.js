'use strict';

module.exports = function (grunt) {

    // Report the task-execution time in the command line
    require('time-grunt')(grunt);
    //require('load-grunt-tasks')(grunt);

    // Task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['dist/*.*']
            }
        },
        copy: {
            build: {
                files: [{
                    cwd: 'src',
                    src: [
                        '*.js',
                        '*.css'
                    ],
                    dest: 'dist',
                    expand: true
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: 'some', // will preserve all comments that start with a bang (!) or include a closure compiler style directive (@preserve)
                mangle: false, // false to prevent changes to your variable and function names.
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'dist/digital-display.min.js': ['dist/digital-display.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        remove_comments: {
            js: {
                options: {
                    multiline: true,
                    singleline: true,
                    keepSpecialComments: false
                },
                cwd: 'dist',
                src: 'digital-display.js',
                expand: true,
                dest: 'dist'
            }
        },
        concat: {
            options: {
                //separator: ';',
            },
            dist: {
                src: ['src/header.txt', 'dist/digital-display.js'],
                dest: 'dist/digital-display.js',
            }
        },
        eslint: {
            options: {
                config: './eslint.json',
                reset: true
            },
            target: ['src/**.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-remove-comments');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask(
        'build',
        'Compiles all of the assets and files to dist directory.',
        //['eslint', 'clean', 'copy', 'remove_comments:js', 'concat', 'uglify', 'cssmin']
        ['clean', 'copy', 'remove_comments:js', 'concat', 'uglify', 'cssmin']
    );

};