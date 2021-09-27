Snippet_Movie_Details = (function(Snippet) {

	var Snippet_Movie_Details = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Movie_Details.prototype, Snippet.prototype, {
        
		init: function(){
            this.on("show",function(){
                this.render();
            });
		},
        
		render: function() {
            this.$el.find('#director').text(this.parent.movie.data.info.director);
            this.$el.find('#genre').text(this.parent.movie.data.info.genre);
            this.$el.css({top:this.parent.$el.find('#filmDescription')[0].offsetTop+this.parent.$el.find('#filmDescription')[0].offsetHeight+10});
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
        
		onEnter: function($el, event) {
            var action = $el.attr('data-action');
            switch(action){
                case 'watch': 
                    this.parent.videoUrl = this.parent.movie.data.movie_data.stream_url;
                    this.parent.player.show();
                    break;
                case 'trailer': 
                    break;
                case 'cc': 
                    break;
                case 'later': 
                    break;
            }
		},
        
		navigate: function(direction) {
            switch(direction)
                {
                    case 'up': Focus.to(this.getFocusable(-1,true)); break;
                    case 'down': 
                        if(this.getFocusable(1,true).length){
                            Focus.to(this.getFocusable(1,true)); 
                        }
                        else{
                            this.onReturn();
                        }
                        break;
                }
		},

		onFocus:function($el){
			
		},

        onReturn:function () {
            this.hide();
            this.parent.list.top -= this.parent.list.topAdded;
            this.parent.list.$el.css({top:this.parent.list.top});
            Focus.to(this.parent.list.$el.find(' .lastActive'));
            this.parent.list.$el.find(' .lastActive').removeClass('lastActive');
        },
        
		create: function() {
			return $('#snippet-movie-details');
		}
	});

	return Snippet_Movie_Details;

})(Snippet);