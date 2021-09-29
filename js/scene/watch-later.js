Scene_Watch_Later = (function (Scene) {
    var Scene_Watch_Later = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_Watch_Later.prototype, Scene.prototype, {
        
        init: function () {
            this.list = new Snippet_Later_List(this);  
        },

        activate: function (sidebar) {
            this.sidebar = sidebar;
            this.list.show();
        },

        onReturn: function ($el, e, stop) {
            this.sidebar.onReturn();
        },

        onClick: function ($el, event) {
            return this.onEnter($el, event);
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

        create: function () {
            return $("#scene-watch-later");
        }
    });

    return Scene_Watch_Later;
})(Scene);
