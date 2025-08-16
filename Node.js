alert("Hellow")
const song1 = new Audio("music1.mp3")
const song2 = new Audio("music2.mp3")
const song3= new Audio("music3.mp3")
const song4=new Audio("music4.mp3")
function playsong1(){
    song1.play();
}
function playsong2(){
    song2.play();

}
function playsong3(){
    song3.play();

}
function playsong4(){
    song4.play();

}
document.addEventListener("keydown",function (e){
    if (e.key == "a"|| e.key == "A") {
        playsong1();
    
    }
    if(e.key == "b" || e.key == "B") {
        playsong2();

    }
    if (e.key == "c" || e.key == "C"){
        playsong3();

    }
    if (e.key == "d" || e.key == "D"){
        playsong4();

    }
});

document.addEventListener("keyup",function (e){
    if (e.key == "a"|| e.key == "A") {
        song1.pause();
    
    }
    if(e.key == "b" || e.key == "B") {
       song2.pause();

    }
    if (e.key == "c" || e.key == "C"){
       song3.pause();
    }
    if (e.key == "d" || e.key == "D"){
       song4.pause();
    }
});
