var l=0;
function lists(){
    if(l==0){
        l=1;
        document.getElementById("list").style.display="flex";
        document.getElementById("line1").style.transform="rotate(-45deg) translate(-5px,6px)";
        document.getElementById("line2").style.opacity="0";
        document.getElementById("line3").style.transform="rotate(45deg) translate(-4px,-4.5px)";
        translate(1);
}
else {
    l=0;
    document.getElementById("list").style.display="none";
    document.getElementById("line1").style.transform="rotate(0deg) translate(0,0)";
    document.getElementById("line2").style.opacity="1";
    document.getElementById("line3").style.transform="rotate(0deg) translate(0,0)";
    translate(0);
}
}

function translate(y){
    if(y==1){
        document.getElementById("card").style.transform="translateY(70vh)";
        document.getElementById("query").style.transform="translateY(70vh)";
        document.getElementById("form").style.transform="translateY(70vh)";
    } 
    if(y==0){
        document.getElementById("card").style.transform="translateY(0)";
    document.getElementById("query").style.transform="translateY(0)";
    document.getElementById("form").style.transform="translateY(0)";
    }
}

function Pic_on(x){
    if (x==0){
        document.getElementById("Pranav").style.transform="translate(420px,-320px)";
    document.getElementById("Pranav").style.display="block";
}
else if (x==1){
    document.getElementById("Pranav").style.transform="translate(420px,-130px)";
    document.getElementById("Pranav").style.display="block";
}
}

function Pic_off(){
    document.getElementById("Pranav").style.display="none";
}
