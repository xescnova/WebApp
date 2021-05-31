var comentarios;
var Campo;
var aux = [];
var arrayCiudades = [];

function leerCampo() {
    Campo = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    Campo = parseInt(Campo.replace("?", ""));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    var myArr;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            ponerCampo(myArr, Campo);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}


function leerEquipo() {
    Campo = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    Campo = parseInt(Campo.replace("?", ""));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/clubs.json";
    var myArr;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            aux = myArr;
            ponerEquipo(myArr, Campo);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}



function ponerCampo(arr, identificador) {

    var aux2;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].identificador == identificador) {
            aux2 = arr[i];
        }
    }

    carrusel = document.createElement("div");
    carrusel.setAttribute("class", " carousel-inner");

    item = document.createElement("div");
    item.setAttribute("class", " carousel-item active");

    img = document.createElement("img");
    img.setAttribute("src", aux2.imatges[0]);
    img.setAttribute("class", "d-block w-100");
    img.setAttribute("with", "100%");
    img.setAttribute("height", "400px");

    item.appendChild(img);

    carrusel.appendChild(item);


    for (auxiliar = 1; auxiliar < aux2.imatges.length - 1; auxiliar++) {
        item = document.createElement("div");
        item.setAttribute("class", " carousel-item ");

        img = document.createElement("img");
        img.setAttribute("src", aux2.imatges[auxiliar]);
        img.setAttribute("class", "d-block w-100");
        img.setAttribute("with", "100%");
        img.setAttribute("height", "400px");

        item.appendChild(img);

        carrusel.appendChild(item);
    }


    atras = document.createElement("a");
    atras.setAttribute("class", "carousel-control-prev");
    atras.setAttribute("href", "#carouselExampleIndicators");
    atras.setAttribute("role", "button");
    atras.setAttribute("data-slide", "prev");

    opcion1 = document.createElement("span");
    opcion1.setAttribute("class", "carousel-control-prev-icon");
    opcion1.setAttribute("aria-hidden", "true");

    opcion2 = document.createElement("span");
    opcion2.setAttribute("class", "sr-only");
    opcion2.innerHTML = "Previous";

    atras.appendChild(opcion1);
    atras.appendChild(opcion2);


    avanzar = document.createElement("a");
    avanzar.setAttribute("class", "carousel-control-next");
    avanzar.setAttribute("href", "#carouselExampleIndicators");
    avanzar.setAttribute("role", "button");
    avanzar.setAttribute("data-slide", "next");

    opcion3 = document.createElement("span");
    opcion3.setAttribute("class", "carousel-control-next-icon");
    opcion3.setAttribute("aria-hidden", "true");

    opcion4 = document.createElement("span");
    opcion4.setAttribute("class", "sr-only");
    opcion4.innerHTML = "Next";

    avanzar.appendChild(opcion3);
    avanzar.appendChild(opcion4);

    document.getElementById("carouselExampleIndicators").appendChild(carrusel);
    document.getElementById("carouselExampleIndicators").appendChild(atras);
    document.getElementById("carouselExampleIndicators").appendChild(avanzar);



    info = document.createElement("p");
    info.setAttribute("class", "h5");
    text = document.createElement("strong");
    text.innerHTML = "INFORMACION";

    info.appendChild(text);



    cesped = document.createElement("p");
    cesped.innerHTML = "Cesped: " + aux2.detall;


    capacidad = document.createElement("p");
    capacidad.innerHTML = "Capacidad: " + aux2.dadesPropies.capacidad;


    telefono = document.createElement("p");
    telefono.innerHTML = "Telefono: " + aux2.contacte.telf;

    ciudad = document.createElement("p");
    ciudad.innerHTML = "Ciudad: " + aux2.geo1.city;

    direccion = document.createElement("p");
    direccion.innerHTML = "Direccion: " + aux2.geo1.address;

    document.getElementById("CampoInfo").appendChild(info);
    document.getElementById("CampoInfo").appendChild(cesped);
    document.getElementById("CampoInfo").appendChild(capacidad);
    document.getElementById("CampoInfo").appendChild(telefono);
    document.getElementById("CampoInfo").appendChild(ciudad);
    document.getElementById("CampoInfo").appendChild(direccion);



}

function commentBox() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    var ind;
    if (name == "" || comment == "") {
        alert("Porfavor introduce la informacion requerida!");
    } else {
        ind=parseInt(sessionStorage.getItem("indice"), 10);
        sessionStorage.setItem(ind+1, name);
        sessionStorage.setItem(ind+2, comment);
        sessionStorage.setItem(ind+3,Campo);
        ind=ind+3;
        sessionStorage.setItem("indice", ind);

        PonerComentario(name, comment);
        document.getElementById('name').value = "";
        document.getElementById('comment').value = "";
    }
}

