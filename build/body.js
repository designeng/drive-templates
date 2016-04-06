module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return ((stack1 = ((helper = (helper = helpers.adTop || (depth0 != null ? depth0.adTop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"adTop","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<div class=\"spr container-t\"></div>\n<div class=\"hgr container-c site-wrapper-mobile\">\n    "
    + ((stack1 = ((helper = (helper = helpers.mobileMenuTrigger || (depth0 != null ? depth0.mobileMenuTrigger : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mobileMenuTrigger","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.mobileNav || (depth0 != null ? depth0.mobileNav : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mobileNav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.additionalNav || (depth0 != null ? depth0.additionalNav : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"additionalNav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <div id=\"container\" class=\"hgr wrapper-mobile\">\n        "
    + ((stack1 = ((helper = (helper = helpers.brandsList || (depth0 != null ? depth0.brandsList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandsList","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = ((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.backroundSprite,depth0,{"name":"backroundSprite","hash":{"spriteClass":(depth0 != null ? depth0["container-b"] : depth0)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.bottomScripts || (depth0 != null ? depth0.bottomScripts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bottomScripts","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"usePartial":true,"useData":true})