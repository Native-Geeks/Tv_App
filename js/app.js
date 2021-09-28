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
			Router.addScene('error', new Scene_Error);

			Router.addScene('search', new Scene_Search);
			Router.addScene('home', new Scene_Home);
			Router.addScene('live', new Scene_Live);
			Router.addScene('movie', new Scene_Movie);
			Router.addScene('serie', new Scene_Serie);
			
			
			Router.go('splash',this.sidebar);
		}
	});

	// Initialize this class when Main is ready
	Main.ready(function() {
		App.init();
	});

	return App;

})(Events, Deferrable);