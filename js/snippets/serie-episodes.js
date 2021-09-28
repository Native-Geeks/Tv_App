Snippet_Serie_Episodes = (function(Snippet) {

	var Snippet_Serie_Episodes = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Serie_Episodes.prototype, Snippet.prototype, {
        
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
                this.parent.serie.data.seasons.forEach(season => {
                    this.$el.append('<h6>'+season.name+'</h6><ul></ul>');
                    var i = 0;
                    while(i<season.episode_count)
                    {
                        ++i;
                        this.$el.find('ul').last().append('<li class="focusable" data-season="'+season.name+'" data-episode="'+i+'">Episode '+i+'</li>');
                    }
                });
            }
            this.isRendered = true;
            Focus.to(this.$el.find('.focusable').first());
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
        
		onEnter: function($el, event) {
            if(this.cp)
            {
                var id = $el.attr('data-id');
                
            }
            this.cp++;
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
			return $('#snippet-serie-episodes');
		}
	});

	return Snippet_Serie_Episodes;

})(Snippet);