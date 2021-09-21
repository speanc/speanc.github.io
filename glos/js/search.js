// Search Code

(function ($) {
	  jQuery.expr[':'].Contains = function(a,i,m){
		  return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	  };
	 
	  function listFilter(header, list) {
		var input=$("#glossSearch");

		
		$(input)
		  .change( function () {
			var filter = $(this).val();
			if(filter) {
			   //looks at the page and finds h3 that contain the search term (filter). Then it scrolls to the top of the parent div
			  var nHeight=$(".navbar").outerHeight();
			  $("html, body").animate({ scrollTop: $($(list).find("h3:Contains(" + filter + ")").parent()).offset().top-nHeight }, "slow");
			  $(list).find("h3:not(:Contains(" + filter + "))").parent().removeClass("hilite");
			  $(list).find("h3:Contains(" + filter + ")").parent().addClass("hilite");
			} 
			else{
				//remove highlight
				$(list).find("h3").parent().removeClass("hilite");
			}
			return false;
		  })
		.keyup( function () {
			$(this).change();
		});
	  }
	
	  $(function () {
		listFilter($("#testForm"), $("#glossary"));
	  });
	}(jQuery));
	
//On enterKey Stops refresh and clears search input
$(document).ready(function() {
  $("#glossSearch").keydown(function(event){
	 
	if(event.keyCode === 13) {
      event.preventDefault(); 
	  $(this).val("");
      return false;
	  
    }
  });
});

