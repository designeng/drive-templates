{"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"news-item ncard "
    + alias3(((helper = (helper = helpers.shadowClass || (depth0 != null ? depth0.shadowClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shadowClass","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"news-item-link\">\n        <img class=\"news-item-link__image\" src=\""
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"230\" height=\"130\">\n    </div>\n    <i class=\"i\"></i>\n    <div class=\"news-item-caption\">\n        <strong class=\"news-item-caption__text\">"
    + alias3(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</strong>\n        <ins></ins>\n    </div>\n</a>";
},"useData":true}