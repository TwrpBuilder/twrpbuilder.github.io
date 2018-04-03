---
layout: post
lang: Türkçe
title: Blog
permalink: tr/blog
update: 03/04/2018
---
{% assign translate = site.data.translations.lang[page.lang] %}

<div id="blogPosts">
    {% for post in site.posts %}
    {% if post.lang == page.lang %}
    <article>
        {% if post.image %}
         <a href="#" class="image"><img src="images/{{post.image}}" alt="" /></a>
        {% endif %}
        <a href="{{post.url}}"><h2>{{ post.title }}</h2></a>
        <p> {{ post.content | strip_html | truncatewords:25 }} </p>
        <span>Author:</span> {% if post.author %} <em>{{post.author}}</em> {% else %} <em>Admin</em> {% endif %}
        <ul class="actions align-right">
        </ul>
    </article>
    {% endif %}
    {% endfor %}
</div>
<p style="text-align: right; margin-top: 5%">{{translate.reachedfirstpost}}</p>