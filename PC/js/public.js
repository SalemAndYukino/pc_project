//注册表单验证
$ ('.register-form input').on('focus',function () {
    $ (this).css('border','1px solid rgb(204,0,0)');
})
$ ('.register-form input').on ('blur',function () {
    $ (this).css ('border','');
})
$ ('#J_register_phone_number').on ('blur',function () {
    var $value = $ (this).val();
    var pattern = /0?(13|14|15|17|18|19)[0-9]{9}/;
    if ($value.length == 0) {
        $ ('#J_register_phone_number').next().css('display','none');
        $ ('#J_register_phone_tips').html('请填写手机号码')
        $ ('#J_register_phone_number').next().next().css('display','block');
    }else {
          if (pattern.test($value)) {
        $ ('#J_register_phone_number').next().css('display','block');
        $ ('#J_register_phone_number').next().next().css('display','none');
    }else {
        $ ('#J_register_phone_number').next().css('display','none');
        $ ('#J_register_phone_tips').html('请填写11位正确的手机号码')
        $ ('#J_register_phone_number').next().next().css('display','block');
    }
    }
})
function msgFn () {
    var Orandom = Math.floor(Math.random() * 9000 + 1000);
    $ ('#J_register_phone_send').on ('click',function () {
        alert (Orandom);
    })
    $ ('#J_register_phone_code').on ('blur',function () {
        if($ (this).val() == Orandom) {
            $ ('#J_register_phone_code_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -148px"
            });
        }else {
            $ ('#J_register_phone_code_tips').css ('display','block');
        }
    })
}
msgFn();

function pswFn () {
    $ ('#J_register_pasword_phone').on ('blur',function () {
          var $value = $ ('#J_register_pasword_phone').val();
        var pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,16}$/;
        var patternNum = /^[0-9]*$/;
    if ($value.length == 0) {
        $ ('#J_register_pasword_phone_tips').css ({
            "display" : "block",
            "background" : "url(images/login-bg.png) no-repeat -155px -184px"
        });
        $ ('#J_register_pasword_phone_tips').html('请输入密码');
    }else {
        if (patternNum.test($value)) {
            $ ('#J_register_pasword_phone_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -184px"
            });
            $ ('#J_register_pasword_phone_tips').html('密码不为纯数字');
        }else if (pattern.test($value)) {
            $ ('#J_register_pasword_phone_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -148px"
            });
            $ ('#J_register_pasword_phone_tips').html('');
        }else {
            $ ('#J_register_pasword_phone_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -184px"
            });
            $ ('#J_register_pasword_phone_tips').html('请输入6-16位数字或字母');
        }     
    }
    })
}
$ ('#J_register_regPasword_phone').on ('blur',function () {
    var $regValue = $ (this).val();
    if ($regValue.length == 0) {
        $ ('#J_register_regPasword_phone_tips').css ({
            "display" : "block",
            "background" : "url(images/login-bg.png) no-repeat -155px -184px"
        });
        $ ('#J_register_regPasword_phone_tips').html('请再次输入密码');
    }else {
        if ($regValue === $ ('#J_register_pasword_phone').val()) {
            $ ('#J_register_regPasword_phone_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -148px"
            });
            $ ('#J_register_regPasword_phone_tips').html('');
        }else {
            $ ('#J_register_regPasword_phone_tips').css ({
                "display" : "block",
                "background" : "url(images/login-bg.png) no-repeat -155px -184px"
            });
            $ ('#J_register_regPasword_phone_tips').html('两次输入密码不一致');
        }
    }
}) 
pswFn()

