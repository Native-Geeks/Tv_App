Snippet_Subtitles = (function(Snippet) {

	var Snippet_Subtitles = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Subtitles.prototype, Snippet.prototype, {
        
		init: function(){
            this.on("show",function(){
                this.render();
                Subtitles.show();
            });
		},
        
		render: function() {
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
        
		onEnter: function($el, event) {
            
		},
        
		navigate: function(direction) {
            if(!this.cpN)
            {
                switch(direction)
                {
                        case 'up': Focus.to(this.getFocusable(-1,true)); break;
                        case 'down': Focus.to(this.getFocusable(1,true));break;
                        case 'left': 
                            this.onReturn();
                            break;
                }
            }
            this.cpN++;
		},

		onFocus:function($el){
			
		},

        onReturn:function () {
            this.hide();
            Focus.to(this.parent.details.$el.find('.active'));
            this.parent.details.$el.find('.active').removeClass('active');
        },
        
		create: function() {
			return $('#subtitles-wrap');
		}
	});

	return Snippet_Subtitles;

})(Snippet);