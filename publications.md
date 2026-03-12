---
layout: page
title: Publications
permalink: /publications/
---
Work in progress :)
<!-- A selection of my publications is listed below. For a complete and up-to-date list, please see my [Google Scholar]({{ site.links.google_scholar }}){:target="_blank" rel="noopener"} profile. -->

---

<ol class="pub-list" reversed>
{% for pub in site.data.publications %}
  <li class="pub-item">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-venue">{{ pub.journal }}, {{ pub.year }}</div>
    <div class="pub-links">
      {% if pub.arxiv %}<a href="https://arxiv.org/abs/{{ pub.arxiv }}" target="_blank" rel="noopener">arXiv</a>{% endif %}
      {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
      {% if pub.pdf %}<a href="{{ pub.pdf }}" target="_blank" rel="noopener">PDF</a>{% endif %}
    </div>
  </li>
{% endfor %}
</ol>
