function AJAX(){

	this.get = function( _url, _successCB, _errorCB ){
		let url = _url;
		let successCB = _successCB;
		let errorCB = _errorCB;
		$.ajax({
			url : url,
			success : function( _result ){
				let rs = _result;
				successCB( rs );
			},
			error : function(){
				errorCB();
			}
		});
	};
}

var ajaxObj = new AJAX();