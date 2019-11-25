import web3 from './web3';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_requesterAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_requesterName",
				"type": "string"
			}
		],
		"name": "requestAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "returnContents",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_granterAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_requesterAddress",
				"type": "address"
			}
		],
		"name": "grantAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_fullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sex",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_heightInches",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_weightPounds",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_postalAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_healthNumbers",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctorName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			}
		],
		"name": "AccessRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctors",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctorName",
				"type": "string"
			}
		],
		"name": "AccessGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctors",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctorName",
				"type": "string"
			}
		],
		"name": "MedicalRecordReadBySomeoneElse",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			}
		],
		"name": "MedicalRecordReadByOwner",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			}
		],
		"name": "MedicalRecordCreated",
		"type": "event"
	}
]; // ABI

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};