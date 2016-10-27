 /* Disable certain links in docs
  * =================== */

$(function () {    
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })
});

 /* Per attivare class 'boxshadow' all'accordion-group
  * =================== */

$(function() { 
    $('.accordion-group').on('show', function () {
         $(this).addClass('boxshadow');
    });
    $('.accordion-group').on('hide', function () {
         $(this).removeClass('boxshadow');
    });                 
});

 /* Per attivare il plugin TABS (jquery.easytabs.js)
  * =================== */
function switch_content_theme() {
	$(function() {
      	$('#tab-container').easytabs({
			 	 animationSpeed: 50,
			 	 updateHash: false /* questa riga serve a non aggiornare l'url */
				});     
	});
}
	
	
// Parte sviluppata da Sharlok
function add_favourites(id_tema,id_obj,position,pag_pref,displayNo) {
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}

function myHandler2() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		risposta = myRequest.responseText;
		id_obj1 = "obj" + id_obj;
		id_obj2 = "obj_star" + id_obj;
		id_fav = "fav" + id_obj;
		
		my_element = document.getElementById(id_obj1);
		
		var ris = risposta.split('-');

		if (ris[0] == "off") {
			my_element.setAttribute("class","fav off");
			document.getElementById(id_fav).setAttribute("data-original-title","Mark as favourite");
		} else if (ris[0] == "on") {
			my_element.setAttribute("class","fav on");
			document.getElementById(id_fav).setAttribute("data-original-title","Marked as favourite");
		}
		$("[data-toggle=tooltip]").tooltip();
		
		if (ris[1] == 1) {
			var valueStamp = "1 Favourite";
			} else {
			var valueStamp = ris[1] + " Favourites";	
		}
		
		e = document.getElementById(id_obj2);
        e.innerHTML = valueStamp;
		
		if (pag_pref == 1) {
			id_count = "count_fav";
			f = document.getElementById(id_count);
        	f.innerHTML = "(" + ris[2] + ")";
		}
		
		if (displayNo) {
			document.getElementById(displayNo).style.display="none";
		}

		
    }
}

	myRequest = CreateXmlHttpReq(myHandler2);
    myRequest.open("GET", position + "lib_php/ajax/favourite.php?idt=" + id_tema);
    myRequest.send(null);	
}

	
/* Reset dei filtri */
function deseleziona_all_checkbox() {
		
	document.forms.modulo.wordpress.checked = false;
	document.forms.modulo.joomla.checked = false;
	document.forms.modulo.drupal.checked = false;
	document.forms.modulo.magento.checked = false;
	document.forms.modulo.tumblr.checked = false;	
	document.forms.modulo.custom.checked = false;
	document.forms.modulo.others.checked = false;		
	
	document.forms.modulo.blog.checked = false;
	document.forms.modulo.news.checked = false;
	document.forms.modulo.portfolio.checked = false;
	document.forms.modulo.photo.checked = false;
	document.forms.modulo.ecommerce.checked = false;
	document.forms.modulo.community.checked = false;
	document.forms.modulo.forum.checked = false;
	
	document.forms.modulo.responsive.checked = false;
	document.forms.modulo.retina.checked = false;
	document.forms.modulo.scrolling.checked = false;
	
	document.forms.modulo.shortcodes.checked = false;
	document.forms.modulo.ads.checked = false;
	document.forms.modulo.cross.checked = false;
	
	document.forms.modulo.brand.checked = false;
	document.forms.modulo.design.checked = false;
	document.forms.modulo.doc.checked = false;
	document.forms.modulo.support.checked = false;
	
	/* Retrieve values from slider */	
    $('#slider').val([0,61]);
    
    showValues.call($('#slider'));
	
	/* Cancello i dati della ricerca dalla sessione */
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	function myHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		window.location.href="http://themeclue.com/";
		}
	}

	myRequest = CreateXmlHttpReq(myHandler);
    myRequest.open("GET", "lib_php/ajax/search.php?str_delAll=1");
    myRequest.send(null);
	
	}
