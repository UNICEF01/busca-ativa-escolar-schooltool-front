



import { db } from "../firebase";

let data = [];
let arrayData = [];

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var uid = doc.get('uid');
      var name = doc.get('name');
      var telefone = doc.get('telefone');
      var schoolname=doc.get('school.name');
      var schoolterritory=doc.get('school.territory');
      var schoolcityname=doc.get('school.city_name');
      var schooluf=doc.get('school.uf');
      var schoolquestcomplete=doc.get('school.quest_complete');
      //var quest=doc.get('quest');


      /*let values = querySnapshot.docs;

      for (let i = 0; i < values.length; i++) {
        let obj = {}
        let datax = values[i].data();
        arrayData.push(datax);
      }*/

     //document.write(JSON.stringify(quest1[0].questions[0].selected))
      //console.log(quest1, " => ", JSON.stringify(doc.data().quest[0].questions[0].selected));


    //grupo: Água
     var quest1 = doc.data().quest[0].questions[1].selected;
     var quest2 = doc.data().quest[0].questions[1].selected;
     var quest3 = doc.data().quest[0].questions[2].selected;


 data.push({        
           "id":uid,
           "nome":name,
           "telefone":telefone,
           "escola":schoolname,
           "territorio":schoolterritory,
           "municipio":schoolcityname,
           "estado":schooluf,
           "quest_complete":schoolquestcomplete,
           "quest1":quest1,
           "quest2":quest2,
           "quest3":quest3,
           "quest4":1,
           "quest5":1,
           "quest6":1,
           "quest7":1,
           "quest8":1,
           "quest9":1,
           "quest10":1,
           "quest11":1,
           "quest12":1,
           "quest13":1,
           "quest14":1,
           "quest15":1,
           "quest16":1,
           "quest17":1,
           "quest18":1,
           "quest19":1,
           "quest20":1,
           "quest21":1,
           "quest22":1,
           "quest23":1,
           "quest24":1,
           "quest25":1,
           "quest26":1,
           "quest27":1,
           "quest28":1
           
        })       
    
    
    })

})

export {
    data
}

