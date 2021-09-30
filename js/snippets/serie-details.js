Snippet_Serie_Details = (function (Snippet) {
  var Snippet_Serie_Details = function () {
    this.construct.apply(this, arguments);
  };

  $.extend(true, Snippet_Serie_Details.prototype, Snippet.prototype, {
    init: function () {
      this.on("show", function () {
        this.render();
      });
    },

    render: function () {
      this.$el.find("#director").text(this.parent.serie.data.info.director);
      this.$el.find("#genre").text(this.parent.serie.data.info.genre);
      this.$el.css({top:this.parent.$el.find("#filmDescription")[0].offsetTop +this.parent.$el.find("#filmDescription")[0].offsetHeight +10});
      this.cp = 0;
      if(!this.isRendered){
        var tmp = this.templateButton();

        function render(item){
            return Mustache.render(tmp,item);
        }
        CONFIG.serie.details.forEach(item => {
            this.$el.find("div").append(render(item));
        });
        I18n.changeLanguage("EN");
    }
    this.isRendered = true;
    },

    onClick: function ($el, event) {
      this.onEnter($el, event);
    },

    onEnter: function ($el, event) {
      if (this.cp) {
        var action = $el.attr("data-action");
        switch (action) {
          case "watch":
            $el.addClass("lastActivePlayer");
            this.parent.videoUrl = this.parent.serie.data.episodes[0][0].stream_url;
            Player.play(this.parent.videoUrl);
            this.parent.player.show();
            this.$el.css({display:"none"});
            this.parent.$el.find(".header").css({display:"none"});
            $("#trailer .trailer_serie").css({display:"none"});
            $("#trailer .trailer_imageSerie").css({display:"none"});
            break;
          case "trailer":
            $("#scene-serie #trailer iframe").attr(
              "src",
              "https://www.youtube-nocookie.com/embed/" +
                this.parent.serie.data.info.youtube_trailer +
                "?controls=0&autoplay=1&loop=1&mute=1&playlist=" +
                this.parent.serie.data.info.youtube_trailer
            );
            $("#scene-serie #trailer img").hide();
            $("#scene-serie #trailer iframe").show();
            break;
          case "episodes":
            $el.addClass("active");
            this.parent.episodes.show();
            break;
          case "cc":
            $el.addClass("active");
            this.parent.subtitles.show();
            break;
          case "later":
            break;
        }
      }
      this.cp++;
    },

    navigate: function (direction) {
      switch (direction) {
        case "up":Focus.to(this.getFocusable(-1, true));break;
        case "down":Focus.to(this.getFocusable(1, true));break;
      }
    },

    onFocus: function ($el) {},

    onReturn: function () {
      this.hide();
      this.parent.list.top -= this.parent.list.topAdded;
      this.parent.list.$el.css({ top: this.parent.list.top });
      Focus.to(this.parent.list.$el.find(" .lastActive"));
      this.parent.list.$el.find(" .lastActive").removeClass("lastActive");
    },

    onLangChange: function () {
        I18n.translateHTML(this.$el);
    },

    templateButton: function () {
      return '<button class="btn focusable" data-action="{{action}}"><i class="{{icon}}"></i><span data-i18n="{{i18n}}"></span></button>';
    },

    create: function () {
      return $("#snippet-serie-details");
    },
  });

  return Snippet_Serie_Details;
})(Snippet);
