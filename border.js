var box_radius = document.getElementById("box-radius");

var top_left = document.getElementById("top-left");
var top_right = document.getElementById("top-right");
var bottom_right = document.getElementById("bottom-right");
var bottom_left = document.getElementById("bottom-left");

top_left.onchange = atualizar;
top_right.onchange = atualizar;
bottom_left.onchange = atualizar;
bottom_right.onchange = atualizar;

function atualizar(){

    var propriedade = "border-radius: " +
    top_left.value + "px " + top_right.value + "px " +
    bottom_right.value +"px " + bottom_left.value + "px ;";

    box_radius.style = propriedade;
    
    document.getElementById('teste').innerHTML = propriedade;

}


