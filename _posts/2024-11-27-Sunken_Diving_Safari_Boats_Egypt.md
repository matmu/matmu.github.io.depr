---
title: List of sunken liveaboard dive boats in Egypt
tags: Diving
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---


In spring 2024, I embarked on my [fourth liveaboard diving safari](/Liveaboard-Diving-Red-Sea/) in Egypt's Red Sea. As always, it was an incredible experience, filled with breathtaking underwater landscapes and marine life. However, during the trip, I learned about a tragic incident that had occurred just before our departure: a liveaboard boat had sunk, leaving one German diver still missing while the rest narrowly escaped with their lives.

# English
**Update March 2025:** At the time of its sinking, M/Y Scuba Scene was operating under the flag of Dive Pro Liveaboard, not Golden Dolphin Safari World Fleet. This marks the third vessel associated with Dive Pro Liveaboard to sink within the past three years. A new section has been added discussing a potential connection between the spike in incidents and the COVID-19 pandemic.
<hr>

On Monday, November 25, 2024, another liveaboard boat sank in the early hours of the morning, which also attracted a lot of media attention (the Tagesschau on German First Television reported). Since then, 11 passengers and crew members have been reported dead or missing. A quick search revealed that this was the fifth liveaboard boat to sink in the Red Sea in 2024. The alarming increase in these incidents raises serious questions about the safety standards of Egyptian liveaboards.

## The List
I have decided to compile a list of incidents over the last few years to better understand the reasons for these sinkings and the number of casualties involved. I will continue to update and expand this list to provide a comprehensive overview of all incidents and their causes. My hope is that increased awareness will lead to improved safety measures and further tragedies can be prevented in the future.

