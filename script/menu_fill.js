// Esta función agrega texto a los divs centrales de cada viaje
// Los divs con id id_pmain_0, 1, 2, 3, 4 y 5

function menu_fill(){
		$('#id_pmain_0').append(''+
	'<h2>VIAJES CLASE ECONOMICA  </h2>'+
	'<p>Los viajes de clase econonica ofrecen una alternativa a bajo costo para todos nuestros'+
	'pasajeros que deseen viaje y ahorrar pasa su estadia en el lugar de destino.</p>'+
	'<button type = "button" id = "b_itravel_0" class = "b_ctravel">Desea Viajar</button>');
	
		$('#id_pmain_1').append(''+
	'<h2>VIAJES CLASE TURISTA    </h2>'+
	'<p>Los vuelos de clase Turista ofrecen distintos Hoteles de hospedaje en su lugar de desti'+
	'no, para que así usted no tenga que preocuparse de la estadia, y asi pueda disfrutar y dar'+
	' paseos por los lugares mas concurridos de su destino.</p>'+
	'<button type = "button" id = "b_itravel_1" class = "b_ctravel">Desea Viajar</button>');
	
		$('#id_pmain_2').append(''+
	'<h2>VIAJES CLASE EJECUTIVA  </h2>'+
	'<p>Los vuelos de clase ejecutiva, ofrecen una major comodidad y un menor tiempo de viaje, '+
	'ademas de ser un vuelo sin escalas hasta su lugar de destino ofreciendo un catalogo de hot'+
	'eles  cinco estrellas para su mayor comodidad.</p>'+
	'<button type = "button" id = "b_itravel_2" class = "b_ctravel">Desea Viajar</button>');
	
		$('#id_pmain_3').append(''+
	'<h2>VIAJES CLASE VIP  </h2>'+
	'<p>Los vuelos de clase VIP ofrecen a nuestros pasajeros las mejores comodidades durante su'+
	' viaje, cama, television, minibar, ducha e internet, asi usted siempre se mantendra conect'+
	'ado con sus seres queridos durante su viaje.</p>'+
	'<button type = "button" id = "b_itravel_3" class = "b_ctravel">Desea Viajar</button>');
	
		$('#id_pmain_4').append(''+
	'<h2>VIAJES CLASE ESPACIALES </h2>'+
	'<p>Los viajes espaciales estan pensados para aquellos que desean conocer y ver las estrell'+
	'as desde cerca, incluso vivir varios a&nacute; os en ellos, actualmente ofrecemos viajes a'+
	'nuestro satelite La Luna, asi como el Planeta Marte.</p>'+
	'<button type = "button" id = "b_itravel_4" class = "b_ctravel">Desea Viajar</button>');
	
		$('#id_pmain_5').append(''+
	'<h2>VIAJES CLASE WARP       </h2>'+
	'<p>Los viajes warp, estan pensados para aquellos viajeros que quieran llegar lo mas pronto'+
	'a su destino, actualmente solo ofrecemos viajes WARP a La Luna y el Planeta Marte.</p>'+
	'<button type = "button" id = "b_itravel_5" class = "b_ctravel">Desea Viajar</button>');

}