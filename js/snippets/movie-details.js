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
            this.cp = 0;
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter(this, arguments);
		},
        
		onEnter: function($el, event) {
            if(this.cp)
            {
                var action = $el.attr('data-action');
                switch(action){
                    case 'watch': 
                        $el.addClass('lastActivePlayer');
                        this.parent.videoUrl = this.parent.movie.data.movie_data.stream_url;
                         Player.play(this.parent.videoUrl);
                        this.parent.player.show();
                        break;
                    case 'trailer': 
                        $('#scene-movie #trailer iframe').attr('src','https://www.youtube-nocookie.com/embed/'+this.parent.movie.data.info.youtube_trailer+'?controls=0&autoplay=1&loop=1&mute=1&playlist='+this.parent.movie.data.info.youtube_trailer);
                        $('#scene-movie #trailer img').hide();
                        $('#scene-movie #trailer iframe').show();
                        break;
                    case 'cc': 
                        $el.addClass('active');
                        this.parent.subtitles.show();
                        break;
                    case 'later':
                        var id = this.parent.sidebar.account.id;
                        if(Storage.get("watch_later")==null)
                        {
                            Storage.set("watch_later",{});
                        }
                        var list = Storage.get("watch_later");
                        if(list["N"+id]==null)
                        {
                            eval("list.N"+(id)+" = []");
                        }
                        var lst = list["N"+id];
                        var film = this.parent.movie;
                        if(lst.length)
                        {
                            for(movie in lst)
                            {
                                if(lst[movie].type == "movie" && lst[movie].id ==  film.stream_id)
                                {
                                    return;
                                }
                            }
                        }
                        lst.push({
                            type:"movie",
                            id:film.stream_id,
                            imgUrl:film.stream_icon
                        });
                                      
                        
                        Storage.set("watch_later",list);
                        break;
                }
            }
            this.cp++;
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