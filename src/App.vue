<template>
    <ul class="nav justify-content-end">
        <div class="EFS">Puppy Potty Training Guide🐾</div>
      <br> <br> <br> <br> <br>
        <li class="nav-item active">
            <router-link to="/">Home</router-link> |
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'CustomerList'}">Member List</router-link>|
        </li>


        <li class="nav-item">
            <router-link :to="{name: 'PuppyList'}">Puppy List</router-link>|
        </li>
       <li class="nav-item">
            <router-link :to="{name: 'Tips'}">Tips</router-link>|
        </li>

       <li class="nav-item">
            <router-link :to="{name: 'TrainingList'}">Training List</router-link>
        </li>

        <li class="nav-item" v-if="!authenticated" @click="login" >
            | <router-link :to="{name: 'Auth'}">Log in</router-link>
        </li>
        <li class="nav-item" v-if="!authenticated" @click="register" >
            | <router-link :to="{name: 'Register'}">Register</router-link>
        </li>
        <li class="nav-item  .justify-content-end" v-if="authenticated" @click="logout" >
            | <router-link :to="{name: 'Auth'}">Logout</router-link>
        </li>
    </ul>
    <router-view/>
</template>
<script>
    import router from './router';
    import {APIService} from './http/APIService';
    const apiService = new APIService();


    export default {
        name: 'App',
        data: () => ({
            authenticated: false,
            dialog: false,
            menu: [
                { title: 'Home', url:"/"},
                { title: 'Puppy', url:"/puppy-list" },
                { title: 'Training', url:"/training_list" },
            ]
        }),
        mounted() {
            apiService.getCustomerList().then(response => {
                this.authenticated = true;
            }).catch(error => {
                if (error.response.status === 401) {
                    localStorage.removeItem('isAuthenticates');
                    localStorage.removeItem('log_user');
                    localStorage.removeItem('token');
                    this.authenticated = false;
                }
            });
            console.log('this.authenticated--'+this.authenticated);
        },
        methods: {
            logout() {
                localStorage.removeItem('isAuthenticates');
                localStorage.removeItem('log_user');
                localStorage.removeItem('token');
                this.authenticated = false;
                // router.push('/');
                window.location = "/"
            },
           viewCustomers() {
        router.push('/customer-list');
      },
      viewPuppy() {
        router.push('/puppy-list');
      },
       viewTraining() {
        router.push('/training_list');
      },
            login() {
                router.push("/auth");
            },
        }
    };
</script>


<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        background-color: cadetblue;

        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
              color: #42b983;
            }
        }
    }
    .nav {
        padding: 1em;
        background-color: sandybrown;
        margin-top: 50px;


        li {
            font-weight: bold;
            color: papayawhip;
           margin-top: 50px;

        }


        a {
            color: black;
            padding: .5em;




            &.router-link-exact-active {
                color: whitesmoke;
            }
        }


        .EFS{
            margin-right: 20em;
          margin-top: 50px;
          color:black;
          font-size: x-large;
          font-weight: bolder;
        }
    }


</style>



