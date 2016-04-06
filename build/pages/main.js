module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"i clip clip-top\"></div>\n<div id=\"main\">\n    <div id=\"index-top-news\" class=\"top-news-list top-news-list_flipping\">\n        "
    + ((stack1 = ((helper = (helper = helpers.topNews || (depth0 != null ? depth0.topNews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topNews","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n\n    <div id=\"index-op\" class=\"hgr open-page\">\n        <div class=\"hgr open-page-i cf container-mobile\">\n            <div id=\"index-video\">\n                <h3 class=\"index-video-header\">Видео</h3>\n                "
    + ((stack1 = ((helper = (helper = helpers.topVideos || (depth0 != null ? depth0.topVideos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topVideos","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n\n            <div id=\"index-news-list\" class=\"news-list\">\n                "
    + ((stack1 = ((helper = (helper = helpers.mainNews || (depth0 != null ? depth0.mainNews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainNews","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                <div class=\"show-more-link\"><a class=\"index-news-list-more\" href=\"/news/\">Посмотреть больше новостей</a></div>\n                "
    + ((stack1 = ((helper = (helper = helpers.adMobile || (depth0 != null ? depth0.adMobile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"adMobile","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n\n            <div id=\"index-com-news\">\n                <h3>Блоги компаний"
    + ((stack1 = container.invokePartial(partials.ins,depth0,{"name":"ins","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</h3>\n                <ul>\n                    "
    + ((stack1 = ((helper = (helper = helpers.topBlogs || (depth0 != null ? depth0.topBlogs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topBlogs","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"i clip clip-bottom\"></div>\n    <div class=\"spr open-page-bottom\"></div>\n    <script>\n        drv.idxFix();\n    </script>\n    "
    + ((stack1 = ((helper = (helper = helpers.suggestedReading || (depth0 != null ? depth0.suggestedReading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestedReading","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = helpers.adBottom || (depth0 != null ? depth0.adBottom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"adBottom","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>";
},"usePartial":true,"useData":true})