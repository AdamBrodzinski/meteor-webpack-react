/* global FlowRouter, BlazeLayout */

// execute the following even though we're not using variables
import './components/App.js';
import './router';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');
