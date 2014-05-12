
var loader = new Object (

  // step 1 preloader
  
	function load_percent(){
		var preloader = document.getElementsByClassName('preloader');
		var pText = document.createElement('p');
    var prNum = 0;

		preloader.appendChild(pText);

    var animation = setInterval (function(){
      preloader.style.backgroundColor='#F08080';
      prNum+=6;
      pText.innerHTML = "Идет загрузка: "+prNum+" %";
      preloader.style.width = prNum+"px";

      if (prNum >= 100 ) {
        pText.innerHTML = "Загрузка завершена";
        preloader.style.width = 100+"px";
        clearInterval(a);
      }

    }, 500);

	}

);
