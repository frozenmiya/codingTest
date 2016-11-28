function Patient( _obj ){
	let patientInfo = _obj;
	this.firstName = patientInfo.patientFirstName || '';
	this.lastName = patientInfo.patientLastName || '';
	this.gender = patientInfo.patientGender || '';
	this.birth = patientInfo.patientBirthday || '';
	this.upperExtremityFunctionLt = patientInfo.upperExtremityFunctionLt || '';
	this.upperExtremityFunctionRt = patientInfo.upperExtremityFunctionRt || '';
	this.dateOfOnsetMonth = patientInfo.dateOfOnsetMonth || '';
	this.diagnosis = patientInfo.diagnosis || '';
	this.playTimeList = patientInfo.playTimeList || [];
	this.contentHistory = patientInfo.contentHistories || [];
	this.motionTypes = patientInfo.motionTypes || [];
	this.missionTypes = patientInfo.missionTypes || [];
	this.evaluation = patientInfo.evaluations || [];
}
