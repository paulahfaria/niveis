$(function(){

	$('#skills-form').submit(function(e){

		var total = 0;

		$('.skills-input').each(function(){
			var inputs = $(this).children('div').children('input:checked');
			var selects = $(this).children('div').children('select');
			if(inputs.size() > 0){

				var totalInput = inputs.val();
				var totalSelect = selects.val();
				total += totalInput*totalSelect;

				console.log(total);

			}
		});

		if(total <= 810){
			var cargo = 'junior'
		} else if (total > 810 && total <= 1620) {
			var cargo = 'pleno'
		}else{
			var cargo = 'senior'
		}
		console.log(cargo);
		$('#total').html(total + ' - ' + cargo);
		e.preventDefault();
	});

	$(document).on('click','.skills-input', function(){
		var inputs = $(this).children('div').children('input');

		if(inputs.attr('checked')){
			inputs.attr('checked', false);
		}else{
			inputs.attr('checked', true);
		}
	});
})