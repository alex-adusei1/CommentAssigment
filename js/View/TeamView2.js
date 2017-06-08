
var TeamView2 = function () {
    //declare variables
    
    this.parent = document.getElementById("display");
    
    this.ul = document.createElement("ul");
    
    this.render = function (arr_content) {
        
        // dont reset the the local ul but reset the new ul and replace it content
        
        this.ul.innerHTML = "";
        
        for (var i = 0; i < arr_content.length; i++) {

            var comment = arr_content[i];
            
            li = document.createElement("li");

            li.setAttribute("style", "border-bottom : 1px solid green; list-style : none");
            
            li.innerHTML = comment;

            this.ul.appendChild(li);
            
            localStorage.setItem(i, comment);
        }

        this.parent.appendChild(this.ul);
    };
    
           //this guy i can him only onces and i dont call him again

    this.checkLocalStorage = function () {
        this.parent.innerHTML = "";
        var self = this;

        if (typeof (Storage) !== "undefined") {
            
            console.log("we are local storage");

            for (var i = 0; i < localStorage.length; i++) {

                console.log(localStorage.getItem(i));

                li = document.createElement("li");
                li.setAttribute("style", "border-bottom : 1px solid green; list-style : none");

                li.innerHTML = localStorage.getItem(i);

                self.ul.appendChild(li);
            }
            
            self.parent.appendChild(self.ul);
        }
        
    };
};