module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"brand-company-blog-list\">\n    <h3>Блоги компаний</h3>\n    <ul>\n        "
    + container.escapeExpression(((helper = (helper = helpers.blogsItems || (depth0 != null ? depth0.blogsItems : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"blogsItems","hash":{},"data":data}) : helper)))
    + "\n    </ul>\n</div>";
},"useData":true})