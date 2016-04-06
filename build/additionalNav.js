module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"topnav-misc\" class=\"topnav-misc\" style=\"display: none;\">\n    <span data-action=\"topnav.close\">\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","hash":{"spriteClass":(depth0 != null ? depth0.arr : depth0)},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </span>\n    <ul>\n        <li><a href=\"/kunst\">Kunst!</a></li>\n        <li><a href=\"/russia\">Наши дороги</a></li>\n        <li><a href=\"/autosport\">Автоспорт</a></li>\n        <li><a href=\"/spy\">Шпионерия</a></li>\n        <li><a href=\"/business\">Автомобизнес</a></li>\n        <li><a href=\"/technic\">Техника</a></li>\n        <li><a href=\"/talks\">Гостиная</a></li>\n        <li><a href=\"/columns\">Авторские колонки</a></li>\n    </ul>\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true})