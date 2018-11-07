$(document).ready(function () {
	if(getCookie('connected')==='true' && getCookie('admin')==='1'){


	$.ajax({
		url : 'script/admin.php',
		type : 'GET',
		dataType : 'json',
		success : function(resultat, statut) {
			console.log(resultat);	
			var i=0;
			//TABLE AD
			resultat['ad_id'].forEach(function(element){
				var chain1 =
				'<tr id=ad'+resultat['ad_id'][i]+'>'+
				'<td data-target="ad_comp_id">'+ resultat['ad_comp_id'][i] +'</td>'+
				'<td data-target="ad_description">'+ resultat['ad_description'][i] +'</td>'+
				'<td data-target="ad_title">'+ resultat['ad_title'][i] +'</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="update" att="ad" data-id="'+resultat['ad_id'][i]+'">Mettre à jour</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="delete" att="ad" data-id="'+resultat['ad_id'][i]+'">Supprimer</td>'+

				'</tr>';
				$('#mytbody1').append(chain1);
				i++;
			});
			var i=0;

			//TABLE COMPANY
			resultat['comp_id'].forEach(function(element){
				var chain2 =
				'<tr id=comp'+resultat['comp_id'][i]+'>'+
				'<td data-target="comp_id">'+ resultat['comp_id'][i] +'</td>'+

				'<td data-target="comp_name">'+ resultat['comp_name'][i] +'</td>'+
				'<td data-target="comp_address">'+ resultat['comp_address'][i] +'</td>'+
				'<td data-target="comp_email">'+ resultat['comp_email'][i] +'</td>'+
				'<td><a href="#" class="btn waves-effect waves-light"  data-role="update" att="company" data-id="'+resultat['comp_id'][i]+'">Mettre à jour</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="delete" att="company" data-id="'+resultat['comp_id'][i]+'">Supprimer</td>'+
				

				'</tr>';
				$('#mytbody2').append(chain2);
				i++;
			});

			var i=0;

			//TABLE PEOPLE
			resultat['people_id'].forEach(function(element){
				var chain3 =
				'<tr id=people'+resultat['people_id'][i]+' >'+
				'<td data-target="people_id">'+ resultat['people_id'][i] +'</td>'+
				'<td data-target="people_username">'+ resultat['people_username'][i] +'</td>'+
				// '<td data-target="people_password">'+ resultat['people_password'][i] +'</td>'+
				'<td data-target="people_lastname">'+ resultat['people_lastname'][i] +'</td>'+
				'<td data-target="people_firstname">'+ resultat['people_firstname'][i] +'</td>'+
				'<td data-target="people_email">'+ resultat['people_email'][i] +'</td>'+
				'<td data-target="people_number">'+ resultat['people_number'][i] +'</td>'+
				'<td data-target="people_admin">'+ resultat['people_admin'][i] +'</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="update" att="people" data-id="'+resultat['people_id'][i]+'">Mettre à jour</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="delete" att="people" data-id="'+resultat['people_id'][i]+'">Supprimer</td>'+
				'</tr>';
				$('#mytbody3').append(chain3);

				i++;
			});
			var i=0;


			//TABLE APPLY
			resultat['apply_id'].forEach(function(element){
				var chain4 =
				'<tr id=apply'+resultat['apply_id'][i]+'>'+
				'<td data-target="apply_id">'+ resultat['apply_id'][i] +'</td>'+
				'<td data-target="apply_message">'+ resultat['apply_message'][i] +'</td>'+
				'<td data-target="apply_comp_id">'+ resultat['apply_comp_id'][i] +'</td>'+
				'<td data-target="apply_people_id">'+ resultat['apply_people_id'][i] +'</td>'+
				'<td data-target="apply_ad_id">'+ resultat['apply_ad_id'][i] +'</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="update" att="apply" data-id="'+resultat['apply_id'][i]+'">Mettre à jour</td>'+
				'<td><a href="#" class="btn waves-effect waves-light" data-role="delete" att="apply" data-id="'+resultat['apply_id'][i]+'">Supprimer</td>'+

				'</tr>';
				$('#mytbody4').append(chain4);
				i++;
			});

		},
		error : function(resultat, statut, erreur){
			alert("Error : " + erreur);
		},
		complete : function(resultat, statut){
				// alert("Complete ! " + statut);
			}
		});
}
else {
	           M.toast({html: 'Vous n\'êtes pas autorisé à visiter cette page. Vous allez être redirigé vers l\'accueil.',  completeCallback: function(){window.location.replace('index.html');}, displayLength:1500, classes: 'blue-grey center white-text Heading h2'});
}


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
