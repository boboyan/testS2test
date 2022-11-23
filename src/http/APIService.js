  /* eslint-disable */
import axios from 'axios';
//const API_URL = 'https://akanley.pythonanywhere.com';
const API_URL = 'https://evame.pythonanywhere.com/';

export class APIService {
  constructor() {

  }
 authenticateLogin(credentials) {
    const url = `${API_URL}/auth/`;
    return axios.post(url, credentials);
  }
   getCustomer(param_pk) {
     const url = `${API_URL}/api/customers/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

   getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  addNewCustomer(customer){
   const url = `${API_URL}/api/customers/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, customer, {headers: headers});
  }

  updateCustomer(customer){
    const url = `${API_URL}/api/customers/${customer.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, customer, {headers: headers});
  }

  deleteCustomer(customer_Pk){
     const url = `${API_URL}/api/customers/${customer_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

  authenticateLogin(credentials) {
    const url = `${API_URL}/auth/`;
    return axios.post(url, credentials);
  }

 registerUser(credentials) {
    const url = `${API_URL}/register/`;
    credentials.customusername = credentials.username
    return axios.post(url, credentials);
  }
  getPuppy(param_pk) {
   const url = `${API_URL}/api/puppy/${param_pk}`;
   let jwtToken = localStorage.getItem('token');
   console.log(":::jwtToken:::::"+jwtToken);
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
}


 getPuppyList() {
     const url = `${API_URL}/api/puppy`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::" + jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: headers});


 }

  addNewPuppy(puppy){
 const url = `${API_URL}/api/puppy/`;
 let jwtToken = localStorage.getItem('token');
 const headers = {Authorization: `jwt ${jwtToken}`};
 return axios.post(url, puppy, {headers: headers});
}


updatePuppy(puppy){
  const url = `${API_URL}/api/puppy/${puppy.pk}`;
  let jwtToken = localStorage.getItem('token');
  const headers = {Authorization: `jwt ${jwtToken}`};
  return axios.put(url, puppy, {headers: headers});
}


deletePuppy(puppy_Pk){
   const url = `${API_URL}/api/puppy/${puppy_Pk}`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.delete(url, {headers: headers});
}

     getTraining(param_pk) {
     const url = `${API_URL}/api/training/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }


   getTrainingList() {
       const url = `${API_URL}/api/training`;
       let jwtToken = localStorage.getItem('token');
       console.log(":::jwtToken:::::" + jwtToken);
       const headers = {Authorization: `jwt ${jwtToken}`};
       return axios.get(url, {headers: headers});

   }

  addNewTraining(training){
   const url = `${API_URL}/api/training/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, training, {headers: headers});
  }

  updateTraining(training){
    const url = `${API_URL}/api/training/${training.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, training, {headers: headers});
  }

  deleteTraining(training_Pk){
     const url = `${API_URL}/api/training/${training_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

}

