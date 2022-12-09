<template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class=" col align-items-center">
        <div class="row align-items-center justify-content-center">
          <div class="col col-12 col-sm-10 col-md-10 col-lg-6">
            <div class="alert alert-danger shadow" role="alert"
            v-if="showMsg === 'error'">
              Please verify Training Information
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col col-12 col-sm-10 col-md-10 col-lg-6 align-items-center">
            <div class="card">
              <div class="card-header">{{pageTitle}}</div>
              <div class="card-body">
                <form ref="form">
                  <div class="container-fluid">


                    <div class=" row justify-content-around py-2">
                      <label class="col-4">Customer</label>
                      <div class="col col-8">
                        <select v-model="training.customer" class="form-select">
                          <option class ="form-select form-select-sm " v-for=" item in list" :value="item.pk" :key="item.pk"> {{item.name}} </option>
                        </select>
                      </div>
                    </div>






                    <div class="form-group row justify-content-around py-2">
                      <label class="col-4">Training Date</label>
                      <div class="col col-8">
                        <input v-model="training.training_date" type="date" class="form-control-sm form-control">
                      </div>
                    </div>


                     <div class="form-group row justify-content-around py-2">
                      <label class="col-4">Training Notes</label>
                      <div class="col col-8">
                        <input v-model="training.training_notes" type="text" class="form-control-sm form-control">
                      </div>
                    </div>





                    <div class="row justify-content-around">
                      <div v-if="!isUpdate" type="button" class="btn btn-primary col-4" @click="createTraining">Save</div>
                      <div v-if="isUpdate" type="button" class="btn btn-primary col-4" @click="updateTraining">Update</div>
                      <div type="button" class="btn btn-secondary col-4" @click="cancelOperation">Cancel</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import router from '../router';
  import {APIService} from '../http/APIService';
  const apiService = new APIService();

  export default {
    name: 'TrainingCreate',
    components: {},
    data() {
      return {
        customers: [],
        showError: false,
        training: {},
        pageTitle: "Add New Training",
        isUpdate: false,
        showMsg: '',
        date: new Date()
      };
    },
    computed:{
      list:{
      get () {
            return this.customers
        },
          set (newValue) {
            this.customers = newValue
          }
      }
    },
    methods: {
      getCustomers() {
        apiService.getCustomerList().then(response => {
          this.customers = response.data.data;
          if (localStorage.getItem("isAuthenticates")
            && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
            this.validUserName = JSON.parse(localStorage.getItem("log_user"));
          }
        }).catch(error => {
          if (error.response.status === 401) {
            localStorage.removeItem('isAuthenticates');
            localStorage.removeItem('log_user');
            localStorage.removeItem('token');
            router.push("/auth");
          }
        });
      },
      createTraining() {
        apiService.addNewTraining(this.training).then(response => {
          if (response.status === 201) {
            this.training = response.data;
             this.showMsg = "";
            router.push('/training-list/new');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      },
      cancelOperation(){
         router.push("/training-list");
      },
      updateTraining() {
        apiService.updateTraining(this.training).then(response => {
          if (response.status === 200) {
            this.training = response.data;
            router.push('/training-list/update');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      }
    },
    mounted() {
      this.getCustomers();
      if (this.$route.params.pk) {
        this.pageTitle = "Edit Training";
        this.isUpdate = true;
        apiService.getTraining(this.$route.params.pk).then(response => {
          this.training = response.data;
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }
        });
      }
    },
  }
</script>


<style scoped>
  .aform {
    margin-left: auto;
    width: 60%;
  }
</style>
