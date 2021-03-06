var myArr;
var aux = [];
var opcion = 0;
var indice = 0;
var longi; //Posición longitud del usuario
var lati; //Posición latitud del usuario
var cond;

var posicion = 0;

function leerJson() {
    cond = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    cond = parseInt(cond.replace("?", ""));

    var xmlhttp = new XMLHttpRequest();
    if (cond == 1) {
        var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    } else {
        var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/clubs.json";
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            campos(myArr);
            webSemanticaCampos();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}


function leerJsonMapas() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            campos(myArr);
            mapas2();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

function leerJsonEquipos() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/clubs.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            campos(myArr);
            mapas2();
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
    NoFiltro();
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

function FiltroArtificial() {
    NoFiltro();
    var arrayfiltrado = [];

    for (i = 0; i < aux.length; i++) {

        if (aux[i].detall == "Artificial") {
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

function filtrarCapacidad(max) {

    NoFiltro();
    var arrayfiltrado = [];

    for (i = 0; i < aux.length; i++) {

        if (aux[i].dadesPropies.capacidad <= max) {
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

function avanzar() {

    if (indice < Math.trunc(myArr.length / 6)) {
        posicion += 6;
        indice += 1;
    }
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
        case 5:
            OrdenarDistanciaMenor();
            break;
    
        case 6:
            OrdenarDistanciaMayor();
            break;
        case 7:
            OrdenarAZ();
            break;
    
        case 8:
            OrdenarZA();
            break;
    }

}

function retroceder() {

    if (posicion != 0) {
        posicion -= 6;
        indice -= 1;
    }
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
        case 5:
            OrdenarDistanciaMenor();
            break;

        case 6:
            OrdenarDistanciaMayor();
            break;
        case 7:
            OrdenarAZ();
            break;

        case 8:
            OrdenarZA();
            break;
    }
}



function OrdenarAZ() {
    opcion = 7;
    aux.sort(function(a, b) {
        if (a.nom > b.nom) {
            return 1;
        }
        if (a.nom < b.nom) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function OrdenarZA() {
    opcion = 8;
    aux.sort(function(a, b) {
        if (a.nom < b.nom) {
            return 1;
        }
        if (a.nom > b.nom) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}
function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}

function filtrarDistancia(max) {

    NoFiltro();
    var arrayfiltrado = [];

    for (i = 0; i < aux.length; i++) {

        if (distance(aux[i].geo2.lat, aux[i].geo2.long, lati, longi, "K") <= max) {
            arrayfiltrado.push(aux[i]);
        }

    }
    aux = arrayfiltrado;

    switch (opcion) {
        case 0:
            campos(aux);
            break;
        case 5:
            OrdenarDistanciaMenor();
            break;

        case 6:
            OrdenarDistanciaMayor();
            break;
        case 7:
            OrdenarAZ();
            break;

        case 8:
            OrdenarZA();
            break;
    }

}

function OrdenarDistanciaMenor() {
    opcion = 5;

    aux.sort(function(a, b) {
        if (distance(a.geo2.lat, a.geo2.long, lati, longi, "K") > distance(b.geo2.lat, b.geo2.long, lati, longi, "K")) {
            return 1;
        }
        if (distance(a.geo2.lat, a.geo2.long, lati, longi, "K") < distance(b.geo2.lat, b.geo2.long, lati, longi, "K")) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function OrdenarDistanciaMayor() {
    opcion = 6;

    aux.sort(function(a, b) {
        if (distance(a.geo2.lat, a.geo2.long, lati, longi, "K") < distance(b.geo2.lat, b.geo2.long, lati, longi, "K")) {
            return 1;
        }
        if (distance(a.geo2.lat, a.geo2.long, lati, longi, "K") > distance(b.geo2.lat, b.geo2.long, lati, longi, "K")) {
            return -1;
        }
        return 0;
    });
    campos(aux);
}

function campos(arr) {

    var i;


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

    for (i = posicion; i < arr.length && i < posicion + 6; i++) {


        cuarto = document.createElement("div");
        cuarto.setAttribute("class", "col-md-4");

        quinto = document.createElement("div");
        quinto.setAttribute("class", "card mb-4 box-shadow");

        if (cond == 1) {
            var aux = arr[i].imatges;
        } else {
            var aux = arr[i].icones;
        }

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

        if (cond == 1) {
            boton.setAttribute("href", "CampoFutbol.html?" + arr[i].identificador);
        } else {
            boton.setAttribute("href", "EquipoFutbol.html?" + arr[i].identificador);
        }

        boton.setAttribute("class", "btn btn-sm btn-outline-secondary");
        boton.innerHTML = "Ver";

        septimo.appendChild(boton);

        if (cond == 1) {

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
            septimo.appendChild(estrellas);
        }



        sexto.appendChild(nombre);
        sexto.appendChild(septimo);

        quinto.appendChild(sexto);

        cuarto.appendChild(quinto);

        tercero.appendChild(cuarto);

        segundo.appendChild(tercero);

        primero.appendChild(segundo);

        document.getElementById("id01").appendChild(primero);
    }


    izq = document.createElement("button");
    izq.setAttribute("class", "botonIzq  ");
    izq.setAttribute("onclick", "retroceder()");
    der = document.createElement("button");
    der.setAttribute("class", "botonDer");
    der.setAttribute("onclick", "avanzar()");

    document.getElementById("id01").appendChild(izq);
    document.getElementById("id01").appendChild(der);

}





function buscarBarra() {
    $(document).ready(function() {
        $.ajaxSetup({
            cache: false
        });
        $('#search').keyup(function() {
            $('#result').html('');
            $('#state').val('');
            var searchField = $('#search').val();
            if ($('#search').val() != "") var searchField = $('#search').val();
            else var searchField = null;
            var expression = new RegExp(searchField, "i");
            $.getJSON('https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json', function(data) {
                $.each(data, function(key, value) {
                    if (value.nom.search(expression) != -1) {
                        $('#result').append('<li class="list-group-item link-class">  <img src="' + value.imatges[0] + '" height="40" width="40" class="img-thumbnail " /> <a href="CampoFutbol.html?' + value.identificador + '" >' + value.nom + ' </a> | <span class="text-muted">' + value.geo1.city + '</span></li> <a href="CampoFutbol.html?1"</a>');
                    }
                });
            });
        });

        $('#result').on('click', 'li', function() {
            var click_text = $(this).text().split('|');
            $('#search').val($.trim(click_text[0]));
            $("#result").html('');
        });
    });
}

function mapas2() {
    mapboxgl.accessToken = 'pk.eyJ1IjoieGVzY21hcGxleCIsImEiOiJja281eTY2NW0xeGxpMnFwZ29hbWVsNnI4In0.wnoG62YT-XTclaUzBsVBhg';
    navigator.geolocation.getCurrentPosition(loc, errorL, { enableHighAccuracy: true })
}

function crearMapa(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 9
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
    el.style.width = '50px';
    el.style.height = '50px';
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
    for (i = 0; i < aux.length; i++) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        if (cond == 1) {
            el.style.backgroundImage = 'url(' + aux[i].imatges[0] + ')';
            el.setAttribute("href", "CampoFutbol.html?2")
        } else {
            el.style.backgroundImage = 'url(' + aux[i].icones[0] + ')';
        }

        el.style.width = '50px';
        el.style.height = '50px';
        el.style.backgroundSize = '100%';
        el.setAttribute("data-toggle", "tooltip");
        el.setAttribute("title", aux[i].nom);
        //Script para mostrar el nombre del campo cuando pasas el raton por encima
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        el.addEventListener('click', function() {
            window.alert('Campo');
        });

        if (cond == 1) {
            new mapboxgl.Marker(el)
                .setLngLat([aux[i].geo1.long, aux[i].geo1.lat], )
                .addTo(map);
        } else {
            new mapboxgl.Marker(el)
                .setLngLat([aux[i].geo2.long, aux[i].geo2.lat], )
                .addTo(map);
        }


    }



}

function errorL() {
    crearMapa([0], [0])

}


//En MapBox longitud va antes que latitud
function loc(position) {
    console.log(position)
    longi = position.coords.longitude;
    lati = position.coords.latitude;
    crearMapa([position.coords.longitude, position.coords.latitude])
}
function webSemanticaCampos() {
    var campo = "";
    for (var i = 0; i < aux.length; i++) {
        campo = aux[i];
        let text = {
            "@context": "https://schema.org/",
            "@type": "SportsActivityLocation",
            "name": campo.nom,
            "image": campo.imatges[0],
            "description": campo.descripcio,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": campo.geo1.address,
                "addressLocality": campo.geo1.city,
                "addressRegion": "Islas Baleares",
                "postalCode": campo.geo1.zip,
                "addressCountry": "EspaÃ±a"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": campo.geo1.lat,
                "longitude": campo.geo1.long,
            },
            "openingHours": campo.horari,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": campo.contacte.telf,
            }
        };
        document.getElementById("WS").innerHTML += JSON.stringify(text);
    }
}
