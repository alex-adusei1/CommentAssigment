
var TeamView2 = function () {
    //declare variables
    
    this.parent = document.getElementById("display");
//    this.parent.innerHTML = "";
    this.ul = document.createElement("ul");
    
    this.render = function (arr_content) {

        this.checkLocalStorage();

        for (var i = 0; i < arr_content.length; i++) {

            var comment = (i + 1) + ". " + arr_content[i];
            
            localStorage.setItem(i, comment);
            
            li = document.createElement("li");

            li.setAttribute("style", "border-bottom : 2px solid gray; list-style : none");

            li.innerHTML = comment;

            this.ul.appendChild(li);
        }

        this.parent.appendChild(ul);
    };

    this.checkLocalStorage = function () {
        
        this.parent.innerHTML = "";
        
        var self = this;
        var old_data = document.getElementById("oldData");


        if (typeof (Storage) !== "undefined") {
            console.log("we are local storage");


            console.log(old_data);

            for (var i = 0; i < localStorage.length; i++) {

                console.log(localStorage.getItem(i));

                li = document.createElement("li");

                li.innerHTML = localStorage.getItem(i);

                self.ul.appendChild(li);
            }
            
            self.parent.appendChild(self.ul);
        }
        
    };
};