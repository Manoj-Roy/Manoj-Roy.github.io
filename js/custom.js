$(document).ready(function(event) {

	$(window).resize(function() {
		location.reload();
	});
	// Added globel class

	var chckValue = $("input[type='checkbox']").attr("id");
		

	// $("input[type='checkbox']").parent().attr("for",chckValue);
	
	$("input[type='text']").parent().addClass("input-field");
	$("input[type='text']").addClass("validate");
	
	$(".section a").addClass("waves-effect waves-light btn-large");

	$("ul.fb-tabs").addClass("tabs");
	$("ul.fb-tabs li").addClass("tab col s3");
	$("ul.fb-tabs li a").click( function(e) {
		e.preventDefault();
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
			$(this).addClass("active");
		}
	});
	
	$('ul.tabs').tabs();
	 Materialize.updateTextFields();	
	 
	 	mediaFromTab();
	 $(window).resize(function() {
	 	mediaFromTab();
	 });
	/* media in js */
	function mediaFromTab() {
		var	winW = $(window).width(),
			winH = $(window).height();

		// if ($(winW) > 768) {
			$(".fb-left").css("min-height",winH);
			// .addClass("blue lighten-5");
			// $(".fb-right").css({"min-height":winH}).addClass("red lighten-4");
			$(".fb-right").append("<span class='waves-effect waves-red btn secondary-content formPreview modal-trigger ' href='#modal1'>Preview</span>")
		// }
	}

	/* === Form preview === */	

	$('.modal-trigger').leanModal();

	
	//html form create
	formView();
	   function formView() {
	   		var winH = $(window).height()- 5;
	   			$('#myframe1').css('min-height',winH - 160);
	   		$('myframe1').contents().html('<frameset name="myframe2" cols="0%, 100%" border="0" frameBorder="0" frameSpacing="0">\
		        <frame name="page1" src="c.html" scrolling="no"></frame>\
		        <frame name="page2" src="d.html" >\
		        \
		        	<!DOCTYPE html>\
		            <html>\
		                <head>\
		                <link rel="stylesheet" type="text/css" href="lib/css/formbuilder.css">\
						<link rel="stylesheet" type="text/css" href="lib/css/materialize.min.css">\
						<link rel="stylesheet" type="text/css" href="css/style.css">\
		                </head>\
		                <body id="top">\
		                    <div id="div1">\
		                        <div class="div2">\
		                            <!--<div id="div3">\
		                                <ul id="x">\
		                                    <li>a</li>\
		                                    <li>b</li>\
		                                </ul>\
		                            </div>-->\
		                        </div>\
		                    </div>\
		                </body>\
		            </html>\
		        </frame>\
		    </frameset>');
			var ifRameGet = document.getElementById("myframe1");
		    // ifRameGet.srcdoc = "<!DOCTYPE html PUBLIC....";
		    ifRameGet.contentWindow.document.head.innerHTML = 
		    						'<link rel="stylesheet" type="text/css" href="lib/css/formbuilder.css">\
		    						<link rel="stylesheet" type="text/css" href="lib/css/materialize.min.css">\
		    						<link rel="stylesheet" type="text/css" href="css/style.css">';
		    	//$(linkS).append($('<link rel="stylesheet" type="text/css" href="lib/css/formbuilder.css">'));
	   }
        

    // Preview button on
    $(".formPreview").on("bind click", function() {  

    	var getJson = $(".payValue").val();
    	if (!getJson) {	
    	
    		alert("Please choose fields !");
    		$("#modal1").removeClass("modal");
		
		} else {
			$("#modal1").addClass("modal");
			obj = JSON.parse(getJson);
			console.log(obj.fields[0]);	
			setTimeout(function() {
				// formView();
				var ifarmeHtml = $("#myframe1").contents().find("body");
				
				var putValue = $(ifarmeHtml).find("#div1");
				$(ifarmeHtml).html("");
				// var contMake = ;
				var val = "data";
			        $.ajax ({
			            url: "req.php",
			            data: val,
			            success: function() {

			            	// I have commented this portion for exploretion of function ====>>>>
			            	
			            		checkFields(obj.fields);			            		

			                	// OR

			            //  var rightSec = $(".fb-right").html()
			            //     $(ifarmeHtml).html(rightSec);
			            //     $(ifarmeHtml).find(".formPreview").remove();
			            }
			            // checkFields();
			        });
				
			},1000);
			//console.log(checkFields(obj.fields[0]));
		} 
    });


	$(".save-form-btn").on("click",function() {
		var getJson = $(".payValue").val();
		//$("#postJson").val(getJson);
			$.ajax({ 
								 type: "post", 
								 url: "ajax_page.php", 
								 cache: false,	
								 data: {to_do: 'insert_form_builder',json_code: getJson},
								 dataType: 'json',
								 success: function(return_data){

								   alert(return_data.res);													
												
								}
							}); 
	});
});

