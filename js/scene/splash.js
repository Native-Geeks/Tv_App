Scene_Splash = (function(Scene) {

	var Scene_Splash = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Splash.prototype, Scene.prototype, {
		
		init: function(){},
		
		activate: function() {
			
		},
		render:function(){		
			setTimeout(()=>{
					Router.go('profiles', CONFIG.profiles.accounts)
			},1000);
		},
		
		onLangChange: function () {

		},

		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},

		create: function() {
			return $('#scene-splash');
		}
	});

	return Scene_Splash;

})(Scene);