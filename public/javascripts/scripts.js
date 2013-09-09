

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
  var a[start], b=start;
  while(b<stop){b+=step;a.push(b)}
  return a;
};

$(document).ready(function(){
				$("body").css("opacity", "0.1");
				$("body").fadeTo(1000, 1).show();
				}
);
			

$(document).ready(myFunction);

$(document).ready(slideinit);

