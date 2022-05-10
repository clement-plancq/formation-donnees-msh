
/* La création d'une carte avec Leaflet nécessite 2 étapes :
		1. Initialisation de la carte
		2. Ajout des tuiles 

		*** 1. Initialisation de la carte ***
				- Création de l'objet "map"
				- La carte est centrée sur Tours
				- Les coordonnées d'un point d'intérêt peuvent être récupérées sur le site https://geojson.io
					ou sur le site https://www.gps-coordinates.net/
					- Format des coordonnées : ([lat, long]) 
                    - Format des coordonnées de geojson.io : [long, lat]
				- Définition d'un niveau de zoom 
*/

// Méthode 1
const map = L.map("map").setView([47.3900474, 0.6889268], 5);

// Méthode 2 
/* const map = L.map("map", {
	center : [47.3900474, 0.6889268],
	zoom : 13,
	maxZoom : 18,
});
*/
	
	
/*		*** 2. Ajout des tuiles ***
				- Sélection d'un type de carte existant (http://leaflet-extras.github.io/leaflet-providers/preview/)
				- Importation et ajout d'un TileLayer
Leaflet fonctionne avec des TileLayers (Base Layers). Les TileLayers sont des fond de carte. Ce sont des cartes générales
de base qui servent principalement à se repérer. Il y a généralement qu'une seule TileLayer visible à un moment donné.
*/

// Import d'un premier fond de plan
const myBaseMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 16,
	minZoom : 5,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
// Ajout du fond de plan à la carte
myBaseMap.addTo(map);

// Ajout d'un second fond de plan
const waterColorMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution:  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 5,
	maxZoom: 16,
	ext: 'jpg'
});
waterColorMap.addTo(map);


//-------------------------------------------------------------------------------------
// 			2. Ajout d'un contrôle de couches pour plusieurs Base Layers
//-------------------------------------------------------------------------------------

//Pour pouvoir choisir un fond de carte, il est nécessaire d'utiliser un contrôle de couches (Control.Layers)

// Ajout d'un contrôle de couches

/* 		*** 1. Création d'un objet baseMaps contenant les couches que l'on veut afficher ***
				- Création de l'objet "baseMaps"
				- Insertion des noms des couches comme clés
				- Insertion des objets Layers comme valeurs
					ex : "nom_layer" : layer
				- Il est possible de personnaliser le noms des couches avec du HTML
				- Attention à l'ordre d'insertion des layers!. Dans le cas ci-dessous, la carte 
				  OSM sera visible au chargement de la carte. Il faudra sélectionné la carte watercolors 
				  dans le contrôle de couches pour l'afficher.
*/
const baseMaps = {
	"<strong>WaterColors<strong>" : waterColorMap,
	"<strong> OpenStreetMap </strong>" : myBaseMap
};

// 	    *** 2. Ajout du contrôle de couches 
L.control.layers(baseMaps).addTo(map);


//--------------------------------------------------------------------------------------
// 					3. Création de markers et Affichage de popup
//--------------------------------------------------------------------------------------

// Ajout d'un marker
/*   	*** 1. Récupération des coordonnées du point d'intérêt sur le site https://geojson.io ***
		***	2. Insertion du marker ***
					- Format des coordonnées : ([lat, lon])  
*/

const pt = L.marker([47.3900474, 0.6889268],{
	title : "Ceci est une infobulle visible au survol de la souris"	
}).addTo(map);
  

// Ajout d'une popup avec le libellé "Ceci est une Popup !!"
pt.bindPopup("Ceci est une Popup visible !!")
  .openPopup();


//--------------------------------------------------------------------------------------
//					4. Insertion des données
//--------------------------------------------------------------------------------------

// Ajout du fichier : geojson.js
/*
let layerData = L.geoJSON(geojson,  {
    onEachFeature: onEachFeature
});
layerData.addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties) {
		let content = `<table>
		<tr><th>Nom</th><td>${feature.properties["titre"]}</td></tr>
		<tr><th>Pays</th><td>${feature.properties["pays"]}</td></tr>
		<tr><th>Ville</th><td>${feature.properties["ville"]}</td></tr> 
		<tr><th>Intérieur / Extérieur</th><td>${feature.properties["int_ext"]}</td></tr> 
		<img src="${feature.properties["url"]}" width="300" height="400"/>
		</table>`;
		layer.bindPopup(content);
	}
}
*/







					


