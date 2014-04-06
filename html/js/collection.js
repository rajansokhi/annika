$(document).ready(function(){

    var div1 = $('#test1');
    var div2 = $('#test2');
    var div3 = $('#test3');
    var div4 = $('#test4');
    var div5 = $('#test5');
    var div6 = $('#test6');
    var div7 = $('#test7');

    startAnimation();

function startAnimation(){
    div7.animate({right:'700px',opacity:'1'},1000,"swing",startAnimation2);
}
function startAnimation2(){
    div6.animate({right:'400px',opacity:'1'},1000,"swing",startAnimation3);
}
function startAnimation3(){
    div5.animate({right:'300px',opacity:'1'},1000,"swing",startAnimation4);
}
function startAnimation4(){
    div4.animate({right:'-100px',opacity:'1'},1000,"swing",startAnimation5);
}
function startAnimation5(){
    div3.animate({right:'-500px',opacity:'1'},1000,"swing",startAnimation6);
}
function startAnimation6(){
    div2.animate({right:'-700px',opacity:'1'},1000,"swing",startAnimation7);
}
function startAnimation7(){
    div1.animate({right:'10px',opacity:'1'},1000,"swing");
}
});