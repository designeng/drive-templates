module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"top-news-item ncard ncard-big "
    + alias4(((helper = (helper = helpers.shadowClass || (depth0 != null ? depth0.shadowClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shadowClass","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"image-wrapper image-wrapper_big\">\n        <img class=\"top-news-item__image\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"460\" height=\"260\" alt=\"\">\n    </div>\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","hash":{"spriteClass":(depth0 != null ? depth0.vgr : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <strong class=\"top-news-item__caption\">\n        "
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </strong>\n"
    + ((stack1 = container.invokePartial(partials.ins,depth0,{"name":"ins","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>";
},"usePartial":true,"useData":true})