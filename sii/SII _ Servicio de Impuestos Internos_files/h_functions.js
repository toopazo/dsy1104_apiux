var objSesion = new Object();

$(document).ready(function () {

	// lista desplegable en cabecera con mouseover
	$('#main-menu li.dropdown').hover(function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);
	}, function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);
	});

	// ULTIMA SESION
	var a_cross_domain_url = 'https://zeusr.sii.cl/cgi_AUT2000/AutTknData.cgi' + "?rnd=" + Math.random();
	var readerSessionSII = store('siilastsesion');
	var leerTokenData = false;

	if (typeof readerSessionSII !== "undefined" && readerSessionSII !== null && readerSessionSII != "") {
		var sesionTokenLast = getCookieHome("TOKEN");

		if (sesionTokenLast == readerSessionSII.token && sesionTokenLast != "") {
			respuestaUltimaVisitaRest(readerSessionSII.lastConexion);
		} else {
			leerTokenData = true;
		}

	} else {
		leerTokenData = true;
	}


	if (leerTokenData == true) {
		$.ajax({
			url: a_cross_domain_url,
			type: "post",
			dataType: "jsonp",
			jsonp: "callback",
			success: function (json) {
				//console.log(json);
				//console.log( "ready!" );
			}
		});
	}


	// MENU 
	new Mmenu(
		document.querySelector("#menu"),
		{
			theme: "white",
			setSelected: {
				hover: true,
				parent: true,
			},
			searchfield: {
				add: true,
				placeholder: "Buscar",
			},
			iconPanels: {
				add: true,
				visible: 1,
			},
			sidebar: {
				collapsed: {
				},
			},

			navbars: [
				{
					content: ["searchfield"],
				},
				{
					content: ["prev", "breadcrumbs", "close"],
				},
				{
					position: "bottom",
					content: [
						"<a data-target='#mm-0' href='https://homer.sii.cl/' class='mm-next mm-fullsubopen'><i class='fa fa-home' aria-hidden='true'></i> Inicio</a> <a title='Cerrar menu' href='#my-wrapper'><div class='fa fa-sign-out fa-flip-horizontal' style='display:inline-block;' aria-hidden='true'></div> Cerrar</a>",
					],
				},
			],
		},
		{
			searchfield: {
				cancel: true,
				clear: true,
			},
		}
	);


	// MENU HAMBURGUESA
	const collection = document.getElementsByClassName("mm-btn--close");
	collection[0].className += " fa fa-times";
	collection[1].className += " fa fa-sign-out fa-flip-horizontal";
	collection[1].style.color = " #eb510d";

	document.getElementById("menu").style.display = "block";

	var matches = document.querySelectorAll('li.mm-listitem > a');
	matches[0].setAttribute('style', 'font-size:20px' + '!important');
	matches[1].setAttribute('style', 'font-size:20px' + '!important');
	matches[2].setAttribute('style', 'font-size:20px' + '!important');
	matches[3].setAttribute('style', 'font-size:20px' + '!important');

	function resizeMenuHamburguesa() {
		var screenw = screen.width;
		if (screenw < 551) {
			document.getElementById("menu").style.width = (screenw * 0.8) + "px";
		} else {
			document.getElementById("menu").style.width = "440px";
		}
		var screenh = screen.height;
		document.getElementById("menu").style.height = (screenh - 290) + "px";
	}
	resizeMenuHamburguesa();
	window.addEventListener('resize', function (event) {
		resizeMenuHamburguesa();
	});


	// FLECHAS
	$(".arrow-click").on("click", function () {
		$(this).find("span").first().toggleClass("glyphicon-menu-down");
		$(this).find("span").first().toggleClass("glyphicon-menu-up");

		var tag = $(this).parent().prop("tagName").toLowerCase();

		if (tag == "h4") {
			$temp = "#" + $(this).parent().parent().parent().parent().attr("id") + " h4 a span";
			$($temp).attr("class", "glyphicon pull-right glyphicon-menu-down");
			if ($(this).hasClass("collapsed")) {
				$(this).find("span").attr("class", "glyphicon pull-right glyphicon-menu-up");
			}
		}
	});

});

// ULTIMA SESION
function respuestaUltimaVisitaRest(textVisita) {
	if (typeof textVisita != "undefined") {
		if (document.getElementById('lastConexion')) {
			document.getElementById('lastConexion').innerHTML = textVisita;
		}
		if (document.getElementById('lastConexionMovil')) {
			document.getElementById('lastConexionMovil').innerHTML = textVisita;
		}
		if (document.getElementById('sinAutenticacion')) {
			document.getElementById('sinAutenticacion').style.display = 'none';
		}
		if (document.getElementById('conAutenticacion')) {
			document.getElementById('conAutenticacion').style.display = 'block';
		}
		if (document.getElementById('sinAutenticacionMovil')) {
			document.getElementById('sinAutenticacionMovil').style.display = 'none';
		}
		if (document.getElementById('conAutenticacionMovil')) {
			document.getElementById('conAutenticacionMovil').style.display = 'block';
		}
		if (document.getElementById('cerrar-sesion')) {
			document.getElementById('cerrar-sesion').style.display = 'block';
		}
	}
}

function my_callback(respuesta) {
	if (respuesta.ultSesion != null) {
		objSesion.lastConexion = respuesta.ultSesion;
		respuestaUltimaVisitaRest(respuesta.ultSesion);
	}
}

var store = function store(key, value) {

	var lsSupport = false;

	// Check for native support
	if (localStorage) {
		lsSupport = true;
	}

	// If value is detected, set new or modify store
	if (typeof value !== "undefined" && value !== null) {
		// Convert object values to JSON
		if (typeof value === 'object') {
			value = JSON.stringify(value);
		}
		// Set the store
		if (lsSupport) { // Native support
			localStorage.setItem(key, value);
		} else { // Use Cookie
			createCookie(key, value, 30);
		}
	}

	// No value supplied, return value
	if (typeof value === "undefined") {
		// Get value
		if (lsSupport) { // Native support
			data = localStorage.getItem(key);
		} else { // Use cookie 
			data = getCookieHome(key);
		}

		// Try to parse JSON...
		try {
			data = JSON.parse(data);
		}
		catch (e) {
			data = data;
		}

		return data;

	}

	// Null specified, remove store
	if (value === null) {
		if (lsSupport) { // Native support
			localStorage.removeItem(key);
		} else { // Use cookie
			createCookie(key, '', -1);
		}
	}

	/**
	 * Creates new cookie or removes cookie with negative expiration
	 * @param  key       The key or identifier for the store
	 * @param  value     Contents of the store
	 * @param  exp       Expiration - creation defaults to 30 days
	 */

	function createCookie(key, value, exp) {
		var date = new Date();
		date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = key + "=" + value + expires + "; path=/";
	}

};
/** Fin Simple localStorage with Cookie Fallback **/
