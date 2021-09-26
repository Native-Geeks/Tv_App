Snippet_Movie_List = (function(Snippet) {

	var Snippet_Movie_List = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Movie_List.prototype, Snippet.prototype, {
        
		init: function(){
			this.transformX = 0;
			this.$el.find('.items').first().find('ul').css({transform:'translateX('+this.transformX+'px)'});
			this.top = this.$el[0].offsetTop;
			
			this.render();
			this.show();
		},
        
		render: function() {
			this.$el.empty();
			this.$movies = CONFIG.VOD_LIST_X;
			this.renderCategories(CONFIG.VOD);
			this.renderMovies(this.$movies);
			this.parentIsHovered = 0;
		},

		renderCategories:function(categories){
			if(categories.length && !this.isCategoriesRendered){
				categories.forEach(category => {
					this.$el.append('<div class="items" data-id="'+category.category_id+'"><h4>'+category.category_name+'</h1><ul></ul></div>');
				});
			}
			this.isCategoriesRendered = true;
			this.transformX = 0;
		},

		renderMovies:function(movies){
			if(movies.length && !this.isMovieRendered){

				var tmp = this.tmpFill();
				var index = 0;

				function fillItems(movie){
						return Mustache.render(tmp,movie);
				}

				movies.forEach(movie => {
					movie.index = index;
					this.$el.find('.items[data-id='+movie.category_id+'] ul').append(fillItems(movie));
					index +=1;
				});
			}
			this.isMovieRendered = true;
			
			//For deleting the empty categories
			for(element in this.$el.find('.items ul') ){
				try{
					if(!this.$el.find('.items ul')[element].childElementCount)
					{
						this.$el.find('.items ul')[element].parentNode.remove();
					}
				}catch(err){}
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
			var $nowEl = this.$el.find('.items .focus');
            switch(direction)
			{
				case 'down' : 
					//Focus.to(this.$el.find('.items').next().find('ul .item').first())
					this.parentIsHovered += 1;
					this.top -= 256.67;
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
						this.top += 256.67;
						this.$el.css('top',this.top);
					}					
					this.transformX = 0;
					break;
				case 'right' :
					this.transformX -=158;
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
						Focus.to($('.sidebar ul .active'));
						$('.sidebar').addClass('onfocus');
					}
					else
					{
						Focus.to($nowEl.prev());
						this.transformX +=158;
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
			var index = $el.attr('data-index');
			console.log(this.$movies[index]);
			$('#scene-movie #filmName').text(this.$movies[index].name);
			$('#scene-movie #filmYear').text(this.$movies[index].data.info.releasedate);
			$('#scene-movie #filmDuration').text(this.$movies[index].data.info.duration);
			$('#scene-movie #filmRating').text(this.$movies[index].data.info.rating);
			$('#scene-movie #filmDescription').text(this.$movies[index].data.info.plot);
			$('#scene-movie #trailer img').attr('src',this.$movies[index].data.info.movie_image);
		},

		tmpFill:function(){
			return '<li class="item focusable" data-id="{{stream_id}}" data-index="{{index}}"><img src="{{stream_icon}}" alt="{{name}}"/></li>'
		},
        
		create: function() {
			return $('#snippet-movie-list');
		}
	});

	return Snippet_Movie_List;

})(Snippet);