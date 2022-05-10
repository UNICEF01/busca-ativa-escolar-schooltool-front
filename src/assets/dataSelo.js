import { db } from "../firebase";
import axios from 'axios'

axios.get(`https://firestore.googleapis.com/v1/projects/pesquisa-wash-prod/databases/(default)/documents/users`)
     .then(response => { 
         console.log(response); 
        })
        .catch(error => { 
            console.log(error); 
        });