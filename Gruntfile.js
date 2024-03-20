module.exports = function(grunt) {
  grunt.initConfig({
      sass: {
          dist: {
              files: {
                  'dist/css/styles.css': 'src/scss/styles.scss'
              }
          }
      },
      copy: {
          main: {
              files: [
                  {expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/'},
                  {expand: true, cwd: 'src/js/', src: ['script.js'], dest: 'dist/js/'}
              ]
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass', 'copy']);
};
