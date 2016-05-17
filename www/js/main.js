$('.project').on('click', function(){

	var content = $(this).next();
	var icon = $(this).find('i');
	var isOpen = $(icon).hasClass('fa-minus-circle');

	if(isOpen){
		$(content).hide();
		$(icon).addClass('fa-plus-circle');
		$(icon).removeClass('fa-minus-circle');
	} else {
		$(content).show();
		$(icon).removeClass('fa-plus-circle');
		$(icon).addClass('fa-minus-circle');
	}
});
