module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"nav-mobile\">\n    <div class=\"nav-mobile-content\">\n        <ul class=\"nav-mobile-section\">\n            <li class=\"nav-mobile-item\">\n                <a class=\"nav-mobile-item__link\" href=\"/news\">Новости</a>\n            </li>\n            <li class=\"nav-mobile-item\">\n                <a class=\"nav-mobile-item__link\" href=\"/drive-tests\">Наши тест-драйвы</a>\n            </li>\n            <li class=\"nav-mobile-item\">\n                <a class=\"nav-mobile-item__link\" href=\"/video\">Наши видео</a>\n            </li>\n        </ul>\n        "
    + ((stack1 = ((helper = (helper = helpers.mobileBrandsList || (depth0 != null ? depth0.mobileBrandsList : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"mobileBrandsList","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"useData":true})