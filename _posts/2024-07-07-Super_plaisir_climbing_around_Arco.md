---
title: Super plaisir climbing around Arco
tags: Climbing
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---

Einer der Punkte, der bei der Routenauswahl immer im Mittelpunkten steht, ist die Frage nach der Absicherung der Route. Deswegen habe ich in diesem Beitrag für die Umgebbung von Arco alle auf [Bergsteigen.com](https://www.bergsteigen.com/) gelisteten Super-Plaisir-Routen herausgesucht, d.h. Routen, die laut dieser Webseite als **sehr gut** abgesichert gelten.


## Deutsch
Die Gegend um das nördlich vom Gardasee gelegene Arco ist ein Mekka für Kletterer. Rund um Arco gibt es ca. 150 Sportklettergebiete mit vielen Tausend Kletterrouten. Im Frühjahr, meist zwischen März und Anfang, fahre ich seit ein paar Jahren für ein oder zwei lange Wochenenden dorthin, um Mehrseillängen zu klettern. Wenn es keine Staus gibt ist man von Penzberg aus in ca. 3h in Arco.

Wichtig zu beachten: Da viele Routen gar nicht auf der Webseite sind (aber hoffentlich bald, denn die Seite ist toll), ist die Tabelle nicht vollständig. Eine sehr gute Absicherung nichts über die Schönheit der Route aus. Ein Blick auf Kommentare oder die Bewertungen können hier weiterhelfen.


## Routen

{% assign sorted_locations = site.data.super_plaisir_arco | sort: 'location' %}
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
One of the points that is always central when choosing a route is the question of how well the route is protected. In this article, I have therefore selected all the super-plaisir routes listed on [Bergsteigen.com](https://www.bergsteigen.com/) for the Arco area, i.e. routes that are considered **very well** secured according to this website.

The area around Arco, north of Lake Garda, is a mecca for climbers. There are around 150 sport climbing areas around Arco with many thousands of climbing routes. I have been going there for one or two long weekends in spring, usually between March and the beginning of the year, to climb multi-pitch routes. If there are no traffic jams, you can be in Arco from Penzberg in about 3 hours.

Since many routes are not even on the website (but hopefully soon, because the site is great), the table is not complete. Very good protection says nothing about the beauty of the route. A look at the comments or the ratings can help here.
