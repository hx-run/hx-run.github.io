---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
title: hx-run
---
<div id="home">
{% if site.posts and site.posts.size > 0  %}
  <h1>Research</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endif %}

{% if site.notes and site.notes.size > 0 %}
  <h1>Notes</h1>
  <ul class="posts">
    {% for note in site.notes %}
      <li><span>{{ note.date | date_to_string }}</span> &raquo; <a href="{{ note.url }}">{{ note.title }}</a></li>
    {% endfor %}
  </ul>
{% endif %}

{% if site.projects and site.projects.size > 0 %}
<h1>Projects</h1>
  <ul class="posts">
    {% for project in site.projects %}
      <li><span>{{ project.date | date_to_string }}</span> &raquo; <a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
  </ul>
  
{% endif %}
  <!-- <h1>Projects</h1>
  <ul class="posts">
    <li><a href="http://github.com/jekyll/jekyll/">Jekyll:</a> A simple, blog aware, static site generator (used for this site).</li>
  </ul> -->
</div>

