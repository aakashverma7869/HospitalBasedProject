window.onload=function(){
    this.document.getElementById("box1").click();
}
function work(id){
    switch (id) {
        case 1:
            allclear();
            // document.getElementById("box1").style.border= "black";
            document.getElementById("img1").style.display="block";
            break;
        case 2:
             allclear(); 
            // document.getElementById("box2").style.display="none";
            document.getElementById("img2").style.display="block";
            break;
        case 3:
            allclear();
            // document.getElementById("box3").style.display="none";
            document.getElementById("img3").style.display="block";
            break;
        case 4:
            allclear();
            //document.getElementById("box4").style.display="none";
            document.getElementById("img4").style.display="block";
            break;
        case 5:
            allclear();
           // document.getElementById("box5").style.display="none";
            document.getElementById("img5").style.display="block";
            break;
        case 6:
            allclear();
            //document.getElementById("box6").style.display="none";
            document.getElementById("img6").style.display="block";
            break;
        case 7:
            allclear();
            //document.getElementById("box7").style.display="none";
            document.getElementById("img7").style.display="block";
            break;
        default:
            break;
    }
}
function allclear() {
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";

    // document.getElementById("box1").style.display="none";
    // document.getElementById("box2").style.display="none";
    // document.getElementById("box3").style.display="none";
    // document.getElementById("box4").style.display="none";
    // document.getElementById("box5").style.display="none";
    // document.getElementById("box6").style.display="none";
    // document.getElementById("box7").style.display="none";
}
