
head.ready(function() {


$('.repeat').click(function(event) {
    $('.preloader').show();

    $('.preloader__fademe').fadeOut('slow',function(){

                $('#frames').fadeTo( "slow" , 1, function() {
                    
                    $('.preloader__text').fadeTo( "slow" , 1, function() {
                        //alert('done');
                        setTimeout(function(){$('.preloader__text').addClass('fademe')}, 3000);
                        setTimeout(function(){runanimation();}, 3500);
                        localStorage['bla3'] = '1111'; 
                    });
                    //runanimation();
                });
            
            });
    setTimeout(function(){runanimation();}, 3500);
});

if(localStorage['bla3']){
    $('.preloader').hide();
}






var i = 0;
function runanimation(){
	//alert('runrun');
	//$('#frames img').hide();
	if(i<41){
		setTimeout(function(){
			console.log(i);
			$('#frames>div').removeClass('showme');
			$('#frames .arr'+i).addClass('showme');
			runanimation();
			i++;
		}, 200);
	}
	else{
		$('.preloader').fadeOut(3000);

	}
	// for(i=0;i<=50;i++){
	// 	//console.log(i);
		
	// }
}

// assign 50 non-cache-able images via an image generator
var imagesArray = new Array(41).join(',').split(',');
imagesArray = imagesArray.map(function(el, i){
    return 'img/frames/' + i + '.jpg';
    //return 'img/frames/' + i + '.jpg?' +new Date();
});
console.log(imagesArray);


var imageContainer = document.getElementById('frames');

// instantiate the pre-loader with an onProgress and onComplete handler
new preLoader(imagesArray, {
    onProgress: function(img, imageEl, index){
        // fires every time an image is done or errors. 
        // imageEl will be falsy if error
        console.log('just ' +  (!imageEl ? 'failed: ' : 'loaded: ') + img);
        
        var percent = Math.floor((100 / this.queue.length) * this.completed.length);
        console.log(percent);
        $('.preloader__progress').css('width',percent+'%');
        $('.preloader__realc').text(percent+'%');
        // update the progress element
        // legend.innerHTML = '<span>' + index + ' / ' + this.queue.length + ' ('+percent+'%)</span>';
        // progress.value = index;
        // var regExp = /\"([^)]+)\"/;
        // var matches = regExp.exec(imageEl);
        console.log(img);
        nomer = img.split('/')[2].split('.')[0];
        console.log(nomer);
        imageEl = '<div class="arr arr'+nomer+'" style="background-image:url('+img+')"></div>';
        console.log(imageEl);
        $('#frames').append(imageEl);
        
        // can access any propery of this
        console.log(this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
    }, 
    onComplete: function(loaded, errors){
        // fires when whole list is done. cache is primed.
        
        console.log('done', loaded);
        imageContainer.style.display = 'none';
        $('.preloader').addClass('is-done');
        if(localStorage['bla3']){}
        else{
            $('.preloader__fademe').fadeOut('slow',function(){

            	$('#frames').fadeTo( "slow" , 1, function() {
            		
                    $('.preloader__text').fadeTo( "slow" , 1, function() {
                        //alert('done');
                        setTimeout(function(){$('.preloader__text').addClass('fademe')}, 3000);
                        setTimeout(function(){runanimation();}, 3500);
                        localStorage['bla3'] = '1111'; 
                    });
    	    		//runanimation();
    	  		});
            
            });

        }

        
        
        if (errors){
            console.log('the following failed', errors);
        }
    }
});
});