Package.describe({
  name: 'flean:reloader',
  version: '1.3.1',
  summary: 'Fork of original More control over hot code push reloading',
  git: 'https://github.com/flean/reloader',
  documentation: 'README.md'
});

Cordova.depends({
  'cordova-plugin-splashscreen': '5.0.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');

  api.use(['ecmascript',
           'check',
           'underscore',
           'reload',
           'templating',
           'reactive-var',
           'tracker',
           'launch-screen'], 'client');

  api.mainModule('reloader.js', 'web.cordova');
  api.mainModule('browser.js', 'web.browser');
  //  when testing, uncomment this line:
  // api.mainModule('reloader.js', 'client');

  api.export('Reloader', 'client');
});

// No way to make this only happen onTest
Npm.depends({
  sinon: '1.17.3'
});

Package.onTest(function(api) {
  api.use('flean:reloader', 'client')

  api.use(['ecmascript',
           'underscore',
           'practicalmeteor:mocha'], 'client');

  api.mainModule('reloader-tests.js', 'client');
});