function PonerComentario(NOM, COM) {

    var parent = document.createElement('div');
    var el_name = document.createElement('h5');
    var el_message = document.createElement('p');
    var el_line = document.createElement('hr');
    var txt_name = document.createTextNode(NOM);
    var txt_message = document.createTextNode(COM);
    el_name.appendChild(txt_name);
    el_message.appendChild(txt_message);
    el_line.style.border = '1px solid #000';
    parent.appendChild(el_name);
    parent.appendChild(el_line);
    parent.appendChild(el_message);
    parent.setAttribute('class', 'pane');
    document.getElementById('aux').appendChild(parent);
}

function ListaComentario() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/comentarios.json";
    var myArr;
    sessionStorage.setItem("indice", 0);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            comentarios = JSON.parse(xmlhttp.responseText);
            listCom(comentarios, Campo);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function listCom(array, iden) {
    for (i = 0; i < array.length; i++) {
        if (array[i].idCampo == iden) {
            PonerComentario(array[i].nombre, array[i].Comentario);
        }
    }
    for( i=1;i<sessionStorage.length-1;){
        if (sessionStorage.getItem(i+2)==Campo){
            PonerComentario(sessionStorage.getItem(i), sessionStorage.getItem(i+1));
        }
        
        i=i+3;
        sessionStorage.setItem("indice", i-1);
    }
     
}

function temperatura(ciudadNombre) {

    for (x = 0; x < arrayCiudades.length; x++) {
        if (arrayCiudades[x].name == ciudadNombre) {
            ciudadID = arrayCiudades[x].id;
        }
    }

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 11,
        cityid: ciudadID,
        appid: 'd44f07a3b8d7f9d25f9f2dc9b809d775',
        units: 'metric',
        containerid: 'openweathermap-widget-11',
    });
    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();

}

function leerTemp() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/ciudadesEsp.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arrayCiudades = JSON.parse(xmlhttp.responseText);
            temperatura(aux[Campo - 1].geo1.city)
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
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



    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(' + aux[Campo - 1].imatges[0] + ')';
    el.style.width = '50px';
    el.style.height = '50px';
    el.style.backgroundSize = '100%';
    el.setAttribute("data-toggle", "tooltip");
    el.setAttribute("title", aux[Campo - 1].nom);


    //Script para mostrar el nombre del campo cuando pasas el raton por encima
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    el.addEventListener('click', function() {
        window.alert('Campo');
    });

    new mapboxgl.Marker(el)
        .setLngLat([aux[Campo - 1].geo1.long, aux[Campo - 1].geo1.lat], )
        .addTo(map);


}

function errorLocation() {
    setupMap([0], [0])
}


//En MapBox longitud va antes que latitud
function successLocation(position) {
    console.log(position)
    longi = position.coords.longitude;
    lati = position.coords.latitude;
    setupMap([position.coords.longitude, position.coords.latitude])
}



