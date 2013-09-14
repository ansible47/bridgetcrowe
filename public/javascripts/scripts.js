

function slideinit(){
			$('#slides').slidesjs({
				width: 940,
				height: 528,
				navigation: {
					effect: "fade"
				},
				pagination: {
					effect: "fade"
				},
				effect: {
					fade: {
						speed: 400
					}
				}
			});
}

function range(start, stop, step){
  var a[start];
	b=start;
  while(b<stop){b+=step;a.push(b)}
  return a;
};

$(document).ready(function(){
	$("body").css("opacity", "0.1");
	$("body").fadeTo(1000, 1).show();
};

$("#test").delay(1000).animate({ opacity: 1 }, 700);​

$(document).ready(myFunction);

$(document).ready(slideinit);
$(document).ready(function() {
                alert("ready");
            });

function getOriginalWidthOfImg(img_element) {
    var t = new Image();
    t.src = (img_element.getAttribute ? img_element.getAttribute("src") : false) || img_element.src;
    return t.width;
}

function getImageSize(imgSrc) {
     var imgLoader = new Image(); // create a new image object

    imgLoader.onload = function() { // assign onload handler
        var height = imgLoader.height;
        var width = imgLoader.width;
        alert ('Image size: '+width+'x'+height);
    }

    imgLoader.src = imgSrc; // set the image source
}
