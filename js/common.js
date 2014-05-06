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

    $(window).resize(function(){
    	if ($(".tabs").length) {
			tabs_menu();
		};
    });

});