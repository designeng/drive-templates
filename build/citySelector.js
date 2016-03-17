module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li data-value=\""
    + alias2(alias1((depth0 != null ? depth0.code : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"city\" data-action=\"citysel.show\" title=\"Выберите город\">\n    <span>Москва</span>\n    <i class=\"i\"></i>\n</div>\n<div id=\"city-sel\" style=\"display: none;\">\n    <i class=\"i\" data-action=\"citysel.close\" title=\"Закрыть\"></i>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n<script>new drv.City;</script>";
},"useData":true})