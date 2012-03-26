require.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: 'ext/underscore-min',
        backbone: 'ext/backbone-min'
    },
    priority: ['jquery']
});

require(['jquery', 'backbone', 'app/router'], function($, Backbone, Router) {
    $(function() {       
        new Router.DoIt();
        Backbone.history.start();
    });
});