/* Elimina gli spazi all'inizio e alla fine della stringa */
function trim(stringa){
    while (stringa.substring(0,1) == ' '){
        stringa = stringa.substring(1, stringa.length);
    }
    while (stringa.substring(stringa.length-1, stringa.length) == ' '){
        stringa = stringa.substring(0,stringa.length-1);
    }
    return stringa;
}
/* Funzione per Eliminare i tag */
function tags_del(str_el) {
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	function myHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		window.location.href="http://themeclue.com/";
		}
	}

	myRequest = CreateXmlHttpReq(myHandler);
    myRequest.open("GET", "lib_php/ajax/search.php?str_del=" + str_el);
    myRequest.send(null);
}

/* Funzione per eliminare le ricerche salvate */
function del_saved_searches(id_search,pag,position) {
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	
	function myHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		if (!position) {
		window.location.href = "saved-searches/" + pag;
		} else if (position) {
		window.location.href = pag;
		}
		}
	}
	myRequest = CreateXmlHttpReq(myHandler);
    myRequest.open("GET", position + "lib_php/ajax/del_saved_searches.php?id_search=" + id_search);
    myRequest.send(null);
}
/* Funzione caricare e settare le SESSIONI di una ricerca salvata */
function load_saved_search(id_search) {
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	
	function myHandler(url) {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		window.location.href =  "search";
		}
	}

	/* Richiesta Ajax */
	myRequest = CreateXmlHttpReq(myHandler);
    myRequest.open("GET", "lib_php/ajax/set_session_search.php?id_search=" + id_search);
    myRequest.send(null);	
	
}

/* Funzione per fare alert email*/
function alert_saved_searches(id_search) {
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	
	/* Richiesta Ajax per memorizzare il valore */
	myRequest = CreateXmlHttpReq();
    myRequest.open("GET", "lib_php/ajax/alert_saved_searches.php?id_search=" + id_search);
    myRequest.send(null);
}

function str_replace(s_search, s_replace, s_subject){
    var pointer = 0;
    while(s_subject.indexOf(s_search,pointer)!=-1){
        pointer = s_subject.indexOf(s_search,pointer);
        s_subject = s_subject.substring(0,pointer) + s_subject.substring(pointer).replace(s_search,s_replace);
        pointer = pointer + s_replace.length;
    }
    return s_subject;
}

/* Funzione per far apparire la Text-area ai commenti  onClick="save_edit_comment(' + id_element + ',' + id_commento + ')*/
function show_txtarea(id_element, id_commento) {
	
	commento = document.getElementById("txt_comm" + id_element).innerHTML;
	if (commento.substr(-4) == "</p>") {
		commento = commento.substring(0,commento.length-4);
		}
	commento = str_replace("<p>", "", commento);
	commento = str_replace("</p>", "\n\n", commento);
	commento = str_replace("<br>", "", commento);
	commento = str_replace("<br \>", "", commento);
	
	var txt_area = '<form action="#" method="post"><input type="hidden" name="idc" value="' + id_commento + '"><textarea name="post-comment" id="post-comment' + id_element + '" rows="4" class="edit-comm span5">' + commento + '</textarea><button type="submit" class="btn btn-primary">SAVE</button><button type="button" class="btn" onClick="hidden_txtarea(' + id_element + ',' +  id_commento + ')">CANCEL</button></form>';
				  
	e = document.getElementById("var_edit" + id_element);
    e.innerHTML = txt_area;
	document.getElementById("var_edit" + id_element).setAttribute("class",""); 
	document.getElementById("var" + id_element).setAttribute("class","hidden"); 
}

/* Funzione per qualdo escono da EDIT COMMENTO */
function hidden_txtarea(id_element, id_commento) {		  
	document.getElementById("var" + id_element).setAttribute("class",""); 
	document.getElementById("var_edit" + id_element).setAttribute("class","hidden"); 
}

function delete_comment(id_commento, percorso) {
	domanda= confirm("You are about to delete this comment. Continue?");
	if (domanda == true){	
		var myRequest = null;

		function CreateXmlHttpReq(handler) {
    		var xmlhttp = null;
   			try {
    			xmlhttp = new XMLHttpRequest();
  			} catch(e) {
    		try {
        		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    		} catch(e) {
        		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    		}
  			}
  		xmlhttp.onreadystatechange = handler;
  		return xmlhttp;
		}
	
		function myHandler() {
    	if (myRequest.readyState == 4 && myRequest.status == 200) {
			location.reload();
			}
		}

		/* Richiesta Ajax per memorizzare il valore */
		myRequest = CreateXmlHttpReq(myHandler);
    	myRequest.open("GET", percorso + "lib_php/ajax/del_comment.php?idc=" + id_commento);
    	myRequest.send(null);
	}
	
}

