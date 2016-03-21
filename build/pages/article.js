module.exports = require('handlebars').template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.brandedArticleHeader,depth0,{"name":"brandedArticleHeader","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.articleHeader,depth0,{"name":"articleHeader","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <span class=\"dropcap\">"
    + container.escapeExpression(((helper = (helper = helpers.dropcap || (depth0 != null ? depth0.dropcap : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"dropcap","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    "
    + ((stack1 = ((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"video","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    "
    + ((stack1 = ((helper = (helper = helpers.lead || (depth0 != null ? depth0.lead : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lead","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-gallery\">\n            <h3>Крупным планом</h3>\n            <div class=\"gallery\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.gallery : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a href=\""
    + alias2(alias1((depth0 != null ? depth0.fullImageUrl : depth0), depth0))
    + ">\" target=\"_blank\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                        <meta itemprop=\"width\" content=\"120\">\n                        <meta itemprop=\"height\" content=\"90\">\n                        <img src=\""
    + alias2(alias1((depth0 != null ? depth0.thumbImageUrl : depth0), depth0))
    + "\" width=\"120\" height=\"90\" itemprop=\"contentUrl\">\n                    </a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"article-commentslink\">\n                <a class=\"article-commentslink-active\" href=\"/talk/comments/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">Комментарии</a> "
    + alias4(((helper = (helper = helpers.commentsCount || (depth0 != null ? depth0.commentsCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentsCount","hash":{},"data":data}) : helper)))
    + "\n            </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"article-commentslink\">\n                <a href=\"/talk/comments/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + ".html\">Комментариев пока нет</a>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"main\" class=\"cf article-main\">\n    <div class=\"spr page-top-shadow\"></div>\n    <div id=\"article\" class=\"article cf hreview\" itemscope itemtype=\"http://schema.org/NewsArticle\">\n        <meta itemprop=\"headline\" content=\""
    + alias4(((helper = (helper = helpers["сaption"] || (depth0 != null ? depth0["сaption"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"сaption","hash":{},"data":data}) : helper)))
    + "\"/>\n        <meta itemprop=\"datePublished\" content=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "\"/>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.id : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <script>\n            var RndNum4NoCash = Math.round(Math.random() * 1000000000);\n            var ar_Tail='unknown'; if (document.referrer) ar_Tail = escape(document.referrer);\n            new Image().src = '//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&bt=21&ad=546039&pid=2143214&bid=4107018&bn=4107018&rnd=<?=rand()?>';\n        </script>\n		<span class=\"description\">\n			<p class=\"lead\" itemprop=\"description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropcap : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lead : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\n		</span>\n        "
    + ((stack1 = ((helper = (helper = helpers.articleContent || (depth0 != null ? depth0.articleContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n    <script>new drv.Article;</script>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gallery : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"article-spacer\" style=\"clear: both; margin: -20px 0; padding: 1px 0 0;\"></div>\n    <div class=\"article-social-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.commentsCount : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"article-vk-widget\">\n            <!-- VK Widget -->\n            <div id=\"vk_subscribe\"></div>\n            <script type=\"text/javascript\">\n                VK.Widgets.Subscribe(\"vk_subscribe\", {mode: 2}, -48156068);\n            </script>\n        </div>\n    </div>\n"
    + ((stack1 = container.invokePartial(partials.hr,depth0,{"name":"hr","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"feedsub\">\n        <div class=\"feedsub-close\" data-action=\"feedsubs.close\">Закрыть</div>\n        <div class=\"feedsub-text\">\n            <a class=\"sbutton sbutton-big sbutton-green feedsub-button\" href=\"http://eepurl.com/bPK1R9\" data-action=\"feedsubs.subs\">Подписаться на рассылку</a>\n            Подпишитесь, чтобы ничего не пропустить. Каждый вечер мы будем присылать вам одно письмо со всеми опубликованными материалами. Просто и удобно.\n        </div>\n"
    + ((stack1 = container.invokePartial(partials.hr,depth0,{"name":"hr","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n    <script>new drv.FeedSubs;</script>\n    <div class=\"article-readmore news-list\">\n        <script id=\"amVlT7V0P8U_ISEh\">if (window.relap) window.relap.ar('amVlT7V0P8U_ISEh');</script>\n    </div>\n</div>";
},"usePartial":true,"useData":true})