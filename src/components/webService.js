/* eslint-disable */
var url = "http://testbam.barrister.com/apipub/service.asmx/";

export default {
	addTechnician: url+"AddNewTechnician",
		// "http://bam.barrister.com/BAMIOSApplication/service.asmx/AddNewTechnician",
	setSignUpDetails:
	url+"SignUp",
	loginDetails:
	// "http://localhost:56020/Service.asmx/IsTechnicianAuthenticate",
		// "http://testbam.barrister.com/bamtechnicianapp/service.asmx/IsTechnicianAuthenticate",
		url+"IsTechnicianAuthenticate",
	ViewAvailable:
		url+"GetTechnicianAvailableWorkOrders",
	AcceptedByYou:
		url+"GetTechnicianAcceptedWorkOrders",
	serviceOrder:
		//"http://bam.barrister.com/BAMIOSApplication/service.asmx/GetSingleWorkOrderDetails",
		url+"GetWorkOrderDetail",
	
};
