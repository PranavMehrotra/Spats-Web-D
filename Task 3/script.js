function wel_func(){
    document.getElementById("wel_2").style.transform= "scale(0.2)";
    document.getElementById("wel_1").style.transform= "scale(0.2)";
    setTimeout(function(){document.getElementById("wel_2").style.display="none";
        document.getElementById("wel_1").style.display="none";},1400);
}
var l=0;
function lists(){
    if(l==0){
        l=1;
        document.getElementById("list").style.transform="translateX(0%)";
        document.getElementById("line1").style.transform="rotate(-45deg) translate(-5px,6px)";
        document.getElementById("line2").style.opacity="0";
        document.getElementById("line3").style.transform="rotate(45deg) translate(-4px,-4.5px)";
}
else {
    l=0;
    document.getElementById("list").style.transform="translateX(300%)";
    document.getElementById("line1").style.transform="rotate(0deg) translate(0,0)";
    document.getElementById("line2").style.opacity="1";
    document.getElementById("line3").style.transform="rotate(0deg) translate(0,0)";

}
}
