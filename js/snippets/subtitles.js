Snippet_Subtitles = (function(Snippet) {

	var Snippet_Subtitles = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Subtitles.prototype, Snippet.prototype, {
        
		init: function(){			
			console.log("zxcvghjkl");
			this.on("show",function(){
				
				this.$el.addClass("show_details");
				this.renderAudioCC();
            });
		},
        
		render: function() {
		},
		
		onClick: function($el, event) {
		   this.onEnter($el, event);
		},
        
		onEnter: function($el, event) {
			
		},
        
		navigate: function(direction) {
            switch(direction){
				case 'up': Focus.to(this.getFocusable(-1,true)); break;
				case 'down': Focus.to(this.getFocusable(1,true)); break;
			}
		},

		onLangChange: function () {
			I18n.translateHTML(this.$el);
		},
        
		onReturn:function(){
			this.hide();
            Focus.to(this.parent.details.$el.find('.active'));
            this.parent.details.$el.find('.active').removeClass('active');
		},

		renderAudioCC: function () {
			console.log(this.$el);
            if(!this.isRendered)
            {
				this.$el.empty();
                var tmpAudio = this.tmpAudio();
                var tmpCC = this.tmpCC();

				function fillAudio(audio) {
					return Mustache.render(tmpAudio, audio);
				}
				function fillCC(sub) {
					return Mustache.render(tmpCC, sub);
				}

                if (CONFIG.player.Audio.length) {
					this.$el.append('<ul id="audio"><h6>Audios</h6></ul>');
                    CONFIG.player.Audio.forEach((audio) => {
                        this.$el.find("#audio").append(fillAudio(audio));
                    });
                }
                if (CONFIG.player.Subtitles.length) {
					this.$el.append('<ul id="cc"><h6>Subtitles</h6></ul>');
                    CONFIG.player.Subtitles.forEach((sub) => {
                        this.$el.find("#cc").append(fillCC(sub));
                    });
                }
            }            
        },

		tmpAudio: function () {
            return "<li class='focusable' data-id='{{id}}'>{{title}}</li>";
        },
        tmpCC: function () {
            return "<li class='focusable' data-id='{{id}}'>{{title}}</li>";
        },
        
		create: function() {
			return $('#snippet-subtitles-audio');
		}
	});

	return Snippet_Subtitles;

})(Snippet);