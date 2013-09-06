

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
$(document).ready(function(){
				$("body").css("opacity", "0.1");
				$("body").fadeTo(1000, 1).show();
				}
);
			

$(document).ready(myFunction);

$(document).ready(slideinit);

