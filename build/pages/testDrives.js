module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.brand : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div id=\"main\" class=\"cf\">\n    <div class=\"spr page-top-shadow\"></div>\n    "
    + ((stack1 = ((helper = (helper = helpers.brandFilter || (depth0 != null ? depth0.brandFilter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandFilter","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <h1 class=\"test-drives-header\">\n        Тест-драйвы\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.brand : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </h1>\n    <div class=\"testdrives\">\n        <div class=\"spr open-page-top\"></div>\n        <div class=\"hgr open-page\">\n            <div class=\"hgr open-page-i cf top-news-list\">\n                <div class=\"i clip clip-top\"></div>\n                "
    + ((stack1 = ((helper = (helper = helpers.testDrives || (depth0 != null ? depth0.testDrives : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testDrives","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                <div id=\"testdrives-all\" class=\"testdrives-all-mobile\" style=\"display: none;\">\n                    "
    + ((stack1 = ((helper = (helper = helpers.testDrivesMore || (depth0 != null ? depth0.testDrivesMore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testDrivesMore","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n                <div class=\"i clip clip-bottom\"></div>\n            </div>\n        </div>\n        <div class=\"spr open-page-bottom\"></div>\n    </div>\n    "
    + ((stack1 = ((helper = (helper = helpers.showMoreButton || (depth0 != null ? depth0.showMoreButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showMoreButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>";
},"useData":true})