
<template>


<br><br><br>
  <div class="hello">
    We all love puppies<br>
    The are cute and fluffy<br>
    However, the potty training part might not be as cute<br>
    Many new dog owners get frustrated on potty training<br>
    Hey, dont worry<br>
    It is not as hard as you think <br>

  </div>

  <br><br>
 <img :src="require('@/assets/pee1.jpg')" alt="Dog Potty Training">


   <h1>{{ msg }}</h1>
     <br>
     <h3> No more accidents in the house, we've got you covered! <i class="fa fa-thumbs-up"></i></h3>


</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




.hello{
  font-family: "Calibri Light";
  font-size: larger;
  text-align: center;



}
img {
  border-radius: 30px;
  margin-inline: fill;
  margin-left: 0px;

}
h3 {

  margin-left: 0px;
  font-family: "Agency FB";
  color:black;
  font-size: xx-large;
  font-weight: bold;



}

h1 {

  margin-left: 100px;
  font-family: "Agency FB";

}


ul {
  list-style-type: none;
  padding: 20px;
  margin-left: 80px;
  font-weight: bold;
  color: black;
}

li {
  display: inline-block;
  margin: 0 20px;
}

a {
  color: #42b983;
}
</style>