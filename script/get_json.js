
//  Tienes que agregarle cuatro parametros
//  El 'id' de div que sera el contenedor de la tabla
//  que debe estàr creado en el html u otr sitio
//  El 'id' de la tabla que mostrara la lista
//  Y la 'class' de la tabla que mostrará la lista
//  del localStorage

//   *** Creado por Alberto Marquez el 08 de Diciembre de 2021 a las 12:00am Hora de Chile :-S
//   *** se me hizo más fácil, fue solo acomodar unas cosas con el para extraer los keys y values

//  Tienes que agregarle tres parametros
//  El 'id' del div que será el contenedor de la tabla
//  que debe estàr creado en el html u otr sitio , (Yo lo hice en el html)
//  El 'id' de la tabla que mostrara la lista
//  Y la 'class' de la tabla que mostrará la lista
//  del localStorage

//  EJEMPLO
//  let my_div_id = $('#my_div');			//id en forma de funcion
//  let my_table_id = 'my_table_lstorage';	//solo el nombre del id
//  let my_class = 'my_table_class_storage';
//  let my_url = 'script/list.json';
//
//  create_table_from_localstore(my_div_id,my_table_id,my_class,my_url);

function create_table_from_json(my_div_id,my_table_id,my_class,my_url){
console.log('JSON')
	$.getJSON(my_url,'asdsad',function(data,status,xhr){
	console.log(xhr);
	if(status === 'success'){
	my_div_id.append('<table id = "'+ my_table_id +'" class = "'+ my_class +'"border= "1"></table>');
	
	let my_table = $('#'+my_table_id+'');
	
	let my_keys_objects = Object.keys(data[0]);
	let my_keys_strings = my_keys_objects.toString();

	my_keys_strings = my_keys_strings.replace(/,/gi,'</th><th>');
	let my_keys_ini = '<tr><th>';
	let my_keys_end = '</th></tr>';
	my_keys_ini = my_keys_ini.concat(my_keys_strings);
	let my_table_append = my_keys_ini.concat(my_keys_end);
	my_table.append(my_table_append);

		/***/
	for (let i=0; i < data.length; i++){
//		let l_store = localStorage.getItem(localStorage.key(i));
//		let parse_l_store = JSON.parse(l_store);
		
		let my_values_objects = Object.values(data[i]);
		let my_values_strings = my_values_objects.toString();
		
		my_values_strings = my_values_strings.replace(/,/gi,'</td><td>');
		let my_values_ini = '<tr><td>';
		let my_values_end = '</td></tr>';
		my_values_ini = my_values_ini.concat(my_values_strings);
		let my_table_append = my_values_ini.concat(my_values_end);
		my_table.append(my_table_append);
		}
	
		}
		/*
		else if(status === 404){
			console.log(status);
			console.log('Error 404');}
		//else {console.log('tuviste un error');}
		*/
	});

}
