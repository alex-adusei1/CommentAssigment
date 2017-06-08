var Broadcaster = {

    events: {},

    suscribe: function(event_name,callback){
        if(!this.events[event_name]){
            this.events[event_name] = []
        }
        this.events[event_name].push(callback);
      // console.log(event_name,callback);
    },

    notify: function(event_name){

        var args = [];
        for(var i = 1; i < arguments.length; i++){
            args.push(arguments[i]);
        }

        if(this.events[event_name]){
            for(var i = 0; i < this.events[event_name].length; i++){
                var func = this.events[event_name][i];
                func.apply(this,args);
            }
        }
       console.log(event_name);
    } 
}
