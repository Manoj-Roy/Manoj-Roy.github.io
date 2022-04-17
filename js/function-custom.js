/*functions for get html */
	function inputNumChar(select_num_char) {

		// $(".numChar").change(function() {
			var changeValue = $(".numChar").val();
			$(select_num_char).keypress(function(e) {
		        var a = [];
		        var k = e.which;
		    	var num_char_select = ["words","characters"];
		    	var getJson = $(".payValue").val();
		    		obj = JSON.parse(getJson);

		        for (i = 48; i < 58; i++)
		            a.push(i);
		    	
		    	if (changeValue == num_char_select[0]) {

		    		if (($.inArray(k,a)>=0))
		            e.preventDefault();

		    	}else if(changeValue == num_char_select[1]) {

		    		if (!($.inArray(k,a)>=0))
		            e.preventDefault();
		    	} else {

		    	}
		        
		    });
		// });
		 
	}

function addInsideInputs(viewInput) {
	
}

function checkFields(commonFiled) {    
		var sizVal = $(".sizeText").val();    

        	var ifarmeHtml = $("#myframe1").contents().find("body");
        	var putValue = $(ifarmeHtml).find("#div1");
        for (var i = 0; i < commonFiled.length; i++) {
        	var getInputObject = commonFiled[i];
        	// text if get
        	if (getInputObject.field_type == "text") {
        		console.log("textbox added !");
	             $(ifarmeHtml).append('<div class="div2">'+ 
	            	getInputObject.label + '\n' + '<div class="inputField_add">'+ '<input type="' + getInputObject.field_type +
	            	'" maxlength="' + getInputObject.field_options.maxlength +
	            	'" minlength="' + getInputObject.field_options.minlength +
	            	'" class="rf-size-' + sizVal + '"/>' +'</div>' +
	            	getInputObject.field_options.description +
	            	'</div>');
     		}
     		// button get
     		if (getInputObject.field_type == "button") {
        		console.log("button added !");
	             $(ifarmeHtml).append('<div class="div2">'+ 
	            	getInputObject.label + '\n' + '<div class="inputField_add">'+ '<input type="' + getInputObject.field_type +
	            	'" value="' + getInputObject.field_options.value +
	            	'" class="waves-effect waves-light btn"/>' +'</div>' +
	            	getInputObject.field_options.description +
	            	'</div>');
     		}
     		// checkboxes get
     		if (getInputObject.field_type == "checkboxes") {
        		console.log("checkbox added !");
        		var checkBoxs = getInputObject.field_options.options;        		

	             $(ifarmeHtml).append('<div class="div2">'+ 
	            	getInputObject.label + '\n' + '<div id="checkInput" class="inputField_add">' +	            	
	            	'</div>' +
	            	getInputObject.field_options.description +
	            	'</div>');
	        	setTimeout(function() {

	             for (var c = 0; c < checkBoxs.length; c++) {
					// Things[i]        		
					console.log(c);
					var multiInputs = $("#myframe1").contents().find(".div2");	
					var putIntoParent = $(multiInputs).children("#checkInput");
					var getMultiInput = multiInputs.selector;
						var node = document.createElement('span');
						console.log(multiInputs)
							$(putIntoParent).append('<lable class="checkLabel"><input type="checkbox"/>'+ checkBoxs[c].label +' </label>\n');
						
					}	            
	            
        		},1000);
     		}

     		// Redio button
     		if (getInputObject.field_type == "radio") {
     			console.log('Redio Button added !');
     			var redios = getInputObject.field_options.options;

     			$(ifarmeHtml).append('<div class="div2">'+ 
	            	getInputObject.label + '\n' + '<div id="radioInput" class="inputField_add">' +	            	
	            	'</div>' +
	            	getInputObject.field_options.description +
	            	'</div>');

     			setTimeout(function() {

	             for (var c = 0; c < redios.length; c++) {
					// Things[i]        		
					console.log(c);
					var multiInputs = $("#myframe1").contents().find(".div2");	
					var putIntoParent = $(multiInputs).children("#radioInput");
					var getMultiInput = multiInputs.selector;
						var node = document.createElement('span');
						console.log(multiInputs)
							$(putIntoParent).append('<lable class="checkLabel"><input type="radio" name="radio' + c + '"/>'+ redios[c].label +' </label>\n');
						
					}	            
	            
        		},1000);
     		}
        }
         
          console.log(putValue);
    }