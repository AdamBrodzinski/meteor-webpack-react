/* global FlowRouter, BlazeLayout */

// execute the App.js code
import './components/App.js';
var AppPage = require('./components/App.html').template;

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');

Meteor.startup(() => {
  $("#root").remove(); // remove loading div
  Blaze.render(AppPage, document.body);
});
