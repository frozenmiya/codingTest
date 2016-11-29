function UI(){

	this.bindEvents = function(){
		$('.app-aside').on('mouseover', function(){
			$('#logo').css('left', 0);
		});

		$('.app-aside').on('mouseout', function(){
			$('#logo').css('left', '20px');
		});
	};
}

var ui = new UI();