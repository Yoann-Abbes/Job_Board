$(document).ready(function () {


	if(getCookie('connected') === 'true')
	{
		console.log('setcookies');

		$('#seco')[0].innerHTML = '<p>Bonjour '+ getCookie('Firstname')+' '+ getCookie('Lastname');
		$('#account')[0].innerHTML = 'Modifier vos informations';

		$('#id').hide();
		$('#pass').hide();
		$('#signin').hide();
		$('#disconnect').show();
		$('#seco').show();
	}
	else 
	{
		$('#id').show();
		$('#pass').show();
		$('#signin').show();
		$('#disconnect').hide();
		$('#seco').hide();
		$('#account')[0].innerHTML = 'Inscription';

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