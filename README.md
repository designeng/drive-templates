# Набор Handlebars-шаблонов для новой версии drive.ru

## Основные
* carcass — каркас сайта (корневой тег HTML + общие контейнеры)
* head — весь тег head вместе со стилями, скриптами и meta-тегами
* body - весь тег body

## Страницы
* pages/main — главная страница
* pages/news — развернутый список новостей (по бренду или общий)
* pages/testDrives — страница раздела «Наши тест-драйвы»
* pages/videos — статья раздела «Наши видео»
* pages/brand — страница бренда
* pages/article — страница статьи
** partials/articleHeader

## Блоки (используются на разных страницах)
### Служебные
* keywords — шаблон тега `<meta name="keywords">`
* description — шаблон тега `<meta name="description">`
* bottomScripts — скрипты, подключаемые в `body`

### Элементы списков
* itemLarge — большое превью материала
* itemMid — среднее превью материала
* itemCompact — маленькое превью материала
* itemPlain — превью материала без картинки
* carIcon — иконка модели машины
* dealersItem — элемент списка дилеров для бренда
* testDrivePlaceholderMedium — заглушка «Скоро здесь появится новый тест-драйв» среднего размера
* videoThumbnail — превью видео
* blogEntry — анонс записи в блоге

### Контролы
* brandFilter — список производителей машин в виде селекта

### Элементы каркаса
* header — шапка сайта
* logo — логотип
* nav — главное меню
* mobileNav — меню для мобильных
* additionalNav — дополнительные пункты меню
* topControls — логин, выход, поиск
* mobileMenuTrigger — «гамбургер» для мобильного меню и скрытый чекбокс
* footer — футер сайта

### Контейнеры и элементы страниц
* suggestedReading — статический блок «Что еще почитать»
* brandsList — список производителей машин в виде меню
* mobileBrandsList — список производителей машин в виде меню (отдельный блок для мобильной версии)
* dealersList — контейнер для списка дилеров
* blogEntriesList — контейнер для списка записей в блогах
* showMore — блок «Показать больше»
* showMore — блок «Показать больше» для мобильных устройств

### Часто используемые статические блоки
* delimiter — разделитель между превью
* sprContainer — тень внизу сайта
