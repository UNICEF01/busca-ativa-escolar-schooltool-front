<script>


import {db, auth, usersCollection} from "./../firebase";
import ibgeid from '../assets/territory.js';


export default {
  methods:{
    myFunction: function(){
      return ibgeid
    }
  }
}   
 

var userId = ["1Wuv0q5d7YeInJMKouU5zgZ7Vur1","9sPFSHLAXnOvhTtjrZ1EZEKssNp2","FKUmSCDLMVNCAJ5FM8pfTvaWOkD3","KXSJq1hEVsOpxpGMfY3qWzGpqQi2","ROoxYEDOYMVpEzy6JLNa4jqoaQs2","e3JSOBGYaPSmkxIKhZbxZ5S5C7N2","fXYivxF9vwQUb4SMTZz5N9IV19l1","rorGpLBslDgoM9vLuRFHyKKlGWU2"];

userId.forEach(myFunction);

function myFunction(uid) {

    var docRef = db.collection("users").doc(uid)

    docRef.get().then(function(doc) {
    if (doc.exists) {
        var name=doc.get('city.region');
        var uff=doc.get('city.uf');
        var ibge_city_id=doc.get('school.ibge_id');

        let region = [
        { value: "NO", text: "NORTE" },
        { value: "NE", text: "NORDESTE" },
        { value: "SU", text: "SUL" },
        { value: "SE", text: "SUDESTE" },
        { value: "CO", text: "CENTRO-OESTE" }
        ]


        let regionName = region.find(item => item.value == name);
        let territory = ibgeid.find(item => item.value == ibge_city_id);

        db.collection("users").doc(uid).update({"school.region_name": regionName.text})
        db.collection("users").doc(uid).update({"school.uf": uff})
        db.collection("users").doc(uid).update({"school.territory": territory.text})
    }

    })

}

           
</script>