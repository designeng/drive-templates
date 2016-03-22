module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.wideImage : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "        <div class=\"afigure afigure-hd afigure-main cf\">\n            <div class=\"afigure-pic\">\n                "
    + ((stack1 = ((helper = (helper = helpers.headerImage || (depth0 != null ? depth0.headerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                <div class=\"spr\"></div>\n            </div>\n            <div class=\"afigure-title\">\n"
    + ((stack1 = container.invokePartial(partials.articleTitle,depth0,{"name":"articleTitle","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.articleMeta,depth0,{"name":"articleMeta","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"afigure-caption\">\n                <p>\n                    "
    + container.escapeExpression(((helper = (helper = helpers.headerImageDescription || (depth0 != null ? depth0.headerImageDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImageDescription","hash":{},"data":data}) : helper)))
    + "\n                </p>\n            </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "        <div class=\"article-header\">\n"
    + ((stack1 = container.invokePartial(partials.articleTitle,depth0,{"name":"articleTitle","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            <table class=\"afigure-main-sd\">\n                <tr>\n                    <td rowspan=\"2\" class=\"afigure-main-sd-pic\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.headerImage || (depth0 != null ? depth0.headerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                    </td>\n                    <td class=\"afigure-main-sd-title\">\n"
    + ((stack1 = container.invokePartial(partials.articleMeta,depth0,{"name":"articleMeta","data":data,"indent":"                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                    </td>\n                </tr>\n                <tr>\n                    <td class=\"afigure-main-sd-caption\">\n                        <div class=\"afigure-main-sd-caption-i\">\n                            <p>\n                                "
    + container.escapeExpression(((helper = (helper = helpers.headerImageDescription || (depth0 != null ? depth0.headerImageDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImageDescription","hash":{},"data":data}) : helper)))
    + "\n                            </p>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.articleTitle,depth0,{"name":"articleTitle","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"article-date\">"
    + container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return container.escapeExpression(((helper = (helper = helpers.debug || (depth0 != null ? depth0.debug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"debug","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headerImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true})