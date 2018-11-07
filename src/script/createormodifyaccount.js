$(document).ready(function () {

	console.log(getCookie('connected'));
	if(getCookie('connected')==='true')
	{

		var Id=getCookie('Id');
		var Firstname=getCookie('Firstname');
		var Lastname=getCookie('Lastname');
		var Email=getCookie('Email');
		var Numberr=getCookie('Number');
		console.log(Firstname);

		$('main').append(
			'<div class="container row s12 col " >'+
			'<form class="col s10 center-align"  id="form" style="margin-right: 20vw;margin-left: 20vw;margin-top: 10vh;">'+
			'<div class="row " >'+
			'<div class="input-field  col s6 ">'+
			'<input value="'+Firstname+'" name="firstname" id="firstname" type="text" class="validate" required>'+
			'<label for="first_name">First Name</label>'+
			'</div>'+
			'<div class="input-field col s6 ">'+
			'<input value="'+Lastname+'" id="lastname" type="text" name="lastname" class="validate " required>'+
			'<label for="lastname">Last Name</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6">'+
			'<input id="password" type="password" name="password" class="validate " required>'+
			'<label for="password">Password</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6 ">'+
			'<input value="'+Email+'" id="email" type="email" name="email" class="validate" required>'+
			'<label for="email">Email</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6 ">'+
			'<input value="'+Id+'" id="username" type="text" name="username" class="validate " required>'+
			'<label for="username">username</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6">'+
			'<input value="'+Numberr+'" id="number" type="tel" name="number" class="validate " maxlength="10"  pattern="[0-9]{10}" required>'+
			'<label for="number">Number</label>'+
			'</div>'+
			'</div>'+
			'<input class="btn waves-effect waves-light " type="button" id="update" value="Update">'+
			'</form>'+
			'</div>'
			);


	}
	else{
		$('main').append(

			'<div class="container row s12 col " >'+
			'<form class="col s10 center-align"  id="form" style="margin-right: 20vw;margin-left: 20vw;margin-top: 10vh;">'+
			'<div class="row " >'+
			'<div class="input-field  col s6 ">'+
			'<input placeholder="Placeholder" name="firstname" id="firstname" type="text" class="validate" required>'+
			'<label for="first_name">First Name</label>'+
			'</div>'+
			'<div class="input-field col s6 ">'+
			'<input id="lastname" type="text" name="lastname" class="validate " required>'+
			'<label for="lastname">Last Name</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6">'+
			'<input id="password" type="password" name="password" class="validate  "required>'+
			'<label for="password">Password</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6 ">'+
			'<input id="email" type="email" name="email" class="validate" required>'+
			'<label for="email">Email</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6 ">'+
			'<input id="username" type="text" name="username" class="validate " required>'+
			'<label for="username">username</label>'+
			'</div>'+
			'</div>'+
			'<div class="row ">'+
			'<div class="input-field col s6">'+
			'<input id="number" type="tel" name="number" class="validate "  maxlength="10"  pattern="[0-9]{10}" required>'+
			'<label for="number">Number</label>'+
			'</div>'+
			'</div>'+
			'<input class="btn waves-effect waves-light " type="button" id="submit" value="S\'inscrire">'+
			'</form>'+
			'</div>'
			);


	}

	$("#submit").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		var email=$("#email").val();
		var lastname=$("#lastname").val();
		var firstname=$("#firstname").val();
		var number=$("#number").val();
		$.ajax({
			url : 'script/inscription.php',
			type : 'POST',
			data : { people_password : password, people_username : username, people_email : email, people_lastname : lastname, people_firstname : firstname, people_number: number },
			dataType : 'json',
			success : function(resultat, statut) {	
				M.toast({html: 'Votre compte a été crée avec succes !',  completeCallback: function()
				{
					setCookie("connected",true,1);
					setCookie("Firstname",firstname,1);
					setCookie("Lastname",lastname,1);
					setCookie("Id",username,1);
					setCookie("Email",email,1);
					setCookie("Number",number,1);
					setCookie("Password",password,1);
					setCookie("admin",'0',1);

					$.ajax({url : 'script/cookie.js'});
					window.location.replace('index.html');
				}, displayLength:500, classes: 'blue-grey white-text Heading h2'});
			},
			error : function(resultat, statut, erreur){
				console.log(resultat);
				M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});
			},
			complete : function(resultat, statut){
				// alert("Complete ! " + statut);
			}
		});
	})

	$('#update').click(function(){
		console.log('update');
		console.log($('#firstname').val());
		console.log(getCookie('id')); 
		var people_id  = getCookie('id'); 
		var people_username =  $('#username').val();
		var people_password =  $('#password').val();
		var people_lastname =   $('#lastname').val();
		var people_firstname =   $('#firstname').val();
		var people_email =   $('#email').val();
		var people_number =   $('#number').val();
		var people_admin =   getCookie('admin');
		var mymodal = "3";

		$.ajax({
			url      : 'script/admincrud.php',
			method   : 'post', 
			data     : {mymodal : mymodal, people_id : people_id , people_username: people_username , people_password : people_password , people_lastname : people_lastname ,people_firstname : people_firstname ,people_email : people_email , people_number: people_number, people_admin : people_admin},

          // console.log("LOL");
          success : function(resultat, statut) {	
          	M.toast({html: 'Votre compte a été modifié avec succès !',  completeCallback: function()
          	{
          		setCookie("connected",true,1);
          		setCookie("Firstname",people_firstname,1);
          		setCookie("Lastname",people_lastname,1);
          		setCookie("Id",people_username,1);
          		setCookie("Email",people_email,1);
          		setCookie("Number",people_number,1);
          		setCookie("Password",people_password,1);
          		setCookie("Password",people_admin,1);
          		$.ajax({url : 'script/cookie.js'});
          		window.location.replace('index.html');
          	}, displayLength:500, classes: 'blue-grey white-text Heading h2'});
          },
          error  : function(response){
          	console.log(response);
          	M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

          }

      });
	});
	function setCookie(cookieName, cookieValue, cookieExdays) {
		var d = new Date();
		d.setTime(d.getTime() + (cookieExdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
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