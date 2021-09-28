Scene_Search = (function (Scene) {
    var Scene_Search = function () {
        this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_Search.prototype, Scene.prototype, {
        init: function () {
            this.config.focusOnRender = false;

            this.input = new Input("font-size: x-large;");
            this.input.create(this.$el.find("#search-input"));
            this.input.setValue("");
            this.input.blur();
        },

        render: function () {
            this.showKeyboard();
        },

        activate: function () {

        },

        onReturn: function ($el, e, stop) {
            this.sidebar.hide();
            Router.goBack(null);
        },

        navigate: function(direction) {
            switch(direction){
				//case 'left': Focus.to($('.sidebar .active')); $('.sidebar').addClass('onfocus');return;
			}
		},


        onClick: function ($el, event) {
            return this.onEnter.apply(this, arguments);
        },

        onEnter: function ($el, event) {
            var action = $el.attr("id");

            if (action == "search-input") {
                this.showKeyboard();
            }
            return false;
        },

        create: function () {
            return $("#scene-search");
        },

        showKeyboard: function () {
            Keyboard.show(this.input);
            this.input.off("change:value");
            this.input.on("change:value", this.onCharacterChange, this);

            Keyboard.on(
                "exit",
                function () {
                    this.focus();
                    Keyboard.off("exit");
                },
                this
            );
        },
        
        focus: function () {
            var $el = this.$el.find("#search-input");
            Focus.to($el);
        },
    });

    return Scene_Search;
})(Scene);
