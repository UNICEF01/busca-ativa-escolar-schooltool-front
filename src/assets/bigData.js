import { db } from "../firebase";

let data = [];
var x = 0;





db.collection("users").get().then((querySnapshot)  => {
    querySnapshot.forEach((doc) => {
      
  
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


    if (quest !== undefined && schoolquestcomplete == "S"){  

      //Grupo: 1 - Água    
      var quest1 = doc.data().quest[0].questions[0].selected;
      var quest2 = doc.data().quest[0].questions[1].selected;
      var quest3 = doc.data().quest[0].questions[2].selected;

      //Grupo: 2 - Higiene das mãos e menstrual
      var quest4 = doc.data().quest[1].questions[0].selected;
      var quest5 = doc.data().quest[1].questions[1].selected;
      var quest6 = doc.data().quest[1].questions[2].selected;
      var quest7 = doc.data().quest[1].questions[3].selected;

      //Grupo: 3 - Saneamento
      var quest8 = doc.data().quest[2].questions[0].selected;
      var quest9 = doc.data().quest[2].questions[1].selected;
      var quest10 = doc.data().quest[2].questions[2].selected;
      var quest11 = doc.data().quest[2].questions[3].selected;
      var quest12 = doc.data().quest[2].questions[4].selected;
      var quest13 = doc.data().quest[2].questions[5].selected;
      var quest14 = doc.data().quest[2].questions[6].selected;
     
      //Grupo: 4 - Prevenção e controle de infecções
      var quest15 = doc.data().quest[3].questions[0].selected;
      var quest16 = doc.data().quest[3].questions[1].selected;
      var quest17 = doc.data().quest[3].questions[2].selected;
      var quest18 = doc.data().quest[3].questions[3].selected;
      var quest19 = doc.data().quest[3].questions[4].selected;
      var quest20 = doc.data().quest[3].questions[5].selected;
      var quest21 = doc.data().quest[3].questions[6].selected;
      var quest22 = doc.data().quest[3].questions[7].selected;
      var quest23 = doc.data().quest[3].questions[8].selected;
      var quest24 = doc.data().quest[3].questions[9].selected;
      var quest25 = doc.data().quest[3].questions[10].selected;
      var quest26 = doc.data().quest[3].questions[11].selected;
      var quest27 = doc.data().quest[3].questions[12].selected;
      var quest28 = doc.data().quest[3].questions[13].selected;
      x++;

 data.push({
          // "id":uid,        
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
           "quest10":quest10,
           "quest11":quest11,
           "quest12":quest12,
           "quest13":quest13,
           "quest14":quest14,
           "quest15":quest15,
           "quest16":quest16,
           "quest17":quest17,
           "quest18":quest18,
           "quest19":quest19,
           "quest20":quest20,
           "quest21":quest21,
           "quest22":quest22,
           "quest23":quest23,
           "quest24":quest24,
           "quest25":quest25,
           "quest26":quest26,
           "quest27":quest27,
           "quest28":quest28
           
        })       
      }
    
    })

  
})

export {
    data
}

