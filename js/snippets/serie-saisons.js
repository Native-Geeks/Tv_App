Snippet_Serie_Saisons = (function(Snippet) {

	var Snippet_Serie_Saisons = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Serie_Saisons.prototype, Snippet.prototype, {
		init: function(){
            this.on("show",function(){
                this.render();
                 
            });
		},
        
		render: function() {
            this.$el.css({left:this.parent.$el.find('#snippet-serie-details')[0].offsetLeft+this.parent.$el.find('#snippet-serie-details')[0].offsetWidth+16});
            this.cp = 0;
            
            if(!this.isRendered)
            {
                this.cpN = 0;
                this.$el.append('<ul></ul>');
                this.$el.css({top: this.parent.details.$el[0].offsetTop+ this.parent.details.$el.find("div")[0].offsetTop+16});
                this.parent.serie.data.seasons.forEach(season => {                    
                    this.$el.find('ul').last().append('<li class="focusable" data-season="'+season.name+'">'+season.name+'</li>');
                });
            }
            this.isRendered = true;
            Focus.to(this.$el.find('.focusable').first());
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter($el, event);
		},
        
		onEnter: function($el, event) {
            if(this.cp)
            {
                var id = $el.attr('data-id');
                
            }
            this.cp++;
		},
        
		navigate: function(direction) {
                switch(direction)
                {
                        case 'up': Focus.to(this.getFocusable(-1,true)); break;
                        case 'down': Focus.to(this.getFocusable(1,true));break;
                        case 'left': 
                            this.onReturn();
                            break;
                }
		},

        onReturn:function () {
            this.hide();
            Focus.to(this.parent.details.$el.find('.active'));
            this.parent.details.$el.find('.active').removeClass('active');
        },
        
		create: function() {
			return $('#snippet-serie-saisons');
		}
	});

	return Snippet_Serie_Saisons;

})(Snippet);