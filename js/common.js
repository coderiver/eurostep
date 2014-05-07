head.ready(function() {
	
	// tabs menu position

	function tabs_menu(){
		var left = $(".header__inner").offset().left;
		$(".tabs__nav").css('left', left);
	}
	if ($(".tabs").length) {
		tabs_menu();
	};
	

	// tabs

    function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
         // $(this).find('li:nth-child(1)').addClass('is-active');
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    if ($(".js-tab-group").length) {
        tab();
    };

    // yandex map
    if ($("#YMapsID").length) {
   		ymaps.ready(function () {
   		var myMap = new ymaps.Map('YMapsID', {
   		    center: [53.9000000, 27.5666700],
   		    zoom: 15,
   		    controls: []
   		}),

   		    // Создаем метку с помощью вспомогательного класса.
   		    myPlacemark1 = new ymaps.Placemark([53.9000000, 27.5666700], {
   		        // Свойства.
   		        // Содержимое иконки, балуна и хинта.
   		        iconContent: '',
   		        balloonContent: 'Балун',
   		        hintContent: 'Стандартный значок метки'
   		    }, {
   		        // Опции.
   		        // Стандартная фиолетовая иконка.
   		        preset: 'twirl#violetIcon',
   		        iconColor: '#ffc113'
   		    });

   		 	myMap.geoObjects
   		    	.add(myPlacemark1)
   		
   		});	
    };
    

    $(window).resize(function(){
    	if ($(".tabs").length) {
			tabs_menu();
		};
    });

});