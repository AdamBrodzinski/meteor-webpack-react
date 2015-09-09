// using older require syntaxt allows us to grab just the tmpl
var AppPage = require('./App.html').template;
import {Users, Posts} from '../collections';

// test out RPC
Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

AppPage.helpers({
  userCount: () => {
    return Users.find().fetch().length;
  },
  postCount: () => Posts.find().fetch().length,
});
