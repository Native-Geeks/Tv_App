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
            var action = $el.attr("data-action");
			if(action === 'Search') {this.hide(); Router.go('search',this.sidebar);}
			if(action === 'Live') {this.hide(); Router.go('live',this.sidebar);}
			if(action === 'Films') {this.hide(); Router.go('films',this.sidebar);}
			if(action === 'Series') {this.hide(); Router.go('series',this.sidebar);}
			if(action === 'Settings') {this.hide(); Router.go('settings');}
			if(action === 'Quit')	{this.parent.onReturn();}
		},
        
		navigate: function(direction) {
            switch(direction){
				case 'up': Focus.to(this.getFocusable(-1,true)); break;
				case 'down': Focus.to(this.getFocusable(1,true)); break;
				case 'right': if(Router.activeSceneName !== 'home'){this.onReturn();} break;
			}
		},

		onReturn:function(){
			Focus.to($('#snippet-home-list .items .item').first());
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