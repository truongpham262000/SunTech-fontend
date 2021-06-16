$(document).ready(function () {
    $('#submit').click(function () {
        var kq ="";
        var check_name = /^[a-zA-Z0-9]+$/;
        var check_mail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
        var check_phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        var phai = $('#input5:checked').val();
        kq +='<p>Tên đăng nhập: '+$('#input1').val()+'</p>';
        kq +='<p>Mật khẩu: '+$('#input2').val()+'</p>';
        kq +='<p>Nhập mật khẩu: '+$('#input3').val()+'</p>';
        kq +='<p>Họ và tên: '+$('#input4').val()+'</p>';
        kq +='<p>Giới tính: '+((phai)?"Nam":"Nữ")+'</p>';
        kq +='<p>Ngày sinh: '+$('#input7').val()+'</p>';
        kq +='<p>Nghề nghiệp: '+$('#input8').val()+'</p>';
        kq +='<p>Email: '+$('#input9').val()+'</p>';
        kq +='<p>Điện thoại: '+$('#input10').val()+'</p>';
        kq +='<p>Ghi chú: '+$('#input11').val()+'</p>';
        if($('#input1').val() == ''||$('#input2').val() == ''||$('#input3').val() == ''||$('#input4').val() == ''||$('#input7').val() == ''||$('#input9').val() == ''||$('#input10').val() == '') {
            alert('Bạn phải nhập đầy đủ thông tin !!!');
        } else if(!check_name.test($('#input1').val())) {
            alert('Tên đăng nhập không hợp lệ');
        }else if(!check_mail.test($('#input9').val())){
            alert('E-mail không hợp lệ');
        } else if(!check_phone.test($('#input10').val())) {
            alert('Số điện thoại không hợp lệ');
        } else {
            $('.bottom').html(kq);
        }
    });
});