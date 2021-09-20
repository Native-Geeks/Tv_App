Scene_Home = (function(Scene) {

	var Scene_Home = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Home.prototype, Scene.prototype, {
		
		init: function(){

		},
		
		render: function() {
			this.sidebar = new Snippet_Sidebar(this);
			this.list = new Snippet_Home_List(this);
			Focus.to(this.$el.find('#snippet-home-list li').first());
			/*console.log(CONFIG.LIVE);
			console.log(CONFIG.LIVE_LIST_X);
			console.log(CONFIG.VOD);
			console.log(CONFIG.VOD_LIST_X);
			console.log(CONFIG.SERIES);
			console.log(CONFIG.SERIES_LIST_X);*/
		},

		activate: function(account){
			if(account != null)
				this.account = account;
		},
		
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
		
		onEnter: function($el, event) {
		},
		
		navigate: function(direction) {
		/*	if (direction == "left") Focus.to(this.getCircleFocusable(-1));
			else if (direction == "right") Focus.to(this.getCircleFocusable(1));*/
		},

		onReturn:function($el,e,stop){
			this.sidebar.hide();
			Router.goBack(null);

		},
		
		create: function() {
			return $('#scene-home');
		}
	});

	return Scene_Home;

})(Scene);