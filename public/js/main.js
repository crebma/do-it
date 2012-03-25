require.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: 'ext/underscore-min',
        backbone: 'ext/backbone-min'
    },
    priority: ['jquery']
});

require(['jquery', 'app/router'], function($, Router) {
    $(function() {        
        new Router.DoIt();
    });
});
