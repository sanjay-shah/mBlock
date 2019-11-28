<template>
	<b-container fluid class="patient-dashboard">
		<b-row fluid>
			<h5>Sample <b-badge variant="success">Patient</b-badge> Dashboard <b-badge variant="warning">Not connected to solidity</b-badge></h5>
		</b-row>
		<b-row>
			<b-col>
				<b-card 
					border-variant="info"
					header="Total Views"
					header-bg-variant="info"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Views <b-badge variant="success">99</b-badge> <b-link>View all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Dr. Ihsotas <b-link>11/09/2019</b-link></b-list-group-item>
						<b-list-group-item>Dr. Kilativ <b-link>11/08/2019</b-link></b-list-group-item>
						<b-list-group-item>Dr. Okooz <b-link>10/05/2019</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
			<b-col>
				<b-card 
					border-variant="success"
					header="Access Granted"
					header-bg-variant="success"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Doctors <b-badge variant="success">17</b-badge> <b-link>View all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Dr. Satoshi <b-link>View</b-link></b-list-group-item>
						<b-list-group-item>Dr. Vitalik <b-link>View</b-link></b-list-group-item>
						<b-list-group-item>Dr. Zooko <b-link>View</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
			<b-col>
				<b-card
					border-variant="primary"
					header="Access Requested"
					header-bg-variant="primary"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Doctors <b-badge variant="danger">5 new</b-badge> <b-link>Grant all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Dr. Nakmoto <b-link>Grant</b-link></b-list-group-item>
						<b-list-group-item>Dr. Buterin <b-link>Grant</b-link></b-list-group-item>
						<b-list-group-item>Dr. Wilcox <b-link>Grant</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
		</b-row>
		<b-row></b-row>
		<b-row>
			<b-col>
				<b-card
					border-variant="secondary"
					header="Medical Record"
					header-bg-variant="light"
					align="left"
					class="mt-3"
				>
					<MedicalRecord/>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import MedicalRecord from './MedicalRecord'

export default {
    data () {
        return {
            message: 'Welcome to the patient-dashboard'
        }
    },
    components: {
        'MedicalRecord': MedicalRecord
    }
}
</script>