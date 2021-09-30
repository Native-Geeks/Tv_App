Snippet_Later_List = (function(Snippet) {

	var Snippet_Later_List = function() {
	this.construct.apply(this, arguments);
	};

	$.extend(true, Snippet_Later_List.prototype, Snippet.prototype, {

        init: function () {

            this.on("show",function(){
                this.parent.$el.find(".noItem").remove();
                this.$el.empty();
                if(Storage.get("watch_later")==null )
                {
                    this.parent.$el.append('<div class="noItem"><label data-i18n="watch_later_empty"></label><button class="btn focusable" data-action="movie"  data-i18n="watch_later_empty_btn"></button></div>');
                }
                else{
                    if(Storage.get("watch_later")["N"+this.parent.sidebar.account.id])
                    {
                        this.renderItems(Storage.get("watch_later")["N"+this.parent.sidebar.account.id]);
                    }
                    else
                    {
                        this.parent.$el.append('<div class="noItem"><label data-i18n="watch_later_empty"></label><button class="btn focusable" data-action="movie" data-i18n="watch_later_empty_btn"></button></div>');
                    }
                }
                Focus.to(this.parent.$el.find('.focusable').first());
                this.cp = 1 ;
            });
        },
        
        renderItems: function (items) {
                var tmp = this.tmpCard();
                function addItem(item){
                    return Mustache.render(tmp,item);
                }
                items.forEach(item => {
                    this.$el.append(addItem(item));
                });
        },

        tmpCard:function(){
            return '<div class="col-6 col-md-4 focusable" data-id="{{id}}" data-type="{{type}}"><img src="{{imgUrl}}" alt="{{id}}"/></div>';
        },

        navigate: function(direction) {
            if(this.cp)
            {
                switch(direction)
                {
                    case "right" : Focus.to(this.getFocusable(1,true)); break;
                    case "up" : Focus.to(this.getFocusable(-5,true)); break;
                    case "down" : Focus.to(this.getFocusable(5,true)); break;
                    case "left" : 
                    var leftOffset = this.$el.find(".focusable").first()[0].offsetLeft;
                    if(!this.$el.find(".focus").prev().length || this.$el.find(".focus")[0].offsetLeft == leftOffset)
                    {
                        this.$el.find(".focus").addClass("lastActive");
                        Focus.to(this.parent.sidebar.$el.find(".active"));
                        this.cp = 0;
                        return;
                    }
                    Focus.to(this.getFocusable(-1,true)); break;
                    break;
                }
            }
            ++this.cp;
		},

        onClick: function ($el, event) {
            return this.onEnter($el, event);
        },

        onEnter: function ($el, event) {
            if(this.cp)
            {
                
            }
            this.cp++;
        },

        onFocus:function($el){
            $el.removeClass("lastActive");
        },  

        create: function () {
            return $("#snippet-watch-later-list");
        }
	});

	return Snippet_Later_List;

})(Snippet);