module.exports = require('handlebars').template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"nav\">\n    <ul class=\"spr nav-menu\">\n        <li><a href=\"/drive-tests\">Наши<br> тест-драйвы</a></li>\n        <li><a href=\"/companies\">Каталог<br> компаний</a></li>\n        <li><a href=\"/video\">Наши<br> видео</a></li>\n        <li><a href=\"/talk\">Форумы<br> и комментарии</a></li>\n        <li><a href=\"//www.drive2.ru\">Сообщество<br>DRIVE2</a></li>\n        <li class=\"nav-arr\" data-action=\"topnav.misc\" style=\"margin-right: -10px;\">\n            <span>\n"
    + ((stack1 = container.invokePartial(partials.sprite,depth0,{"name":"sprite","hash":{"spriteClass":(depth0 != null ? depth0.arr : depth0)},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </span>\n        </li>\n    </ul>\n</div>";
},"usePartial":true,"useData":true})