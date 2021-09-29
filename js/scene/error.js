 Scene_Error = (function(Scene) {

	var Scene_Error = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Error.prototype, Scene.prototype, {
		
		activate: function(errMsg) {
			if(errMsg!=null){this.$el.find('.error-404 p.mb-2').text(errMsg);}
			I18n.changeLanguage('EN');
			Focus.to(this.$el.find('.error-404 button'));
		},
		
		onLangChange: function () {
            I18n.translateHTML(this.$el);
        },
		
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
		
		onEnter: function($el, event) {
			Router.go('splash');
		},
		
		create: function() {
			return $('#scene-error');
		}
	});

	return Scene_Error;

})(Scene);