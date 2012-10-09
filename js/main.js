// RequireJS config
require.config({
    baseUrl: "js",

    enforceDefine: true,
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
            //If the CDN location fails, load from this location
            'libs/jquery-1.8.2.min'
        ],

        // Use Lo-Dash instead of Underscore
        underscore: [
            '//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.1/lodash.min',
            'libs/lodash-0.8.1.min'
        ],

        backbone: [
            '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
            'libs/backbone-0.9.2.min'
        ]
    },

    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    }   
});

require(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    alert('Everything loaded just fine!');
});
