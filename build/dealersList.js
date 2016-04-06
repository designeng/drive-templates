module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<h3 class=\"brand-buy-header\">Купить "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + " у официального дилера в "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n<div class=\"company-list-cards company-list-cards-2col\">\n    "
    + ((stack1 = ((helper = (helper = helpers.dealersItems || (depth0 != null ? depth0.dealersItems : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"dealersItems","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <div>\n        <a href=\"/companies/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "/?city="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><b>Посмотреть "
    + alias2(((helper = (helper = helpers.companiesCount || (depth0 != null ? depth0.companiesCount : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"companiesCount","hash":{},"data":data}) : helper)))
    + "</b></a>\n    </div>\n</div>";
},"useData":true})