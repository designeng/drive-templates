module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span itemprop=\"author\" class=\"reviewer\">"
    + container.escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"author","hash":{},"data":data}) : helper)))
    + "</span>,\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"meta\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.author : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + ". "
    + alias4(((helper = (helper = helpers.photoCredits || (depth0 != null ? depth0.photoCredits : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoCredits","hash":{},"data":data}) : helper)))
    + "\n</div>";
},"useData":true})