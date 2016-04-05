# Набор Handlebars-шаблонов для новой версии drive.ru

Коллекция шаблонов, вырезанных из PHP-кода старого drive.ru, которые с помощью серверного рендеринга на новом drive.ru превращаются в строительные блоки для сайта. Шаблоны разделены на группы: каркасы страниц и блоки.

_Основные шаблоны_ — это элементы верхнего уровня: `<html>`, `<head>` и `<body>` и верстка внутри них, которая неизменна для всего сайта.

_Каркасы страниц_ содержат в себе структуру основных разделов — главной страницы, страницы брендов, статей и т. д.

_Блоки_ представляют собой фрагменты верстки, встречающиеся в одном или в нескольких местах сайта. Это могут быть крупные части страниц (например, заголовок и следующая за ним секция), или небольшие повторяющиеся элементы (анонсы новостей, превью видео, иконки машин и так далее). Результат рендеринга одних блоков может вставляться в другие (например, список дилеров машин в соответствующую секцию на странице бренда).

Данные для шаблонов можно получить через [API drive.ru](http://dev.drive.ru/docs/transition_api.html).

## Codestyle
В Handlebars expression может указываться либо имя поля в JSON, например `{{brand.id}}` или `{{caption}}`, вместо которого при рендеринге подставляется значение этого поля, либо плейсхолдер, который будет заменен на результат рендеринга другого JSON, например `{{{newsItems}}}`. Тройные фигурные скобки в Handlebars используются для вывода HTML без экранирования тегов.

Иногда удобно использовать Handlebars partials (`{{> foo}}`) — это вызов другого шаблона без изменения контекста (контекст можно менять, но по умолчанию он остается прежним). Как partials оформляются части больших структур — для читаемости кода — например, шапка статьи, а также небольшие часто встречающиеся фрагменты верстки, не зависящие от данных (например, тени). Крупные куски статики, присутствующие на сайте только в одном экземпляре, хранятся в обычных шаблонах и вставляются с помощью `{{{}}}`.

Из helper'ов Handlebars решили ограничиться только `if` и `each`. Подробнее о них можно прочитать в [документации Handlebars](http://handlebarsjs.com/).

Для того, чтобы не запутаться, над теми Handlebars expressions, вместо которых вставляется результат рендеринга другого JSON, в виде комментария указывается URL соответствующего запроса к API, например:

```html
<div id="container">
    {{! /static/brands }}
    {{{brandsList}}}
</div>
```

В данном случае вместо brandsList будет подставлен результат рендеринга JSON, полученного по запросу `/api/v1/static/brands`. Шаблон, используемый для рендеринга, называется так же — `brandsList.hbs` — но это не значит, что для каждого такого референса обязательно должен существовать шаблон с таким же именем. Например, в шаблоне для списка новостей есть похожая структура:

```html
<div class="nncard-list news-list">
    {{! /items/news }}
    {{{newsItems}}}
</div>
```

Но шаблона `newsItems.hbs` не существует, а вместо выражения `{{{newsItems}}}` будет вставлен фрагмент HTML — смешанный список, получившийся из нескольких других шаблонов — `itemLarge.hbs`, `itemMedium.hbs` и `itemCompact.hbs`. Логика, по которой этот список строится, вынесена в рендедер, чтобы не загромождать ей шаблоны.

_TODO: возможно, тут нужно какое-то соглашение об именовании, чтобы не приходилось писать такие объяснения._

## Структура проекта
`/blocks` — все шаблоны и контейнеры
` /pages` — шаблоны страниц
` /partials` — подключаемые шаблоны и часто используемые статические блоки

## Список шаблонов
### Основные
* carcass — каркас сайта (корневой тег HTML + общие контейнеры)
* head — весь тег head вместе со стилями, скриптами и meta-тегами
* body - весь тег body

### Страницы
* pages/main — главная страница
* pages/news — развернутый список новостей (по бренду или общий)
* pages/testDrives — страница раздела «Наши тест-драйвы»
* pages/videos — статья раздела «Наши видео»
* pages/brand — страница бренда
* pages/article — страница материала (статьи, блога, тест-драйва и т. д.)
  * partials/articleHeader — шапка (заголовок, картинка, информация об авторе)
  * partials/brandedArticleHeader — брендированная шапка (например, для поста в блоге компании)
  * partials/articleMeta — информация об авторе и дата публикации
  * partials/articleTitle — заголовок

### Блоки
#### Служебные
* keywords — шаблон тега `<meta name="keywords">`
* description — шаблон тега `<meta name="description">`
* bottomScripts — скрипты, подключаемые в `body`

#### Элементы списков
* itemLarge — большое превью материала
* itemMid — среднее превью материала
* itemCompact — маленькое превью материала
* itemPlain — превью материала без картинки
* carIcon — иконка модели машины
* dealersItem — элемент списка дилеров для бренда
* testDrivePlaceholderMedium — заглушка «Скоро здесь появится новый тест-драйв» среднего размера
* videoThumbnail — превью видео
* blogEntry — анонс записи в блоге

#### Контролы
* brandFilter — список производителей машин в виде селекта

#### Элементы каркаса
* header — шапка сайта
* logo — логотип
* nav — главное меню
* mobileNav — меню для мобильных
* additionalNav — дополнительные пункты меню
* topControls — логин, выход, поиск
* mobileMenuTrigger — «гамбургер» для мобильного меню и скрытый чекбокс
* footer — футер сайта

#### Фрагменты страниц
* suggestedReading — статический блок «Что еще почитать»
* brandsList — список производителей машин в виде меню
* mobileBrandsList — список производителей машин в виде меню (отдельный блок для мобильной версии)
* dealersList — контейнер для списка дилеров
* blogEntriesList — контейнер для списка записей в блогах
* showMore — блок «Показать больше»
* showMore — блок «Показать больше» для мобильных устройств

#### Часто используемые статические блоки (partials с параметрами)
* sprite — спрайт (в параметре `spriteClass` шаблону можно передать класс спрайта, например: `{{> sprite spriteClass=vgr}}`)
* backgroundSprite — на самом деле тоже спрайт, просто чаще используется для фоновых теней (тоже есть параметр `spriteClass`)
* ins — градиент для «журнального разворота»
* hr — горизонтальная линия