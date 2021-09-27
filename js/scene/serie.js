Scene_Serie = (function(Scene) {

	var Scene_Serie = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Serie.prototype, Scene.prototype, {
		
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
			this.details = new Snippet_Movie_Details(this);
			this.player = new Snippet_Player(this);
			this.list.show();
		},

		activate: function(sidebar){
			this.sidebar  = sidebar;
		},

		onReturn:function($el,e,stop){
			this.sidebar.hide();
			Router.goBack(null);
		},
		
		create: function() {
			return $('#scene-serie');
		}
	});

	return Scene_Serie;

})(Scene);