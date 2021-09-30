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
            if(!this.isRendered){
                var tmp = this.tmpBtn();

                function render(item){
                    return Mustache.render(tmp,item);
                }
                CONFIG.movie.details.forEach(item => {
                    this.$el.find("div").append(render(item));
                });
                I18n.changeLanguage("EN");
            }
            this.isRendered = true; 
		},
        
		onLangChange: function () {
			I18n.translateHTML(this.$el);
		},
        
		onClick: function($el, event) {
		   this.onEnter($el, event);
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
                        this.$el.css({opacity:0});
                        this.parent.$el.find(".header").css({opacity:0});
                        $("#trailer .trailer_video").css({opacity:0});
                        $("#trailer .trailer_image").css({opacity:0});
                        this.parent.$el.find("shadow").css({opacity:0});
                        break;
                    case 'back': 
                        this.onReturn();
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
                                    this.parent.$el.append('<div class="alert alert-warning" role="alert" data-i18n="movie"></div>');
                                    setTimeout(()=>{
                                        this.parent.$el.find(".alert").remove();
                                    },2500);
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
                        this.parent.$el.append('<div class="alert alert-success" role="alert" data-i18n="movie_watch_later_succes"></div>');
                        setTimeout(()=>{
                            this.parent.$el.find(".alert").remove();
                        },2500);
                        break;
                }
            }
            this.cp++;
		},
        
		navigate: function(direction) {
            switch(direction)
                {
                    case 'up': Focus.to(this.getFocusable(-1,true)); break;
                    case 'down': Focus.to(this.getFocusable(1,true)); break;
                }
		},

        onReturn:function () {
            this.hide();
            this.parent.sidebar.show();
            this.parent.list.show();
            this.parent.$el.find("#trailer>div").css({display:'unset'});
				this.parent.$el.find("#trailer").css({height:'58vh',width:'unset'});
				this.parent.$el.find("#trailer iframe").css({width:'741px'});
				this.parent.$el.find(".shadow").remove();
            Focus.to(this.parent.list.$el.find('.lastActive'));
            this.parent.list.$el.find('.lastActive').removeClass('lastActive');

        },

        tmpBtn:function(){
            return '<button class="btn focusable" data-action="{{action}}"><i class="{{icon}}"></i><span data-i18n="{{i18n}}"></span></button>';
        },
        
		create: function() {
			return $('#snippet-movie-details');
		}
	});

	return Snippet_Movie_Details;

})(Snippet);