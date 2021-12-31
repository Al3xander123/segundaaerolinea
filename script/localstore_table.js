
//  Tienes que agregarle tres parametros
//  El 'id' de div que sera el contenedor de la tabla
//  que debe estàr creado en el html u otr sitio
//  El 'id' de la tabla que mostrara la lista
//  Y la 'class' de la tabla que mostrará la lista
//  del localStorage

//   *** Creado por Alberto Marquez el 07 de Diciembre de 2021 a las 3:00am Hora de Chile :-S
//   *** Me costó un poco pero es lo que queria hacer, para evitar hacer tablas a cada rato

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
//
//  create_table_from_localstore(my_div_id,my_table_id,my_class);




function create_table_from_localstore(my_div_id,my_table_id,my_class){
	
	my_div_id.append('<table id = "'+ my_table_id +'" class = "'+ my_class +'" border = "1"></table>');

	let my_table = $('#'+my_table_id+'');
	/***/
		let l_store = localStorage.getItem(localStorage.key(0));
		console.log(typeof l_store);
		let parse_l_store = JSON.parse(l_store);
		console.log(typeof parse_l_store);
		
	//	console.log(typeof localStorage.key(0).toString());
		if(l_store === null){console.log('ERROR');
		let my_table_append = '<tr><th><h1> Error </h1></th></tr><tr><td><b>No Hay Datos en el Local Storage!</b></td></tr>';
		my_table.append(my_table_append);}
		/***/
		else{
		let l_store = localStorage.getItem(localStorage.key(0));
		let parse_l_store = JSON.parse(l_store);
		let my_keys_objects = Object.keys(parse_l_store);
		let my_keys_strings = my_keys_objects.toString();
		
		my_keys_strings = my_keys_strings.replace(/,/gi,'</th><th>');
		let my_keys_ini = '<tr><th>';
		let my_keys_end = '</th></tr>';
		my_keys_ini = my_keys_ini.concat(my_keys_strings);
		let my_table_append = my_keys_ini.concat(my_keys_end);
		my_table.append(my_table_append);
	/***/
	for (let i=0; i < localStorage.length; i++){
		let l_store = localStorage.getItem(localStorage.key(i));
		let parse_l_store = JSON.parse(l_store);
		
		let my_values_objects = Object.values(parse_l_store);
		let my_values_strings = my_values_objects.toString();
		
		my_values_strings = my_values_strings.replace(/,/gi,'</td><td>');
		let my_values_ini = '<tr><td>';
		let my_values_end = '</td></tr>';
		my_values_ini = my_values_ini.concat(my_values_strings);
		let my_table_append = my_values_ini.concat(my_values_end);
		my_table.append(my_table_append);
		}
	}
}



