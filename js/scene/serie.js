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
		},

		activate: function(account,sidebar){
			this.sidebar  = sidebar;
			this.sidebar.show();
			this.sidebar.open();
			try{
				this.sidebar.$el.find('#profile_name').text(account.name);
			}catch(err){}
			Focus.to(this.sidebar.$el.find('.focusable[data-action="Live"]'));
			if(account != null)
				this.account = account;
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