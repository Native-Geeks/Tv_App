Snippet_Player = (function (Snippet) {
    var Snippet_Player = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Snippet_Player.prototype, Snippet.prototype, {
        init: function () {

            this.$controles = this.$el.find("#controles");
            this.$btnPlay = this.$el.find("#play");
            
            function timer(s) {
                if (s < 3600000) return new Date(s).toISOString().substr(14, 5);
                else return new Date(s).toISOString().substr(11, 8);
            }

            function updateControllers(currentTime,duration){
                $("#snippet-player #timer").text(timer(currentTime));
                $("#snippet-player #duration").text(timer(duration));
                $("#snippet-player #real-time").width(
                        (currentTime / duration) * 100 + "%"
                    );
            }
            //update timer
            Player.on("timeupdate",function (time) {
                updateControllers(Player.currentTime,Player.duration);
            });

            Player.on("end",function () {
                    this.$btnPlay.removeClass("fa-pause");
                    this.$btnPlay.addClass("fa-redo");
            });

            this.on("beforekey",function (keyCode) {
                    if (keyCode === Control.key.RETURN) {
                        this.onReturn();
                        return;
                    }
                    if (keyCode === Control.key.PLAY) {
                        this.play();
                        return false;
                    } else if (keyCode === Control.key.PAUSE) {
                        this.pause();
                        return false;
                    } else if (keyCode === Control.key.FF) {
                        this.forward();
                        return false;
                    } else if (keyCode === Control.key.RW) {
                        this.backward();
                        return false;
                    } else if (keyCode === Control.key.STOP) {
                        this.onReturn();
                        return false;
                    }
                }
            );

            this.on("show",function() {
                if(Router.activeSceneName === 'serie') {$("#vid-Title").text(this.parent.serie.name);}
                else if(Router.activeSceneName === 'movie')  {$("#vid-Title").text(this.parent.movie.name);}
                
                $('.player').css('opacity',1);
                this.playIsFocused = true;
                Player.play(this.parent.videoUrl);

                setTimeout(()=>{
                    this.$el.css({opacity:1});
                    Focus.to(this.$el.find("#play-pause"));
                    this.setTimeout = setTimeout(()=>{
                        this.$el.find('#controles').css({opacity:0});
                        this.$el.find('#vid-Title').css({opacity:0});
                        this.isHiding = true;
                    },2000);
                },1500);

            });
        },

        tmpAudio: function () {
            return "<li class='focusable audCC' data-id='{{id}}'>{{title}}</li>";
        },
        tmpCC: function () {
            return "<li class='focusable audCC' data-id='{{id}}'>{{title}}</li>";
        },

        onClick: function ($el, event) {
            this.onEnter($el, event);
        },

        onEnter: function ($el, event) {
            var action = $el.attr("id");
            switch (action) {
                    case "play-pause": this.playPause(); break;
                    case "back": this.onReturn(); break;
                    case "reply": this.reply(); break;
                    case "cc": this.cc(); break;
                    case "next": break;
            }
        },

        navigate: function (direction) {
            try{
                clearTimeout(this.setTimeout);
            }catch(err){}

            if(!this.isHiding)
            {
                $nowEl = this.$el.find('#controles .focus');
                switch (direction) {
                    case "up":
                        if (this.playIsFocused) {
                            Focus.to(this.$el.find("#top-controles .focusable").first());
                            this.playIsFocused = false;
                        }
                        break;
                    case "left":
                        Focus.to($nowEl.prev());
                        break;
                    case "right":
                        Focus.to($nowEl.next());
                        break;
                    case "down":
                        if (!this.playIsFocused) {
                            Focus.to(this.$el.find("#play-pause"));
                            this.playIsFocused = true;
                        }
                        break;
                }
            }
            this.$el.find('#controles').css({opacity:1});
            this.$el.find('#vid-Title').css({opacity:1});
            this.isHiding = false;
            this.setTimeout = setTimeout(()=>{
                this.$el.find('#controles').css({opacity:0});
                this.$el.find('#vid-Title').css({opacity:0});
                this.isHiding = true;
            },2000);
        },

        onReturn: function ($el, e, stop) {
            Player.pause();
            Player.hide();
            this.hide();
            Focus.to(this.parent.$el.find('.lastActivePlayer'));
            this.parent.$el.find('.lastActivePlayer').removeClass('lastActivePlayer');
        },

        create: function () {
            return $("#snippet-player");
        },

        playPause: function () {
            if (this.$btnPlay.hasClass("fa-play")) {
                this.$btnPlay.removeClass("fa-play");
                this.$btnPlay.addClass("fa-pause");
                Player.play();
            } else if (this.$btnPlay.hasClass("fa-redo")) {
                this.$btnPlay.removeClass("fa-redo");
                this.$btnPlay.addClass("fa-pause");
                Player.play();
            } else {
                this.$btnPlay.addClass("fa-play");
                this.$btnPlay.removeClass("fa-pause");
                Player.pause();
            }
        },
        
        reply: function () {
            if (Player.currentTime === Player.duration)
                this.$btnPlay.removeClass("fa-redo");
            else this.$btnPlay.removeClass("fa-play");
            this.$btnPlay.addClass("fa-pause");
            Player.currentTime = 0;
            Player.play();
        },
    });

    return Snippet_Player;
})(Snippet);
