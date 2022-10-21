---
layout: layout.liquid
pageTitle: Головна сторінка
---
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/img/slider-1.jpg"></div>
    <div class="swiper-slide"><img src="/img/slider-2.jpg"></div>
    <div class="swiper-slide"><img src="/img/slider-3.jpg"></div>
  </div>
  <div class="swiper-pagination"></div>
</div>
<div class="news">
<h2 class="news-header">Новини</h2> 
<div class="post-block">
{% for post in collections.posts %}
<div class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
    <p>{{ post.data.pageDesc }}</p>
    {% if post.data.imgUrl %}
<img src="/img/{{post.data.imgUrl}}">
    {% else %}
<img src="/img/logo.svg">
    {% endif %}
<em>{{ post.date | date: "%Y-%m-%d" }}</em>
</div>
{% endfor %}
</div>
</div>
<div class="fb-news">
    <h3>Ми у Facebook</h3>
    <div class="fb-posts">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid036FHxnfMnRd79JKvwgUMBPwFGxMuoJ2q7ieZFRtVKi3r9bkRDHRsQbvu4iX3xZ8Xql%26id%3D100054600962803&width=350&show_text=true&height=350&appId" width="350" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0E5cJCCrZJjsw4TQkCqjD6v5F1YvakdTgT5dxacL51m1MsJain1BuDVx1DFATMFLjl%26id%3D100054600962803&width=350&show_text=true&height=623&appId" width="350" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Dn8pwn6cmUHMRLpajBMuhzaFf8v4856zKauuWFtbRYX8xtGGVuYFUrwVBtuNA8HUl%26id%3D100054600962803&show_text=true&width=350" width="350" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0UJoQfZde52B8UicZETHMSWjsDUL4nbao3szJDP1widLxqbsCvgcqBfBQdeEVjb55l%26id%3D100054600962803&show_text=true&width=350" width="350" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
</div>
