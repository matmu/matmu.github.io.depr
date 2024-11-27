---
title: Sunken Diving Safari Boats in Egypt
tags: Diving
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
---


In spring 2024, I embarked on my fourth liveaboard diving safari in Egypt's Red Sea. As always, it was an incredible experience, filled with breathtaking underwater landscapes and marine life. However, during the trip, I learned about a tragic incident that had occurred just before our departure: a liveaboard boat had sunk, leaving one German diver still missing while the rest narrowly escaped with their lives.

On Monday, November 25, 2024, another diving boat sank in the early hours of the morning. Since then, 11 passengers and crew members have been reported dead or missing. A brief search revealed that this was already the fifth liveaboard diving boat to sink in the Red Sea in 2024. The alarming increase in these incidents raises serious questions about the safety standards of Egyptian liveaboard safaris.

# Gathering the Facts
I decided to compile a list of incidents from recent years to better understand the reasons behind these sinkings and the number of casualties involved. The trend is deeply concerning, highlighting significant safety issues that anyone planning a diving safari in the region should consider.

I will continue to update and expand this list, aiming to provide a comprehensive overview of past incidents, their causes, and their consequences. The hope is that increased awareness might lead to improved safety measures and prevent further tragedies in the future.

# Be Careful
While the Red Sea remains one of the world’s most popular diving destinations, the growing frequency of liveaboard accidents should not be overlooked. As divers, it’s crucial to prioritize safety by choosing reputable operators and ensuring that boats meet adequate safety standards.

If you're considering a liveaboard diving trip in the Red Sea, make sure you’re informed about the potential risks and take steps to prioritize your safety. The underwater wonders of the Red Sea are breathtaking, but no adventure is worth risking your life.

# The List
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

# Deutsch (DeepL)
Im Frühjahr 2024 begab ich mich auf meine vierte Tauchsafari im Roten Meer in Ägypten. Wie immer war es ein unglaubliches Erlebnis, gefüllt mit atemberaubenden Unterwasserlandschaften und Meeresbewohnern. Während der Reise erfuhr ich jedoch von einem tragischen Vorfall, der sich kurz vor unserer Abreise ereignet hatte: Ein Tauchsafari-Boot war gesunken, wobei ein deutscher Taucher noch immer vermisst wurde, während die anderen nur knapp mit dem Leben davonkamen.

Am Montag, dem 25. November 2024, sank in den frühen Morgenstunden ein weiteres Tauchboot. Seitdem wurden 11 Passagiere und Besatzungsmitglieder als tot oder vermisst gemeldet. Eine kurze Recherche ergab, dass dies bereits das fünfte Tauchboot war, das im Jahr 2024 im Roten Meer unterging. Die alarmierende Zunahme dieser Vorfälle wirft ernste Fragen zu den Sicherheitsstandards der ägyptischen Tauchsafaris auf.


## Zusammenstellung der Fakten
Ich habe mich entschlossen, eine Liste der Vorfälle der letzten Jahre zusammenzustellen, um die Gründe für diese Untergänge und die Zahl der Opfer besser zu verstehen. Der Trend ist äußerst besorgniserregend und weist auf erhebliche Sicherheitsprobleme hin, die jeder, der eine Tauchsafari in der Region plant, berücksichtigen sollte.

Ich werde diese Liste weiterhin aktualisieren und erweitern, um einen umfassenden Überblick über die vergangenen Vorfälle, ihre Ursachen und ihre Folgen zu geben. Die Hoffnung ist, dass ein erhöhtes Bewusstsein zu verbesserten Sicherheitsmaßnahmen führt und weitere Tragödien in der Zukunft verhindert werden können.

## Gebt acht
Das Rote Meer ist zwar nach wie vor eines der beliebtesten Tauchziele der Welt, aber die zunehmende Zahl von Unfällen auf Tauchsafaris sollte nicht übersehen werden. Für Taucher ist es wichtig, die Sicherheit in den Vordergrund zu stellen, indem sie seriöse Anbieter auswählen und sicherstellen, dass die Boote angemessene Sicherheitsstandards erfüllen.

Wenn Sie eine Tauchsafari im Roten Meer in Erwägung ziehen, sollten Sie sich über die potenziellen Risiken informieren und Maßnahmen ergreifen, um Ihre Sicherheit in den Vordergrund zu stellen. Die Unterwasserwunder des Roten Meeres sind atemberaubend, aber kein Abenteuer ist es wert, Ihr Leben zu riskieren.
