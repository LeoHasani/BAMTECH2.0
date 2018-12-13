/* eslint-disable */

export default {
	addTechnician:
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/AddNewTechnician",
	setSignUpDetails:
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/SignUp",
	loginDetails:
	// "http://localhost:56020/Service.asmx/IsTechnicianAuthenticate",
		// "http://testbam.barrister.com/bamtechnicianapp/service.asmx/IsTechnicianAuthenticate",
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/IsTechnicianAuthenticate",
	ViewAvailable:
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/GetTechnicianAvailableWorkOrders",
	AcceptedByYou:
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/GetTechnicianAcceptedWorkOrders",
	serviceOrder:
		// "http://bam.barrister.com/BAMIOSApplication/service.asmx/GetSingleWorkOrderDetails",
		"http://bam.barrister.com/BAMIOSApplication/service.asmx/GetWorkOrderDetail",
};
