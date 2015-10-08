module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['dist/**'],
        browserify: {
            dist: {
                debug: true,
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [
                        ['babelify', {
                            loose: 'all'
                        }]
                    ]
                },
                files: {
                    './dist/js/index.js': ['./src/js/*.js', './src/js/**/*.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { src: ['./src/index.html'], dest: './dist/index.html'},
                ],
            },
        },
        watch: {
            scripts: {
                files: ['./src/js/*.js', './src/js/**/*.js'],
                tasks: ['clean', 'copy', 'browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean', 'copy', 'browserify']);
};
