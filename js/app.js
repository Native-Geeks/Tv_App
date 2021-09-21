App = (function(Events, Deferrable) {

	var App = {networkStatus: true
	};

	$.extend(true, App, Events, Deferrable, {
		
		init: function() {
			this.initRouter();
		},
		
		initRouter: function() {
			this.sidebar = new Snippet_Sidebar(this);
			Router.addScene('splash', new Scene_Splash);
			Router.addScene('profiles', new Scene_Profiles);
			Router.addScene('settings', new Scene_Settings);
			Router.addScene('home', new Scene_Home);
			Router.addScene('error', new Scene_Error);
			
			Router.go('splash',this.sidebar);
		}
	});

	// Initialize this class when Main is ready
	Main.ready(function() {
		App.init();
	});

	return App;

})(Events, Deferrable);