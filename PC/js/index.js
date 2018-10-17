// Z智选选项卡功能
    $ ('#z-menu li').on({
        'mouseenter' : function () {
            $ (this).addClass('active');
            $ (this).siblings().removeClass('active');
        }
    })
//电子竞技选项卡
    $ ('#title-list li').on('click',function () {
        $ (this).addClass('cur');
        $ (this).siblings().removeClass();
        if ($ (this).attr('index') == 0) {
            $ ('#e-sports-items .center a img:nth-child(1)').css('display','block');
            $ ('#e-sports-items .center a img:nth-child(1)').siblings().css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(1)').css('display','block');
            $ ('#e-sports-items .items-left ul:nth-of-type(2)').css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(3)').css('display','none');
            $ ('#title-list').css('display','block');
        }else if($ (this).attr('index') == 1) {
            $ ('#e-sports-items .center a img:nth-child(2)').css('display','block');
            $ ('#e-sports-items .center a img:nth-child(2)').siblings().css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(1)').css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(2)').css('display','block');
            $ ('#e-sports-items .items-left ul:nth-of-type(3)').css('display','none');
            $ ('#title-list').css('display','block');
        }else if($ (this).attr('index') == 2) {
            $ ('#e-sports-items .center a img:nth-child(3)').css('display','block');
            $ ('#e-sports-items .center a img:nth-child(3)').siblings().css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(1)').css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(2)').css('display','none');
            $ ('#e-sports-items .items-left ul:nth-of-type(3)').css('display','block');
            $ ('#title-list').css('display','block');
        }
    })
//家电选项卡
$ ('#opt-sec-title li').on('click',function () {
    $ (this).addClass('cur');
    $ (this).siblings().removeClass('cur');
    if ($ (this).attr('index') == 1) {
        $ ('#opt-sec-fun ul:nth-child(1)').css('display','block');
        $ ('#opt-sec-fun ul:nth-child(1)').siblings().css('display','none');
    }else if($ (this).attr('index') == 2) {
        $ ('#opt-sec-fun ul:nth-child(2)').css('display','block');
        $ ('#opt-sec-fun ul:nth-child(2)').siblings().css('display','none');
    }else if($ (this).attr('index') == 3) {
        $ ('#opt-sec-fun ul:nth-child(3)').css('display','block');
        $ ('#opt-sec-fun ul:nth-child(3)').siblings().css('display','none');
    }else if($ (this).attr('index') == 4) {
        $ ('#opt-sec-fun ul:nth-child(4)').css('display','block');
        $ ('#opt-sec-fun ul:nth-child(4)').siblings().css('display','none');
    }else if($ (this).attr('index') == 5) {
        $ ('#opt-sec-fun ul:nth-child(5)').css('display','block');
        $ ('#opt-sec-fun ul:nth-child(5)').siblings().css('display','none');
    }
})