<template>
    <div class="container-fluid">
        <!--Welcome Title -->
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 align-items-center justify-content-center">
                <blockquote>
                  <br><br>
                    Welcome {{ validUserName }}!
                    <br><br>
                </blockquote>
            </div>
            <div class="col-12 col-md-10 col-lg-10 col-12 align-items-center justify-content-center">
                <div class="alert alert-success"
                     v-if="showMsg === 'new'"
                     :value="true">
                    New Training has been added.
                </div>
                <div class="alert alert-success"
                     v-if="showMsg === 'update'"
                     :value="true">
                    Training information has been updated.
                </div>
                <div class="alert alert-success"
                     v-if="showMsg === 'deleted'"
                     :value="true">
                    Selected training has been deleted.
                </div>
            </div>
        </div>


        <!-- Data table -->
        <div class="row align-items-center justify-content-center">
            <div class="d-md-none" id="collapsable-card" style="width: 80%">
                <button type="button" class="btn btn-primary" @click="addNewTraining" style="background-color: white; border-color: white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0275d8" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </button>
                <div class="card" v-for="training in training" v-bind:key="training">
                    <div class="card-header" :id="'heading' + training.pk">
                        <button class="btn btn-link collapsed" data-bs-toggle="collapse" :data-bs-target="'#collapse' + training.pk" aria-expanded="true" :aria-controls="'collapse' + training.pk">
                            <h6 style="color: #0275d8; float: left">Customer {{training.cust_number}}  training</h6>
                        </button>
                    </div>


                    <div :id="'collapse' + training.pk" class="collapse" :aria-labelledby="'heading' + training.pk" data-bs-parent="#collapsable-card">
                        <div class="card-body">
                            <p><b>Customer #:</b> {{training.cust_number}}</p>
                            <p><b>Training Date</b> {{training.training_date}}</p>
                            <p><b>Training Notes</b> {{training.training_notes}}</p>

                                  <div class="btn-group">
                                <button @click="updateTraining(training)" style="background-color: transparent; padding: 0;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg></button>
                                <button @click="deleteTraining(training)" style="background-color: transparent; padding: 0;">
                                    <svg @click="deleteTraining" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="col col-12 col-md-10 d-none d-xl-block d-lg-block d-md-block">
                <table class="table table-hover" style="overflow-y: auto"
                       :headers="headers">
                    <thead>
                    <tr>
                        <th scope="col">Customer #</th>
                        <th scope="col">Training Date</th>
                        <th scope="col">Training Notes</th>
                      <th scope="col">Update</th>
                        <th scope="col">Delete</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for = "training in training" v-bind:key="training">
                        <!-- Should be customer.cust_number but not working -->
                        <th scope="row">{{training.cust_number}}</th>
                        <td>{{training.training_date}}</td>
                        <td>{{training.training_notes}}</td>
                        <td @click="updateTraining(training)"><button style="background-color: transparent; padding: 0;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg></button>
                        </td>
                        <td @click="deleteTraining(training)"><button style="background-color: transparent; padding: 0;">
                            <svg @click="deleteTraining" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
              <br>
                <button type="button"  class="btn btn-primary" @click="addNewTraining" disabled>Add New Training</button>


            </div>
        </div>
    </div>
  <br><br>
                    <H5>Sorry,we are all booked this month. <br>
                      Please give us a call at 401-345-8907. <br>
                    We hope to see you soon! <br></H5>
</template>


<script>


    import router from '../router';
    import {APIService} from '../http/APIService';
    const apiService = new APIService();


    export default {
        name: "TrainingList",
        data: () => ({
            training: [],
            validUserName: "Guest",
            trainingSize: 0,
            showMsg: '',
            isMobile: false,
            headers: [
                {text: 'Customer Number', sortable: false, align: 'left',},
                {text: 'Training Date', sortable: false, align: 'left',},
                {text: 'Training Notes', sortable: false, align: 'left',},

                {text: 'Update', sortable: false, align: 'left',},
                {text: 'Delete', sortable: false, align: 'left',}


            ],


        }),
        mounted() {
            this.getTraining();
            this.showMessages();
        },
        methods: {
            onResize() {
                if (window.innerWidth < 600)
                    this.isMobile = true;
                else
                    this.isMobile = false;
            },
            showMessages(){
                console.log(this.$route.params.msg)
                if (this.$route.params.msg) {
                    this.showMsg = this.$route.params.msg;
                }
            },
            getTraining() {
                apiService.getTrainingList().then(response => {
                    this.training = response.data.data;
                    this.trainingSize = this.training.length;
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
            addNewTraining() {
                if (localStorage.getItem("isAuthenticates")
                    && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
                    router.push('/training-create');
                } else {
                    router.push("/auth");
                }
            },
            updateTraining(training) {
                router.push('/training-create/' + training.pk);
            },
            deleteTraining(training) {
                if(confirm("Do you really want to delete?")) {
                    apiService.deleteTraining(training.pk).then(response => {
                        if (response.status === 204) {
                            router.push('/training-list/deleted/')
                            this.getTraining()
                        }
                    }).catch(error => {
                        if (error.response.status === 401) {
                            localStorage.removeItem('isAuthenticates');
                            localStorage.removeItem('log_user');
                            localStorage.removeItem('token');
                            router.push("/auth");
                        }
                    });
                }
            }
        }
    };
</script>


<style>
    button {
        padding: 1rem;
        border: 0;
        cursor: pointer;
    }

    h5 {
      margin-left: 20px;
      font-family: "Arial Narrow";
      color:black;
      font-size: xx-large;
      font-weight: bold;

    }
</style>
