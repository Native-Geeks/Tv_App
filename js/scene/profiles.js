Scene_Profiles = (function(Scene) {

    var Scene_Profiles = function() {
    this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_Profiles.prototype, Scene.prototype, {
        
        init: function() {
            this.$active = false;
            this.$isExitModalOn = false;
            this.$isInfoModalOn = false;
            this.$isDeleteModalOn = false;
            this.$profilesTemplate = false;
            this.$profilesButtons = false;
            this.$underProfilesButtons = false;
            this.$profiles = this.$el.find('#profile-list');
            this.$bottuns = this.$el.find('#profile-btn');
            this.contentWidth = 150;            
            this.notFromSplash =  false;

        },

        activate: function(accounts) {

            if(this.$activeEl != null) {
                Focus.to(this.$activeEl);
            }

            if(accounts != null) {
                this.$accounts = null;
                this.$accounts = accounts;
                this.cp = 0;
                for(account in accounts)
                {
                    this.cp +=1;
                }
            }   
            if(!this.notFromSplash)
            {
                this.leftPadding = (this.$el[0].clientWidth/2)-(this.contentWidth/2);
                this.topPadding = this.leftPadding - ((this.cp-1)*165);
            }
        },

        render:function() {
            if(!this.notFromSplash)
            {
                this.renderProfiles();
                this.renderUnderProfileButtons();
                this.renderButtons();
            }
        },

        renderProfiles:function(){
            if(!this.$profilesTemplate)
            {
                var tmpProfiles = this.tmpProfiles();
                this.$profiles.empty();

                function fillProfiles(profile){
                    return Mustache.render(tmpProfiles,profile);         
                }
                
                // this.$accounts.forEach(profile => {
                for (profile in this.$accounts) {
                	if(this.$accounts[profile].username.length>17)
                    this.$accounts[profile].username = this.$accounts[profile].username.slice(0,14)+'...';
                	this.$profiles.append(fillProfiles(this.$accounts[profile]));
                }

                Focus.to($('.card-profile').first());
                this.$activeEl = $('.card-profile').first();
            }

            this.$profilesTemplate = true;
            this.$isListHover = true;
            this.$isHover = 'List';
            this.$isListBtnHover = false;
            if(this.cp>7)
               this.$profiles.css({transform:'translateX('+this.leftPadding+'px)'});

        },
        
        renderUnderProfileButtons:function() {
            if(!this.$underProfilesButtons)
            {
                var tmpUnderprofilesButtons = this.tmpUnderProfilesButtons();
                this.$profiles.find('.card-profile .underProfileBtns').empty()

                function fillUnderProfilesButtons(btn){
                    return Mustache.render(tmpUnderprofilesButtons,btn)
                }

                CONFIG.underProfilesButtons.forEach(btn=>{
                	this.$profiles.find('.card-profile .underProfileBtns').append(fillUnderProfilesButtons(btn))
                })
            }
            this.$underProfilesButtons = true;
        },
        
        renderButtons:function(){
            if(!this.$profilesButtons)
            {
                var tmpButtons = this.tmpButtons();
                this.$bottuns.empty();

                function fillButtons(btn){
                    return Mustache.render(tmpButtons,btn);
                }

                CONFIG.profile_buttons.forEach(btn=>{
                    this.$bottuns.append(fillButtons(btn));
                })
            }
            if(!this.cp)
            {
                this.$profiles.append('There no account here.');
                $('#choose-film').css({visibility:'hidden'});
                Focus.to(this.$bottuns.find('.btn').first());
                this.$isListHover = false;
                this.$activeEl = this.$bottuns.find('.btn').first();
            }
            this.$profilesButtons = true;
            I18n.changeLanguage('EN');
        },

        onClick: function($el, event) {
           this.onEnter.apply(this, arguments);
        },
        
        onEnter: function($el, event) {
            if(this.$isListHover)
            {
                for (account in this.$accounts) {
                	if(this.$accounts[account].id == $el.attr("data-id"))
                    {
                        this.notFromSplash = true;
                        Router.go('home', this.$accounts[account]);
                    }
                	
                }
            }
            else
            {
                var action = $el.attr("data-action");
                switch(action)
                {
                    case 'settings':
                        this.notFromSplash = true;
                        this.$activeEl = $el;
                        Router.go('settings');
                        break;
                    case 'info':
                        for (account in this.$accounts) {
                          if(account === this.$profiles.find(this.$profiles.find($el[0].parentNode)[0].parentNode).attr('data-id'))
                            {
                                $('#staticUsername').val(this.$accounts[account].username);
                                $('#staticName').val(this.$accounts[account].name);
                                $('#staticType').val(this.$accounts[account].type);
                            }
                        }
                        this.$isInfoModalOn = true;
                        $('#InfoModal').addClass('show');
                        $('#InfoModal').show();
                        this.$activeEl = $el;
                        this.isModal(true);
                        Focus.to(this.$el.find('#InfoClose'));
                        break;
                    case 'info_close':
                        this.$isInfoModalOn = false;
                        $('#InfoModal').removeClass('show');
                        $('#InfoModal').hide();
                        Focus.to(this.$activeEl);
                        this.isModal(false);
                        break;
                    case 'delete':
                        this.$isDeleteModalOn = true;
                        $('#DeleteModal').addClass('show');
                        $('#DeleteModal').show();
                        this.$activeEl = $el;
                        Focus.to($('#DeleteModal #DeleteClose'));
                        this.isModal(true);
                        break;
                    case 'delete_cancel' :
                        this.$isDeleteModalOn = false;
                        $('#DeleteModal').removeClass('show');
                        $('#DeleteModal').hide();
                        Focus.to(this.$activeEl);
                        this.isModal(false);
                        break;
                    case 'delete_yes' :
                        this.$isDeleteModalOn = false;
                        $('#DeleteModal').removeClass('show');
                        $('#DeleteModal').hide();
                        Focus.to(this.$activeEl);
                        this.isModal(false);
                        break;
                    case 'ExitModalClose' :
                        $('#ExitModal').removeClass('show');
                        $('#ExitModal').hide();
                        this.$isModalOn = false;
                        this.isModal(false);
                        Focus.to(this.$activeEl);
                            break;
                    case 'Exit' :
                        $('#ExitModal').removeClass('show');
                        $('#ExitModal').hide();
                        this.$isModalOn = false;
                       this.isModal(false);
                        Focus.to(this.$activeEl);
                        break;
                }
            }
            return false;
        },
        
        navigate: function(direction) {
            var $nowEl  = this.$el.find('.focus');
            var $el ;
            switch(direction){
                case 'up':
                    if(this.cp && !this.$isModalOn && !this.$isDeleteModalOn && !this.$isInfoModalOn)
                    {
                        if(this.$isListBtnHover)
                        {
                            this.$isListHover = true;
                            this.$isListBtnHover = false;
                            $el = this.$active;
                            Focus.to(this.$active);
                            $nowEl = this.$profiles.find('.focus');
                        }
                        else if (!this.$isListHover && !this.$isListBtnHover && !this.$isModalOn)
                        {
                            this.$isListBtnHover = true;
                            $el = this.$active.find('button').first();
                            Focus.to($el);
                            $nowEl = this.$profiles.find('.card-profile .focus');
                        }
                    }
                    break;
                case 'down':
                    if(this.$isListHover && !this.$isModalOn && !this.$isDeleteModalOn && !this.$isInfoModalOn)
                    {
                        this.$active = $nowEl;
                        this.$isListHover = false;
                        this.$isListBtnHover = true;
                        Focus.to(this.$profiles.find('.focus button').first());
                        $nowEl = this.$profiles.find('.card-profile .focus');
                        $el = $nowEl;
                    }
                    else if(this.$isListBtnHover && !this.$isModalOn){
                        this.$isListBtnHover = false;
                        Focus.to(this.$bottuns.find('.btn').first());
                        $nowEl = this.$bottuns.find('.focus');
                        $el = $nowEl;
                    }
                    break;
                case 'left' : 
                    $el = $nowEl.prev();
                    Focus.to($el);
                    if(this.$isListHover && (this.leftPadding<(this.$el[0].clientWidth/2)-(this.contentWidth/2)))
                    {
                        this.leftPadding += 165;
                        this.scrollToFit();
                    }
                    break;
                case 'right' : 
                    $el = $nowEl.next();
                    Focus.to($el);
                    if(this.$isListHover && this.leftPadding > this.topPadding)
                    {
                        this.leftPadding -= 165;
                        this.scrollToFit();
                    }
                    break;
                default : break;
            }
            
            if(!this.$isModalOn && !this.$isDeleteModalOn && !this.$isInfoModalOn)
                this.$activeEl = $el;
            if(this.$isListHover)
                this.$isHover = 'List';
            else if(this.$isListBtnHover)
                this.$isHover = 'btnList';
        },
        
        scrollToFit: function() {
            try{
                    this.$profiles.css({transform:'translateX('+this.leftPadding+'px)'});
            }catch(err){}
            return true;
        },
        
        onLangChange: function () {
            I18n.translateHTML(this.$el)
        },

        tmpProfiles:function(){
            return "<div class='card-profile focusable' data-id='{{id}}'><img width='150' class='rounded mb-3' src='./Assets/img/{{type}}.png'/><h6>{{name}}</h6><div class='underProfileBtns'></div></div>";
        },

        tmpUnderProfilesButtons:function(){
            return "<button class='btn focusable' data-action='{{action}}'><i class='{{class}}'></i></button>"
        },

        onReturn: function($el) {

            if(!this.$isModalOn && !this.$isInfoModalOn && !this.$isDeleteModalOn)
            {
                $('#ExitModal').addClass('show');
                $('#ExitModal').show();
                this.$isModalOn = true;
                this.isModal(true);
                Focus.to(this.$el.find('#ExitModal .modal-footer .btn').first())
            }
            else if(!this.$isInfoModalOn && !this.$isDeleteModalOn)
            {
                $('#ExitBtnClose').click();
            }
        },

        isModal: function(bool){
            if(bool)
            {
                if(this.$isListHover)
                    this.$isHover = 'List';
                else if(this.$isListBtnHover)
                    this.$isHover = 'btnList';
                this.$isListBtnHover = false;
                this.$isListHover = false;
            }
            else{
                this.$isListBtnHover = false;
                this.$isListHover = false;
                if(this.$isHover == 'List')
                    this.$isListHover = true;
                else if(this.$isHover == 'btnList')
                    this.$isListBtnHover = true;
            }
        },

        tmpButtons:function(){
            return "<button class='btn focusable' data-action='{{action}}'><i class='{{class}}'></i><span class='ms-1' data-i18n='{{i18n}}'></span></button>";
        },
        
        create: function() {
            return $('#scene-profiles');
        }
    });

    return Scene_Profiles;

})(Scene);