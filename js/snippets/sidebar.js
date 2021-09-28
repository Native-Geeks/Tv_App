 Snippet_Sidebar = (function(Snippet) {

	var Snippet_Sidebar = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Sidebar.prototype, Snippet.prototype, {
        
		init: function(){			
			this.render();
		},
        
		render: function() {
            if(!this.isRendered){
				tmpCenter = this.tmpCenter();

				function fillCenter(item){
					return Mustache.render(tmpCenter,item)
				}

				function fillBottom(item){
					return Mustache.render(tmpCenter,item)
				}
				this.$el.find('#sidebar-list').empty();

				CONFIG.sidebar.center.forEach(item => {
					this.$el.find('#sidebar-list').append(fillCenter(item));
				});

				this.$el.find('#sidebar-footer').empty();
				CONFIG.sidebar.bottom.forEach(item => {
					this.$el.find('#sidebar-footer').append(fillBottom(item))
				});
			}
			this.isRendered = true;
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
        
		onEnter: function($el, event) {
			if(this.$activeEl != null){
				this.$activeEl.removeClass('active');
			}
			this.$activeEl = $el;
			this.$activeEl.addClass('active');
            var action = $el.attr("data-action");
			if(action === 'Search') {this.close(); Router.go('search',this);}
			if(action === 'Live') {this.close(); Router.go('live',this); Focus.to($('#scene-'+Router.activeSceneName+' .focusable').first());}
			if(action === 'Films') {this.close(); Router.go('movie',this); Focus.to($('#scene-'+Router.activeSceneName+' .focusable').first());}
			if(action === 'Series') {this.close(); Router.go('serie',this); Focus.to($('#scene-'+Router.activeSceneName+' .focusable').first()); }
			if(action === 'Settings') {this.hide(); Router.go('settings',true); return;}
			if(action === 'Quit')	{this.hide();Router.go('profiles');}
		},
        
		navigate: function(direction) {
            switch(direction){
				case 'up': Focus.to(this.getFocusable(-1,true)); break;
				case 'down': Focus.to(this.getFocusable(1,true)); break;
				case 'right': 
					if(Router.activeSceneName !== 'home')
					{
						if($('#scene-'+Router.activeSceneName+' .lastActive').length){
							Focus.to($('#scene-'+Router.activeSceneName+' .lastActive'));}
						else{
							Focus.to($('#scene-'+Router.activeSceneName+' .focusable').first()); 
						}
						this.close();
					} 
					return;
			}
		},

		onReturn:function(){
			Focus.to($('.focusable').first());
			this.hide();
		},

		open:function(){
			this.$el.addClass('onfocus');
		},

		close:function(){
			this.$el.removeClass('onfocus');
		},

		tmpCenter:function(){
			return '<li class="sidebar-btn focusable" data-action="{{label}}"><i class="{{class}}"></i><span>{{label}}</span></li>'
		},
        
		create: function() {
			return $('#snippet-sidebar');
		}
	});

	return Snippet_Sidebar;

})(Snippet);