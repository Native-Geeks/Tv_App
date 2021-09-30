Snippet_Player = (function (Snippet) {
    var Snippet_Player = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Snippet_Player.prototype, Snippet.prototype, {

        init: function () {
            this.$controles = this.$el.find("#controles");
            this.$btnPlay = this.$el.find("#play");
            this.playIsFocused = true;
            this.firstTimePlay = true;
            this.backward_speed = 5000;
            this.forward_speed = 5000;			
            this.subtitles = new Snippet_Subtitles(this);
            
            //update timer
            Player.on(
                "timeupdate",
                function (time) {
                    this.updateControllers(Player.currentTime, Player.duration);
                },
                this
            );

            this.on("beforekey", function (keyCode) {
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
            });

            this.on("show", function () {
                if (Router.activeSceneName === "serie") {
                    $("#vid-Title").text(this.parent.serie.name);
                } else if (Router.activeSceneName === "movie") {
                    $("#vid-Title").text(this.parent.movie.name);
                }
                this.$el.css({ opacity: 1 });
                this.$el.find("#controles").css({ opacity: 1 });
                this.$el.find("#vid-Title").css({ opacity: 1 });
                $(".player").css("opacity", 1);
                //Focus.to(this.$el.find("#play-pause"));

                setTimeout(()=>{
                        this.$el.css({opacity:1});
                        Focus.to(this.$el.find("#play-pause"));
                        this.isHiding = true;
                },1500);
            });
            Player.on(
                "play",
                function () {
                    if (this.forward_speed != 5000 || this.backward_speed != 5000) {
                        Player.seek(Player.currentTime);
                        this.backward_speed = 5000;
                        this.forward_speed = 5000;
                    }
                    clearInterval(this.speed_timer);
                    //Focus.to(this.$el.find("#play-pause"));
                    this.playIsFocused = true;
                    this.$btnPlay.removeClass();
                    this.$btnPlay.addClass("fas fa-pause");
                },
                this
            );
            Player.on(
                "pause",
                function () {
                    this.$btnPlay.removeClass();
                    this.$btnPlay.addClass("fas fa-play");
                },
                this
            );
            Player.on(
                "statechange",
                function (state) {
                    if (state === Player.STATE_BUFFERING) 
                        //App.throbber(false);
                        console.log("bufff");
                },
                this
            );
            Player.on(
                "end",
                function () {
                    this.$btnPlay.removeClass();
                    this.$btnPlay.addClass("fas fa-redo");
                },
                this
            );
        },

        onClick: function ($el, event) {
            this.onEnter($el, event);
        },

        onEnter: function ($el, event) {
            var action = $el.attr("id");
            switch (action) {
                case "play-pause":
                    this.playPause();
                    break;
                case "back":
                    this.onReturn();
                    break;
                case "reply":
                    this.reply();
                    break;
                case "cc":
                    this.subtitles.show();
                    Focus.to(this.subtitles.$el.find(".focusable").first());
                    break;
                case "next":
                    break;
                case "forward":
                    this.forward(true);
                    break;
                case "backward":
                    this.backward(false);
                    break;
            }
        },

        navigate: function (direction) {
            if(!this.isHiding)
            {
            $nowEl = this.$el.find("#controles .focus");
            switch (direction) {
                case "up":
                    if (this.playIsFocused) {
                        Focus.to(
                            this.$el.find("#top-controles .focusable").first()
                        );
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
            },20000);
        },

        onReturn: function ($el, e, stop) {
            Player.stop();
            Player.hide();
            this.hide();
            Focus.to(this.parent.$el.find(".lastActivePlayer"));
            this.parent.$el.find(".lastActivePlayer").removeClass("lastActivePlayer");
            this.parent.details.$el.css({opacity:1});
            this.parent.$el.find(".header").css({opacity:1});
            $("#trailer .trailer_video").css({opacity:1});
            $("#trailer .trailer_image").css({opacity:1});
            this.parent.$el.find("shadow").css({opacity:1});
        },

        create: function () {
            return $("#snippet-player");
        },

        playPause: function () {
            if (!this.firstTimePlay) {
                if (
                    Player.currentTime === Player.duration ||
                    Player.currentState != Player.STATE_PLAYING
                )
                    Player.play();
                else if (Player.currentState === Player.STATE_PLAYING) {
                    Player.pause();
                }
            } else {
                this.firstTimePlay = false;
            }
        },

        reply: function () {
            Player.seek(0);
            Player.play();
        },

        forward: function () {
            var scope = this;
            this.backward_speed = 5000;
            this.forward_speed *= 2;
            Player.pause();

            clearInterval(this.speed_timer);
            this.speed_timer = setInterval(function () {
                if (
                    Player.duration - Player.currentTime < 30000 ||
                    Player.currentTime + scope.forward_speed > Player.duration
                ) {
                    Player.seek(Player.duration);
                    Player.play();
                }

                if (scope.forward_speed > 600000) scope.forward_speed = 600000;
                Player.currentTime += scope.forward_speed;
                scope.updateControllers(Player.currentTime, Player.duration);
            }, 1000);
        },

        backward: function () {
            var scope = this;
            this.forward_speed = 5000;
            this.backward_speed *= 2;
            Player.pause();

            clearInterval(this.speed_timer);
            this.speed_timer = setInterval(function () {
                if (scope.backward_speed > 600000) scope.backward_speed = 600000;
                Player.currentTime -= scope.backward_speed;
                console.log(Player.currentTime);
                scope.updateControllers(Player.currentTime, Player.duration);
            }, 1000);
        },

        timer: function (s) {
            if (s < 3600000) return new Date(s).toISOString().substr(14, 5);
            else return new Date(s).toISOString().substr(11, 8);
        },

        updateControllers: function (currentTime, duration) {
            $("#snippet-player #timer").text(this.timer(currentTime));
            $("#snippet-player #duration").text(this.timer(duration));
            $("#snippet-player #real-time").width(
                (currentTime / duration) * 100 + "%"
            );
        },
    });

    return Snippet_Player;
})(Snippet);
