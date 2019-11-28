<template>
  <div class="container">
    <div class="b-row">
      <div> 
        <div>
          <label for="fullName">
            {{label_fullName}}
          </label>
          <b-form-input
            id="fullName"
            v-model="fullName"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label for="dateOfBirth">
            {{label_dateOfBirth}}
          </label>
          <b-form-input
            id="dateOfBirth"
            v-model="dateOfBirth"
            type="date"
            placeholder="21/12/1999"
          />
        </div>
        <div>
          <label for="gender">
            {{label_gender}}
          </label>
          <b-form-input
            id="gender"
            v-model="gender"
            type="text"
            placeholder="Male/Female"
          />
        </div>
        <div>
          <label for="licenseNumbers">
            {{label_licenseNumbers}}
          </label>
          <br>
          <b-form-input
            id="licenseNumbers"
            v-model="licenseNumbers"
            rows="3"
            placeholder='XYZ12349875'
          />
        </div>
    </div>
    <div class="b-row">
      <div>
        <label for="postalAddress">
          {{label_postalAddress}}
        </label>
        <br>
        <b-form-textarea
          id="postalAddress"
          v-model="postalAddress"
          rows="2"
          placeholder='123 NYC Ave, NY, NY, 11111'
        />
      </div>
    </div>
    <hr>
    <b-row>
      <b-col>
        <b-button
          :variant="'primary'"
          @click="createMedicalRecord"
        >
          {{ label_button_create }}
        </b-button>
      </b-col>
      <b-col>
        <b-button
          :variant="'danger'"
          @click="createMedicalRecord"
        >
          {{ label_button_delete }}
        </b-button>
      </b-col>
      <b-col>
        <b-button
          :variant="'success'"
          @click="createMedicalRecord"
        >
          {{ label_button_share }}
        </b-button>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
import web3 from '../contracts/web3';
//import medicalRecord from '../contracts/medicalRecordInstance';
import medicalRecordBase from '../contracts/medicalRecordBaseInstance';

export default {
  name: 'APP',
  data() {
    return {
      label_title: 'Medical Record',
      //label_account_address: web3.givenProvider.selectedAddress,
      label_fullName: 'Full Name',
      label_dateOfBirth: 'Date Of Birth',
      label_gender: 'Gender',
      label_postalAddress: 'Postal Address',
      label_licenseNumbers: 'License Numbers (Board Registered Number)',
      fullName: '',
      dateOfBirth: '',
      gender: '',
      postalAddress: '',
      licenseNumbers: '',
      label_button_create: 'CREATE/EDIT DOCTOR PROFILE',
      label_button_delete: 'DELETE DOCTOR PROFILE',
      label_button_share: 'REQUEST MEDICAL RECORD',
      medicalR: ''
    }
  },
  computed: {
    //label_account_address: function() {
    //  return web3.givenProvider.selectedAddress
    //}
  },
  beforeMount() {
    //console.log("beforeMount")
    //console.log("address://")
    //console.log(web3.givenProvider.selectedAddress)

  },
  methods: {
    label_account_address: function() {
      return web3.givenProvider.selectedAddress
    },
    createDoctorsInfo() {
      
    },
    getMedicalRecord() {
      this.label_account_address = web3.givenProvider.selectedAddress
      medicalRecordBase.methods
        .getMedicalRecord('Address of the patient')
        .call()
        .then((medicalRecord) => {
          this.medicalR = medicalRecord
        });
    },
    handleFinalize() {
      //console.log("handleFinalize")
    },
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: #008cba;
  color: white;
}

button:hover {
  background-color: white; /* Green */
  color: #008cba;
  border: #008cba 3px solid;
}

img {
  width: 32px;
}

#isBid, #isFin {
  height: 32px;
  margin-top: 16px;
  margin-left: 8px;
}
</style>