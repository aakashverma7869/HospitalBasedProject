
window.onload=function(){
    if(this.document.getElementById("para_id1"))
    {
        this.work1(1);
        this.document.getElementById("para_id1").click();
    }
    else{
        this.document.getElementById("box1").click();
    } 
    
}
function work(id){
    switch (id) {
        case 1:
            allclear();
            document.getElementById("box1").style.color= "#070f35";
            document.getElementById("box_span1").style.color = "#94bedd";
            document.getElementById("box1").style.borderColor = "#94bedd";
            document.getElementById("img1").style.display="block";
           
            break;
        case 2:
             allclear();

             document.getElementById("box2").style.color= "#070f35";
             document.getElementById("box_span2").style.color = "#94bedd";
             document.getElementById("box2").style.borderColor = "#94bedd";
            document.getElementById("img2").style.display="block";
            break;
        case 3:
            allclear();
            document.getElementById("box3").style.color= "#070f35";
            document.getElementById("box_span3").style.color = "#94bedd";
            document.getElementById("box3").style.borderColor = "#94bedd";
            document.getElementById("img3").style.display="block";
            break;
        case 4:
            allclear();
            document.getElementById("box4").style.color= "#070f35";
            document.getElementById("box_span4").style.color = "#94bedd";
            document.getElementById("box4").style.borderColor = "#94bedd";
            document.getElementById("img4").style.display="block";
            break;
        case 5:
            allclear();
            document.getElementById("box5").style.color= "#070f35";
            document.getElementById("box_span5").style.color = "#94bedd";
            document.getElementById("box5").style.borderColor = "#94bedd";
            document.getElementById("img5").style.display="block";
            break;
        case 6:
            allclear();
            document.getElementById("box6").style.color= "#070f35";
            document.getElementById("box_span6").style.color = "#94bedd";
            document.getElementById("box6").style.borderColor = "#94bedd";
            document.getElementById("img6").style.display="block";
            break;
        case 7:
            allclear();
            document.getElementById("box7").style.color= "#070f35";
            document.getElementById("box_span7").style.color = "#94bedd";
            document.getElementById("box7").style.borderColor = "#94bedd";
            document.getElementById("img7").style.display="block";
            break;
        default:
            break;
    }
}
function allclear() {
    // document.getElementById("box1").style.color= "#ccc";
   for(var i=1; i<8;i++)
   {
    document.getElementById("box"+i).style.borderColor = "#ccc";
    document.getElementById("box"+i).style.color= "#ccc";
    document.getElementById("box_span"+i).style.color = "#ccc";
    document.getElementById("img"+i).style.display="none";   
   }
    // document.getElementById("img1").style.display="none";
    // document.getElementById("img2").style.display="none";
    // document.getElementById("img3").style.display="none";
    // document.getElementById("img4").style.display="none";
    // document.getElementById("img5").style.display="none";
    // document.getElementById("img6").style.display="none";
    // document.getElementById("img7").style.display="none";

    // document.getElementById("box1").style.display="none";
    // document.getElementById("box2").style.display="none";
    // document.getElementById("box3").style.display="none";
    // document.getElementById("box4").style.display="none";
    // document.getElementById("box5").style.display="none";
    // document.getElementById("box6").style.display="none";
    // document.getElementById("box7").style.display="none";
}
function ALERTFunction() {
    alert("Yet this function is NOT Complete (UNDERCONSTRUCTION)!");
  }

function hidediv()
{
    
    document.getElementById("alert").style.visibility="hidden";
    document.getElementById("alert").style.display="none";

    // document.getElementById("alert").style.display="none";
}
 setTimeout("hidediv()",3000);


 function crousalindex(id){
    // for(var i=0; i<4;i++)
    // {
    // document.getElementsByClassName('div-5')[i].style.display='none';
    // }
    // var first = document.querySelector(".div-5")[2];
    // first.style.display = "none";
    // document.getElementById("crosal1").style.display = "none";
    // document.getElementById("crosal2").style.display = "flex";
    switch (id) {
        case 1:
            document.getElementById("crosal1").style.display = "none";
            document.getElementById("crosal2").style.display = "flex";
            break;
        case 2:
            document.getElementById("crosal1").style.display = "flex";
            document.getElementById("crosal2").style.display = "none";
            break;
    }

}


// function showProfile(){
//     var dropdown = document.querySelector(".nav-user-profile");
//     if(dropdown.style.display != "block"){
//         dropdown.style.display = "block";
//     }else{
//         dropdown.style.display = "none";
//     }
// }


function ScheduleFunction(){
    document.getElementById("Editpanel").style.display="none";
    document.getElementById("AddPanel").style.display="block";
    document.getElementById("AllPanel").style.display="none";

    document.getElementById("pro").style.color= "black";
    document.getElementById("edi").style.color= "red";
    document.getElementById("ediA").style.color= "black";

}

function ProfileFunction(){
    document.getElementById("Editpanel").style.display="block";
    document.getElementById("AddPanel").style.display="none";
    document.getElementById("AllPanel").style.display="none";
    
    document.getElementById("edi").style.color= "black";
    document.getElementById("pro").style.color= "red";
    document.getElementById("ediA").style.color= "black";

}
function AllSchedule(){
    document.getElementById("Editpanel").style.display="none";
    document.getElementById("AddPanel").style.display="none";
    document.getElementById("AllPanel").style.display="block";
    document.getElementById("pro").style.color= "black";
    document.getElementById("edi").style.color= "black";
    document.getElementById("ediA").style.color= "red";

}
function AllSubSchedule(param){
   // allclearSchedule(param)
    parent = param.parentElement.parentElement
    console.log("paraent is -->",parent);
    console.log("param is --->",param)
   var z =  parent.querySelector("#AllSlot");
   var y = parent.querySelector("#viewDetails");
   if (z.style.display=="none"){
    z.style.display = "block";

    y.innerHTML = "Hide Details";
    }
    else{
        z.style.display = "none";
        y.innerHTML = "View Details";
    }

}


function passwordToggle(){
    var y = document.getElementById("abc");
    var x = document.getElementById("myInput");
    y.classList.toggle("fa-eye");
    y.classList.toggle("fa-eye-slash");
    
    if (x.type === "password") {
        x.type = "text";
    } else {
      x.type = "password";
    }
}

function work1(id){
    switch (id) {
        case 1:
            allclear1();
          
            document.getElementById("para_id1").style.display="block";
           
            break;
        case 2:
             allclear1(); 
            // document.getElementById("box2").style.display="none";
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