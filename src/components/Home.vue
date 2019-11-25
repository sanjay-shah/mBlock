<template>
  <div class="patients">
		<div>
		<b-jumbotron>
		<template v-slot:header>Medical Record Base</template>

		<template v-slot:lead>
		This is a doctor-patient medical record app, a simple blockchain identity app for creating medical record to share with doctors or request medical reports from patients. Patients own medical record and has the ability to share with specific doctors or providers. Patients can grant or revoke access to their records anytime.
		</template>

		<hr class="my-4">

		<p>
		It uses solidity smart contracts on ethereum testnet to create, request and grant access to medical record.
		</p>
		<b-button class="mr-2" variant="primary" href="/doctors">Doctors Dashboard</b-button>
		<b-button variant="success" href="/patients">Patients Dashboard</b-button>
		</b-jumbotron>		
		</div>
  </div>
</template>