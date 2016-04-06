module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <span class=\"news-list-more mobile-hidden\">\n            Посмотреть <a href=\"/news/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">больше новостей</a>\n            или <a href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "/drive-tests\">тест-драйвов "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n        </span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <span class=\"news-list-more desktop-hidden\">\n            <a href=\"/news/"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">Посмотреть больше новостей</a>\n        </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"show-more-link show-more-trigger\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.newsAndTestDrives : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true})