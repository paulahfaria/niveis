$(function(){

	$('#skills-form').submit(function(e){

		var total = 0;

		$('.skills-input').each(function(){
			var inputs = $(this).children('div').children('label').children('input:checked');
			var selects = $(this).children('div').children('label').children('select');
			
			if(inputs.size() > 0){
				var totalInput = inputs.val();
				var totalSelect = selects.val();
				total += totalInput*totalSelect;
			}
		});


		if(total <= 810){
			var cargo = 'junior'
		} else if (total > 810 && total <= 1620) {
			var cargo = 'pleno'
		}else{
			var cargo = 'senior'
		}

		$('#total').html(total + ' - ' + cargo);
		e.preventDefault();
	});
});