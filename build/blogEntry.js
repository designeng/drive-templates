{"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li>\n        <a class=\"index-com-news-caption\" href=\"/company/"
    + alias3(((helper = (helper = helpers.companyUrl || (depth0 != null ? depth0.companyUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyUrl","hash":{},"data":data}) : helper)))
    + ".html\">"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</a><br>\n        "
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.brandUrl : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li>\n            <a class=\"index-com-news-caption\" href=\"/"
    + alias3(((helper = (helper = helpers.brandUrl || (depth0 != null ? depth0.brandUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brandUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brand","hash":{},"data":data}) : helper)))
    + "</a><br>\n            "
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.company : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true}