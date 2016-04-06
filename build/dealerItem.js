module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"ccard-pic\">\n            <a href=\"/company/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"100\" height=\"100\">\n            </a>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"ccard-pic\">\n            <a href=\"/company/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">\n                <img src=\"/images/default/company-pic.jpg\" width=\"100\" height=\"100\">\n            </a>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ccard\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    <div class=\"ccard-caption\">\n        <a href=\"/company/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">"
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n    <div class=\"ccard-info\">\n        "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n        <br>\n        г. "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.name : stack1), depth0))
    + ", "
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + "\n        <br>\n    </div>\n    <div class=\"ccard-more\">\n        <a href=\"/company/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">Больше информации</a>\n    </div>\n</div>";
},"useData":true})