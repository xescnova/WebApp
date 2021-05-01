function leerJson() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/xescnova/WebApp/main/json/campos.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status ==
            200) {
            var myArr =
                JSON.parse(xmlhttp.responseText);
            campos(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function OrdenarCapacidadMenor(arr){
    arr.sort(function (a, b) {
        if (a.dadesPropies.capacidad > b.dadesPropies.capacidad) {
          return 1;
        }
        if (a.dadesPropies.capacidad < b.dadesPropies.capacidad) {
          return -1;
        }
        return 0;
      });
      leerJson();
}

function OrdenarCapacidadMayor(arr){
    arr.sort(function (a, b) {
        if (a.dadesPropies.capacidad < b.dadesPropies.capacidad) {
          return 1;
        }
        if (a.dadesPropies.capacidad > b.dadesPropies.capacidad) {
          return -1;
        }
        return 0;
      });
      leerJson();
}
function OrdenarValoracionMenor(arr){
    arr.sort(function (a, b) {
        if (a.puntuacio> b.puntuacio) {
          return 1;
        }
        if (a.puntuacio < b.puntuacio) {
          return -1;
        }
        return 0;
      });
      leerJson();
}
function OrdenarValoracionMayor(arr){
    arr.sort(function (a, b) {
        if (a.puntuacio < b.puntuacio) {
          return 1;
        }
        if (a.puntuacio > b.puntuacio) {
          return -1;
        }
        return 0;
      });

      leerJson();
}

function botones(){

    bot=document.createElement("button");
    bot.setAttribute("type","button");
    bot.setAttribute("class","btn btn-outline-secondary");
    bot.setAttribute("onclick","");
}

function campos(arr) {
 
    var i;
   /* arr.filter(cesped => {
        return cesped.detall == "Natural";
      });*/
      
      
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

        var aux=arr[i].imatges;

        img = document.createElement("img");
        img.setAttribute("src", aux[0]);
        img.setAttribute("class", "card-img-top");
        img.setAttribute("with", "300" );
        img.setAttribute("height", "300" );

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

        puntuacion=arr[i].puntuacio

        estrellas=document.createElement("form");
        aux=document.createElement("p");

        for (tab= 0; tab < puntuacion; tab++) {
            aux2=document.createElement("label2");
            aux2.innerHTML="&#9733";
            aux.appendChild(aux2);
        }
        for (tab = 0; tab < 5-puntuacion; tab++) {
            aux2=document.createElement("label");
            aux2.innerHTML="&#9733";
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