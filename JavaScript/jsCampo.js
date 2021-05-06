var comentarios;
var Campo;
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

    var aux;

    for (i = 0; i < arr.length; i++) {
        if(arr[i].identificador == identificador){
            aux = arr[i];
        }
    }

    var aux2 = aux.imatges;
    aux.geoposicionament1.city

        img = document.createElement("img");
        img.setAttribute("src", aux2[0]);
        img.setAttribute("class", "card-img-top");
        img.setAttribute("with", "300");
        img.setAttribute("height", "300");

        document.getElementById("cosa").appendChild(img);




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

