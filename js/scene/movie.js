Scene_Movie = (function(Scene) {

	var Scene_Movie = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Movie.prototype, Scene.prototype, {
		
		render: function() {			
			this.list = new Snippet_Movie_List(this);
			this.details = new Snippet_Movie_Details(this);
			this.player = new Snippet_Player(this);
			this.subtitles = new Snippet_Subtitles(this);
			this.list.show();
		},

		activate: function(sidebar){
			if(sidebar != null) {this.sidebar  = sidebar;}
		},
		
		create: function() {
			return $('#scene-movie');
		}
	});

	return Scene_Movie;

})(Scene);