require.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        backbone: 'ext/backbone',
        underscore: 'ext/underscore'
    },
    priority: ['jquery']
});

require(['jquery','app/routers'], function($, Routers) {
    $(function() {        
        new Routers.WeatherApp();
    });
});
