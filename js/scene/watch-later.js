Scene_Watch_Later = (function (Scene) {
    var Scene_Watch_Later = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_Watch_Later.prototype, Scene.prototype, {
        init: function () {
            
        },

        activate: function (sidebar) {
            this.sidebar = sidebar;
            if(Storage.get("watch_later")[this.sidebar.account.id]==null )
            {
                this.$el.append('<div class="noItem"><label>There no item on your list !</label><button class="btn focusable" data-action="movie">Go Movie</button></div>');
            }
            else{
                var list = Storage.get("watch_later");
            }
            Focus.to(this.$el.find('.focusable').first());
            this.cp = 0 ;
        },

        render: function () {

        },

        onReturn: function ($el, e, stop) {
            this.sidebar.hide();
            Router.go("profiles");
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
