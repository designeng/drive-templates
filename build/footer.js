require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"page-footer\">\n    <div class=\"spr footer-spacer-mobile\"></div>\n    <span class=\"footer-copyright\">© 2005–"
    + container.escapeExpression(((helper = (helper = helpers.currentDate || (depth0 != null ? depth0.currentDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currentDate","hash":{},"data":data}) : helper)))
    + " ООО «Драйв», свидетельство о регистрации СМИ №ФС77-27653&nbsp;&nbsp;&nbsp;16+</span><br>\n    <div class=\"viewport-switcher\" data-viewport=\"desktop\" id=\"mobile-switcher\">Полная версия сайта</div>\n    <div class=\"noprint footer-navigation\">\n        <ul>\n            <li><a href=\"/about\">О Драйве</a></li>\n            <li><a href=\"/ad\">Размещение рекламы</a></li>\n            <li><a href=\"/d2b\">Драйв для бизнеса</a></li>\n            <li><a href=\"/rewrite\">Перепечатка материалов</a></li>\n            <li><a href=\"/moderation\">Политика модерации</a></li>\n            <li><a href=\"/feedback\">Обратная связь</a></li>\n            <li><a href=\"#\" data-viewport=\"mobile\" id=\"desktop-switcher\" class=\"viewport-switcher\">Мобильная версия</a></li>\n        </ul>\n        Читайте ДРАЙВ в <a href=\"http://eepurl.com/bPK1R9\" onclick=\"window.open('http://eepurl.com/bPK1R9', 'popupwindow', 'scrollbars=yes,width=550,height=520');return false\">почте</a>, <a href=/export/rss.xml>через RSS</a>,\n        <a href=\"https://www.facebook.com/drive.ru\">в Фейсбуке</a>, <a href=\"https://twitter.com/DriveRussia/\">в Твиттере</a>, <a href=\"https://plus.google.com/+DriveRussia\" rel=\"publisher\">в Google+</a> или <a href=https://www.yandex.ru/?add=12217>в Яндексе</a>.\n    </div>\n</div>";
},"useData":true})