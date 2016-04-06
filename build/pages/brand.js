module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div id=\"main\">\n"
    + ((stack1 = container.invokePartial(partials.backroundSprite,depth0,{"name":"backroundSprite","hash":{"spriteClass":(depth0 != null ? depth0["page-top-shadow"] : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <h1 class=\"brand-header\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + " в России</h1>\n    <div id=\"brand-icons-list\">\n        <input type=\"checkbox\" id=\"expand-mobile-trigger\" class=\"expand-mobile-trigger\">\n        "
    + ((stack1 = ((helper = (helper = helpers.carIcons || (depth0 != null ? depth0.carIcons : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"carIcons","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        <label for=\"expand-mobile-trigger\" class=\"expand-mobile-trigger-label show-more-link\">Показать больше моделей</label>\n    </div>\n"
    + ((stack1 = container.invokePartial(partials.backgroundSprite,depth0,{"name":"backgroundSprite","hash":{"spriteClass":(depth0 != null ? depth0["open-page-top"] : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div id=\"brand-op\" class=\"hgr open-page\">\n        <div class=\"hgr open-page-i container-mobile cf\">\n            <div class=\"i clip clip-top\"></div>\n            <h1 class=\"brand-header-mobile\">Новости "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n            <div id=\"brand-news-list\" class=\"news-list\">\n                "
    + ((stack1 = ((helper = (helper = helpers.newsItems || (depth0 != null ? depth0.newsItems : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"newsItems","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div id=\"brand-td-list\" class=\"top-news-list\">\n		        "
    + ((stack1 = ((helper = (helper = helpers.testDrives || (depth0 != null ? depth0.testDrives : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"testDrives","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"i clip clip-bottom\"></div>\n        </div>\n    </div>\n"
    + ((stack1 = container.invokePartial(partials.backgroundSprite,depth0,{"name":"backgroundSprite","hash":{"spriteClass":(depth0 != null ? depth0["open-page-bottom"] : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    "
    + ((stack1 = ((helper = (helper = helpers.dealersList || (depth0 != null ? depth0.dealersList : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"dealersList","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.blogEntriesList || (depth0 != null ? depth0.blogEntriesList : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"blogEntriesList","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <script>\n        drv.brandFix();\n    </script>\n</div>";
},"usePartial":true,"useData":true})