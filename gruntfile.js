var grunt = require('grunt');

grunt.initConfig({
    watch: {
      files: 'project/public/styl/*.styl',
      tasks: ['stylus'],
      options: {},
      livereload: {
        options: {
          livereload: true
        },
        files: [
            'project/public/css/app.css'
        ]
      },
    },
    stylus: {
      compile: {
        options: {
          paths: ['stylus'],
          import: [
            'nib/*'
          ]
        },
        files: {
          'project/public/css/app.css': 'project/public/styl/app.styl',
        },
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            '*.php',
            '**/*.php'
          ]
        },
        options: {
            port: 8000,
            watchTask: true,
            server: {
              baseDir: "./"
            }
        }
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-newer');

grunt.registerTask('default', ['browserSync', 'watch']);
