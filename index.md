---
layout: home
title: Home
permalink: /
---

<div class="home-profile">
  <img src="{{ site.profile.photo | relative_url }}" alt="Photo of {{ site.profile.name }}" class="profile-photo" onerror="this.style.display='none'">
  <div class="home-intro">
    <h1>{{ site.profile.name }}</h1>
    <p class="subtitle">{{ site.profile.title }}</p>
    <p class="affiliation">{{ site.profile.affiliation }}</p>
  </div>
</div>

{{ site.profile.description }}

My work combines sub-millimeter and infrared polarimetric observations with statistical analysis to probe the role and morphology of magnetic fields in the high lattitude clouds. I am particularly interested in understanding how dust grain alignment mechanisms shape the polarization patterns we observe in molecular clouds.

<ul class="home-links">
  <li><a href="{{ site.links.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a></li>
  <li><a href="{{ site.links.github }}" target="_blank" rel="noopener">GitHub</a></li>
  <li><a href="{{ site.links.orcid }}" target="_blank" rel="noopener">ORCID</a></li>
  <li><a href="{{ site.links.cv | relative_url }}">CV</a></li>
  <li><a href="{{ site.links.email }}">Email</a></li>
</ul>
