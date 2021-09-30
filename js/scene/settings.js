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
      this.isModalOpened = false;
      this.fromSideBar = false;
    },

    activate: function (fromSideBar) {
      this.fromSideBar = true;
    },

    render: function () {
      this.renderButtons();
    },

    renderButtons: function () {
      if (!this.$isLoadedSetting) {
        var tmp = this.tmpButton();

        function fillSetting(setting) {
          return Mustache.render(tmp, setting);
        }

        CONFIG.settings_menu.forEach((setting) => {
          if (setting.action === "language") {
            setting.id = Storage.get("settings").lang;
          }
          if (setting.action === "color") {
            setting.id = Storage.get("settings").color;
          }
          if (setting.action === "timezone") {
            setting.id = Storage.get("settings").timezone;
          }
          if (setting.action === "epginfo") {
            setting.id = Storage.get("settings").epginfo;
          }
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
        lang.action = "language";
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

      CONFIG.timeZone_list.forEach((timezone) => {
        timezone.action = "timezone";
        this.$sub_menu.append(fillTimazone(timezone));
      });

      I18n.changeLanguage("EN");
    },

    renderColors: function () {
      var tplt = this.tmpColors();

      function fillColors(color) {
        return Mustache.render(tplt, color);
      }

      CONFIG.colors_list.forEach((color) => {
        color.action = "color";
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
      var i = 0;
      var infos = Device.getInfoSettings();
      while (i < infos.length) {
        var info = { key: infos[i], info: infos[i + 1] };
        this.$sub_menu.append(fillAbout(info));
        i += 2;
      }

      I18n.changeLanguage("EN");
    },

    navigate: function (direction) {
      var $nowEl = this.$el.find(".div-icon .focus");
      if (this.isOpened) $nowEl = this.$el.find(".list .focus");
      switch (direction) {
        case "up":
          if (this.isModalOpened) {
            return;
          }
          Focus.to($nowEl.prev());
          if (this.isTimeZone && this.top < -5) {
            this.top += $nowEl[0].offsetHeight;
            this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
          }
          break;
        case "down":
          if (this.isModalOpened) {
            return;
          }
          Focus.to($nowEl.next());
          if (
            this.$sub_menu[0].scrollHeight - this.$sub_menu[0].offsetHeight >
            -(this.top - this.$el.find("h1")[0].offsetHeight)
          ) {
            if (this.isTimeZone) {
              this.top -= $nowEl[0].offsetHeight;
              this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
            }
          }
          break;
        case "left":
          if (this.isModalOpened) {
            Focus.to($("#ResetModal .modal-footer .focus").prev());
            return;
          }
          if (this.isOpened) {
            Focus.to(this.active);
            this.isOpened = false;
            this.$sub_menu.empty();
            this.$sub_menu.css({ flexBasis: "0" });
            this.active.css({ background: "unset" });
          }
          break;
        case "right":
          if (this.isModalOpened) {
            Focus.to($("#ResetModal .modal-footer .focus").next());
            return;
          }
          if (!this.isOpened) {
            $el = this.$menu.find(".focus");
            this.onEnter($el);
          }
          break;
        default:
          break;
      }
    },

    onclick: function ($el, event) {
      this.onEnter($el, event);
    },

    onEnter: function ($el, event) {
      if (!this.fromSideBar) {
        var action = $el.attr("data-action");
        var id = $el.attr("data-id");
        if (this.isOpened) {
          this.top = 0;
          this.isOpened = false;
          this.active.css({ background: "unset" });
          this.$sub_menu.css({ flexBasis: "0" });
          this.$sub_menu.empty();
          var stg = Storage.get("settings");
          if (action === "language") {stg.lang = id;}
          if (action === "color") {stg.color = id;}
          if (action === "timezone") {stg.timezone = id;}
          Storage.set("settings", stg);
          if(Storage.get("settings") !== null){
            $('.settings-menu[data-action="language"] label').last()
            .text(Storage.get('settings').lang);

            $('.settings-menu[data-action="language"]').attr(
              "data-id",
              Storage.get('settings').lang
            );
            
            $('.settings-menu[data-action="color"] label').last()
            .text(Storage.get('settings').color);

            $('.settings-menu[data-action="color"]').attr(
              "data-id", 
              Storage.get('settings').color
            );

            $('.settings-menu[data-action="timezone"] label').last()
            .text(Storage.get('settings').timezone);

            $('.settings-menu[data-action="timezone"]').attr(
              "data-id",
              Storage.get('settings').timezone
            );
            
            $('.settings-menu[data-action="epginfo"] label').last()
            .text(Storage.get('settings').egpinfo);

            $('.settings-menu[data-action="epginfo"]').attr(
              "data-id",
              Storage.get('settings').epginfo
            );
          }
          Focus.to(this.active);
        } else {
          this.$sub_menu.empty();
          this.top = 0;
          this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
          switch (action) {
            case "language":
              this.active = this.$el.find(".focus");
              this.renderLanguage();
              this.isOpened = true;
              this.$sub_menu.css({ flexBasis: "150%" });
              Focus.to(
                this.$el.find(".list .settings_language[data-id='" + id + "']")
              );

              this.active.css({ background: "#151617" });
              this.isTimeZone = true;
              break;
            case "color":
              this.active = this.$el.find(".focus");
              this.renderColors();
              Focus.to(
                this.$el.find(".list .settings_language[data-id='" + id + "']")
              );
              this.isTimeZone = true;
              this.isOpened = true;
              this.$sub_menu.css({ flexBasis: "150%" });
              this.active.css({ background: "#151617" });
              break;
            case "timezone":
              this.active = this.$el.find(".focus");
              this.renderTimeZone();
              Focus.to(
                this.$el.find(".list .settings_language[data-id='" + id + "']")
              );
              this.isTimeZone = true;
              this.isOpened = true;
              this.$sub_menu.css({ flexBasis: "150%" });
              this.top = -(this.$sub_menu.find(".focus")[0].offsetTop-(this.$sub_menu.find(".focus")[0].clientHeight+55));
              if(this.top<-5)
              {
                this.$sub_menu.css("transform", "translateY(" + this.top + "px)");
              }
              this.active.css({ background: "#151617" });
              break;
            case "epginfo":
              var stg = Storage.get("settings");
              if (id === "Disabled") {
                $('.settings-menu[data-action="epginfo"] label')
                  .last()
                  .text("Enabled");
                $('.settings-menu[data-action="epginfo"]').attr(
                  "data-id",
                  "Enabled"
                );
                stg.epginfo = "Enabled";
              } else {
                $('.settings-menu[data-action="epginfo"] label')
                  .last()
                  .text("Disabled");
                $('.settings-menu[data-action="epginfo"]').attr(
                  "data-id",
                  "Disabled"
                );
                stg.epginfo = "Disabled";
              }
              Storage.set("settings", stg);
              break;
            case "about":
              this.active = this.$el.find(".focus");
              this.renderAbout();
              this.$sub_menu.css({ flexBasis: "150%" });
              this.isOpened = true;
              this.active.css({ background: "#151617" });
              break;
            case "info":
              this.active = this.$el.find(".focus");
              this.renderInfo();
              this.$sub_menu.css({ flexBasis: "150%" });
              this.isOpened = true;
              this.active.css({ background: "#151617" });
              break;
            case "reset":
              $("#ResetModal").addClass("show");
              $("#ResetModal").show();
              Focus.to($("#ResetModal").find(".btn").first());
              this.active = $el;
              this.isModalOpened = true;
              break;
            case "reset_okay":
              Storage.removeItem("watch_later");
              Storage.removeItem("settings");
              Storage.removeItem("resumeMovies");
              window.location.reload();
              $("#ResetModal").removeClass("show");
              $("#ResetModal").hide();
              Focus.to(this.active);
              this.isModalOpened = false; 
              break;
            case "reset_cancel":
              $("#ResetModal").removeClass("show");
              $("#ResetModal").hide();
              Focus.to(this.active);
              this.isModalOpened = false;
              break;
            case "back":
              this.onReturn();
              break;
          }
        }
      }
      this.fromSideBar = false;
    },

    onLangChange: function () {
      I18n.translateHTML(this.$el);
    },

    tmpButton: function () {
      return '<div class="settings-menu focusable" data-action="{{action}}" data-id="{{id}}"><span><i class="{{class}}" id="info-icon"></i><label data-i18n="{{i18n}}"></label></span><label>{{id}}</label></div>';
    },

    tmpList: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}" data-action="{{action}}"><label>{{name}}</label></li>';
    },

    tmpTimeZone: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}" data-action="{{action}}"><label>{{value}}</label></li>';
    },

    tmpColors: function () {
      return '<li class="settings_language focusable"  data-id="{{id}}" data-action="{{action}}"><label>{{color}}</label></li>';
    },

    tmpAbout_Info: function () {
      return '<li class="settings_language">{{key}} {{info}}</li>';
    },

    onReturn: function () {
      Router.go("profiles");
    },

    create: function () {
      return $("#scene-settings");
    },
    
  });

  return Scene_Settings;
})(Scene);
