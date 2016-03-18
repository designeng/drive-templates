module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<head>\n    <meta charset=\"utf-8\">\n    <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n    <meta name=\"viewport\" content=\"width=1024\" />\n    <meta name=\"SKYPE_TOOLBAR\" content=\"SKYPE_TOOLBAR_PARSER_COMPATIBLE\">\n    <meta name=\"wmail-verification\" content=\"d1a2654abf76071294bfa1b1a33300fd\"/>\n    <meta name=\"mailru-verification\" content=\"e8a22d6eedec5d00\" />\n    <meta name=\"msvalidate.01\" content=\"4C2D75B10152211BAB4BA9C81E152CE6\" />\n    <meta name=\"botify-site-verification\" content=\"FBZeE6J4N2BbVDU3ZOmePrla8aTkRg59\">\n    "
    + ((stack1 = ((helper = (helper = helpers.keywords || (depth0 != null ? depth0.keywords : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keywords","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n    <link rel=\"stylesheet\" href=\"/css/global.css?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\">\n    <link rel=\"stylesheet\" href=\"/css/form.css?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\">\n    <link rel=\"stylesheet\" href=\"/css/likely.css\"/>\n    <link rel=\"stylesheet\" href=\"/css/index.css?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\">\n\n    <link rel=\"alternate\" type=\"application/rss+xml\" title=\"ДРАЙВ\" href=\"//www.drive.ru/export/rss.xml\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/mobile/mobile-reset.css?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/mobile/mobile.css?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\" media=\"screen and (max-device-width: 800px)\" />\n\n    <script src=\"/js/core.js?"
    + alias4(((helper = (helper = helpers.cacheReset || (depth0 != null ? depth0.cacheReset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cacheReset","hash":{},"data":data}) : helper)))
    + "\"></script>\n    <script src=\"/js/likely.js\"></script>\n    <script src=\"/js/async_af.js\"></script>\n    <script src=\"//cdn.optimizely.com/js/4505937734.js\"></script>\n    <script type=\"text/javascript\" src=\"/js/adfox.asyn.code.ver3.js\"> </script>\n    <script type=\"text/javascript\" src=\"/js/adfox.asyn.code.scroll.js\"> </script>\n\n    <script type=\"text/javascript\">\n        drv.toggleViewport();\n    </script>\n</head>";
},"useData":true})