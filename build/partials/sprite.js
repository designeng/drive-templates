module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"i "
    + container.escapeExpression(((helper = (helper = helpers.spriteClass || (depth0 != null ? depth0.spriteClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"spriteClass","hash":{},"data":data}) : helper)))
    + "\"></i>";
},"useData":true})