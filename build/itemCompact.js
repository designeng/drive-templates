require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.brandUrl : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <strong class=\"news-item-caption__category\">\n                    <a href=\""
    + alias4(((helper = (helper = helpers.brandUrl || (depth0 != null ? depth0.brandUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.brandName || (depth0 != null ? depth0.brandName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandName","hash":{},"data":data}) : helper)))
    + "</a>\n                </strong>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.time : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <strong class=\"news-item-caption__category\">"
    + container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time","hash":{},"data":data}) : helper)))
    + "</strong>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"nncard news-item\">\n    <a class=\"news-item-link\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"news-item-link__image\" data-action=\"zoom\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"115\" height=\"67\" alt=\"\">\n        <span class=\"news-item-link__click-area\"></span>\n    </a>\n    <div class=\"header news-item-caption\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.brandName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        <h4 class=\"news-item-caption__text\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n    </div>\n</div>";
},"useData":true})