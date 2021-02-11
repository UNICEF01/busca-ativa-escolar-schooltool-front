<template>
  <div class="login">
    <h1>Login</h1>
    
  </div>
</template>




<script>


import firebase from 'firebase';
const db = firebase.firestore()
const auth = firebase.auth()



db.collection("users").doc("1SeBA7ZTjQaQoN1O44D2VCJih9i1").collection("reviews").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
});

const citiesRef = db.collection('users');

// Create a query against the collection
const queryRef = citiesRef.where('name', '==', 'SERGIO ROBERTO');



export default {
 name: 'users'
}
</script>