//  En esta función, hay dos funciones internas

//  La función sub_menu(), se inserta dentro de
//  la función $() para no repetir las cosas en cada funcion

//  La función $('') muestra y ocultan ciertos divs de la pagina


function menu_buttons(){
	let time = 250;
	
	function sub_menu(id_pmain,id_bg){
		let time = 250;
		$('#my_table_lstorage,#id_table_form').remove();
		$('.class_save,.id_c_pmain,.id_c_smain').not(''+id_pmain+'').hide(time);
		$('.c_background').not(''+id_bg+'').fadeOut(time);
		$('#div_sub_background').fadeIn(time);
		$('#advertencia').text('');
		$('#advertencia').slideUp();
	}
	
	$('#button_0').click(function(){
		let id = '#id_pmain_0';
		let bg = '#id_background_a';
		sub_menu(id,bg);
		$('#id_pmain_0').show(time);
		$('#id_background_a').fadeIn(time);
});

	$('#button_1').click(function(){
		let id = '#id_pmain_1';
		let bg = '#id_background_b';
		sub_menu(id,bg);
		$('#id_pmain_1').show(time);
		$('#id_background_b').fadeIn(time);
});

	$('#button_2').click(function(){
		let id = '#id_pmain_2';
		let bg = '#id_background_c';
		sub_menu(id,bg);
		$('#id_pmain_2').show(time);
		$('#id_background_c').fadeIn(time);
});

	$('#button_3').click(function(){
		let id = '#id_pmain_3';
		let bg = '#id_background_d';
		sub_menu(id,bg);
		$('#id_pmain_3').show(time);
		$('#id_background_d').fadeIn(time);
});

	$('#button_4').click(function(){	
		let id = '#id_pmain_4';
		let bg = '#id_background_e';
		sub_menu(id,bg);
		$('#id_pmain_4').show(time);
		$('#id_background_e').fadeIn(time);
});

	$('#button_5').click(function(){	
		let id = '#id_pmain_5';
		let bg = '#id_background_f';
		sub_menu(id,bg);
		$('#id_pmain_5').show(time);
		$('#id_background_f').fadeIn(time);
});
}