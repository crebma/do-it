define(['backbone', 'app/views'], function(Backbone, Views) {

    var router = {};

    router.DoIt = Backbone.Router.extend({
               
        routes: {
            'home': 'home',
            'login': 'login',
            '*catchAll': 'home'
        },

        home: function() {
            new Views.Home().render();
        },

        login: function() {
            new Views.Login().render();
        }

    });

    return router;
});
