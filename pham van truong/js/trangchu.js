$(document).ready(function () {
//slider
    $('.prev').click(function () {
        $("#image_" + anhhientai).stop().fadeOut(1000);
        giam_anh();
        $("#image_" + anhhientai).stop().fadeIn(1000);
    });
    $('.next').click(function () {
        $("#image_" + anhhientai).stop().fadeOut(1000);
        tang_anh();
        $("#image_" + anhhientai).stop().fadeIn(1000);
    });
    var anhhientai = 1;
    var soanh = 4;
    function tang_anh() {
        $('.icon-slide li').removeClass('active');
        $('.icon-slide li').eq(anhhientai).addClass('active');
        ++anhhientai;
        if(anhhientai > soanh){
            anhhientai = 1;
            $(".icon-slide li:first-child").addClass('active');
        }
    }
    function giam_anh(){
        --anhhientai;
        if(anhhientai < 1)
            anhhientai = 1;
    }
    window.setInterval(function () {
        $('.next').click();
    },4000);
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText:["<i class='fa fa-angle-left icon-nav'></i>","<i class='fa fa-angle-right icon-nav'></i>"],
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    //set with height best-sell for girls
    var maxheight = 0;
    var maxwidth = 0;
    $('.item img').each(function () {
        if($(this).width() > maxwidth) 
            maxwidth = $(this).width();
        if($(this).height() > maxheight)
            maxheight = $(this).height();
    });
    $('.item img').width(maxwidth);
    $('.item img').height(maxheight);
    // sự kiện ấn nút đăng ký

    $('#DangKy').click(function () {
        window.open('DangKy.html','_self');
    });
    // sự kiện ấn nút đăng nhập
    $('#DangNhap').click(function () {
        window.open('user.html','_self');
    });
    // trang giới thiệu
    $('.shop').click(function () {
        window.open('GioiThieu.html','_self');
    });
    //input search 
    $('.search #btntim').click(function () {
        var text = $('#txtTim').val();
        var chuoi ="thien thanh";
        if(text === chuoi)
            alert('đã tìm thấy');
        else
            alert('không có sản phẩm này');
    });
    // fancy box show

    $('.item1 .image a').fancybox();
});
// wow.js
new WOW().init();