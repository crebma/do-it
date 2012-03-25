define(['backbone'], function(Backbone) {

    var router = {};

    router.DoIt = Backbone.Router.extend({
               
        initialize: function(options) {
            ace.edit('latest-sad-code');
            ace.edit('latest-better-code');
        }

    });

    return router;
});
