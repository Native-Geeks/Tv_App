Scene_Splash = (function(Scene) {

	var Scene_Splash = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Splash.prototype, Scene.prototype, {
		
		init: function(){
			
			if(Storage.get("settings") == null){
				Storage.set("settings",{
					lang:"EN",
					color:"red",
					timezone:"0",
					epginfo:"Disabled"
				});
			}
		},
		
		activate: function(sidebar) {
			this.sidebar = sidebar;
			
		},
		render:function(){		
			setTimeout(()=>{
					Router.go('profiles', CONFIG.profiles.accounts,this.sidebar);
			},1000);
		},
		
		create: function() {
			return $('#scene-splash');
		}
	});

	return Scene_Splash;

})(Scene);