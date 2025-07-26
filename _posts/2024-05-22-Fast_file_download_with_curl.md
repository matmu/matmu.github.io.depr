---
title: Fast file download with cURL
tags: Programming
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---

If you want to download a large file using multiple connections at once, this bash script might be a good option.

## English
We are currently on vacation in Croatia and I forgot to update our cars' navigation system accordingly. Therefore, I quickly wanted to download an appropriate map bundle from https://updateportal.skoda-auto.com for our Amundsen system in our Skoda Fabia NJ5. Downloading seemed pretty slow with min. one day to finish due to server-side limitations. And because I had to go to the campgrounds' reception for a descent Wifi hotspot, I needed a faster solution.

After unsuccessfully trying out some dubious browser extensions, I finally decided for [this](https://github.com/WanghongLin/miscellaneous/blob/master/tools/mcurl.sh) bash script. It downloads multiple file slices at once, whereby their number can be configured by the user. After 15 min the download was finished.

1. Download script
```
curl https://github.com/WanghongLin/miscellaneous/blob/master/tools/mcurl.sh >mcurl.sh && chmod 744 mcurl.sh
```
2. Apply script (Number of slices is set by argument `-s`)
```
./mcurl.sh -s 500 https://infotainment-cdn.skoda-auto.com/base/maps/STD2_2110_EU_DL1_202345.zip
```
3. Done. Slices are merged automatically.


## German (DeepL)
**Schnelles Herunterladen von Dateien mit cURL**

Wenn du eine große Datei über mehrere Verbindungen parallel herunterladen möchtest, könnte dieses Bash-Skript eine gute Option sein.

Wir sind derzeit im Urlaub in Kroatien und ich habe vergessen, das Navigationssystem unseres Autos entsprechend zu aktualisieren. Daher wollte ich schnell ein passendes Kartenpaket von https://updateportal.skoda-auto.com für unser Amundsen-System in unserem Skoda Fabia NJ5 herunterladen. Das Herunterladen war zu Beginn sehr langsam und hätte aufgrund einer serverseitigen Begrenzung mindestens einen Tag gedauert. Und da ich zur Rezeption des Campingplatzes gehen musste, um einen geeigneten Wifi-Hotspot für den Download haben, musste eine schnellere Lösung her.

Nachdem ich erfolglos einige dubiose Browser-Erweiterungen ausprobiert hatte, entschied ich mich schließlich für [dieses](https://github.com/WanghongLin/miscellaneous/blob/master/tools/mcurl.sh) Bash-Skript. Es lädt mehrere Teile (aka Slices) der Datei auf einmal herunter, wobei deren Anzahl vom Benutzer konfiguriert werden kann. Nach 15 Minuten war der Download beendet.

1. Skript herunterladen
```
curl https://github.com/WanghongLin/miscellaneous/blob/master/tools/mcurl.sh >mcurl.sh && chmod 744 mcurl.sh
```
2. Skript ausführen (Anzahl der Slices kann mit dem Argument `-s` angepasst werden)
```
./mcurl.sh -s 500 https://infotainment-cdn.skoda-auto.com/base/maps/STD2_2110_EU_DL1_202345.zip
```
3. Fertig. Die Teile werden automatisch wieder zur Ursprungsdatei zusammengefügt.
