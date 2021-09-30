Player = (function(Events, Deferrable) {
	var Player = {
		STATE_IDLE: -1,
		STATE_PENDING: -1, // alias for STATE_IDLE
		STATE_BUFFERING: 0,
		STATE_PLAYING: 1,
		STATE_PAUSED: 2,
		config: {
			width: 1280,
			height: 720,
			top: 0,
			left: 0,
			seekStep: 20000
		}
	};

	$.extend(true, Player, Events, Deferrable, {
		
		init: function(config) {
			this.configure(config);

			this.url = null;
			
			this.mediaOption = {
				isTimeshiftedLiveStream: false,
				mediaType: '',
				mode4K: false
			};
			
			this.duration = 0;
			
			this.currentTime = 0;
			
			this.currentState = this.STATE_IDLE;
			
			this.prevState = null;
			
			this.speed = 1;
			
			this.looping = true;
			
			this.width = this.config.width;
			
			this.height = this.config.height;
			
			this.top = this.config.top;
			
			this.left = this.config.left;
			
			this.drmConfig = {
				type: '',
				option: {}
			};

			this.initNative();

			if (this.config.muted) {
				this.mute();
			}

			// TODO
			setTimeout(function() { Player.trigger('init'); }, 0);
		},

		deinit: function() {
			this.reset();
			this.deinitNative();
		},
		
		configure: function(config) {
			this.config = $.extend(true, this.config || {}, config);
		},
		
		initNative: function() {
			var scope = this;

			this.el = document.createElement('video');
			this.$el = $(this.el).addClass('player');
			this.$el.appendTo('body');

			this.el.addEventListener('waiting', function() {
				scope.state(scope.STATE_BUFFERING);
			});

			this.el.addEventListener('playing', function() {
				scope.state(scope.STATE_PLAYING);
			});

			this.el.addEventListener('pause', function() {
				if (!scope.duration || scope.duration > scope.currentTime) {
					scope.state(scope.STATE_PAUSED);
				}
			});

			this.el.addEventListener('ended', function() {
				scope.onEnd();
			});

			this.el.addEventListener('durationchange', function() {
				scope.onDurationChange(scope.el.duration * 1000);
			});

			this.el.addEventListener('timeupdate', function() {
				scope.onTimeUpdate(scope.el.currentTime * 1000);
			});

			this.el.addEventListener('error', function() {
				scope.onError(0, '');
			});
		},
		/**
		 * De-init native player
		 *
		 * @private
		 */
		deinitNative: function() {
			if (this.el && this.el.parentNode) {
				this.el.parentNode.removeChild(this.el);
			}
		},
		/**
		 * Call native API, override this method with your device player
		 *
		 * @private
		 * @param {String} cmd Command
		 * @param {Object} [attrs]
		 */
		native: function(cmd, attrs) {
			var scope = this, listener;

			if (cmd === 'play') {
				if (typeof attrs.url !== 'undefined' && this.el.src !== this.url) {
					console.network('PLAYER', this.url);
					this.el.src = this.url;
				}

				this.el.play();

				if (attrs && attrs.position) {
					listener = function(event) {
						scope.el.currentTime = attrs.position / 1000;
						scope.el.removeEventListener('canplay', listener);
					};

					this.el.addEventListener('canplay', listener);
				}

				return true;

			} else if (cmd === 'pause') {
				return this.el.pause();

			} else if (cmd === 'stop') {
				this.$el.removeAttr('src'); // for html5 video player and reset
				return this.el.pause();

			} else if (cmd === 'seek') {
				this.el.currentTime = attrs.position / 1000;
				return true;

			} else if (cmd === 'playbackSpeed') {
				this.el.playbackRate = attrs.speed;
				return this.el.playbackRate;

			} else if (cmd === 'show') {
				this.width = attrs.width || this.width;
				this.height = attrs.height || this.height;
				this.top = (typeof attrs.top !== 'undefined' ? attrs.top : this.top);
				this.left = (typeof attrs.left !== 'undefined' ? attrs.left : this.left);

				setTimeout(()=>{
					this.$el.css({
						width: '100vw',
						height: '100vh',
						left: this.left,
						top: this.top
					});
				},500);
				

				this.$el.show();

			} else if (cmd === 'hide') {
				this.$el.hide();

			} else if (cmd === 'setVideoDimensions') {
				var h = Math.round((this.width / attrs.width) * attrs.height);

				this.$el.css({
					height: h,
					top: Math.round((this.height - h) / 2)
				});

			} else if (cmd === 'audioTrack') {

			} else if (cmd === 'mute') {
				this.el.muted = true;

			} else if (cmd === 'unmute') {
				this.el.muted = false;
			}
		},
		
		onDurationChange: function(duration) {
			this.duration = Math.round(duration);
			this.trigger('durationchange', this.duration);
		},
		
		onTimeUpdate: function(time) {
			time = Math.round(time);

			if (this.duration <= 0 || this.duration >= time) {
				this.currentTime = time;
				this.trigger('timeupdate', this.currentTime);
			}
		},
		
		onEnd: function() {
			if (this.looping && this.duration) {
				this.seek(0);
				this.native('play');

			} else if(!this.isLiveTV){ // fix for LiveTV added by Siemens - we should find a way to not need this
				this.state(this.STATE_IDLE);
				this.trigger('end', this.currentTime);
			}
		},
		
		onError: function(code, msg, details) {
			this.trigger('error', code, msg, details);
		},
		
		deriveMediaType: function(url) {
			var mediaType;
			if(url.match(/\/manifest/i)) {
				mediaType = 'SMOOTH_STREAMING';
			} else if(url.match(/\.wvm/)) {
				mediaType = 'WIDEVINE';
			} else if(url.match('/\.mpd/')) {
				mediaType = 'MPEG-DASH';
			} else if(url.match(/\.mp4/)){
				mediaType = 'MP4';
			} else if(url.match(/\.m3u8/)) {
				mediaType = 'HLS';
			} else {
				mediaType = '';  // unknown
			}
			return mediaType;
		},

		state: function(state) {
			if (typeof state !== 'undefined') {
				if (this.currentState !== this.STATE_BUFFERING) {
					this.prevState = this.currentState;
				}

				this.currentState = state;
				this.trigger('statechange', this.currentState);
				return true;
			}

			return this.currentState;
		},
		
		reset: function() {

			this.url = null;
			this.duration = 0;
			this.currentTime = 0;
			this.currentState = this.STATE_IDLE;
			this.speed = 1;
			this.width = this.config.width;
			this.height = this.config.height;

			this.trigger('reset');
		},
		
		show: function(width, height, left, top) {
			this.native('show', {
				width: width,
				height: height,
				left: left,
				top: top
			});

			document.body.className = String(document.body.className).replace(/\s?player-window\-[\d\-]+/g, '') + ((this.width < 1280 || this.height < 720) ? ' player-window-' + (this.width || 1280) + '-' + (this.height || 720) + '-' + (this.left || 0) + '-' + (this.top || 0) : '');

			this.trigger('show');
		},
		
		hide: function() {
			this.native('hide');
			this.trigger('hide');
		},
		
		fullscreen: function() {
			return this.show(1280, 720, 0, 0);
		},
		
		setURL: function(url) {
			this.reset();

			this.url = url;
			this.trigger('url', this.url);
		},
		
		setDrm: function(drmConfig) {
			this.drmConfig = drmConfig || {};
			this.trigger('drmConfig', this.drmConfig);
		},
		
		play: function(url, position, mediaOption, looping) {
			if (!position && typeof url === 'number') {
				position = url;
				url = null;
			}

			if (url) {
				if (this.url && this.currentState !== this.STATE_IDLE) {
					this.stop();
				}

				this.setURL(url);
				this.looping = looping || false;
				this.mediaOption = mediaOption || {};
			}

			if (!this.url) {
				throw new Error('No video URL specified in Player');
			}

			this.show();

			if (this.speed !== 1) {
				this.playbackSpeed(1);
			}

			this.native('play', {
				url: url,
				position: position
			});

			this.trigger('play', this.url, position);
		},
		/**
		 * Pause playback
		 * @fires pause
		 */
		pause: function() {
			if (this.speed !== 1) {
				this.playbackSpeed(1);
			}

			this.native('pause');
			this.trigger('pause');
		},
		/**
		 * Stop playback and reset player
		 * @fires stop
		 */
		stop: function() {
			this.native('stop');
			this.trigger('stop', this.currentTime);

			this.reset();
		},
		/**
		 * Seek playback
		 *
		 * @param {Number} position Time position (ms)
		 * @fires seek
		 */
		seek: function(position) {
			if (String(position).match(/\%/)) {
				// percent
				position = this.duration / 100 * parseFloat(position);
			}

			position = position >> 0;

			if (position < 0) {
				position = 0;

			} else if (position > this.duration) {
				position = this.duration;
			}

			this.native('seek', {
				position: position
			});

			this.startSeek();
			this.trigger('seek', position);
		},
		
		startSeek: function() {
			var scope = this,
				remain = 20;

			// clear interval
			this.clearSeekInterval();

			this.trigger("seek-start");
			this.triggerHandle = setInterval(function() {
				if (remain == 0) {
					// finished but without success
					scope.clearSeekInterval();
					scope.trigger("seek-end");
				} else {
					remain--;
					if (scope.currentState == scope.STATE_PLAYING) { // movie is already playing ?
						scope.clearSeekInterval();
						scope.trigger("seek-end");
					}
				}
			}, 1000);
		},
		/**
		 * If seeking is finished then this is called
		 * @private 
		 * 
		 */
		clearSeekInterval: function() {
			// clear interval
			if (this.triggerHandle) {
				clearInterval(this.triggerHandle);
				this.triggerHandle = null;
			}
		},
		/**
		 * Fast Forward
		 *
		 * @param {Number/String} skip Skip time (ms or %)
		 */
		forward: function(skip) {
			if (typeof skip === 'string' && skip.match(/\%/)) {
				skip = Math.round(this.duration / 100 * parseFloat(skip));
			}

			if (!skip) {
				skip = this.config.seekStep;
			}

			this.seek(this.currentTime + skip);
		},
		/**
		 * Fast Backward
		 *
		 * @param {Number/String} skip Skip time (ms or %)
		 */
		backward: function(skip) {
			if (typeof skip === 'string' && skip.match(/\%/)) {
				skip = Math.round(this.duration / 100 * parseFloat(skip));
			}

			if (!skip) {
				skip = this.config.seekStep;
			}

			this.seek(this.currentTime - skip);
		},
		/**
		 * Set playback speed
		 *
		 * @param {Number} speed
		 * @fires playbackspeed
		 */
		playbackSpeed: function(speed) {
			speed = speed >> 0;

			this.speed = speed;
			this.native('playbackSpeed', {
				speed: this.speed
			});
			this.trigger('playbackspeed', this.speed);
		},
		/**
		 * Set video dimensions
		 *
		 * @param {Number} width
		 * @param {Number} height
		 */
		setVideoDimensions: function(width, height) {
			this.native('setVideoDimensions', {
				width: width,
				height: height
			});
		},
		/**
		 * Set audio track by its index
		 *
		 * @param {Number} index (0..)
		 */
		audioTrack: function(index) {
			this.native('audioTrack', {
				index: index
			});
		},
		/**
		 * Get current state in text form for debugging.
		 *
		 * @returns {String}
		 */
		getState: function() {
			switch (this.currentState) {
				case this.STATE_IDLE:
					return "STATE = STATE_IDLE";
				case this.STATE_BUFFERING:
					return "STATE = STATE_BUFFERING";
				case this.STATE_PLAYING:
					return "STATE = STATE_PLAYING";
				case this.STATE_PAUSED:
					return "STATE = STATE_PAUSED";
				default:
					return "STATE = undefined";
			}
		},
		/**
		 * Get unique ESN code. It is used for DRM verification.
		 * 
		 * @returns {String}
		 * @private
		 */
		getESN: function() {
			return Device.getUID();
		},
		/*
		 * Mute audio
		 * @fires mute
		 */
		mute: function() {
			this.native('mute');
			this.trigger('mute');
		},
		/*
		 * Un-mute audio
		 * @fires unmute
		 */
		unmute: function() {
			this.native('unmute');
			this.trigger('unmute');
		},
		/*
		 * Volume content (Not yet fully supported)
		 * 
		 * @param {Number} direction + volume up or - volume down
		 * @param {Number} percent Hom much be volume changed
		 */
		volume: function (direction, percent) {
			this.native('volume', { percent: percent, direction: direction });
		},
		
	});

	// Initialize this class when Main is ready
	Main.ready(function() {
		Player.init(CONFIG.player);
	});

	Main.unload(function() {
		Player.deinit();
	});

	return Player;

})(Events, Deferrable);