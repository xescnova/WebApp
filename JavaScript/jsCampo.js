var comentarios;
var Campo;

var arrayCiudades=[];
function leerCampo() {
    Campo = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    Campo= parseInt(Campo.replace("?", ""));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    var myArr;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             myArr = JSON.parse(xmlhttp.responseText);
             ponerCampo(myArr, Campo);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();  
}
function ponerCampo(arr,identificador) {

    var aux2;

    for (i = 0; i < arr.length; i++) {
        if(arr[i].identificador == identificador){
            aux2 = arr[i];
        }
    }

    carrusel=document.createElement("div");
    carrusel.setAttribute("class", " carousel slide");
    carrusel.setAttribute("id","#carouselExampleIndicators");
    carrusel.setAttribute("data-ride", " carousel");

    imagenes=document.createElement("div");
    imagenes.setAttribute("class", " carousel-inner");
    

    for(auxiliar=0;auxiliar<aux2.imatges.length - 1; auxiliar++){
        item=document.createElement("div");
        item.setAttribute("class", " carousel-item active");

        img = document.createElement("img");
        img.setAttribute("src", aux2.imatges[auxiliar]);
        img.setAttribute("class", "d-block w-100");
        img.setAttribute("with", "100%");
        img.setAttribute("height", "400px");
        
        item.appendChild(img);

        imagenes.appendChild(item);
    }
   

    atras=document.createElement("a");
    atras.setAttribute("class","carousel-control-prev");
    atras.setAttribute("href","#carouselExampleIndicators");
    atras.setAttribute("role","button");
    atras.setAttribute("data-slide","prev");

    opcion1=document.createElement("span");
    opcion1.setAttribute("class","carousel-control-prev-icon");
    opcion1.setAttribute("aria-hidden","true");

    opcion2=document.createElement("span");
    opcion2.setAttribute("class","sr-only");
    opcion2.innerHTML = "Previous";

    atras.appendChild(opcion1);
    atras.appendChild(opcion2);


    avanzar=document.createElement("a");
    avanzar.setAttribute("class","carousel-control-next");
    avanzar.setAttribute("href","#carouselExampleIndicators");
    avanzar.setAttribute("role","button");
    avanzar.setAttribute("data-slide","next");

    opcion3=document.createElement("span");
    opcion3.setAttribute("class","carousel-control-next-icon");
    opcion3.setAttribute("aria-hidden","true");

    opcion4=document.createElement("span");
    opcion4.setAttribute("class","sr-only");
    opcion4.innerHTML = "Next";

    avanzar.appendChild(opcion3);
    avanzar.appendChild(opcion4);

    carrusel.appendChild(imagenes);
    carrusel.appendChild(atras);
    carrusel.appendChild(avanzar);

    document.getElementById("CampoCarrusel").appendChild(carrusel);


    
    info=document.createElement("p");
    info.setAttribute("class","h5");
    text=document.createElement("strong");
    text.innerHTML="INFORMACION";

    info.appendChild(text);



    cesped=document.createElement("p");
    cesped.innerHTML="Cesped: " + aux2.detall;


    capacidad=document.createElement("p");
    capacidad.innerHTML="Capacidad: " + aux2.dadesPropies.capacidad;


    telefono=document.createElement("p");
    telefono.innerHTML="Telefono: "+aux2.contacte.telf;

    ciudad=document.createElement("p");
    ciudad.innerHTML="Ciudad: "+aux2.geoposicionament1.city;

    direccion=document.createElement("p");
    direccion.innerHTML="Direccion: "+aux2.geoposicionament1.address;

    document.getElementById("CampoInfo").appendChild(info);
    document.getElementById("CampoInfo").appendChild(cesped);
    document.getElementById("CampoInfo").appendChild(capacidad);
    document.getElementById("CampoInfo").appendChild(telefono);
    document.getElementById("CampoInfo").appendChild(ciudad);
    document.getElementById("CampoInfo").appendChild(direccion);



}
function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		PonerComentario(name,comment);
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
}
function PonerComentario(NOM,COM){
    var parent=document.createElement('div');
    var el_name=document.createElement('h5');
    var el_message=document.createElement('p');
    var el_line=document.createElement('hr');
    var txt_name=document.createTextNode(NOM);
    var txt_message=document.createTextNode(COM);
    el_name.appendChild(txt_name);
    el_message.appendChild(txt_message);
    el_line.style.border='1px solid #000';
    parent.appendChild(el_name);
    parent.appendChild(el_line);
    parent.appendChild(el_message);
    parent.setAttribute('class', 'pane');
    document.getElementById('aux').appendChild(parent);
}
function ListaComentario(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/comentarios.json";
    var myArr;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            comentarios = JSON.parse(xmlhttp.responseText);
             listCom(comentarios, Campo);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function listCom(array,iden){
    for (i = 0; i < array.length; i++) {
        if(array[i].idCampo == iden){
            PonerComentario(array[i].nombre,array[i].Comentario);
        }
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
            temperatura("Inca")
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

    //Despliega todos los equipos en el mapa
    
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + aux[Campo-1].imatges[0] + ')';
        el.style.width = '50px';
        el.style.height = '50px';
        el.style.backgroundSize = '100%';
        el.setAttribute("data-toggle", "tooltip");
        el.setAttribute("title", aux[Campo-1].nom);

        //Script para mostrar el nombre del campo cuando pasas el raton por encima
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        el.addEventListener('click', function() {
            window.alert('Campo');
        });
      
            new mapboxgl.Marker(el)
                .setLngLat([aux[Campo-1].geoposicionament1.long, aux[Campo-1].geoposicionament1.lat], )
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