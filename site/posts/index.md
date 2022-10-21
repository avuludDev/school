---
pageTitle: Новини
pageDesc: Тут усі новини
---
<div class="news">
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