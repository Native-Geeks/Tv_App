Snippet_Live_List = (function(Snippet) {

	var Snippet_Live_List = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Live_List.prototype, Snippet.prototype, {
        
		init: function(){
			this.transformX = 0;
			this.$el.find('.items').first().find('ul').css({transform:'translateX('+this.transformX+'px)'});
			this.top = this.$el[0].offsetTop;
			
			// Show/Hide
            this.on('show', function() {
                this.uiVisible = true;
                if (!this.$el.hasClass('ui-visible')) {
                    this.$el.addClass('ui-visible');
                }
            }, this);

            // Hide events
            this.on('hide', function() {
                if (!this.uiVisible) return;
                this.uiVisible = false;
                this.$el.removeClass('ui-visible');
            }, this);
			
			this.render();
			this.show();
		},
        
		render: function() {
			this.$el.empty();
			this.renderLive(CONFIG.LIVE_LIST_X);
			this.renderMovie(CONFIG.VOD_LIST_X);
			this.renderSerie(CONFIG.SERIES_LIST_X);
			this.parentIsHovered = 0;
		},

		renderLive:function(lives){
			if(lives.length && !this.isLiveRendered){
				this.$el.append("<div class='items'><h4>Lives</h1><ul>");

				var tmp = this.tmpFill();

				function fillItems(live){
						return Mustache.render(tmp,live);
				}

				lives.forEach(live => {
					if(live.strem_icon==null)
						live.strem_icon = live.cover;

					this.$le.find('ul').last().append(fillItems(live))
				});
			}
			this.isLiveRendered = true;
			this.transformX = 0;
		},

		renderMovie:function(movies){
			if(movies.length && !this.isMovieRendered){
				this.$el.append("<div class='items'><h4>Movies</h1><ul>");

				var tmp = this.tmpFill();

				function fillItems(movie){
						return Mustache.render(tmp,movie);
				}

				movies.forEach(movie => {
					if(movie.strem_icon==null)
					movie.strem_icon = movie.cover;
					this.$el.find('ul').last().append(fillItems(movie))
				});
			}
			this.isMovieRendered = true;
		},

		renderSerie:function(movies){
			if(movies.length && !this.isSerieRendered){
				this.$el.append("<div class='items'><h4>Series</h1><ul>");

				var tmp = this.tmpFill();

				function fillItems(movie){
						return Mustache.render(tmp,movie);
				}

				movies.forEach(movie => {
					movie.stream_icon = movie.cover;
					this.$el.find('ul').last().append(fillItems(movie))
				});
			}
			this.isSerieRendered = true;
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
			var $nowEl = this.$el.find('.items .focus');
            switch(direction)
			{
				case 'down' : 
					//Focus.to(this.$el.find('.items').next().find('ul .item').first())
					this.parentIsHovered += 1;
					this.top -= 231.27;
					this.$el.css('top',this.top);
					this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).find('.active').removeClass('active');
					$nowEl.addClass('active');
					
					this.transformX = 0;

					if(!this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('.active').length)
					{
						Focus.to(this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('li').first());
						this.transformX =0;
						this.$el.find($nowEl[0].parentNode).css({transform:'translateX('+this.transformX+'px)'});
					}
					else
					{
						Focus.to(this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).next().find('li').first());
						this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('.active').removeClass('active');
					}

					break;
				case 'up' : 
				this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).find('.active').removeClass('active');
					$nowEl.addClass('active');
					if(!this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('.active').length)
					{
						Focus.to(this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('li').first());
						this.transformX =0;
						this.$el.find($nowEl[0].parentNode).css({transform:'translateX('+this.transformX+'px)'});
					}
					else
					{
						Focus.to(this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('.active'));
						this.$el.find(this.$el.find($nowEl[0].parentNode)[0].parentNode).prev().find('.active').removeClass('active');
					}
					
					if(this.top<(this.parent.$el[0].offsetHeight/2))
					{
						this.parentIsHovered -= 1;
						this.top += 231.27;
						this.$el.css('top',this.top);
					}					
					this.transformX = 0;
					break;
				case 'right' :
					this.transformX -=304;
					this.$el.find($nowEl[0].parentNode).css({transform:'translateX('+this.transformX+'px)'})
					Focus.to($nowEl.next());
					//console.log( this.$el.find('.items').first())
					/*this.$el.find('.items').forEach(element => {
							console.log(element);
					}); */
					break; 
					case 'left' :
					if(this.transformX === 0)
					{
						Focus.to($('.sidebar ul .sidebar-btn').first());
						$('.sidebar').addClass('onfocus');
					}
					else
					{
						Focus.to($nowEl.prev());
						this.transformX +=304;
						this.$el.find($nowEl[0].parentNode).css({transform:'translateX('+this.transformX+'px)'})
					}
						
						//console.log( this.$el.find('.items').first())
						/*this.$el.find('.items').forEach(element => {
								console.log(element);
						}); */
						break; 
			}
			

		},

		onFocus:function($el){
			//console.log($el);
		},

		tmpFill:function(){
			return '<li class="item focusable" data-type="{{stream_type}}" data-id="{{stream_id}}" data-name="{{name}}" data-img="{{stream_icon}}" data-category="{{category_id}}"><img src="{{stream_icon}}" alt="{{name}}"/></li>'
		},
        
		create: function() {
			return $('#snippet-live-list');
		}
	});

	return Snippet_Live_List;

})(Snippet);