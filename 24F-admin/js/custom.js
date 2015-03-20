/* ==============================================================================
// Custom Js
// ============================================================================== */
$(window).resize(function() {
	if ($(window).width() < 767) {
		var active_height = $('.activebar').height();
		//alert(active_height);
		$('#content.active-header .menubar').css('top',active_height+'px');
	}
});

$(function () {
	
	/*Globel */
	  if ($(window).width() > 991) {
		  $('.inner-sidebar').slimScroll({
			  height: '485px'
		  });
	  }
	  $('a.warn-alert').click(function() {
		var $theAlert = $('.alert-warning'); /* class on the alert */
		$theAlert.css('display','block');
	   // set up the close event when the alert opens
	   $theAlert.find('a[data-hide]').click(function() {
		 $(this).parent().hide(); /* hide the alert */
	   });
	});
	$('a.error-alert').click(function() {
		var $theAlert = $('.alert-danger'); /* class on the alert */
		$theAlert.css('display','block');
	   // set up the close event when the alert opens
	   $theAlert.find('a[data-hide]').click(function() {
		 $(this).parent().hide(); /* hide the alert */
	   });
	});
	$('a.success-alert').click(function() {
		var $theAlert = $('.alert-success'); /* class on the alert */
		$theAlert.css('display','block');
	   // set up the close event when the alert opens
	   $theAlert.find('a[data-hide]').click(function() {
		 $(this).parent().hide(); /* hide the alert */
	   });
	});
	$('a.info-alert').click(function() {
		var $theAlert = $('.alert-info'); /* class on the alert */
		$theAlert.css('display','block');
	   // set up the close event when the alert opens
	   $theAlert.find('a[data-hide]').click(function() {
		 $(this).parent().hide(); /* hide the alert */
	   });
	});
	 
	 
	//Refund page
	$('.refund-radio input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'partial-refund') {
			$('.refund-amount ').show();           
	   }

	   else {
			$('.refund-amount ').hide();   
	   }
	});	
	
	//Notification-inner
	$('.temp-radio input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'custom-temp') {
			$('#custom-template ').show();           
	   }

	   else {
			$('#custom-template ').hide();   
	   }
	});  	
	
	//Create-payment-page
	$('.desc-radio input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'yes') {
			$('#yes-description').show();           
	   }

	   else {
			$('#yes-description').hide();   
	   }
   });
   
   $('.noti-email input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'yes-email') {
			$('#yes-notifications').show();           
	   }

	   else {
			$('#yes-notifications').hide();   
	   }
   });
   
   $('.charge-fee label  > input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'yes-fee') {
			$('#additional-fee').show();           
	   }

	   else {
			$('#additional-fee').hide();   
	   }
   });
   
   $('.fee-type input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'amnt-fee') {
			$('.show-amount').addClass('active');           
	   }

	   else {
			$('.show-amount').removeClass('active');   
	   }
	   
	   if($(this).attr('id') == 'percent-fee') {
			$('.show-percentage').addClass('active');           
	   }

	   else {
			$('.show-percentage').removeClass('active');   
	   }
	   
	   
   });
   
   $('.payer-more-info input[type="radio"]').click(function() {
	   if($(this).attr('id') == 'more-info-yes') {
			$('.add-custom-field ').show();           
	   }

	   else {
			$('.add-custom-field ').hide();   
	   }
	});
   
   $("#add-email").click(function () {
		$(this).parent().append('<div class="row add-field"><div class="col-sm-8"><input type="text" class="form-control" name="input[]"></div><button  class="delete btn btn-danger">Delete</button></div>');
   });
   $("body").on("click", ".delete", function (e) {
		$(this).parent("div").remove();
   });
   
   $(".frequency-select select").change(function(){
		$( "select option:selected").each(function(){
			if($(this).attr("value")=="one-time"){
				$(".box").hide();
				$("#recurring-frequency").hide();
			}
			if($(this).attr("value")=="recurring"){
				$(".box").hide();
				$("#recurring-frequency").show();
			}
			if($(this).attr("value")=="decided-at-checkout"){
				$(".box").hide();
				$("#recurring-frequency").hide();
			}
			
		});
	}).change();
	
	$(".duration-select select").change(function(){
		$( "select option:selected").each(function(){
			if($(this).attr("value")=="indefinite"){							
				$(".fixed-amnt-time").hide();
			}
			if($(this).attr("value")=="fixed-amt-time"){							
				$(".fixed-amnt-time").show();
			}					
		});
	}).change();
   
   $(".custom-field-select select").change(function(){
		$( "select option:selected").each(function(){
			if($(this).attr("value")=="single-text"){							
				$(".drop-down-instruction").hide();
				$(".radio-button-instruction").hide();
			}
			if($(this).attr("value")=="para-text"){							
				$(".drop-down-instruction").hide();
				$(".radio-button-instruction").hide();
			}
			if($(this).attr("value")=="drop-down"){							
				$(".drop-down-instruction").show();
				$(".radio-button-instruction").hide();
			}
			if($(this).attr("value")=="radio-buttons"){							
				$(".drop-down-instruction").hide();
				$(".radio-button-instruction").show();
			}
			if($(this).attr("value")=="adderss"){							
				$(".drop-down-instruction").hide();
				$(".radio-button-instruction").hide();
			}					
		});
	}).change();

	// tabs
	var $tabs = $(".tabs a");
	var $tab_contents = $(".tab-content .tab");

	$tabs.click(function (e) {
		e.preventDefault();
		var index = $tabs.index(this);

		$tabs.removeClass("active");
		$tabs.eq(index).addClass("active");

		$tab_contents.removeClass("active");
		$tab_contents.eq(index).addClass("active");
	});
	
	//Payment page
	
	var $projects = $(".project");

	$projects.each(function (index, el) {
		var $btn = $(el).find(".add-more");
		var $menu = $btn.siblings(".menu");
		var timeout;

		$btn.click(function (e) { e.preventDefault(); });

		$(el).on("mouseenter", ".add-more, .menu", function () {
			clearTimeout(timeout);
			timeout = null;
			$menu.addClass("active");
		});

		$(el).on("mouseleave", ".add-more, .menu", function () {
			timeout = setTimeout(function () {
				$menu.removeClass("active");
			}, 400);
		});
	})
	
});