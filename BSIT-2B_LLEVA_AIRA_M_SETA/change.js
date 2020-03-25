
var color= ["","Blue" , "Red" , "Gray" , "Yellow" , "Orange" , "Black"];
var i=0;
document.querySelector("#button").addEventListener("click", function(){
    i=i<color.length ? ++i:0;
    document.querySelector("#motor").style.background=color[i]
})
function Show(){
    var setColor=Math.floor (Math.random()*16777215).toString(16);
    document.getElementById("motor").style.backgroundColor="#"+ setColor; }
    function Show(){
    var select = document.getElementById("option").value;

    if ( select=="color1"){
    document.getElementById("motor").style.background="blue";
    }
    
    if ( select=="color2"){
    document.getElementById("motor").style.background="red";
    }
    if ( select=="color3"){
    document.getElementById("motor").style.background="gray";
    }
    if ( select=="color4"){
    document.getElementById("motor").style.background="yellow";
    }
    if ( select=="color5"){
    document.getElementById("motor").style.background="orange";
    }
    if ( select=="color6"){
    document.getElementById("motor").style.background="black";
    }
    
    }
    function Reset(){
    var reset = document.querySelector("#motor").style.backgroundColor ="white"; }