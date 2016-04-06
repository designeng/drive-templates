module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"vidcard\">\n    <span class=\"thumb\">\n        <img class=\"thumb__image\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"236\" alt=\"\">\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </span>\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","hash":{"spriteClass":(depth0 != null ? depth0.ii : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <strong class=\"vidcard-caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</strong>\n</a>";
},"usePartial":true,"useData":true})