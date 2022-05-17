<script>
import axios from "axios";

axios
  .get("https://firestore.googleapis.com/v1/projects/pesquisa-wash-prod/databases/(default)/documents/users?key=AIzaSyCiSAtAJMYPCme9DO40531PhIDw9JcDtPQ&pageSize=30000")
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });

</script>

