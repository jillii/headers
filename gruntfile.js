module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      sass: {
        files: "./src/styles/**/*.sass",
        tasks: "sass:dev"
      }
    },
    sass: {
      dev: {
        files: {
          "dist/css/main.css": "src/styles/**/*.sass"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);
};