
var loader = {
  el: 'hrek',
  fun: function load_percent(){
    var preloader = $('.preloader');
    var pText = document.createElement('p');
    var prNum = 0;

    preloader.append(pText);

    var animation = setInterval (function(){
      preloader.css('background-color', '#F08080');
      prNum+=6;
      pText.innerHTML = "Идет загрузка: "+prNum+" %";
      preloader.css('width', prNum);

      if (prNum >= 100 ) {
        pText.innerHTML = "Загрузка завершена";
        preloader.css('width', 100);
        //clearInterval(a);
      }
    }, 500);
  }
	

}
