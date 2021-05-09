var myArr;
var aux;
var opcion = 0;
var indice = 0;
var longi; //Posición longitud del usuario
var lati; //Posición latitud del usuario
var cond;

var posicion=0;

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

function avanzar(){

    if(indice<Math.trunc(myArr.length / 6)){
        posicion+=6;
        indice+=1;
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
    }

}
function retroceder(){

    if(posicion!=0){
        posicion-=6;
        indice-=1;
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
    }
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

    for (i = posicion;   i < arr.length && i < posicion +6; i++) {


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


    izq=document.createElement("button");
    izq.setAttribute("class","botonIzq  ");
    izq.setAttribute("onclick","retroceder()");
    der=document.createElement("button");
    der.setAttribute("class","botonDer");
    der.setAttribute("onclick","avanzar()");

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
                        $('#result').append('<li class="list-group-item link-class">  <img src="' + value.imatges[0] + '" height="40" width="40" class="img-thumbnail " /> <a href="CampoFutbol.html?' + value.identificador + '" >' + value.nom + ' </a> | <span class="text-muted">' + value.geoposicionament1.city + '</span></li> <a href="CampoFutbol.html?1"</a>');
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





