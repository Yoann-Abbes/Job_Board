$(document).ready(function () {


	$("#disconnect").click(function(){
				M.toast({html: 'A bientôt '+getCookie('Firstname')+' '+getCookie('Lastname')+' !', displayLength: 500, completeCallback: function(){window.location.replace('index.html');} ,classes: 'blue-grey white-text Heading h2'});
		setCookie("connected",false,1);
		setCookie("Firstname",null,1);
		setCookie("Lastname",null,1);
		setCookie("Password",null,1);
		setCookie("Id",null,1);
		setCookie("id",null,1);
		setCookie("email",null,1);
		$.ajax({
			url : 'script/cookie.js'
		});


	})


	$("#signin").click(function(){
		console.log('singin');
		var id=$("#id").val();
		var password=$('#pass').val();
		$.ajax({
			url : 'script/auth.php',
			type : 'GET',
			data : 'Id='+id +'&Password='+password,
			dataType : 'json',
			success : function(resultat, statut) {	
				console.log(resultat);
				console.log(resultat.Id[0]);

				setCookie("connected",true,1);
				setCookie("Firstname",resultat.Firstname[0],1);
				setCookie("Lastname",resultat.Lastname[0],1);
				setCookie("Id",resultat.Id[0],1);
				setCookie("Email",resultat.Email[0],1);
				setCookie("Number",resultat.Number[0],1);
				setCookie("Password",resultat.Password[0],1);
				setCookie("id",resultat.idd[0],1);
				setCookie("admin",resultat.Admin[0],1);
				$.ajax({
					url : 'script/cookie.js'
				});
				if(resultat.Admin[0]==='1'){

					window.location.replace('admin.html');
				}
				M.toast({html: 'Bienvenue '+resultat.Firstname[0]+' '+resultat.Lastname[0]+' !',  completeCallback: function(){window.location.replace('index.html');}, displayLength:500, classes: 'blue-grey white-text Heading h2'});
			},
			error : function(resultat, statut, erreur){
				console.log(resultat);
				alert("Error : " + erreur);
			},
			complete : function(resultat, statut){
			}
		});
	})


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