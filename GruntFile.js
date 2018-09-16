// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      // for stylesheets, watch css and sass files
      // only run sass and cssmin stylesheets:
      files: ['src/assets/css/*'],
      tasks: ['sass', 'cssmin']
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/assets/styles/scss/',
          src: ['**/*.scss'],
          dest: 'src/assets/styles/css/',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/assets/styles/css',
          src: ['*.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },


    // all of our configuration will go here

  });

  grunt.registerTask('default', ['watch']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
