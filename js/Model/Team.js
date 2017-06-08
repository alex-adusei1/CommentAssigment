/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Model for the commentAssignment

var Comment= function(title, message){

	this.title=title;
	
	this.message=message;

	this.getTitle=function(){
		return this.title;

	}
	this.getMessage=function(){
		return this.message;
	}
	this.setMessage=function(message){
		this.message=message;
	}
	this.setTitle=function(title){
		this.title=title;
	}
}

