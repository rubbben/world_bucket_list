import {initMap} from './map'
import {buildAllDreams} from './dream'

function init(){
    initMap();
    buildAllDreams();
}

window.init = init; //permet de mettre la fonction dans le scope global, afin que le callback du script api google puisse la retrouver