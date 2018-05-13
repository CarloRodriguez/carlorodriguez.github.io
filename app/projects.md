---
layout: default
---

<div class="card-wrapper">
<!-- This loops through the paginated posts -->
{% for post in site.posts %}
    {% if post.tags contains "projects" %}
      <paper-card class="custom"
	      {% if post.image %}
		  image="{{ site.baseurl }}/images/posts/{{ post.image }}"
	      {% endif %}>
	<div class="card-content">
	  <div class="title">{{ post.title }}</div>
	  {% include author-byline.html %}
	  <!--<div class="subtitle">{{ post.date | date: '%Y %B %-d' }}</div>-->
	  {{ post.excerpt }}
	</div>
	<div class="card-actions">
	  <a href="{{ site.baseurl }}{{ post.url }}"><paper-button>Read More</paper-button></a>
	</div>
      </paper-card>
    {% endif %}
{% endfor %}
</div>

