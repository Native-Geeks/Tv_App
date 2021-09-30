Snippet_Player_live = (function (Snippet) {
    var Snippet_Player_live = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Snippet_Player_live.prototype, Snippet.prototype, {
        init: function () {
            
        },

        onClick: function ($el, event) {
            this.onEnter($el, event);
        },

        onEnter: function ($el, event) {
            
        },

        navigate: function (direction) {
            
        },

        onReturn: function ($el, e, stop) {
            
        },

        create: function () {
            return $("#snippet-player");
        },

    });

    return Snippet_Player_live;
})(Snippet);
