import {data} from './data';
import {addMarkerOnMap, visitDreamOnMap} from './map';

const dreamsContainer = document.querySelector("#dreams-container");

function buildAllDreams(){
    while(dreamsContainer.hasChildNodes()){                         //Pour eviter les iterations. Tant que dreamsContainer a des enfants tu lui enleve l'enfant. 
        dreamsContainer.removeChild(dreamsContainer.lastChild);     //Qu'elle enfant ? Son dernier enfant
    }
    data.forEach(buildOneDream);

    addDreamsListeners();
}

function buildOneDream(dream){
    const dreamElement = document.createElement("div");             //Creation d'un element dans le DOM
    
    dreamElement.innerHTML = `<div class="card text-center" id="${dream.id}">
        <div class="card-header font-weight-bold">
            ${dream.description}
        </div>
        <img src="${dream.imgPath}" class="card-img-top" alt="Maison Maldive">
        <div class="card-body">
            <a href="#" class="button-action btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire":"Je me lance !"}</a>
        </div>
        <div class="card-footer text-muted text-right">
            <a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>
            <a href="${dream.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>
        </div>
    </div>`;

    dreamsContainer.appendChild(dreamElement);                      //Ajoute un enfant au html. L'enfant est dreamElement


    addMarkerOnMap(dream);
}


function addDreamsListeners(){
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", event => {
            visitDream(item.parentElement.parentElement.getAttribute("id")); //Pour recuperer l'id du reve dont le bouton visiter a etait cliquer (dans le innerHTML)
        })
    });

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", event => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id")); //Pour recuperer l'id du reve dont le bouton visiter a etait cliquer (dans le innerHTML)
            buildAllDreams();
        })
    });
}

function visitDream(dreamId){   //Recupere les coordonnees de mon reve
    let position = data.filter(item => item.id == dreamId)[0].coordinates; 
    visitDreamOnMap(position);
}

function toggleDreamDone(dreamId){
    let dream = data.filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
}

export {buildAllDreams};