// RequireJS config
require.config({
    baseUrl: "js",

    enforceDefine: true,

    // Library (CDN) paths
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
        ],

        // Handlebars template loader and requirements
        hbs: [
            'libs/hbs'
        ],

        handlebars: [
            '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0.beta6/handlebars.min',
            'libs/handlebars-1.0.0.beta6.min'
        ],

        json2: [
            '//cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2',
            'libs/json2'
        ],

        i18nprecompile: 'libs/i18nprecompile'

    },

    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },

        'json2': {
            exports: 'JSON'
        },

        'handlebars': {
            exports: 'Handlebars'
        }
    },

    // Handlebars templates plugin
    hbs: {
        disableI18n: true,        // This disables the i18n helper and
        // doesn't require the json i18n files (e.g. en_us.json)
        // (false by default)

        disableHelpers: true,     // When true, won't look for and try to automatically load
        // helpers (false by default)

        //helperPathCallback:       // Callback to determine the path to look for helpers
        //    function (name) {       // ('/template/helpers/'+name by default)
        //        return 'cs!' + name;
        //    },

        templateExtension: "html" // Set the extension automatically appended to templates
        // ('hbs' by default)
    }
});

require(["jquery", "underscore", "backbone", 'hbs!templates/main'], function ($, _, Backbone, main_template) {
    var main = $('#main');
    var context = {
        world: 'world'
    };

    main.html(main_template(context));
});
