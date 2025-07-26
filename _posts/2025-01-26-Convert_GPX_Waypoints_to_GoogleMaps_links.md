---
title: GPX-Wegpunkte in Links für Google Maps und Apple Maps umwandeln
tags: Programming
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---


Mit diesem [R-Skript](https://github.com/matmu/gpx-toolbox/blob/main/gpx2maps_url.R) kann man Wegpunkte im GPX-Format in Links zu Google Maps oder Apple Maps umwandeln und diese in eine Excel-Datei schreiben lassen. Meine Eltern, seit 10 Jahren begeisterte Wohnmobilisten, verwenden Excel-Datei auf ihrem Handy, um auf ihrer Wohnmobilreise zu den Spots zu navigieren, die in den Führern [womo.de](https://www.womo.de/) beschrieben werden.


# Deutsch
Dieses Jahr werden meine Eltern mit dem Wohnmobil Sizilien bereisen. Zur Navigation soll Google Maps verwendet werden. Für Tourenplanung verwenden sie einen Wohnmobil-Führer von https://www.womo.de/, der neben Ortsbeschreibungen auch Wegpunkte enthält, die im GPX-Format heruntergeladen werden können.

Bei Google Maps gibt es allerdings keine Möglichkeit, die GPX-Datei zu importieren. Mit [Google My Maps](https://www.google.com/mymaps) ist der GPX-Import zwar möglich, die erstellte Karte kann aber nicht zur Navigation in Google Maps verwendet werden.

Ich habe daher ein [R-Skript](https://github.com/matmu/gpx-toolbox/blob/main/gpx2maps_url.R) geschrieben, welches die Wegpunkte in der GPX-Datei in Links zu Google Maps und zu Apple Maps umwandelt und in einer Excel-Datei gespeichert. Die Excel-Datei kann dann auf dem Handy geöffnet und durch Ausführen der Links ein Wegpunkt in Google Maps bzw. Apple Maps geöffnet werden. Im Folgenden eine beispielhafte GPX-Datei mit Dezimal-Koordinaten und die entsprechenden URLs:

```
<gpx>
  <wpt lat="38.124444444" lon="13.368055556">
    <name>Ex1</name>
  </wpt>
</gpx>
```

**URL zu Google Maps:**<br/>
[https://maps.google.com/?q=38.124444444,13.368055556&ll=38.124444444,13.368055556&z=12](https://maps.google.com/?q=38.124444444,13.368055556&ll=38.124444444,13.368055556&z=12)

**URL zu Apple Maps:**<br/>
[https://maps.apple.com/?q=38.124444444,13.368055556](https://maps.apple.com/?q=38.124444444,13.368055556)

Für ihre letzte Reise nach Schottland hat sich diese Methode als äußerst praktisch erwiesen. Anstatt mit unterschiedlichen Apps zu experimentieren, konnten sie einfach auf die Links in der Excel-Datei klicken und direkt zu den beschriebenen Spots navigieren.


# English (DeepL)
**Convert GPX waypoints into links for Google Maps and Apple Maps**

With this [R script](https://github.com/matmu/gpx-toolbox/blob/main/gpx2maps_url.R), you can convert waypoints in GPX format into links to Google Maps or Apple Maps and have them written to an Excel file. My parents, who have been enthusiastic motorhome drivers for 10 years, use Excel files on their cell phone to navigate to the spots described in the guides [womo.de](https://www.womo.de/) on their motorhome trip.

This year my parents will be traveling to Sicily in their motorhome. Google Maps will be used for navigation. For route planning, they are using a motorhome guide from https://www.womo.de/, which contains directions and waypoints that can be downloaded in GPX format.

However, Google Maps does not offer the option of importing the GPX file. GPX import is possible with [Google My Maps](https://www.google.com/mymaps), but the map created cannot be used for navigation in Google Maps.

I have therefore written an [R script](https://github.com/matmu/gpx-toolbox/blob/main/gpx2maps_url.R) which converts the waypoints in the GPX file into links to Google Maps and Apple Maps and saves them in an Excel file. The Excel file can then be opened on the cell phone and a waypoint can be opened in Google Maps or Apple Maps by executing the links. Below is an example GPX file with decimal coordinates and the corresponding URLs:

```
<gpx>
  <wpt lat="38.124444444" lon="13.368055556">
    <name>Ex1</name>
  </wpt>
</gpx>
```

**URL to Google Maps:**<br/>
[https://maps.google.com/?q=38.124444444,13.368055556&ll=38.124444444,13.368055556&z=12](https://maps.google.com/?q=38.124444444,13.368055556&ll=38.124444444,13.368055556&z=12)

**URL to Apple Maps:**<br/>
[https://maps.apple.com/?q=38.124444444,13.368055556](https://maps.apple.com/?q=38.124444444,13.368055556)

For their recent trip to Scotland, this method proved to be extremely practical. Instead of experimenting with different apps, they could simply click on the links in the Excel file and navigate directly to the described spots.
