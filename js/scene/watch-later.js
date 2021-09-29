Scene_Watch_Later = (function (Scene) {
    var Scene_Watch_Later = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_Watch_Later.prototype, Scene.prototype, {
        init: function () {
            
        },

        activate: function (sidebar) {
            this.$el.find(".noItem").remove();
            this.$el.find(".row").empty();
            this.sidebar = sidebar;
            if(Storage.get("watch_later")==null )
            {
                this.$el.append('<div class="noItem"><label>There no item on your list !</label><button class="btn focusable" data-action="movie">Go Movie</button></div>');
            }
            else{
                if(Storage.get("watch_later")["N"+this.sidebar.account.id])
                {
                    this.renderItems(Storage.get("watch_later")["N"+this.sidebar.account.id]);
                }
                else
                {
                    this.$el.append('<div class="noItem"><label>There no item on your list !</label><button class="btn focusable" data-action="movie">Go Movie</button></div>');
                }
            }
            Focus.to(this.$el.find('.focusable').first());
            this.cp = 0 ;
        },

        renderItems: function (items) {
            if(!this.isRendered)
            {
                var tmp = this.tmpCard();
                function addItem(item){
                    return Mustache.render(tmp,item);
                }
                items.forEach(item => {
                    console.log(addItem(item));
                    this.$el.find(".row").append(addItem(item));
                });
            }
            this.isRendered = true;
        },

        tmpCard:function(){
            return '<div class="col-6 col-md-4 focusable" data-id="{{id}}" data-type="{{type}}"><img src="{{imgUrl}}" alt="{{id}}"/></div>';
        },

        onReturn: function ($el, e, stop) {
            this.sidebar.onReturn();
        },

        navigate: function(direction) {

		},


        onClick: function ($el, event) {
            return this.onEnter.apply(this, arguments);
        },

        onEnter: function ($el, event) {
                        if(this.cp)
            {
                if($el.attr('data-action')==="movie")
                {
                    this.sidebar.$el.find('.sidebar-btn[data-action=Films]').click();
                }
            }
            this.cp++;
        },

        focus: function () {

        },

        create: function () {
            return $("#scene-watch-later");
        }
    });

    return Scene_Watch_Later;
})(Scene);
