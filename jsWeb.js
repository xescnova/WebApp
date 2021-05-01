var myArr;
var aux;
var opcion = 0;
var longi; //Posición longitud del usuario
var lati; //Posición latitud del usuario

function leerJson() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            campos(myArr);
            mapas();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function OrdenarCapacidadMenor() {
    opcion = 1;

    aux.sort(function(a, b) {
        if (a.dadesPropies.capacidad > b.dadesPropies.capacidad) {
            return 1;
        }
        if (a.dadesPropies.capacidad < b.dadesPropies.capacidad) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function OrdenarCapacidadMayor() {
    opcion = 2;
    aux.sort(function(a, b) {
        if (a.dadesPropies.capacidad < b.dadesPropies.capacidad) {
            return 1;
        }
        if (a.dadesPropies.capacidad > b.dadesPropies.capacidad) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function OrdenarValoracionMenor() {
    opcion = 3;
    aux.sort(function(a, b) {
        if (a.puntuacio > b.puntuacio) {
            return 1;
        }
        if (a.puntuacio < b.puntuacio) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function OrdenarValoracionMayor() {
    opcion = 4;
    aux.sort(function(a, b) {
        if (a.puntuacio < b.puntuacio) {
            return 1;
        }
        if (a.puntuacio > b.puntuacio) {
            return -1;
        }
        return 0;
    });

    campos(aux);
}

function NoFiltro() {
    aux = myArr;

    switch (opcion) {
        case 0:
            campos(aux);
            break;
        case 1:
            OrdenarCapacidadMenor();
            break;

        case 2:
            OrdenarCapacidadMayor();
            break;
        case 3:
            OrdenarValoracionMenor();
            break;

        case 4:
            OrdenarValoracionMayor();
            break;
    }
}

function FiltroNatural() {

    var arrayfiltrado = [];

    for (i = 0; i < aux.length; i++) {

        if (aux[i].detall == "Natural") {
            arrayfiltrado.push(aux[i]);
        }

    }
    aux = arrayfiltrado;

    switch (opcion) {
        case 0:
            campos(aux);
            break;
        case 1:
            OrdenarCapacidadMenor();
            break;

        case 2:
            OrdenarCapacidadMayor();
            break;
        case 3:
            OrdenarValoracionMenor();
            break;

        case 4:
            OrdenarValoracionMayor();
            break;
    }


}

function campos(arr) {

    var i;
    /* arr.filter(cesped => {
         return cesped.detall == "Natural";
       });*/

    const container = document.getElementById("id01");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    primero = document.createElement("div");
    primero.setAttribute("class", "album py-5 bg-light");

    segundo = document.createElement("div");
    segundo.setAttribute("class", "container");

    tercero = document.createElement("div");
    tercero.setAttribute("class", "row");

    for (i = 0; i < arr.length; i++) {



        cuarto = document.createElement("div");
        cuarto.setAttribute("class", "col-md-4");

        quinto = document.createElement("div");
        quinto.setAttribute("class", "card mb-4 box-shadow");

        var aux = arr[i].imatges;

        img = document.createElement("img");
        img.setAttribute("src", aux[0]);
        img.setAttribute("class", "card-img-top");
        img.setAttribute("with", "300");
        img.setAttribute("height", "300");

        quinto.appendChild(img);

        sexto = document.createElement("div");
        sexto.setAttribute("class", "card-body");

        nombre = document.createElement("p");
        nombre.setAttribute("class", "card-text");
        nombre.innerHTML = arr[i].nom;

        septimo = document.createElement("div");
        septimo.setAttribute("class", "d-flex justify-content-between align-items-center");

        boton = document.createElement("a");
        boton.setAttribute("href", "campo.html?");
        boton.setAttribute("class", "btn btn-sm btn-outline-secondary");
        boton.innerHTML = "Ver";

        puntuacion = arr[i].puntuacio

        estrellas = document.createElement("form");
        aux = document.createElement("p");

        for (tab = 0; tab < puntuacion; tab++) {
            aux2 = document.createElement("label2");
            aux2.innerHTML = "&#9733";
            aux.appendChild(aux2);
        }
        for (tab = 0; tab < 5 - puntuacion; tab++) {
            aux2 = document.createElement("label");
            aux2.innerHTML = "&#9733";
            aux.appendChild(aux2);
        }
        estrellas.appendChild(aux);

        septimo.appendChild(boton);
        septimo.appendChild(estrellas);

        sexto.appendChild(nombre);
        sexto.appendChild(septimo);

        quinto.appendChild(sexto);

        cuarto.appendChild(quinto);

        tercero.appendChild(cuarto);

        segundo.appendChild(tercero);

        primero.appendChild(segundo);

        document.getElementById("id01").appendChild(primero);
    }
}

function mapas() {
    mapboxgl.accessToken = 'pk.eyJ1IjoieGVzY21hcGxleCIsImEiOiJja281eTY2NW0xeGxpMnFwZ29hbWVsNnI4In0.wnoG62YT-XTclaUzBsVBhg';
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    //Posicion del usuario

    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://icon-library.com/images/position-icon/position-icon-8.jpg)';
    el.style.width = '70px';
    el.style.height = '70px';
    el.style.backgroundSize = '100%';

    el.addEventListener('click', function() {
        window.alert('Posicion actual');
    });


    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat([longi, lati])
        .addTo(map);
    //Fin de posicion del usuario

    //Despliega todos los equipos en el mapa
    for (x = 0; x < aux.length; x++) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + aux[x].imatges[aux[x].imatges.length - 1] + ')';
        el.style.width = '50px';
        el.style.height = '50px';
        el.style.backgroundSize = '100%';
        el.setAttribute("data-toggle", "tooltip");
        el.setAttribute("title", aux[x].nom);

        //Script para mostrar el nombre del campo cuando pasas el raton por encima
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        el.addEventListener('click', function() {
            window.alert('Campo');
        });



        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat([aux[x].geoposicionament1.long, aux[x].geoposicionament1.lat], )
            .addTo(map);
    }

    map.addControl(directions, 'top-left');
}

function errorLocation() {
    setupMap([3.0228200406783925], [39.512891178577604])
}


//En MapBox longitud va antes que latitud
function successLocation(position) {
    console.log(position)
    longi = position.coords.longitude;
    lati = position.coords.latitude;
    setupMap([position.coords.longitude, position.coords.latitude])
}