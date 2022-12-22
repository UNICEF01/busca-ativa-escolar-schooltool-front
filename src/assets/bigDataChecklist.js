import { db } from "../firebase";

let data = [];

db.collection("users-protocolos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
      var uid = doc.get('uid');
      var name = doc.get('name');
      var telefone = doc.get('telefone');
      var schoolname=doc.get('school.name');
      var relation=doc.get('relation.name');
      var schoolterritory=doc.get('school.territory');
      var schoolcityname=doc.get('school.city_name');
      var schooluf=doc.get('school.uf');
      var schoolquestcomplete=doc.get('school.quest_complete');
      var quest=doc.get('quest');


    if (quest !== undefined && schoolquestcomplete == "S" ){  

  
      var quest1 = doc.data().quest[0].questions[0].selected;
      var quest2 = doc.data().quest[1].questions[0].selected;
      var quest3 = doc.data().quest[2].questions[0].selected;
      var quest4 = doc.data().quest[3].questions[0].selected;
      var quest5 = doc.data().quest[4].questions[0].selected;
      var quest6 = doc.data().quest[5].questions[0].selected;
      var quest7 = doc.data().quest[6].questions[0].selected;
      var quest8 = doc.data().quest[7].questions[0].selected;
      var quest9 = doc.data().quest[8].questions[0].selected;
      var quest10 = doc.data().quest[9].questions[0].selected;
      
 data.push({
           "id":uid,        
           "nome":name,
           "telefone":telefone,
           "escola":schoolname,
           "relacao":relation,
           "territorio":schoolterritory,
           "municipio":schoolcityname,
           "estado":schooluf,
           "quest_complete":schoolquestcomplete,
           "quest1":quest1,
           "quest2":quest2,
           "quest3":quest3,
           "quest4":quest4,
           "quest5":quest5,
           "quest6":quest6,
           "quest7":quest7,
           "quest8":quest8,
           "quest9":quest9,
           "quest10":quest10
           
        })       
      }
      }  
    })

  
})

export {
    data
}

