define(['backbone'], function(Backbone) {
   
    var views = {};

    views.Home = Backbone.View.extend({

        el: '.content',

        render: function() {
            this.$el.empty();
            var sourceWrap = $('<div/>').addClass('source-wrap');
            var sadEditorWrapper = $('<div/>').addClass('editor-wrapper left');
            sadEditorWrapper.append('<label for="latest-sad-code">latest sad code</label>');
            var sadEditor = $('<div id="latest-sad-code"/>').addClass('editor vertical source').text('none yet! wip!!');
            sadEditorWrapper.append(sadEditor);
            sourceWrap.append(sadEditorWrapper);

            var betterEditorWrapper = $('<div/>').addClass('editor-wrapper right');
            betterEditorWrapper.append('<label for="latest-better-code">latest better code</label>');
            var betterEditor = $('<div id="latest-better-code"/>').addClass('editor vertical source').text('none yet! wip!!');
            betterEditorWrapper.append(betterEditor);
            sourceWrap.append(betterEditorWrapper);

            this.$el.append(sourceWrap);

            ace.edit('latest-sad-code');
            ace.edit('latest-better-code');
        }

    });

    views.Login = Backbone.View.extend({

        el: '.content',

        events: {
            'click .github-login' : 'auth'
        },

        render: function() {
            this.$el.empty();
            
            var login = $('<div/>');
            login.append('<button class="github-login">sign in with github</button>');

            this.$el.append(login);
        },

        auth: function() {
            window.location = 'http://localhost:3000/auth/github';
        }

    });

    return views;

});