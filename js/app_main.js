/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    var TV = new TeamView2();
    var TC = new TeamController2();



    var content = document.getElementById("display");
    console.log(typeof (content.value));
    
    if (typeof (content.value) === "undefined") {
        console.log("nothing is in");
        TV.checkLocalStorage();
    }
    
    
console.log(typeof (content.value))
    TC.start();


};


