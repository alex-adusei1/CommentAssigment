/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//this is the view class for the commentAssignment
var Comment_View= function(){
this.start= function(){
Broadcaster.suscribe('Comment Added', this.appendComment);

}

this.appendComment= function(comment){
	
	console.log(addComment(comment));
}

function addComment(comment) {
        var tmpl = document.getElementById("dispaly").innerHTML;
        
        var $tmpl = $(tmpl);
       
         $tmpl.find('.message').html(comment.getMessage());

        $(list).append($tmpl);

        
    }

   
    this.render = function (comment) {
       

        for (var i = 0; i < comment.length; i++) {
            addComment(comment[i]);
        }
    }

    this.start();
}
