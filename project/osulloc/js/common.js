// JavaScript Document

$(document).ready(function () {

    // 맨위로가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    
    
    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });


    // 상단메뉴
    $(".dp2,.dp2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $(".dp2,.dp2_bg").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".dp2,.dp2_bg").stop().slideUp();
    });
    
    
    
    // 서브lnb메뉴
    $("#lnb > li > .lnb_dp2").hide();

    $("#lnb > li").mouseenter(function () {
        $(this).children(".lnb_dp2").fadeIn();
    });
    $("#lnb > li").mouseleave(function () {
        $(this).children(".lnb_dp2").fadeOut();
    });
    
    
    
    // 전체메뉴(모달)
    $(".all_box").hide();

    $(".all_menu").click(function () {
        $(".all_box").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_box").fadeOut();
    });

    
    
    $("#products .view_02").hide();
    
    $("#products .btn_more").click(function () {
        $("#products .view_02").show();
        $("#products .btn_more").hide();
    });
    

    // 메인슬라이드
    $(".main_banner").bxSlider({
        auto: true
    });

    
    $(".instar_list").bxSlider({
        auto: true,
        pager: false,
        slideWidth: 240,
        maxSlides: 5,
        moveSlides: 1
    });
    
    
    
    
    
    

});







