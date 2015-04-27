module.exports = function(grunt){

  grunt.initConfig({
  watch: {
    scripts: {
      files: ['lib/*.js'],
      tasks: ['jshint'],
      options: {
        spawn: false,
      },
    },
  },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'jasmine']);

  grunt.loadNpmTasks('grunt-contrib-jasmine');

};
