import web3 from './web3';

const address = '0xb70ae07D6decEa2972199a395cDF79155EC286e3'; // Contract address
const abi = [
	{
		"constant": false,
		"inputs": [
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
		"name": "createMedicalRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_requestorAddress",
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
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_medicalRecordOwnner",
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
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_medicalRecordOwnner",
				"type": "address"
			}
		],
		"name": "getMedicalRecord",
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
	}
]; // ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;
