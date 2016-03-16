{"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.brandUrl : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <strong class=\"news-item-caption__category\">\n                    <a href=\""
    + alias3(((helper = (helper = helpers.brandUrl || (depth0 != null ? depth0.brandUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brandUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.brandName || (depth0 != null ? depth0.brandName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brandName","hash":{},"data":data}) : helper)))
    + "</a>\n                </strong>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.time : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "                <strong class=\"news-item-caption__category\">"
    + this.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</strong>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"nncard news-item\">\n    <a class=\"news-item-link\" href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"news-item-link__image\" data-action=\"zoom\" src=\""
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"115\" height=\"67\" alt=\"\">\n        <span class=\"news-item-link__click-area\"></span>\n    </a>\n    <div class=\"header news-item-caption\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.brandName : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        <h4 class=\"news-item-caption__text\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n    </div>\n</div>";
},"useData":true}