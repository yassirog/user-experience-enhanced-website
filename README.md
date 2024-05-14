> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# HANDFOOT-PRINT
Uw website, om uw bedrijf een handje te helpen met de statistieken van uw stakeholders!

Dit project omvat een HandFoot-Print website dat gemaakt is in `VisualCode`.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Deze webapplicatie is in opdracht van CrossmarX. Bij deze hand- footprint calculator moet de klant een goed overzicht hebben hoe milleuvriendelijk zijn bedrijf daadwerkelijk is. Hierbij zijn de volgende betrokkenen belangrijk om te vergelijken: medewerkers, aandeelhouders, leveranciers, klanten en de omgeving.
Je kan inloggen op je bedrijf, hierin kun je een stakeholder toevoegen aan je bedrijf. Verder moet je een enquete invullen op je stakeholders en zie je de scores uiteindelijk op je dashboard.
<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://github.com/yassirog/user-experience-enhanced-website/assets/144006281/c89a5ecf-a364-4314-b1b3-c17b4a5236e7)


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
* (Als consument wil ik een overzicht van alle bedrijven die ingevuld zijn)
  
Ik heb bij een inlogpagina een overzicht van alle bedrijven die ingevuld zijn, waarop je kan klikken en dan log je in op dat bedrijf.
Hoe dit er precies uitziet kan je vinden op mijn Wiki, want daar staan mijn schetsen 

* (Als bedrijf wil ik een stakeholder kunnen toevoegen bij mijn eigen bedrijf)

Ik heb een pagina hiervoor gemaakt, je kunt een stakeholder toevoegen bij je bedrijf. Je klikt hier aan welke type stakeholder het is en wat voor naam je wilt toevoegen aan je stakeholder. Dit wordt weer verstuurd naar de database gekoppeld aan het bedrijf.
* (Als bedrijfseigenaar wil ik graag in 1 oogopslag kunnen zien hoe milieuvriendelijk mijn bedrijf is)

Je scores van de enquetes die je hebt ingevuld per stakeholder zie je uiteindelijk een gemiddelde ervan op je dashboard. 
(Ik ben hier nog mee bezig, de dashboard heb ik bijna af, maar ik moet nog de functionaliteiten regelen van de scores van de stakeholders en enquetes.)
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
- 🚀 HTML
  
  Ik heb in dit project gewerkt met NodeJS, en EJS. Hierdoor konden we met de API van Directus, dingen GETTEN en POSTEN. Dit is noodzakelijk met een project zoals deze om in mijn geval informatie op te halen vanuit de database en natuurlijk informatie te versturen naar de database.
- 💅🏼 CSS
  
  We hebben veel dingen geleerd om de website te enhancen een voorbeeld hiervan is @supports te gebruiken in CSS of alternatieven te gebruiken bijvoorbeeld met de custom properties.
- 🗳️ JS
  
  We hebben client-side scripting gebruikt, dit is ook weer een voorbeeld van progressive enhancement. 

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. Clone of download deze repository
2. Openen in Visual Studio Code
3. Terminal openen
4. "npm install" intypen, en laten downloaden
5. "npm start" intypen
6. Done


## Bronnen
[Directus API](https://docs.directus.io/reference/introduction.html)

## Licentie
![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
