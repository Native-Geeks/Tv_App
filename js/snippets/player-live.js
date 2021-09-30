Snippet_Player_Live = (function (Snippet) {
    var Snippet_Player_Live = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Snippet_Player_Live.prototype, Snippet.prototype, {
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
            return $("#snippet-live-player");
        },

    });

    return Snippet_Player_Live;
})(Snippet);