<table>
  <thead>
    <tr>
      <th>Boat Name</th>
      <th>Fleet Name</th>
      <th>Date of Incident</th>
      <th>Location</th>
      <th>Reported Cause</th>
      <th>Soals On Board</th>
      <th>Casualties</th>
      <th>References</th>
    </tr>
  </thead>
  <tbody>
    {% for boat in site.data.sunken_safari_boats_egypt %}
      <tr>
        <td>{{ boat.boat_name }}</td>
        <td>{{ boat.fleet_name }}</td>
        <td>{{ boat.date_of_incident }}</td>
        <td>{{ boat.location }}</td>
        <td>{{ boat.reported_cause }}</td>
        <td>{{ boat.soals_on_board }}</td>
        <td>{{ boat.casualties }}</td>
        <td>
          {% for ref in boat.refs %}
            <a href="{{ ref.url }}" target="_blank">{{ ref.text }}</a>
          {% endfor %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## Be Careful
While the Red Sea remains one of the most popular diving destinations in the world, the increasing number of boat accidents on liveaboards should not be overlooked. The trend is extremely worrying and points to significant safety issues that anyone planning a liveaboard trip in the region should be aware of.

There are three main causes of accidents in recent years: fire on board, capsizing of the boat and collision with a reef. This points to problems with general boat maintenance (especially electronics and smoke detectors) and human error. The casualties, a total of 9 dead and 7 missing in 11 boat accidents between 2019 and 2024, could also have been avoided or at least reduced by better safety measures, such as functioning smoke detectors and rescue equipment, as well as comprehensive safety training.

It is now even more important to prioritize safety, for example by comparing the providers carefully and ensuring that the boats meet appropriate safety standards. As a first safety measure, I would avoid all the fleets listed in the table above unless safety standards have demonstrably improved. I would be particularly wary of the "Dive Pro Liveaboard" fleet, 3 of whose boats sank within 3 years between 2022 and 2024. The underwater wonders of the Red Sea are breathtaking, but no adventure is worth risking your life.

## A link to the COVID-19 pandemic
A noticeable portion of the accidents occurred during or shortly after the COVID-19 pandemic. It is conceivable that the severely reduced travel activity at the time, especially the sharp decline in diving tourism between 2020 and 2022, may have had indirect effects on the safety of liveaboard vessels.

The loss of income may have led to postponed or limited maintenance efforts. Boats that remained idle at anchor for extended periods might have been returned to service without thorough technical inspection once tourism resumed.

While it is impossible to determine with certainty to what extent the pandemic played a role, the clustering of incidents in the years that followed raises questions about whether financial strain, staffing shortages, or a lack of routine in operating safety systems may have been contributing factors.


# Deutsch
**Update März 2025:** Zum Zeitpunkt ihres Untergangs fuhr die M/Y Scuba Scene unter der Flagge von Dive Pro Liveaboard, nicht unter der von Golden Dolphin Safari World Fleet. Damit ist dies bereits das dritte Schiff von Dive Pro Liveaboard, das innerhalb von drei Jahren gesunken ist. Außerdem wurde ein neuer Abschnitt ergänzt, der einen möglichen Zusammenhang zwischen dem Anstieg der Vorfälle und der COVID-19-Pandemie thematisiert.
<hr>

Im Frühjahr 2024 habe ich mich zusammen mit Freunden auf meine vierte Tauchsafari im Roten Meer in Ägypten begeben. Wie immer war es ein unglaubliches Erlebnis, gefüllt mit atemberaubenden Unterwasserlandschaften und Meeresbewohnern. Während der Reise erfuhr ich jedoch von einem tragischen Vorfall, der sich kurz vor unserer Abreise ereignet hatte: Ein Tauchsafari-Boot war gesunken, wobei ein deutscher Taucher noch immer vermisst wurde, während die anderen nur knapp mit dem Leben davonkamen.

Am Montag, dem 25. November 2024, sank in den frühen Morgenstunden ein wieder Tauchsafari-Boot, welches auch in den Medien große Aufmerksam fand (die Tagesschau im deutschen Ersten Fernsehen berichtete). Seitdem wurden 11 Passagiere und Besatzungsmitglieder als tot oder vermisst gemeldet. Eine kurze Recherche ergab, dass dies bereits das fünfte Tauchsafari-Boot war, das im Jahr 2024 im Roten Meer unterging. Die alarmierende Zunahme dieser Vorfälle wirft ernste Fragen zu den Sicherheitsstandards der ägyptischen Tauchsafaris auf.


## Die Liste
Ich habe mich entschlossen, eine Liste der Vorfälle der letzten Jahre zusammenzustellen, um die Gründe für diese Untergänge und die Zahl der Opfer besser zu verstehen. Ich werde diese Liste weiterhin aktualisieren und erweitern, um einen umfassenden Überblick über alle Vorfälle und ihre Ursachen zu geben. Meine Hoffnung ist, dass ein erhöhtes Bewusstsein zu verbesserten Sicherheitsmaßnahmen führt und weitere Tragödien in der Zukunft verhindert werden können.

<table>
  <thead>
    <tr>
      <th>Bootsname</th>
      <th>Flottenname</th>
      <th>Datum des Vorfalls</th>
      <th>Ort</th>
      <th>Offizielle Ursache</th>
      <th>Personen an Bord</th>
      <th>Opfer</th>
      <th>Referenzen</th>
    </tr>
  </thead>
  <tbody>
    {% for boat in site.data.sunken_safari_boats_egypt %}
      <tr>
        <td>{{ boat.boat_name }}</td>
        <td>{{ boat.fleet_name }}</td>
        <td>{{ boat.date_of_incident }}</td>
        <td>{{ boat.location }}</td>
        <td>{{ boat.reported_cause }}</td>
        <td>{{ boat.soals_on_board }}</td>
        <td>{{ boat.casualties }}</td>
        <td>
          {% for ref in boat.refs %}
            <a href="{{ ref.url }}" target="_blank">{{ ref.text }}</a>
          {% endfor %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## Gebt acht
Das Rote Meer ist zwar nach wie vor eines der beliebtesten Tauchziele der Welt, aber die zunehmende Zahl von Bootsunfällen auf Tauchsafaris sollte nicht übersehen werden. Der Trend ist äußerst besorgniserregend und weist auf erhebliche Sicherheitsprobleme hin, die jeder, der eine Tauchsafari in der Region plant, berücksichtigen sollte.

Es gibt drei Hauptursachen für die Unglücke der vergangenen Jahre: Feuer an Bord, Kentern des Bootes und die Kollision mit einem Riff. Dies deutet auf Probleme mit der generellen Bootswartung (insbesondere bei der Elektronik und Rauchmelder) sowie auf Menschliches Versagen hin. Die Opfer, insgesamt 9 Tote und 7 vermisste bei 11 Bootsunglücken zwischen 2019 und 2024, hätten außerdem durch bessere Sicherheitsmaßnahmen, zum Beispiel durch funktionierende Rauchmelder und Rettungsequipment, sowie einer umfassenden Sicherheitseinweisung vermieden oder zumindest reduziert werden können.

Es ist nun noch wichtiger, die Sicherheit in den Vordergrund zu stellen, zum Beispiel indem du die Anbieter genau vergleichst und sicherstellst, dass die Boote angemessene Sicherheitsstandards erfüllen. Als erste Sicherheitsmaßnahme würde ich alle in der obigen Tabelle gelisteten Flotten meiden, solange sich die Sicherheitsstandards sich nicht nachweislich verbessert haben. Ganz besondere Vorsicht würde ich bei der Flotte von "Dive Pro Liveaboard" walten lassen, von denen 3 Boote innerhalb von 3 Jahren zwischen 2022 und 2024 untergegangen sind. Die Unterwasserwunder des Roten Meeres sind atemberaubend, aber kein Abenteuer ist es wert, dein Leben zu riskieren.


## Ein Zusammenhang mit der Corona-Pandemie
Ein auffälliger Teil der Unfälle ereignete sich während oder kurz nach der COVID-19-Pandemie. Es ist denkbar, dass die damals stark eingeschränkten Reiseaktivitäten, insbesondere der massive Rückgang an Tauchgästen zwischen 2020 und 2022, indirekte Auswirkungen auf die Sicherheit der Safari-Boote hatten.

Möglicherweise führte der Einnahmeausfall dazu, dass Wartungsmaßnahmen verschoben oder nur eingeschränkt durchgeführt wurden. Auch Boote, die längere Zeit ungenutzt vor Anker lagen, könnten beim Wiederanlaufen des Tourismus ohne ausreichende technische Überprüfung in Betrieb genommen worden sein.

Es lässt sich nicht mit Sicherheit sagen, in welchem Ausmaß die Pandemie hier eine Rolle gespielt hat, doch die zeitliche Häufung von Unfällen in den Folgejahren wirft Fragen auf, ob finanzielle Engpässe, Personalmangel oder mangelnde Routine im Umgang mit Sicherheitssystemen eine Rolle gespielt haben könnten.
