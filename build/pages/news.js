module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div id=\"main\" class=\"cf\">\n    <div class=\"spr page-top-shadow\"></div>\n    <h1 class=\"page-header\">\n        Новости\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.brand : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </h1>\n    "
    + ((stack1 = ((helper = (helper = helpers.adTeaser || (depth0 != null ? depth0.adTeaser : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"adTeaser","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <div class=\"col-1\">\n        <div class=\"nncard-list news-list\">\n            "
    + ((stack1 = ((helper = (helper = helpers.newsItems || (depth0 != null ? depth0.newsItems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newsItems","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</div>";
},"useData":true})