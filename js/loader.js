head.ready(function() {
var i = 0;
function runanimation(){
	//alert('runrun');
	//$('#frames img').hide();
	if(i<40){
		setTimeout(function(){
			console.log(i);
			$('#frames img').removeClass('showme');
			$("#frames img[src$='/"+i+".jpg'").addClass('showme');
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
var imagesArray = new Array(40).join(',').split(',');
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
        
        imageContainer.appendChild(imageEl);
        // can access any propery of this
        console.log(this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
    }, 
    onComplete: function(loaded, errors){
        // fires when whole list is done. cache is primed.
        console.log('done', loaded);
        imageContainer.style.display = 'none';
        $('.preloader__fademe').fadeOut('slow',function(){
        	$('#frames').fadeTo( "slow" , 1, function() {
        		$('.preloader').addClass('is-done');
	    		runanimation();
	  		});
        });
        
        
        if (errors){
            console.log('the following failed', errors);
        }
    }
});
});