---
title: Super plaisir climbing around Arco
tags: Climbing
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---

Eine der Fragen, die bei der Routenauswahl immer im Mittelpunkten stehen, ist die Absicherung der Route. Deswegen habe ich in diesem Beitrag alle auf [Bergsteigen.com](https://www.bergsteigen.com/) gelisteten Super-Plaisir-Routen herausgesucht, d.h. Routen, die laut der Webseite als **sehr gut** abgesichert gelten.


## Deutsch
Die Gegend um das nördlich vom Gardasee gelegene Arco ist ein Mekka für Kletterer. Rund um Arco gibt es ca. 150 Sportklettergebiete mit vielen Tausend Kletterrouten. Im Frühjahr, meist zwischen März und Anfang, fahre ich seit ein paar Jahren für ein oder zwei lange Wochenenden dorthin, um Mehrseillängen zu klettern. Wenn es keine Staus gibt ist man von Penzberg aus in ca. 3h in Arco.

Da viele Routen gar nicht auf der Webseite sind (aber hoffentlich bald, denn die Seite ist toll), ist die Tabelle nicht vollständig. Eine sehr gute Absicherung nichts über die Schönheit der Route aus. Ein Blick auf Kommentare oder die Bewertungen können hier weiterhelfen.


## Routen

{% assign sorted_locations = site.data.well_secured_routes_arco | sort: 'location' %}
{% for location in sorted_locations %}
### {{ location.location }}

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Schwierigkeit</th>
      <th>Länge</th>
      <th>Ausrichtung</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_routes = location.routes | sort: 'difficulty' %}
    {% for route in sorted_routes %}
    <tr>
      <td><a href="{{ route.url }}" target="_blank">{{ route.title }}</a></td>
      <td>{{ route.difficulty }}</td>
      <td>{{ route.length }}</td>
      <td>{{ route.orientation }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% endfor %}


## English (DeepL)
One of the questions that is always at the center of route selection is the protection of the route. In this article, I have therefore selected all the super-plaisir routes listed on [Bergsteigen.com](https://www.bergsteigen.com/), i.e. routes that are considered **very well** secured according to the website.

The area around Arco, north of Lake Garda, is a mecca for climbers. There are around 150 sport climbing areas around Arco with many thousands of climbing routes. I have been going there for one or two long weekends in spring, usually between March and the beginning of the year, to climb multi-pitch routes. If there are no traffic jams, you can be in Arco from Penzberg in about 3 hours.

Since many routes are not even on the website (but hopefully soon, because the site is great), the table is not complete. Very good protection says nothing about the beauty of the route. A look at the comments or the ratings can help here.
