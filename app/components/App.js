// using older require syntaxt allows us to grab just the tmpl
var AppPage = require('./App.html').template;

// test out RPC
Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

AppPage.helpers({
  userCount: () => {
    return 100;
  },
  postCount: () => 2200,
});
