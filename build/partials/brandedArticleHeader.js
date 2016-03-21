module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\"/company/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.id : stack1), depth0))
    + ".html\"><img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.logoUrl : stack1), depth0))
    + "\" itemprop=\"image\" width=\"100\" height=\"100\"></a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <a href=\"/company/"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.id : stack1), depth0))
    + ".html\"><img src=\"/images/default/company-pic.jpg\" itemprop=\"image\" width=\"100\" height=\"100\"></a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"article-date\">\n        "
    + container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time","hash":{},"data":data}) : helper)))
    + "\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"article-company-pic\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.logo : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = container.invokePartial(partials.articleTitle,depth0,{"name":"articleTitle","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true})