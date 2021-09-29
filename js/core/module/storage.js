Storage = (function(Events) {
    var Storage = {	config: null,    };

    $.extend(true, Storage, Events, {
		
	init: function(config) {
	    this.configure(config);
	},
	
	configure: function(config) {
	    this.config = $.extend(true, this.config || {}, config);
	},
	
	set: function(name, value) {
	    if (window.localStorage) {
		return window.localStorage.setItem(name, JSON.stringify(value));
	    }

	    return false;
	},
	
	get: function(name) {
	    var value;
	    
	    if (window.localStorage) {
		value = window.localStorage.getItem(name);
		if(typeof value !== 'undefined'){
      try{
		    return JSON.parse(value);
      }
      catch(e){
        return value;
      }
		}
	    }

	    return false;
	},

	removeItem: function(item){
	    if(window.localStorage){
		return window.localStorage.removeItem(item);
	    }
	    
	    return false;
	},
	
	clear: function(){
	    if(window.localStorage){
		return window.localStorage.clear();
	    }
	    
	    return false;
	}
    });

    // Initialize this class when Main is ready
    Main.ready(function(){
	Storage.init();
    });

    return Storage;

})(Events);