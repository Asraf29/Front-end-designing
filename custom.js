'use strict';
$(window).load(function() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
});
$(document).ready(function() {

    // HOME TYPED JS
    var typelement = $('.element');
    if (typelement.length) {
        typelement.each(function() {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3'), $(this).data('text4')],
                loop: $(this).data('loop') ? $(this).data('loop') : false,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
                typeSpeed: 10,
            });
        });
    }
    var wind = $(window)

    function footsize() {
        if ($('footer').height() < wind.height()) {
            $('body').css({
                "padding-bottom": $('footer').height() + "px"
            });

        }

    }
    if ($('.home').length) {
        function centerInit() {
            var hometext = $('.home')
            hometext.css({
                "height": wind.height() + 70 + "px"
            });
        }
        centerInit();
        wind.resize(centerInit);
    }



});
//THEME SWITCH
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});
//experience Percentage
var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});
//Mail Sender
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mdasraf2722@gmail.com",
        Password: "343b1ed4-777c-42d0-ba6e-08cd2b66f21d",
        To: 'mdasraftech27222@gmail.com',
        From: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Body: document.getElementById('message').value
    }).then(
        message => alert(message)
    );
}
/*Navbar color*/
// function bgColor(){
// var logo= document.getElementById('imageChange');
// var scrollValue = window.scrollY;
// if(scrollValue > 420){
//     logo.classList.add('logoChange')
// }
// else{
//     logo.classList.remove('logoChange')
// }
// }

// window.addEventListener('scroll' ,logoChange);