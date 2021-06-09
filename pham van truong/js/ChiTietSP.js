$(document).ready(function () {
	$('#show4 .item img').click(function () {
		var image =$(this).attr('src');
		$('.show img').attr('src',image);
		$('#show4 .item').removeClass('')
	});
	$('.list li').click(function () {
		$('.list li').removeClass('active');
		$(this).addClass('active');
	});
});