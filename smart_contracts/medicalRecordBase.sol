// Solidity version 0.5.11
pragma solidity 0.5.11;

contract MedicalRecordBase{
    
    mapping(address => MedicalRecord) private medicalRecords;
   
    function createMedicalRecord (
        string memory _fullName,
        string memory _dateOfBirth,
        string memory _sex,
        uint _heightInches,
        uint _weightPounds,
        string memory _postalAddress,
        string memory _bloodGroup,
        string memory _healthNumbers
        ) public{
        // set the new instance
        MedicalRecord newMedicalRecord = new MedicalRecord(
            msg.sender, 
            _fullName, 
            _dateOfBirth, 
            _sex, 
            _heightInches, 
            _weightPounds,
            _postalAddress,
            _bloodGroup,
            _healthNumbers
        );
        // set the new medicalRecords links with msg.sender
        medicalRecords[msg.sender] = newMedicalRecord;
    }
    
    function getMedicalRecord(address _medicalRecordOwnner) public view returns(string memory){
        return medicalRecords[_medicalRecordOwnner].returnContents(msg.sender);
    }
    
    function requestAccess(address _medicalRecordOwnner, string memory _requesterName) public payable returns(bool){
        return medicalRecords[_medicalRecordOwnner].requestAccess(msg.sender, _requesterName);
    }
    
    function grantAccess(address _requestorAddress) public payable returns(bool){
        return medicalRecords[msg.sender].grantAccess(msg.sender, _requestorAddress);
    }
}

contract MedicalRecord {
    
    address payable private owner; 
    string fullName;
    string dateOfBirth;
    string sex;
    uint heightInches;
    uint weightPounds;
    string postalAddress;
    string bloodGroup;
    string healthNumbers; // Blood pressure, heartRate, blood suger etc
    
    // Request access for medical records by Doctors/Hospitals etc)
    mapping(address => string) private accessRequested;
    // access granted to address(Doctors/Hospitals etc)
    mapping(address => bool) private accessGranted;

    // Event triggered when access to medical record is requested
    event AccessRequested(address doctor, address patient, string doctorName, string patientName);
    event AccessGranted(address patient, address doctors, string patientName, string doctorName);
    event MedicalRecordReadBySomeoneElse(address patient, address doctors, string patientName, string doctorName);
    event MedicalRecordReadByOwner(address patient, string patientName);
    event MedicalRecordCreated(address patient, string patientName);
    
    /** @dev constructor to creat MedicalRecord
      * @param _owner who call createMedicalRecord() in MedicalRecordBase contract
      * @param _fullName of the person
      * @param _dateOfBirth of the person
      * @param _sex of the person
      * @param _heightInches height in inches of the person
      * @param _weightPounds weight in pounds of the person
      * @param _postalAddress of the person
      * @param _bloodGroup of the person
      * @param _healthNumbers Blood pressure, heartRate, blood suger etc
      */
      
    constructor(
        address payable _owner,
        string memory _fullName,
        string memory _dateOfBirth,
        string memory _sex,
        uint _heightInches,
        uint _weightPounds,
        string memory _postalAddress,
        string memory _bloodGroup,
        string memory _healthNumbers
        
        ) public {
        // initialize MedicalRecord
        owner = _owner;
        fullName = _fullName;
        dateOfBirth = _dateOfBirth;
        sex = _sex;
        heightInches = _heightInches;
        weightPounds = _weightPounds;
        postalAddress = _postalAddress;
        bloodGroup = _bloodGroup;
        healthNumbers = _healthNumbers;
        emit MedicalRecordCreated(_owner, _fullName);
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }
    
    /** @dev Function to request access for medical records
      * @return true
      */
    
    function requestAccess(address payable  _requesterAddress, string memory _requesterName) public notOwner returns(bool) {
        accessRequested[_requesterAddress] = _requesterName;
        //Call the event that will fire at browser (client-side)
        emit AccessRequested(_requesterAddress, owner, _requesterName, fullName);
        return true;
    }

    function grantAccess(address payable _granterAddress, address _requesterAddress) public returns(bool) {
        require(_granterAddress == owner);
        accessGranted[_requesterAddress] = true;
        //Call the event that will fire at browser (client-side)
        emit AccessGranted(_granterAddress, _requesterAddress, fullName, accessRequested[_requesterAddress]);
        return true;
    }
    
    /** @dev Function to return the contents of MedicalRecord 
      * @return the address of the patient
      * @return the fullName price of the patient
      * @return the dateOfBirth of the patient
      * @return the heightInches of the patient 
      * @return the weightPounds of the patient
      * @return the heightInches of the patient
      * @return the bloodGroup of the patient
      * @return the healthNumbers of the patient
      */    
    
    function returnContents(address _caller) public view returns(string memory) {
        if(_caller == owner) {
            //emit MedicalRecordReadByOwner(_caller, fullName);
            return fullName;
        } else if(accessGranted[_caller]) {
            //emit MedicalRecordReadBySomeoneElse(owner, _caller, fullName, accessRequested[_caller]);
            return fullName;
        } else {
            return "Please request access or wait for approval.";
        }
    }
}