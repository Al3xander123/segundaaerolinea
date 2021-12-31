$(document).ready(function(){

//  CONDICION INICIAL DE LA PÁGINA
//  A que no adivina como hice el background image ? :-D

	
	$('.id_c_pmain').hide();
	$('.id_c_smain').hide();
//	$('.c_background').hide();
	$('#id_pmain_0').show();
	$('#advertencia').hide();
//	$('#id_background_a').fadeIn(time);
	let time = 250;

//  FUNCION para mostrar los Párrafos
//  del menú derecho de la página

	menu_buttons();
	
//FUNCION que muestra un texto en los menús

	menu_fill();


//  FUNCION de los BOTONES para mostrar
// El FORMULARIO de viaje	

	$('#b_itravel_0').click(function(){travel_form('#id_pmain_0','#id_smain_0','#id_save_0','Econonica','Hanamichi','Sakuragui','26','12345678','5.000.000','123456')});
	$('#b_itravel_1').click(function(){travel_form('#id_pmain_1','#id_smain_1','#id_save_1','Turista','Nobunaga','Kiota','25','98765432','10.000.000','123457')});
	$('#b_itravel_2').click(function(){travel_form('#id_pmain_2','#id_smain_2','#id_save_2','Ejecutiva','Riota','Miyagui','20','14725836','100.000.000','123458')});
	$('#b_itravel_3').click(function(){travel_form('#id_pmain_3','#id_smain_3','#id_save_3','VIP','Akira','Sendo','24','96385274','200.000.000','123459')});
	$('#b_itravel_4').click(function(){travel_form('#id_pmain_4','#id_smain_4','#id_save_4','Espacial','Hisashi','Mitsui','28','78945612','500.000.000','123460')});
	$('#b_itravel_5').click(function(){travel_form('#id_pmain_5','#id_smain_5','#id_save_5','Warp','Kaede','Rokagua','29','32165498','2.000.000.000','123461')});
	

/**************************************************/

//  Funcion para crear el FORMULARIO que se va a mostrar

	function travel_form (div_main,div_form,save,flight,name,lastname,age,identity,travelprice,travelnumber){
	//	console.clear();
		console.log('1:'+div_main+'\n2:'+div_form+'\n3:'+save+'\n4:'+flight+'\n5:'+name+'\n6:'+lastname+'\n7:'+age+'\n8:'+identity+'\n9:'+travelprice+'\n10:'+travelnumber);
	$(div_main).hide(time);
	$(div_form).show(time);
	$(div_form).append(''+
		'<table border = "1" id = "id_table_form">'+
		'<tr><td>Vuelo            </td><td>' +flight+ '<input type = "hidden" id = "id_flight" size = "12" name = "input_flight" value = "'+flight+'" readonly = "readonly"> </td></tr>'+
		'<tr><td>Nombre *         </td><td> <input type = "text" id = "id_name" size = "12" name = "input_name" value = "'+name+'" pattern="[A-Za-z]"> </td></tr>'+
		'<tr><td>Apellido *       </td><td> <input type = "text" pattern="[A-Z]" id = "id_lastname" size = "12" name = "input_lastname" value = "'+lastname+'"> </td></tr>'+
		'<tr><td>Edad *           </td><td> <input type = "number" id = "id_age" size = "12" name = "input_age" value = "'+age+'" min = "1" max = "1000000000"> </td></tr>'+
		'<tr><td>Cedula *         </td><td> <input type = "number" id = "id_identity" size = "12" name = "input_identity" value = "'+identity+'" min = "1" max = "1000000000"> </td></tr>'+
		'<tr><td>Precio del Vuelo </td><td> '+travelprice+'<input type = "hidden" id = "id_travelprice" size = "12" name = "input_travelprice" value = "'+travelprice+'" readonly = "readonly"> </td></tr>'+
		'<tr><td>Numero del Vuelo </td><td> '+travelnumber+'  <input type = "hidden" id = "id_travelnumber" size = "12" name = "input_travelnumber" value = "'+travelnumber+'" readonly = "readonly">'+
		'        <input type = "hidden" id = "id_input_hidden_0" size = "12" name = "input_hidden_0" value = "'+div_main+'"></td></tr>'+ //</table>'+
		'<tr><td><input type = "button"  id = "b_back" class = "class_back" value = "Regresar"></td><td><input type = "submit"  id = "b_save" class = "class_save" value = "Guardar"></td></tr></table>' //id = "id_save_0"
		);

	//Funcion para regresar del formulario
	$('.class_back').click(function(){My_Functionback(div_main);
	$('input').removeClass();
//	event.preventDefault();
	});
	
	//Funcion para guardar el formulario para comprar el pasaje
	$('.class_save').click(function(){mifuncion(div_main);
	event.preventDefault();
	});
		return 0;
	}
	
/******************************************************/	
	//mi clase constructor
let my_array = [];
let light,name, apellido,edad,identity,travelprice,travelnumber = '';
let i = 0;

class Data{
	constructor (flight,name,lastname,age,identity,travelprice,travelnumber ){
		this.flight = flight;
		this.name = name;
		this.lastname = lastname;
		this.age = age;
		this.identity = identity;
		this.travelprice = travelprice;
		this.travelnumber = travelnumber;
	}
}
	
	//  Función del BOTON Regresar
	
	function My_Functionback(div_main){
		$(div_main).show(time);
		$('.id_c_smain').hide(time);
		$('#id_table_form').remove();
	}
	
	//  Funcion que guardará en el LOCALSTORAGE
	//  En caso de cumplir con la validación
	//  Sino, entonces mostrara un DIV ADVERTENCIA
	//  Del Input que está vacío
	
	function mifuncion(div_main){
	let flight = $('#id_flight').val();					let name = $('#id_name').val();
	let lastname = $('#id_lastname').val();				let age = $('#id_age').val();
	let identity = $('#id_identity').val();				let travelprice = $('#id_travelprice').val();
	let travelnumber = $('#id_travelnumber').val();		let _hidden_0 = $('#id_input_hidden_0').val();
	let name_nan = isNaN($('#id_name').val());
	let last_nan = isNaN($('#id_lastname').val());

//VALIDACION DEL FORMULARIO

	if(((name == '')||(lastname == '')||(age == '')||(identity == ''))||((name_nan === false )||(last_nan === false))){
		$('#advertencia').text('');
		let text_name = '';
		let text_lastname = '';
		let text_age = '';
		let text_identity = '';
		let text_name_nan = '';
		let text_lastname_nan = '';
		if(name == '')				{text_name = 'Falta el Nombre<br>';						}
		if(lastname == '')			{text_lastname = 'Falta el Apellido<br>';				}
		if(name_nan === false)		{text_name_nan = 'El Nombre debe ser Texto<br>';		}
		if(last_nan ===false )		{text_lastname_nan = 'El Apellido debe ser Texto<br>';	}
		if(age == '')			{text_age = 'Falta la Edad<br>';							}
		if(identity == '')		{text_identity = 'Falta la Cedula<br>';						}
		
		$('#advertencia').append(''+text_name+''+text_name_nan+''+text_lastname+''+text_lastname_nan+''+text_age+''+text_identity+'').slideDown(200);

	}

	else{
	//  Para limpiar el DIV advertencia, que contiene
	//  los valores que faltaban del formulario
	
	$('#advertencia').text('');
	$('#advertencia').slideUp();
	
	const My_Data = new Data(flight,name,lastname,age,identity,travelprice,travelnumber);
	my_array.push(My_Data);
	console.log (my_array);
	//  Guardando en localstore
	i++;
	save_in_lstore = JSON.stringify(My_Data);
	localStorage.setItem('Travel'+i, save_in_lstore);

	//  Mensaje en un Div 
	$('#advertencia').append(	'<b>Pasaje comprado!<br>'+
								'Revise el correo:<br>' +
								'Herramientas del Desarrollador:\<br>' +
								'aplication@localstorage.com</b><br>'+
								'<p><b>O presiona el Boton<br>'+
								'Ver Lista de Pasajeros</b></p>');
	$('#advertencia').slideDown(100).delay(5000).slideUp(1000);
	
	//Esto es para que al final
	//Ocultar el formulario y mostrar el texto
	$('#id_table_form').remove();	$('.id_c_smain').hide(time);	$(div_main).show(time);
	}//else

}

/****************************************************/



//  Aqui hay dos funciones que comparten el mismo
//  DID, ID de la tabla y CLASS de la tabla
//
//  Pero como son dos funciones que se crean y luego se remueven
//  Por eso los dejé asi

//  Para el LOCALSTORAGE, necesita tres parámetros
//  Para el JSON, necesita 4 parámetros

//  El ID del div que contendrá la tabla
//  El ID de la tabla que se creará
//  La CLASS de la tabla que se creará
//  La URL que nesecitará la tabla para la funcion JSON


		let my_div_id = $('#id_localstorage');
		let my_table_id = 'my_table_lstorage';
		let my_class = 'my_table_class_storage';
//		let my_url = 'script/list.json';								//---url de mi archivo JSON---
		let my_url = 'https://jsonplaceholder.typicode.com/posts';		//---url de una página externa---
//		let my_url = 'http://hp-api.herokuapp.com/api/characters';		//---url de Harry Potter

//Funcion Ver lista de pasajeros
	$('#btn_ver_list').click(function(){
		
		if($('#my_table_lstorage').is(":visible")){
			$('#my_table_lstorage').remove();
			$('#id_localstorage').hide(time);
			$('#div_sub_background').show(time);
			}
		else{
			$('#div_sub_background').hide(time);
			create_table_from_localstore(my_div_id,my_table_id,my_class); //Con esta funcion se crea una tabla de un localStorage
			$('#id_localstorage').show(time);
			}
	});


	//Funcion Ver lista de un JSON
	$('#b_json').click(function(){
		
		if($('#my_table_lstorage').is(":visible")){
			$('#my_table_lstorage').remove();
			$('#id_localstorage').hide(time);
			$('#div_sub_background').show(time);
			}
		else{
			$('#div_sub_background').hide(time);
			create_table_from_json(my_div_id,my_table_id,my_class,my_url); //Con esta funcion se crea una tabla de un JSON
			$('#id_localstorage').show(time);
			}
			
	});
		
});

