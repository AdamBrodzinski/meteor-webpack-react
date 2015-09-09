// ensure that app is loaded before defining route
import './components/App.html';

// hack to remove loading div, could remove loading in meteor_core
$('#loading').remove();

FlowRouter.route('/', {
    name: "Home", // optional
    action: function(params, queryParams) {
      BlazeLayout.render('layout', {main: "App" });
    },
});

// FlowRouter is now ready to go
FlowRouter.initialize();
