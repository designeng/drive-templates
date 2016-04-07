```js
// ===================== pageWrapper (carcass) ========================

@provide({endpoint: '/static/cities'})
citySelector()

header({
    ~ topControls,
    ~ logo,
    ~ citySelector,
    ~ nav
});

@provide({endpoint: '/static/brands'})
brandsList()

body({
    ~ mobileMenuTrigger,
    ~ header,
    ~ mobileNav,
    ~ additionalNav,
    ~ brandsList,
    ~ page,
    ~ footer
})

footer()

+ {{{ backgroundSprite }}}
+ {{{ bottomScripts }}}

// ===================== / pageWrapper (carcass) ========================

// ===================== pageContent ========================

@provide({endpoint: '/items/top_stories#topNews'})
topNews(~ itemLarge, 2, ~ itemMedium, 4)


@provide({endpoint: '/items/top_stories#mainNews'})
mainNews(~ itemCompact, 9)


@provide({endpoint: '/items/top_videos'})
topVideos(~ videoThumbnail, 4)


@provide({endpoint: '/items/top_blogs'})
topBlogs()

// html -> x -> x
@provide({endpoint: '/content/numbers'})
suggestedReading(invariant)


composeToHtml(~ pageContent)(
    ~ topNews,
    ~ mainNews,
    ~ topVideos,
    ~ topBlogs,
    ~ suggestedReading
)

// ======================= / pageContent ======================
```
