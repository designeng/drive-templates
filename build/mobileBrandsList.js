module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li class=\"nav-mobile-item\">\n            <a class=\"nav-mobile-item__link\" href=\"/"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"nav-mobile-section\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.brands : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true})