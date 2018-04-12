module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            js: {
                src: ['../js/main.js'],
                dest: '../dist/app.js'
            },
            options: {
               browserifyOptions: {
                  paths: ["./node_modules"]
               }
            }
          },
        
        jshint: {
            files: ['../js/**/*.js'], //location of javascript files
            options: {
                predef: ["document", "console", "$", "strict"], //allows for predefined things not found in js
                esnext: true, //allows for ES6 
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        
        sass: { //setup sass compilation
            dist: {
                files: {
                    '../styles/main.css': '../scss/in.scss',
                    '../styles/blog.css': '../scss/blog.scss',
                    '../styles/**/*.css': '../scss/**/*.scss',

                }
            }
        },
        
        watch: { //automatically watch for changes
            javascripts: {
                files: ['../js/**/*.js'],
                tasks: ['jshint']
            },
            
            sass: {
                files: ['../scss/**/*.scss'],
                tasks: ['sass']
            },
            
            browserify: {
                files: ['../js/**/*.js'],
                tasks: ['browserify']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};