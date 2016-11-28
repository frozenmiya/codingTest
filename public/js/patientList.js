function PList(){
	var totalCount = 0;
	var patients = [];
	var currentIndex = 0;

	var setPatientInfo = function( _infoArray ){
		let info = _infoArray.patients;
		totalCount = info.length;
		for( let i = 0; i < totalCount; i++ ){
			patients[i] = new Patient( info[i] );
		}
	};


	this.getList = function( _successCB ){
		let successCB = _successCB;
		let url = './data/patient.json';

		let errorCB = function(){
			alert('error while fetching data!');
		};

		ajaxObj.get( url, ( _rs )=>{
			setPatientInfo( _rs );
			successCB();
		}, errorCB );
	};

	this.getPatients = function(){
		return patients;
	};

	this.getTotalCount = function(){
		return totalCount;
	};

	this.getCurrentIndex = function(){
		return currentIndex;
	};

	this.setCurrentIndex = function( _currentIndex ){
		currentIndex = _currentIndex;
	};
}

var patientList = new PList();