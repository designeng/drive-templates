module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.videoItems || (depth0 != null ? depth0.videoItems : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"videoItems","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"article\" class=\"article cf\">\n            К сожалению, для данной марки нет видеороликов.\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"main\" class=\"cf video-list-container\">\n    <div class=\"spr page-top-shadow\"></div>\n    "
    + ((stack1 = ((helper = (helper = helpers.brandFilter || (depth0 != null ? depth0.brandFilter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"brandFilter","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <h1 class=\"video-header\">\n        Видео\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.brand : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.videoItems : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true})