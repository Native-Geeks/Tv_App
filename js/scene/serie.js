Scene_Serie = (function(Scene) {

	var Scene_Serie = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Serie.prototype, Scene.prototype, {
		
		render: function() {
			this.list = new Snippet_Serie_List(this);
			this.details = new Snippet_Serie_Details(this);
			this.episodes = new Snippet_Serie_Episodes(this);
			this.player = new Snippet_Player(this);
			this.episodes = new Snippet_Serie_Episodes(this);
			this.subtitles = new Snippet_Subtitles(this);
			this.list.show();
		},

		activate: function(sidebar){
			this.sidebar  = sidebar;
			Focus.to();
		},
		
		create: function() {
			return $('#scene-serie');
		}
	});

	return Scene_Serie;

})(Scene);