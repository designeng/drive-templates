module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\n<html class=\""
    + container.escapeExpression(((helper = (helper = helpers.htmlClass || (depth0 != null ? depth0.htmlClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlClass","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + ((stack1 = ((helper = (helper = helpers.head || (depth0 != null ? depth0.head : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"head","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <body>\n        "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </body>\n</html>";
},"useData":true})