function ponerEquipo(arr, identificador){

    var aux2;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].identificador == identificador) {
            aux2 = arr[i];
        }
    }


    logo= document.createElement("img");
    logo.setAttribute("src", aux2.icones[0]);
    logo.setAttribute("with", "100%");
    logo.setAttribute("height", "400px");
    document.getElementById("Fotoequipo").appendChild(logo);




    info = document.createElement("p");
    info.setAttribute("class", "h5");
    text = document.createElement("strong");
    text.innerHTML = "INFORMACION";

    info.appendChild(text);



    Categoria = document.createElement("p");
    Categoria.innerHTML = "Categoria del equipo : " + aux2.dadesPropies.categoria_equipo_principal;

    telefono = document.createElement("p");
    telefono.innerHTML = "Telefono: " + aux2.contacte.telf;

    ciudad = document.createElement("p");
    ciudad.innerHTML = "Ciudad: " + aux2.geo1.city;

    direccion = document.createElement("p");
    direccion.innerHTML = "Direccion: " + aux2.geo1.address;

    document.getElementById("EquipoInfo").appendChild(info);
    document.getElementById("EquipoInfo").appendChild(Categoria);
    document.getElementById("EquipoInfo").appendChild(telefono);
    document.getElementById("EquipoInfo").appendChild(ciudad);
    document.getElementById("EquipoInfo").appendChild(direccion);




    twitter = document.createElement("a");
    twitter.setAttribute("class","twitter-timeline");
    twitter.setAttribute("data-width","100%");
    twitter.setAttribute("data-height","400");
    twitter.setAttribute("href",aux2.contacte.xarxes[2].twitter);
    document.getElementById("CampoRed").appendChild(twitter);

    twS = document.createElement("script");
    twS.setAttribute("async","true");
    twS.setAttribute("src","https://platform.twitter.com/widgets.js");
    twS.setAttribute("charset","utf-8");
    document.getElementById("CampoRed").appendChild(twS);

 



    var arrayDeCadenas = aux2.dadesPropies.equipacion.camiseta.split("-");

    var cami, cami2, pantalones;


    cami = document.createElement("img");
    cami.setAttribute("with", "50%");
    cami.setAttribute("height", "200px");

    cami2 = document.createElement("img");
    cami2.setAttribute("with", "50%");
    cami2.setAttribute("height", "200px");

    pantalones = document.createElement("img");
    pantalones.setAttribute("with", "50%");
    pantalones.setAttribute("height", "200px");
    

    if(arrayDeCadenas.length == 2){
        
        if(arrayDeCadenas[0]=="ROJA"){
            cami.setAttribute("src", "img/CRoja.png");
        }
        if(arrayDeCadenas[0]=="AMARILLA"){
            cami.setAttribute("src", "img/CAmarilla.png");
        }
        if(arrayDeCadenas[0]=="AZUL"){
            cami.setAttribute("src", "img/CAzul.png");
        }
        if(arrayDeCadenas[0]=="BLANCA"){
            cami.setAttribute("src", "img/CBlanca.png");
        }
        if(arrayDeCadenas[0]=="VERDE"){
            cami.setAttribute("src", "img/CVerde.png");
        }
        if(arrayDeCadenas[0]=="NARANJA"){
            cami.setAttribute("src", "img/CNaranja.png");
        }

        if(arrayDeCadenas[1]=="ROJA"){
            cami2.setAttribute("src", "img/CRoja.png");
        }
        if(arrayDeCadenas[1]=="BLANCA"){
            cami2.setAttribute("src", "img/CBlanca.png");
        }
        if(arrayDeCadenas[1]==" NEGRA"){
            cami2 = document.createElement("p");
            cami2.innerHTML = arrayDeCadenas[1];
        }
        if(arrayDeCadenas[1]=="VERDE"){
            cami2.setAttribute("src", "img/CVerde.png");
        }
     
        document.getElementById("Equipación").appendChild(cami);
        document.getElementById("Equipación").appendChild(cami2);
    }else{
        if(arrayDeCadenas[0]=="ROJA"){
            cami2.setAttribute("src", "img/CRoja.png");
        }
        if(arrayDeCadenas[0]=="AMARILLA"){
            cami2.setAttribute("src", "img/CAmarilla.png");
        }
        if(arrayDeCadenas[0]=="AZUL"){
            cami2.setAttribute("src", "img/CAzul.png");
        }
        if(arrayDeCadenas[0]=="BLANCA"){
            cami2.setAttribute("src", "img/CBlanca.png");
        }
        if(arrayDeCadenas[0]=="VERDE"){
            cami2.setAttribute("src", "img/CVerde.png");
        }
        if(arrayDeCadenas[0]=="NARANJA"){
            cami2.setAttribute("src", "img/CNaranja.png");
        }

        document.getElementById("Equipación").appendChild(cami2);

    }
    
    var arrayDeCadenas = aux2.dadesPropies.equipacion.pantalon;

    if(arrayDeCadenas=="ROJO"){
        pantalones.setAttribute("src", "img/PRojo.png");
    }
    if(arrayDeCadenas=="AMARILLO"){
        pantalones.setAttribute("src", "img/PAmarillo.png");
    }
    if(arrayDeCadenas=="AZUL"){
        pantalones.setAttribute("src", "img/PAzul.png");
    }
    if(arrayDeCadenas=="BLANCO"){
        pantalones.setAttribute("src", "img/PBlanco.png");
    }
    if(arrayDeCadenas=="VERDE"){
        pantalones.setAttribute("src", "img/PVerde.png");
    }
    if(arrayDeCadenas=="NARANJA"){
        pantalones.setAttribute("src", "img/PNaranja.png");
    }
    if(arrayDeCadenas=="NEGRO"){
        pantalones.setAttribute("src", "img/PNegro.png");
    }

    document.getElementById("Equipación").appendChild(pantalones);

}
