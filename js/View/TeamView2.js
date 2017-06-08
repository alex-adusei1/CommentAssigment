
var TeamView2 = function(){
    
    this.render = function(arr_content){
      var parent = document.getElementById("display");
      parent.innerHTML = "";
      var ul = document.createElement("ul"); 
      
      for(var i = 0; i < arr_content.length; i++){
          var comment = arr_content[i];
          console.log(comment);
          
          li = document.createElement("li");
          li.setAttribute("style", "list-style : none ");
          
          li.innerHTML = comment;
          
          ul.appendChild(li);
      }
      
      parent.appendChild(ul);
    };
};