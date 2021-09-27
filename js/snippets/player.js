Snippet_Player = (function (Snippet) {
    var Snippet_Player = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Snippet_Player.prototype, Snippet.prototype, {
        init: function () {
            var title = "Just testing before real launch";
            $("#vid-Title").text(title);
            this.$controles = this.$el.find("#controles");
            this.$watchLine = this.$el.find("#real-time");
            this.$vidTime = this.$el.find("#timer");
            this.$vidDuration = this.$el.find("#duration");
            this.$btnPlay = this.$el.find("#play");
            this.$AudioCCList = this.$el.find("#audio-cc-list");
            this.topIsFocused = false;
            this.ccIsFocused = false;
            this.playIsFocused = true;
            Focus.to(this.$el.find("#play-pause"));

            //update timer
            Player.on("timeupdate",function (time) {
                    this.$vidTime.text(this.timer(Player.currentTime));
                    this.$vidDuration.text(this.timer(Player.duration));
                    this.$watchLine.width(
                        (Player.currentTime / Player.duration) * 100 + "%"
                    );
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
                this.$el.css({display:'none'});
                
                
                $('.player').css('opacity',1);
                Player.play(this.parent.videoUrl);
                setTimeout(()=>{
                    this.$el.css({display:'inline'});
                },500);
                
            });

            this.renderAudioCC();
        },

        renderAudioCC: function () {
            if(!this.isRendered)
            {
                this.$AudioCCList.empty();
                var tmpAudio = this.tmpAudio();
                var tmpCC = this.tmpCC();
                if (CONFIG.player.Audio.length) {
                    this.$AudioCCList.append("<ul id ='Audios'>Audios</ul>");
                    CONFIG.player.Audio.forEach((audio) => {
                        this.$AudioCCList.find("#Audios").append(fillAudio(audio));
                        function fillAudio(audio) {
                            return Mustache.render(tmpAudio, audio);
                        }
                    });
                }
                if (CONFIG.player.Subtitles.length) {
                    this.$AudioCCList.append("<ul id ='CCs'>Subtitle</ul>");
    
                    CONFIG.player.Subtitles.forEach((sub) => {
                        this.$AudioCCList.find("#CCs").append(fillCC(sub));
    
                        function fillCC(sub) {
                            return Mustache.render(tmpCC, sub);
                        }
                    });
                }
            }            
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
            switch (direction) {
                case "up":
                    if (this.ccIsFocused) { if (this.getFocusable(-1, true).hasClass("audCC")){Focus.to(this.getFocusable(-1, true));} } 
                    else if (this.playIsFocused) {
                        Focus.to(this.$el.find("#top-controles .focusable").first());
                        this.topIsFocused = true;
                        this.playIsFocused = false;
                        this.$nowEl = this.$el.find("#top-controles .focus");
                    }
                    break;
                case "left":
                    if (this.topIsFocused) {
                        Focus.to(this.$nowEl.prev());
                        this.$nowEl = this.$el.find("#top-controles .focus");
                    } else if (this.ccIsFocused) {
                        $("#audio-cc-list").hide();
                        Focus.to(this.$el.find("#top-controles .focusable").first());
                        this.topIsFocused = true;
                        this.ccIsFocused = false;
                        this.$nowEl = this.$el.find("#top-controles .focus");
                        this.$controles.show();
                    }
                    break;
                case "right":
                    if (this.topIsFocused) {
                        Focus.to(this.$nowEl.next());
                        this.$nowEl = this.$el.find("#top-controles .focus");}
                    break;
                case "down":
                    if (this.topIsFocused) {
                        Focus.to(this.$el.find("#play-pause"));
                        this.topIsFocused = false;
                        this.playIsFocused = true;
                    } else if (this.ccIsFocused) { if (this.getFocusable(1, true).hasClass("audCC")){Focus.to(this.getFocusable(1, true));}}
                    break;
            }
        },

        onReturn: function ($el, e, stop) {
            this.$btnPlay.addClass("fa-play");
            this.$btnPlay.removeClass("fa-pause");
            Player.pause();
            Player.hide();
            this.$el.hide();
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

        cc: function () {
            if (CONFIG.Audio.length && CONFIG.Subtitles.length) {
                this.$AudioCCList.show();
                this.$controles.hide();
                this.ccIsFocused = true;
                this.topIsFocused = false;
                if (CONFIG.Audio.length)
                    Focus.to(this.$el.find("#Audios .focusable").first());
                else if (CONFIG.Subtitles.length)
                    Focus.to(this.$el.find("#CCs .focusable").first());
            }
        },

        timer: function (s) {
            if (s < 3600000) return new Date(s).toISOString().substr(14, 5);
            else return new Date(s).toISOString().substr(11, 8);
        },
    });

    return Snippet_Player;
})(Snippet);
