$(function(){

	$('#skills-form').submit(function(e){

		var total = 0;

		$('.skills-input').each(function(){
			var inputs = $(this).children('input:checked');
			var selects = $(this).children('input:checked');
			if(inputs.size() > 0){

				var totalInput = inputs.val();
				var totalSelect = selects.val();
				total += totalInput*totalSelect;
				console.log(total);

			}
		});
		$('#total').html(total);
		e.preventDefault();
	});
})