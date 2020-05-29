!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let o,i;n.r(t);const r=document.querySelector("#panorama"),a=document.querySelector("#reset-map"),l=document.querySelector("#back-to-map");function s(){o=new google.maps.Map(document.getElementById("map"),{center:{lat:16.280411,lng:-23.471753},zoom:3,streetViewControl:!1,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#a6cafb"}]}]}),i=new google.maps.StreetViewPanorama(document.getElementById("panorama"),{}),a.addEventListener("click",d),l.addEventListener("click",u),r.style.display="none",l.style.display="none"}function c(e){const t=new google.maps.Marker({position:e.coordinates,map:o,icon:e.done?"img/marker-done.png":"img/marker.png"});t.addListener("click",(function(){var e;e=t.getPosition(),o.setZoom(20),o.setCenter(e),o.setMapTypeId("satellite")}))}function d(){o.setZoom(3),o.setCenter({lat:16.280411,lng:-23.471753}),o.setMapTypeId("roadmap")}function u(){r.style.display="none",l.style.display="none",a.style.display="block"}const m=[{id:1,imgPath:"img/img-maldives.jpg",description:"Maison sur pilotis aux Maldives",done:!1,link:"https://sonevavillaownership.com/",coordinates:{lat:5.723542,lng:73.413248}},{id:2,imgPath:"img/img-kenya.jpg",description:"Faire un Safari au Kenya",done:!1,link:"https://www.elewanacollection.com/elephant-pepper-camp/at-a-glance",coordinates:{lat:-1.2637182,lng:35.0228088}},{id:3,imgPath:"img/universal-studio.jpg",description:"Universal Studios Hollywood",done:!0,link:"https://www.universalstudioshollywood.com/web/en/us?utm_source=google&utm_medium=organic&utm_campaign=GMB",coordinates:{lat:34.1364962,lng:-118.3558679}}],p=document.querySelector("#dreams-container");function f(){for(;p.hasChildNodes();)p.removeChild(p.lastChild);m.forEach(g),document.querySelectorAll(".button-visit").forEach(e=>{e.addEventListener("click",t=>{!function(e){!function(e){i.setPosition(e),r.style.display="block",l.style.display="block",a.style.display="none"}(m.filter(t=>t.id==e)[0].coordinates)}(e.parentElement.parentElement.getAttribute("id"))})}),document.querySelectorAll(".button-action").forEach(e=>{e.addEventListener("click",t=>{!function(e){let t=m.filter(t=>t.id==e)[0];t.done=!t.done}(e.parentElement.parentElement.getAttribute("id")),f()})})}function g(e){const t=document.createElement("div");t.innerHTML=`<div class="card text-center" id="${e.id}">\n        <div class="card-header font-weight-bold">\n            ${e.description}\n        </div>\n        <img src="${e.imgPath}" class="card-img-top" alt="Maison Maldive">\n        <div class="card-body">\n            <a href="#" class="button-action btn btn-${e.done?"secondary":"danger"} font-weight-bold btn-block">${e.done?"Je veux le refaire":"Je me lance !"}</a>\n        </div>\n        <div class="card-footer text-muted text-right">\n            <a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>\n            <a href="${e.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>\n        </div>\n    </div>`,p.appendChild(t),c(e)}window.init=function(){s(),f()}}]);