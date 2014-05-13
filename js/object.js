
var loader = {
  
  loading: function load_percent(){
    var preloader = $('.preloader');
    var percent = $('.preloader__progress');
    var intro_text = $(".preloader__text");
    var pText = $(".preloader__counter");
    var window_width = $(window).width();
    var prNum = 0;
    var i = 0;

    //preloader.append(pText);

    var animation = setInterval (function(){
      percent.css('background-color', '#ffdd00');
      prNum += (window_width/100);
      
      i += 1;
      pText.text(""+i+" %");
      
      percent.css('width', prNum);

      if (prNum >= window_width ) {
        pText.hide();
        percent.css('width', window_width);
        intro_text.css('opacity', 1);
        clearInterval(animation);
      }
    }, 15);
  }
	

}
