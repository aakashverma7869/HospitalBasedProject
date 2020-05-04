  window.onload=function(){
     this.work1(1);
}
function work1(id){
    switch (id) {
        case 1:
            allclear1();
            
            document.getElementById("para_id1").style.display="block";
           
            break;
        case 2:
             allclear1(); 
            document.getElementById("para_id2").style.display="block";
            break;
        case 3:
            allclear1();
            // document.getElementById("box3").style.display="none";
            document.getElementById("para_id3").style.display="block";
            break;
        case 4:
            allclear1();
            //document.getElementById("box4").style.display="none";
            document.getElementById("para_id4").style.display="block";
            break;
        case 5:
            allclear1();
           // document.getElementById("box5").style.display="none";
            document.getElementById("para_id5").style.display="block";
            break;
        case 6:
            allclear1();
            //document.getElementById("box6").style.display="none";
            document.getElementById("para_id6").style.display="block";
            break;
        case 7:
            allclear1();
            //document.getElementById("box7").style.display="none";
            document.getElementById("para_id7").style.display="block";
            break;
        default:
            break;
    }
}
function allclear1() {
    document.getElementById("para_id1").style.display="none";
    document.getElementById("para_id2").style.display="none";
    document.getElementById("para_id3").style.display="none";
    document.getElementById("para_id4").style.display="none";
    document.getElementById("para_id5").style.display="none";
    document.getElementById("para_id6").style.display="none";
    document.getElementById("para_id7").style.display="none";

}