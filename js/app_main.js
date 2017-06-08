/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    var TV = new TeamView2(); 
    
    TV.checkLocalStorage();
//    document.getElementById("display").innerHTML ="";
    
    var TC = new TeamController2();
    TC.start();
};


