Scene_Movie = (function(Scene) {

	var Scene_Movie = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Movie.prototype, Scene.prototype, {
		
		init: function(){

		},
		
		render: function() {			
			/*console.log(CONFIG.LIVE);
			console.log(CONFIG.LIVE_LIST_X);
			console.log(CONFIG.VOD);
			console.log(CONFIG.VOD_LIST_X);
			console.log(CONFIG.SERIES);
			console.log(CONFIG.SERIES_LIST_X);*/
			this.list = new Snippet_Movie_List(this);
			this.list.show();
		},

		activate: function(sidebar){
			this.sidebar  = sidebar;
		},

		onReturn:function($el,e,stop){
			this.sidebar.$el.find('.focusable').last().click();
		},
		
		create: function() {
			return $('#scene-movie');
		}
	});

	return Scene_Movie;

})(Scene);