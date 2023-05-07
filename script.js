var index=0;
var count=0;
function changebackgroundcolor(){
    var color=["#FF55BB","aquamarine","#99A98F","#A0D8B3","#B0DAFF","#E3F2C1","aqua","grey","#F79540","#ECC9EE"];

    document.getElementsByTagName("body")[0].
    style.background=color[index++];

    if(index>color.length-1)
     index=0;
}

function changetextcolor(){
    var txtcolor=["#83764F","#146C94","#4C3D3D","#8B1874","#394867","#643A6B","#41644A","#070A52","#4F4557","#FDF4F5","#77037B","A4BC92","black"];

    document.getElementsByClassName("container2")[0].
    style.color=txtcolor[count++];

    if(count>txtcolor.length-1)
     count=0;
}