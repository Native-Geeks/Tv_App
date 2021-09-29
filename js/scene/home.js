Scene_Home = (function(Scene) {

	var Scene_Home = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Home.prototype, Scene.prototype, {

		activate: function(account,sidebar){
			this.sidebar  = sidebar;
			this.sidebar.show();
			this.sidebar.open();
			try{
				this.sidebar.account = account;
				this.sidebar.$el.find('#profile_name').text(account.name);
			}catch(err){}
			Focus.to(this.sidebar.$el.find('.focusable[data-action="Live"]'));
			if(account != null)
				this.account = account;
		},

		onReturn:function($el,e,stop){
			this.sidebar.onReturn();
		},
		
		create: function() {
			return $('#scene-home');
		}
	});

	return Scene_Home;

})(Scene);