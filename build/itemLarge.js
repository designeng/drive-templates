{"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"top-news-item ncard ncard-big "
    + alias3(((helper = (helper = helpers.shadowClass || (depth0 != null ? depth0.shadowClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shadowClass","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"image-wrapper image-wrapper_big\">\n        <img class=\"top-news-item__image\" src=\""
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"460\" height=\"260\" alt=\"\">\n    </div>\n    <i class=\"i vgr\"></i>\n    <strong class=\"top-news-item__caption\">\n        "
    + alias3(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper)))
    + "\n    </strong>\n    <ins></ins>\n</a>";
},"useData":true}