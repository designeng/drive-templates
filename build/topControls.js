module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"top\">\n    <div id=\"nav-top\">\n        <ul>\n            <li><a href=\""
    + alias4(((helper = (helper = helpers.loginUrl || (depth0 != null ? depth0.loginUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"loginUrl","hash":{},"data":data}) : helper)))
    + "\">Войти</a></li>\n            <li><a href=\""
    + alias4(((helper = (helper = helpers.signupUrl || (depth0 != null ? depth0.signupUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"signupUrl","hash":{},"data":data}) : helper)))
    + "\">Регистрация</a></li>\n            <li><a href=\"//www.drive2.ru/recovery/\">Забыли пароль?</a></li>\n        </ul>\n        <ul style=\"display: none;\">\n            <li><a id=\"nav-top-user\" href=\"//www.drive2.ru/users/\">user</a></li>\n            <li><a href=\"//www.drive2.ru/my/profile/\">Профиль</a></li>\n            <li><a href=\""
    + alias4(((helper = (helper = helpers.logoutUrl || (depth0 != null ? depth0.logoutUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoutUrl","hash":{},"data":data}) : helper)))
    + "\">Выход</a></li>\n        </ul>\n    </div>\n\n    <script>drv.loginInit();</script>\n\n    "
    + ((stack1 = ((helper = (helper = helpers.specialTitle || (depth0 != null ? depth0.specialTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"specialTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n    <form id=\"site-search\" action=\"/sitesearch/\">\n        <input type=\"text\" name=\"q\"><button class=\"i\" type=\"submit\">Найти</button>\n        <input type=\"hidden\" name=\"cx\" value=\"009724753791916455779:ldzabcymo5c\">\n        <input type=\"hidden\" name=\"ie\" value=\"UTF-8\">\n    </form>\n</div>";
},"useData":true})