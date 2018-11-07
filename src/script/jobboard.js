$(document).ready(function () {
	var i=0;
	$.ajax({
		url : 'script/jobboard.php',
		type : 'GET',
		dataType : 'json',
		success : function(resultat, statut) {	
			resultat['ad_comp_id'].forEach(function(element){
				var chain= '<div class="card sticky-action medium col s6 offset-s3 center-align blue-grey ">'+
				'<div class="card-image waves-effect waves-block waves-light"><img class="activator" src="assets/office.jpg"></div>'+
				'<div class="card-action activator grey-text text-darken-4"><a class="btn waves-effect waves-light right" id="'+resultat['ad_id'][i]+'" att="message">Apply</a></div>'+
				'<div class="card-content "><span class="card-title white-text">'+
				resultat['ad_title'][i] +			
				'<a class=" activator btn waves-effect waves-light right">Learn more</a></span>'+
				'</div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' +
				resultat['comp_name'][i] + 
				'<i class="material-icons right">close</i></span><p>' +
				resultat['comp_address'][i] +
				'</p><p>' +
				resultat['ad_description'][i]+'<br><br><br><br><br></p></div></div>';

				$('#cardsrow').append(chain);
				i++;
			});
		},
		error : function(resultat, statut, erreur){
				// alert("Error : " + erreur);
			},
			complete : function(resultat, statut){
				// alert("Complete ! " + statut);
			}
		});



	$(document).on('click','a[att="message"]',function(){
		var ad_id = this.id;

		if (getCookie('connected') === 'true')
		{
			var firstname = getCookie('Firstname');
			var lastname = getCookie('Lastname');
			var email = getCookie('Email');
			var number = getCookie('Number');
			var id = getCookie('id');
			$('#createmodal').replaceWith(
				'<div class="modal-body"  id="createmodal">'+
				'<div class="form-group">'+
				'<label>people_lastname</label>'+
				'<input type="text" id="people_lastname" class="form-control" value="'+lastname+'" disabled>'+
				'</div>'+
				'<div class="form-group">'+
				'<label>people_firstname</label>'+
				'<input type="text" id="people_firstname" class="form-control"value="'+firstname+'" disabled>'+
				'</div>'+
				'<div class="form-group">'+
				'<label>people_email</label>'+
				'<input type="text" id="people_email" class="form-control"value="'+email+'" disabled>'+
				'</div>'+
				'<div class="form-group">'+
				'<label>people_number</label>'+
				'<input type="text" id="people_number" class="form-control"value="'+number+'"disabled>'+
				'</div>'+
				'<div class="form-group">'+
				'<label>apply_message</label>'+
				'<input type="text-area" id="apply_message" class="form-control" required>'+
				'</div>'+
				'<input type="hidden" id="people_id" value="'+id+'" class="form-control">'+
				'</div>'
				);
		}


		$('#myModal').modal('toggle');


		$('#send').click(function(){
			console.log('test');
			var people_id  = $('#people_id').val(); 
			var people_lastname =   $('#people_lastname').val();
			var people_firstname =   $('#people_firstname').val();
			var people_email =   $('#people_email').val();
			var people_number =   $('#people_number').val();
			var apply_message =   $('#apply_message').val();
			// console.log(ad_id);
			if(getCookie('connected')==="true"){

				var data={ type:'1', people_id : people_id, ad_id : ad_id , people_lastname : people_lastname ,people_firstname : people_firstname ,people_email : people_email , people_number: people_number, apply_message : apply_message};
			}
			else{
				var data={ type:'0', ad_id : ad_id , people_lastname : people_lastname ,people_firstname : people_firstname ,people_email : people_email , people_number: people_number, apply_message : apply_message };
			}
			// console.log(data);
					$('#myModal').modal('toggle');
					$('#myModal2').modal('toggle');

			$.ajax({
				url      : 'script/apply.php',
				method   : 'post', 
				data     :data,

          // console.log("LOL");
          success  : function(response){
          	M.toast({html: 'Votre candidature a bien été prise en compte !',  completeCallback: function(){window.location.replace('index.html');}, displayLength:1500, classes: 'blue-grey white-text Heading h2'});
          	console.log(response);
          },
          error  : function(response){
          	console.log(response);
          	M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !', displayLength:1500, classes: 'blue-grey white-text Heading h2'});

          },
          complete : function(response){}

      });
		});



	});


	
	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";

	}	



});







				// var chain= '<div class="card sticky-action medium col s6 offset-s3 center-align blue-grey "><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="assets/office.jpg"></div><div class="card-content "><span class="card-title white-text">'+
				// resultat['ad_title'][i] +			
				// '<a class=" activator btn waves-effect waves-light right">Learn more</a></span>'+
				// '<span class="card-action activator grey-text text-darken-4"><a class="btn waves-effect waves-light right" id="'+resultat['ad_id'][i]+'" att="message">Apply</a></span>'+

				// '</div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' +
				// resultat['comp_name'][i] + 
				// '<i class="material-icons right">close</i></span><p>' +
				// resultat['comp_address'][i] +
				// '</p><p>' +
				// resultat['ad_description'][i]+'</p></div></div>';








				// var chain= '<div class="card sticky-action medium col s6 offset-s3 center-align blue-grey ">'+
				// '<div class="card-image waves-effect waves-block waves-light"><img class="activator" src="assets/office.jpg"></div>'+
				// '<div class="card-action activator grey-text text-darken-4"><a class="btn waves-effect waves-light right" id="'+resultat['ad_id'][i]+'" att="message">Apply</a></div>'+
				// '<div class="card-content "><span class="card-title white-text">'+
				// resultat['ad_title'][i] +			
				// '<a class=" activator btn waves-effect waves-light right">Learn more</a></span>'+
				// '</div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' +
				// resultat['comp_name'][i] + 
				// '<i class="material-icons right">close</i></span><p>' +
				// resultat['comp_address'][i] +
				// '</p><p>' +
				// resultat['ad_description'][i]+'</p></div></div>';
