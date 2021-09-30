Snippet_Serie_Episodes = (function (Snippet) {
    var Snippet_Serie_Episodes = function () {
      this.construct.apply(this, arguments);
    };
  
    $.extend(true, Snippet_Serie_Episodes.prototype, Snippet.prototype, {
      init: function () {
        this.on("show", function () {
            console.log("defrtgyh");
          this.render();
        });
      },
  
      render: function () {
        this.$el.css({left:this.parent.$el.find('#snippet-serie-saisons')[0].offsetLeft+this.parent.$el.find('#snippet-serie-saisons')[0].offsetWidth+16});
            this.cp = 0;
            
            if(!this.isRendered)
            {
                this.cpN = 0;
                this.$el.append("<ul></ul>");
                var cp = 0;
                this.parent.serie.data.episodes.forEach(season => {
                    cp++;
                    season.forEach(ep => {
                        console.log(ep);

                        this.$el.find('ul').last().append('<li><div><img src='+ep.info.movie_image+' alt="image"/><span>S'+cp+':E'+ep.episode_num+'</span></div><div><h6>'+ep.title+'</h6><p>'+ep.info.plot+'</p></div></li>');


                    });
                    
                    // this.$el.append('<h6>'+soneas.name+'</h6><ul></ul>');
                    // var i = 0;
                    // while(i<season.episode_count)
                    // {
                    //     ++i;
                    // }
                });
            }
            this.isRendered = true;
            Focus.to(this.$el.find('.focusable').first());
      },
  
      onClick: function ($el, event) {
        this.onEnter($el, event);
      },
  
      onEnter: function ($el, event) {
    
      },
  
      navigate: function (direction) {
        switch (direction) {
          case "up":Focus.to(this.getFocusable(-1, true));break;
          case "down":Focus.to(this.getFocusable(1, true));break;
        }
      },
  
      onFocus: function ($el) {},
  
      onReturn: function () {
        
      },
  
      onLangChange: function () {
          I18n.translateHTML(this.$el);
      },
  
  
      create: function () {
        return $("#snippet-serie-episodes");
      },
    });
  
    return Snippet_Serie_Episodes;
  })(Snippet);
  