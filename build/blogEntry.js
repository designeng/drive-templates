require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\n        <a class=\"index-com-news-caption\" href=\"/company/"
    + alias4(((helper = (helper = helpers.companyUrl || (depth0 != null ? depth0.companyUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"companyUrl","hash":{},"data":data}) : helper)))
    + ".html\">"
    + alias4(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</a><br>\n        "
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.brandUrl : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li>\n            <a class=\"index-com-news-caption\" href=\"/"
    + alias4(((helper = (helper = helpers.brandUrl || (depth0 != null ? depth0.brandUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + "</a><br>\n            "
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.company : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true})