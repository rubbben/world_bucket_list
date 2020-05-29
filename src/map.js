let map;
let panorama;
const panoramaElement = document.querySelector("#panorama"); 
const resetMapButton = document.querySelector("#reset-map");
const backToMapButton = document.querySelector("#back-to-map");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 16.280411, lng: -23.471753}, 
        zoom: 3,
        // mapTypeId: 'satellite'
        streetViewControl: false,   //Enleve le bonhomme jaune street view google
        styles: [
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#a6cafb"
                }
              ]
            }
          ]
    });

    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('panorama'), {
        // position: {lat: 16.280411, lng: -23.471753},
        // pov: {
        //   heading: 34,
        //   pitch: 10
        // }
      });

    addMapListerners();

    panoramaElement.style.display = "none";                             //change le style (son css) de mon element du DOM
    backToMapButton.style.display = "none";

}

function addMapListerners(){                                            //Tout les listeners qui sont en rapport avec cette map
    resetMapButton.addEventListener("click", resetMap);
    backToMapButton.addEventListener("click", backToMap);
}

function addMarkerOnMap(dream){
    const marker = new google.maps.Marker({                             //Marqueur sur la map
        //position: {lat: 48.858381, lng: 2.294479},                    //Position du marqueur
        position: dream.coordinates,
        map: map,                                                       //La carte où l'on veut utiliser notre marqueur
        icon: dream.done ? "img/marker-done.png" : "img/marker.png"     //Marqueur personnaliser
    });

    marker.addListener('click', function() {                            //Quand y'a un click on execute la fonction zoomOn
      zoomOn(marker.getPosition());                                     //En argument, la position du marqueur qui vient d'etre cliquer
    });
}

function zoomOn(position){
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId("satellite");
}

function resetMap(){
    map.setZoom(3);
    map.setCenter({lat: 16.280411, lng: -23.471753});
    map.setMapTypeId("roadmap");
}

function backToMap(){
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";
}

function visitDreamOnMap(position){
    panorama.setPosition(position);
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
}

export {initMap, addMarkerOnMap, visitDreamOnMap};

//Recherche Google = google map api tutoriel