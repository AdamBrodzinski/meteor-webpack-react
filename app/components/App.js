import {AppPage} from './App.html';

// test out RPC
Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

Template.App.helpers({
  userCount: () => {
    return 100;
  },
  postCount: () => {
    return 2200;
  },
});
