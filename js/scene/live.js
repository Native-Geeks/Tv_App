Scene_Live = (function(Scene) {

	var Scene_Live = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Live.prototype, Scene.prototype, {
		
		init: function(){

		},
		
		render: function() {			
			/*console.log(CONFIG.LIVE);
			console.log(CONFIG.LIVE_LIST_X);*/
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

		create: function() {
			return $('#scene-live');
		}
	});

	return Scene_Live;

})(Scene);