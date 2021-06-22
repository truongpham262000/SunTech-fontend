$(document).ready(function () {
    // form user
    $('#Name_pass').click(function () {
        if($('#name').val() == 'phamvantruong'){
            if($('#pass').val() == '26022000'){
                $('.show-user').fadeOut(1000);
                alert('Đăng nhập thành công');
            } else {
                alert('Mật khẩu không chính xác');
                window.onload('none');
            }
        } else {
            alert('Tài khoản hoặc mật khẩu không chính xác');
            window.onload('none');
        }
    });
    // sự kiện ấn nút đăng nhập
    $('#DangNhap').click(function () {
        $('.show-user').fadeIn(1000);
    });
    // sự kiện nut exit
    $('.exit span').click(function () {
        $('.show-user').fadeOut(1000);
    });
    //slider bar
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
    //nav active
    $('nav ul li').click(function () {
        $('nav ul li').removeClass('active');
        $(this).addClass('active');
    });
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
    // trang giới thiệu
    $('.shop').click(function () {
        window.open('GioiThieu.html','_self');
    });
    //input search 
    $('.search #btntim').click(function () {
        var text = $('#txtTim').val();
        var chuoi =["thiên thanh","quần áo","shop","quần áo nam","quần áo nữ","thời trang","áo sơ mi"];
        for(var i = 0;i <= chuoi.length;i++){
            if(text.toLowerCase() == chuoi[0]||text.toLowerCase() == chuoi[1]||text.toLowerCase() == chuoi[2]||text.toLowerCase() == chuoi[3]||text.toLowerCase() == chuoi[4]||text.toLowerCase() == chuoi[5]||text.toLowerCase() == chuoi[6]){
                alert('đã tìm thấy');
            } else {
                alert('không có sản phẩm này');
            }
            break;
        }
    });
    // fancy box show

    $('.item1 .image a').fancybox();
    //responsive menu
    $('.respon').click(function () {
       $('nav ul').fadeToggle('1000');
    });
});
// wow.js
new WOW().init();