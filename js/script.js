$(document).ready(function(){
	$(".header__burger-1").click(function(event) {
		$(".header__burger-1, .header__menu-1, .header__menu-2, .form__search, .header__menu-container, .container__logo, .container__buy, .container__languare").toggleClass('active');
	});	
});

$(document).ready(function(){
	$(".header__burger-2").click(function(event) {
		$(".header__burger-2, .product__filters-block").toggleClass('active');
	});	
});
