<template>
  <div class="container">
    <div class="b-row">
      <div> 
        <div>
          <label for="fullName">
            {{label_fullName}} {{medicalR}}
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
          <label for="heightInches">
            {{label_heightInches}}
          </label>
          <b-form-input
            id="heightInches"
            v-model="heightInches"
            type="text"
            placeholder="165"
          />
        </div>
        <div>
          <label for="weightPounds">
            {{label_weightPounds}}
          </label>
          <b-form-input
            id="weightPounds"
            v-model="weightPounds"
            type="text"
            placeholder="160"
          />
        </div>
        <div>
          <label for="bloodGroup">
            {{label_bloodGroup}}
          </label>
          <b-form-input
            id="bloodGroup"
            v-model="bloodGroup"
            type="text"
            placeholder="A+"
          />
        </div>
      </div>
      <div>
        <label for="healthNumbers">
          {{label_healthNumbers}}
        </label>
        <br>
        <b-form-textarea
          id="healthNumbers"
          v-model="healthNumbers"
          rows="3"
          placeholder='Blood Pressure 120/80, Heartrate 80, Blood Suger 100'
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
      label_heightInches: 'Height(Inches)',
      label_weightPounds: 'Weight(Pounds)',
      label_bloodGroup: 'BloodGroup',
      label_healthNumbers: 'Health Numbers (Blood pressure, Heart Rate, Blood Suger etc)',
      fullName: '',
      dateOfBirth: '',
      gender: '',
      postalAddress: '',
      heightInches: '',
      weightPounds: '',
      bloodGroup: '',
      healthNumbers: '',
      label_button_create: 'CREATE/EDIT MEDICAL RECORD',
      label_button_delete: 'DELETE MEDICAL RECORD',
      label_button_share: 'SHARE MEDICAL RECORD',
      medicalR: ''
    }
  },
  computed: {
    label_account_address: function() {
      return web3.givenProvider.selectedAddress
    }
  },
  beforeMount() {
    //console.log("beforeMount")
    //console.log("address://")
    //console.log(web3.givenProvider.selectedAddress)
    this.getMedicalRecord()
  },
  methods: {
    createMedicalRecord() {
      medicalRecordBase.methods
      .createMedicalRecord (
        this.fullName,
        this.dateOfBirth,
        this.gender,
        this.heightInches,
        this.weightPounds,
        this.postalAddress,
        this.bloodGroup,
        this.healthNumbers)
      .call()
      .then((createResponse) => {
        this.medicalR = createResponse
      })
    },
    getMedicalRecord() {
      this.label_account_address = web3.givenProvider.selectedAddress
      medicalRecordBase.methods
        .getMedicalRecord(web3.givenProvider.selectedAddress)
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