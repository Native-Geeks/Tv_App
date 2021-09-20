 Scene_Error = (function(Scene) {

	var Scene_Error = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Scene_Error.prototype, Scene.prototype, {
		
		init: function(){
			
		},
		
		render: function() {
			if(Main.device[0] === 'webos') {
				Device.clearHistory();
			}
		},
		
		activate: function() {
			
		},
		
		onLangChange: function () {
			
		},
		
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
		
		onEnter: function($el, event) {
			
		},
		
		navigate: function(direction) {
			if (direction == "left") Focus.to(this.getCircleFocusable(-1));
			else if (direction == "right") Focus.to(this.getCircleFocusable(1));
		},
		
		create: function() {
			return $('#scene-error');
		}
	});

	return Scene_Error;

})(Scene);