/* Funzione per il form Newsletter */
function ctrl_newsletter(percorso, valore) {
	/* valore = 1 da pagina about | valore = 2 da footer*/
	function CreateXmlHttpReq(handler) {
    		var xmlhttp = null;
   			try {
    			xmlhttp = new XMLHttpRequest();
  			} catch(e) {
    		try {
        		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    		} catch(e) {
        		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    		}
  			}
  		xmlhttp.onreadystatechange = handler;
  		return xmlhttp;
		}
	
		function myHandler() {
			
    		if (myRequest.readyState == 4 && myRequest.status == 200) {
				risposta = myRequest.responseText;
				//Se la mail non è prensente e viene memorizzata
				if ((risposta == 1) && (valore == 1)) {
					div_newsletter = document.getElementById('footer-3');
        			div_newsletter.innerHTML = "<h4>SUBSCRIBE NEWSLETTER</h4><p>Thanks for submitting to our newsletter!</p>";
				} 
				else if ((risposta == 1) && (valore == 2)) {
					div_newsletter = document.getElementById('footer-3');
        			div_newsletter.innerHTML = "<h3>NEWSLETTER</h3><p>Thanks for submitting to our newsletter!</p>";
				} 
				//Mail già presente nella nostra Newsletter
				else if ((risposta == 0) && (valore == 1)) {
					div_newsletter = document.getElementById('footer-3');
        			div_newsletter.innerHTML = "<h4>SUBSCRIBE NEWSLETTER</h4><p>You have already subscribed to the newsletter!</p>";
				}
				else if ((risposta == 0) && (valore == 2)) {
					div_newsletter = document.getElementById('footer-3');
        			div_newsletter.innerHTML = "<h3>NEWSLETTER</h3><p>You have already subscribed to the newsletter!</p>";
				}
			}
		}
	
	var email = document.newsletter.email.value;
	var espressione = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+[\.]([a-z0-9-]+)*([a-z]{2,3})$");
	
	 if ((email == "") || (email == "undefined"))  {
           document.newsletter.email.focus();
           return false;
        }
	 else if ( !espressione.test(email) ){
           document.newsletter.email.focus();
           return false;
        }	
	else {
			myRequest = CreateXmlHttpReq(myHandler);
			myRequest.open("POST", percorso + "lib_php/ajax/addmail_newsletter.php");
			myRequest.setRequestHeader("content-type","application/x-www-form-urlencoded");
			myRequest.send("email=" + escape(email));
	}
}

/*Funzione per lo ShareSearch */
function generate_link() {
	
	var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}

	function myHandler2() {
    	if (myRequest.readyState == 4 && myRequest.status == 200) {
			risposta = myRequest.responseText;
			document.getElementById("urlshare").setAttribute("value",risposta);
			document.getElementById("urlshare").select();
			
		}
	}
	
	myRequest = CreateXmlHttpReq(myHandler2);
    myRequest.open("GET", "lib_php/ajax/share_search.php");
    myRequest.send(null);
}

function copy_link() {
	/*$("#urlshare").copy() */
	var content = eval(document.getElementById("urlshare"));
    range = content.createTextRange();
    range.execCommand("Copy");
    window.status="Contents copied to clipboard";
    setTimeout("window.status=''",1800)
}

	
 /* Price slider
  * =================== */
	/*Funzione simile lanciata solo all'inizio*/
	var showValuesStart = function(){
            var values = $(this).val();
			if (values[1] == 61) { values[1]= "60+";}
            $('.from-value').text(values[0]);
            $('.to-value').text(values[1]);
			aggiorna_content();
    }
	
    var showValues = function(){
            var values = $(this).val();
			if (values[1] == 61) { values[1]= "60+";}
            $('.from-value').text(values[0]);
            $('.to-value').text(values[1]);
			aggiorna_content();
			document.modulo.pag.value = 1; 
    }
function price_slider() {
    $('#slider').noUiSlider({
        range: [0, 61]
       ,start: [0, 61]
       ,step: 1
       ,slide: showValues
    });
    showValuesStart.call($('#slider')); 
}