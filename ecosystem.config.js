  module.exports = {
    apps: [{
      name: 'meucad-frontend',
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        TOKEN: '',
      },
    }],
  };
  