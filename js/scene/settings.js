Scene_Settings = (function (Scene) {
  var Scene_Settings = function () {
    this.construct.apply(this, arguments);
  };

  $.extend(true, Scene_Settings.prototype, Scene.prototype, {
    init: function () {
      this.$isLoadedSetting = false;
      this.$isloadedLang = false;
      this.$menu = this.$el.find(".div-icon");
      this.$sub_menu = this.$el.find(".list");
    },

    render: function () {
      this.renderButtons();
    },

    activate: function () {},

    renderButtons: function () {
      if (!this.$isLoadedSetting) {
        var tmp = this.tmpButton();

        function fillSetting(setting) {
          return Mustache.render(tmp, setting);
        }

        CONFIG.settings_menu.forEach((setting) => {
          this.$el.find(".div-icon").append(fillSetting(setting));
        });
      }
      Focus.to(this.$el.find(".settings-menu").first());
      this.$isLoadedSetting = true;
      I18n.changeLanguage("EN");
    },

    renderLanguage: function () {
      var tmpp = this.tmpList();

      function fillLanguage(lang) {
        return Mustache.render(tmpp, lang);
      }

      CONFIG.settings_language.forEach((lang) => {
        this.$sub_menu.append(fillLanguage(lang));
      });

      I18n.changeLanguage("EN");
      this.top = 0;
    },

    renderTimeZone: function (id) {
      var template = this.tmpTimeZone();

      function fillTimazone(timezone) {
        return Mustache.render(template, timezone);
      }

      CONFIG.timeZone_list.forEach((timzone) => {
        this.$sub_menu.append(fillTimazone(timzone));
      });

      I18n.changeLanguage("EN");
    },

    renderColors: function () {
      var tplt = this.tmpColors();

      function fillColors(color) {
        return Mustache.render(tplt, color);
      }

      CONFIG.colors_list.forEach((color) => {
        this.$sub_menu.append(fillColors(color));
      });
      I18n.changeLanguage("EN");
    },

    renderAbout: function () {
      var tmpAbout = this.tmpAbout_Info();

      function fillAbout(about) {
        return Mustache.render(tmpAbout, about);
      }

      CONFIG.about_section.forEach((about) => {
        this.$sub_menu.append(fillAbout(about));
      });
      I18n.changeLanguage("EN");
    },

    renderInfo: function () {
      var tmpAbout = this.tmpAbout_Info();

      function fillAbout(info) {
        return Mustache.render(tmpAbout, info);
      }

      CONFIG.info_section.forEach((info) => {
        this.$sub_menu.append(fillAbout(info));
      });
      I18n.changeLanguage("EN");
    },

    navigate: function (direction) {
      var $nowEl = this.$el.find(".div-icon .focus");
      if (this.isOpened) $nowEl = this.$el.find(".list .focus");
      switch (direction) {
        case "up":
          Focus.to($nowEl.prev());
          if (this.isTimeZone && this.top < -1) {
            this.top += 69.14;
            this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
          }
          break;
        case "down":
          Focus.to($nowEl.next());
          if (
            this.$sub_menu[0].scrollHeight - this.$sub_menu[0].offsetHeight >
            -(this.top - this.$el.find("h1")[0].offsetHeight)
          ) {
            if (this.isTimeZone) {
              this.top -= 69.14;
              this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
            }
          }
          break;
        case "left":
          $el = this.$el.find('.focus').prev();
          Focus.to($el);
          this.$sub_menu.empty();
          this.$sub_menu.css({ flexBasis: "0" });
          this.active.css({ background: "unset" });
          // Focus.to(
          //   this.$el.find(
          //     ".div-icon .settings-menu[" + action.slice(0, 5) + "]"
          //   )
          // );
          break;
        case "right":
          $el = this.$el.find('.focus').next();
          Focus.to($el);
          break;
        default:
          break;
      }
    },

    onclick: function ($el, event) {
      this.onEnter(this, arguments);
    },

    onEnter: function ($el, event) {
      if (this.isOpened) {
        this.isOpened = false;
        this.active.css({ background: "unset" });
        this.$sub_menu.css({ flexBasis: "0" });
        this.$sub_menu.empty();
        Focus.to(this.active);
      } else {
        this.$sub_menu.empty();
        var action = $el.attr("data-action");
        var id = $el.attr("data-id");
        this.top = 0;
        this.$sub_menu.css("transform", "translateY(" + this.top + "px)");

        if (action === "language") {
          // this.isTimeZone = true;
          this.active = this.$el.find(".focus");
          this.renderLanguage(id);
          this.isOpened = true;
          this.$sub_menu.css({ flexBasis: "150%" });
          Focus.to(
            this.$el.find(".list .settings_language[data-id='" + id + "']")
          );
          this.active.css({ background: "#151617" });
        }
        if (action === "timezone") {
          this.active = this.$el.find(".focus");
          this.renderTimeZone();
          Focus.to(
            this.$el.find(".list .settings_language[data-id='" + id + "']")
          );
          this.isTimeZone = true;
          this.isOpened = true;
          this.$sub_menu.css({ flexBasis: "150%" });
          this.top -= this.$sub_menu.find(".focus")[0].offsetTop;
          this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
          this.active.css({ background: "#151617" });

        }
        if (action === "color") {
          this.active = this.$el.find(".focus");
          this.renderColors();
          Focus.to(
            this.$el.find(".list .settings_language[data-id='" + id + "']")
          );
          this.isTimeZone = true;
          this.isOpened = true;
          this.$sub_menu.css({ flexBasis: "150%" });
          this.active.css({ background: "#151617" });
        }
        if (action === "epginfo") {
          if (id === "Disabled") {
            // this.active.css({ background: "unset" });
            $('.settings-menu[data-action="epginfo"] label')
              .last()
              .text("Enabled");
            $('.settings-menu[data-action="epginfo"]').attr(
              "data-id",
              "Enabled"
            );
            this.active.css({ background: "#151617" });
          } else {
            $('.settings-menu[data-action="epginfo"] label')
              .last()
              .text("Disabled");
            $('.settings-menu[data-action="epginfo"]').attr(
              "data-id",
              "Disabled"
            );
            this.active.css({ background: "unset" });
          }
          // this.isTimeZone = true;
          // this.isOpened = true;
        }
        if (action === "about") {
          this.active = this.$el.find(".focus");
          this.renderAbout();
          Focus.to(this.$el.find(".list .settings_language"));
          this.$sub_menu.css({ flexBasis: "150%" });
          this.isOpened = true;
          this.active.css({ background: "#151617" });
        }
        if (action === "info") {
          this.active = this.$el.find(".focus");
          this.renderInfo();
          Focus.to(this.$el.find(".list .settings_language"));
          this.$sub_menu.css({ flexBasis: "150%" });
          this.isOpened = true;
          this.active.css({ background: "#151617" });
        }
        if (action === "reset") {
          $("#ResetModal").addClass("show");
          $("#ResetModal").show();
          Focus.to(this.$el.find(".btn").first());
        }
        if (action === "reset_okay") {
          $("#ResetModal").removeClass("show");
          $("#ResetModal").hide();
        }
        if (action === "reset_cancel") {
          $("#ResetModal").removeClass("show");
          $("#ResetModal").hide();
          Focus.to(
            this.$el.find(
              ".div-icon .settings-menu[data-action=" + action.slice(0, 5) + "]"
            )
          );
        }
        if (action === "back") {
          this.onReturn();
        }
        // this.active.css({ background: "#151617" });
      }
    },

    onLangChange: function () {
      I18n.translateHTML(this.$el);
    },

    tmpButton: function () {
      return '<div class="settings-menu focusable" data-action="{{action}}" data-id="{{id}}"><span><i class="{{class}}" id="info-icon"></i><label data-i18n="{{i18n}}"></label></span><label>{{id}}</label></div>';
    },

    tmpList: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}"><label>{{name}}</label></li>';
    },

    tmpTimeZone: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}"><label>{{value}}</label></li>';
    },

    tmpColors: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}"><label>{{color}}</label></li>';
    },

    tmpAbout_Info: function () {
      return '<div class="settings_language focusable" data-id="{{id}}">{{content}}</div>';
    },

    onReturn: function () {
      Router.goBack(null);
    },

    create: function () {
      return $("#scene-settings");
    },
  });

  return Scene_Settings;
})(Scene);
