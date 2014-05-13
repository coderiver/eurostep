
var loader = {
  
  loading: function load_percent(){
    var preloader = $('.preloader');
    var percent = $('.preloader__progress');
    var pText = $(".preloader__counter");
    var window_width = $(window).width();
    var prNum = 0;
    var prNum2 = 0;

    preloader.append(pText);

    var animation = setInterval (function(){
      percent.css('background-color', '#ffdd00');
      prNum += (window_width/100);
      
      prNum2 += 1;
      pText.text(""+prNum2+" %");
      
      percent.css('width', prNum);

      if (prNum >= window_width ) {
        pText.text("Загрузка завершена");
        percent.css('width', window_width);
        clearInterval(animation);
      }
    }, 15);
  }
	

}
