

// var yosh = +prompt("Yoshingizni kiriting");

// if(yosh > 0 && yosh <= 18){
//     alert("Yoshsz. O'qishingiz kerak");
// }
// else if(yosh > 18 && yosh <= 50){
//     alert("ishlashingiz kerak");
// }
// else if(yosh > 50 && yosh <= 59 ){
//     alert("Yaqinda pensiyaga chiqasz");
// }
// else if(yosh > 59 && yosh <= 150){
//     alert("Pensionerga ohshaysz hali  tirik bolsangiz "); 
// }else{
//     alert("Nimadur notog'ri ketib qoldi ");
// }

var son_1 = +prompt("1-sonni kiriting");
var son_2 = +prompt("2-sonni kiriting");
var son_3 = +prompt("3-sonni kiriting");

if(son_1 > son_2 && son_1 < son_3 || son_1 < son_2 && son_1 > son_3){
    alert("ortanchi son:" + son_1);
} 
else if(son_2 > son_1 && son_2 < son_3 || son_2 < son_1 && son_2 > son_3){
    alert("ortanchi son:" + son_2);
}
 else if(son_3 > son_1 && son_3 < son_2 || son_3 < son_1 && son_3 > son_2){
    alert("ortanchi son:" + son_3);
}
else{
    alert("Notogri kiritingiz. Boshqatdan kiriting")
}