 Snippet_Sidebar = (function(Snippet) {

	var Snippet_Sidebar = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Sidebar.prototype, Snippet.prototype, {
        
		init: function(){
			// Show/Hide
            this.on('show', function() {
                this.uiVisible = true;
                if (!this.$el.hasClass('ui-visible')) {
                    this.$el.addClass('ui-visible');
                }
            }, this);

            // Hide events
            this.on('hide', function() {
                if (!this.uiVisible) return;
                this.uiVisible = false;
                this.$el.removeClass('ui-visible');
            }, this);
			
			this.render();
			this.show();
			this.$el.removeClass('onfocus');
		},
        
		render: function() {
			try{
				this.$el.find('#profile_name').text(this.parent.account.name);
			}catch(err){}
			
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
        
		activate: function() {
		},
        
		onLangChange: function () {

		},
        
		onClick: function($el, event) {
		   this.onEnter.apply(this, arguments);
		},
        
		onEnter: function($el, event) {
            var action = $el.attr("data-action");
			if(action === 'Quit')	{this.parent.onReturn();}
		},
        
		navigate: function(direction) {
			var nowEl = this.$el.find('ul .focus');
			
				
            switch(direction){
				/*case'up' : 
					if(nowEl[0] == this.$el.find('#sidebar-footer .sidebar-btn').first()[0])
						nowEl =  this.$el.find('#sidebar-list .sidebar-btn').last();
					else
						nowEl = nowEl.prev();
					break;
				case 'down' :
					if(nowEl[0] == this.$el.find('#sidebar-list .sidebar-btn').last()[0])
						nowEl =  this.$el.find('#sidebar-footer .sidebar-btn').first();
					else
						nowEl = nowEl.next();
					break;*/
				case 'up':
					Focus.to(this.getFocusable(-1,true));
					return;
				case 'down':
					Focus.to(this.getFocusable(1,true));
					return;
				case 'right':
					this.onReturn();
					return;
			}
			Focus.to(nowEl);
		},

		onReturn:function(){
			Focus.to($('#snippet-home-list .items .item').first());
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