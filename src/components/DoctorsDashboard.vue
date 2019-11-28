<template>
  <b-container fluid class="patient-dashboard">
		<b-row fluid>
			<h5>Sample <b-badge variant="info">Doctors</b-badge> Dashboard <b-badge variant="warning">Not connected to solidity</b-badge></h5>
		</b-row>
		<b-row>
			<b-col>
				<b-card 
					border-variant="info"
					header="Past Views"
					header-bg-variant="info"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Views <b-badge variant="success">99</b-badge> <b-link>View all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Mr. Ihsotas <b-link>11/09/2019</b-link></b-list-group-item>
						<b-list-group-item>Mr. Kilativ <b-link>11/08/2019</b-link></b-list-group-item>
						<b-list-group-item>Mr. Okooz <b-link>10/05/2019</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
			<b-col>
				<b-card 
					border-variant="success"
					header="Access Requested"
					header-bg-variant="success"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Pending <b-badge variant="success">17</b-badge> <b-link>View all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Mr. Satoshi <b-link>View</b-link></b-list-group-item>
						<b-list-group-item>Mr. Vitalik <b-link>View</b-link></b-list-group-item>
						<b-list-group-item>Mr. Zooko <b-link>View</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
			<b-col>
				<b-card
					border-variant="primary"
					header="Access Granted"
					header-bg-variant="primary"
					header-text-variant="white"
					align="center"
				>
					<b-card-text><h6>Received <b-badge variant="danger">5 new</b-badge> <b-link>View all</b-link></h6></b-card-text>
					<b-list-group flush>
						<b-list-group-item>Mr. Nakmoto <b-link>Grant</b-link></b-list-group-item>
						<b-list-group-item>Mr. Buterin <b-link>Grant</b-link></b-list-group-item>
						<b-list-group-item>Mr. Wilcox <b-link>Grant</b-link></b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
		</b-row>
		<b-row></b-row>
		<b-row>
			<b-col>
				<b-card
					border-variant="secondary"
					header="Doctors Info"
					header-bg-variant="light"
					align="left"
					class="mt-3"
				>
					<DoctorsInfo/>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
import DoctorsInfo from './DoctorsInfo'

export default {
    data () {
        return {
            message: 'Welcome to the patient-dashboard'
        }
    },
    components: {
        'DoctorsInfo': DoctorsInfo
    }
}
</script>