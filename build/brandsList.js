module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li style=\"background-position: 0px "
    + alias2(alias1((depth0 != null ? depth0.backgroundOffset : depth0), depth0))
    + "px;\">\n                    <a class=\"brand\" href=\"/"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n                </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"bnav-w\">\n    <div id=\"bnav\" class=\"bnav hgr\">\n        <ul class=\"bnav-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.brands : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <div class=\"i\"></div>\n    </div>\n</div>\n<script>new drv.Bnav;</script>";
},"useData":true})