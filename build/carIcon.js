module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"car-icon\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"car-icon-image\">\n        <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\""
    + alias4(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageWidth","hash":{},"data":data}) : helper)))
    + "\" height=\""
    + alias4(((helper = (helper = helpers.imageHeight || (depth0 != null ? depth0.imageHeight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageHeight","hash":{},"data":data}) : helper)))
    + "\">\n    </span>\n    <strong class=\"car-icon-caption\"></strong>\n</a>";
},"useData":true})