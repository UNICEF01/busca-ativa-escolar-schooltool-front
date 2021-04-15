
<template>
  <!--  <v-container>-->
  <!--    <vue-blob-json-csv-->
  <!--      @success="handleSuccess"-->
  <!--      @error="handleError"-->
  <!--      tag-name="div"-->
  <!--      file-type="json"-->
  <!--      file-name="sample"-->
  <!--      title="Backupt"-->
  <!--      :data="users"-->
  <!--      confirm="Do you want to download it?"-->
  <!--    ></vue-blob-json-csv>-->
  <!--  </v-container>-->



  
  <v-container
    fill-height
    fluid
    grid-list-xl>


    <v-layout wrap>
      <v-flex
        sm4
        xs12
        md4
        lg2>




        <div id="caixa" style="width: 110px; height: 200px;top: 150px;margin-left:1150px;align:center">
          <!--div class="tertiary--text font-weight-bold" style="margin-top:80px;margin-left: 10px" id="tituloPergunta">Pergunta: 1</div-->
          <a  id="next"  title="Próximo"  @click="setas('next')"></a>
          <a  id="prev"  title="Anterior" @click="setas('prev')"></a>
          <a  id="myBtn" title="Voltar ao Topo" v-on:click="topFunction()" >Topo</a>         
        </div>        




        <div id="user_content" style="position:fixed;height:406px;margin-bottom:-60px;width:1450px;top:0px;margin-left:0px;background:#EEEEEE"> </div>

      <!--  <material-stats-card
          color="cyan"
          icon="mdi-cloud-check"
          title="Brasil"
          :value="responses"
        /> --><br>
        <v-container fluid style="width:10%;margin-bottom:4px;position:fixed">
          <v-layout row wrap>
            <v-flex xs12>
              <v-select                
                :items="items"
                v-model="select"
                label="Tipo de relatório"
                single-line
                item-text="report"
                item-value="src"
                return-object
                persistent-hint
                v-on:input="changeRoute(`${select.src}`)"
                :hint="`${select.src}`"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>

<div class="loading-screen" v-show="loading" v-bind:class="classes" v-bind:style="{backgroundColor:bc}">
  <component v-if="customLoader" v-bind:is="customLoader"></component>
  <div v-else>
    <div class="loading-circle"></div>
    <p class="loading-text">{{text}}</p>
  </div>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

        <template>

            <div class="card text-center m-3">
   
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                                            
          

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:100%;margin-left:20px" cellspacing="0" cellpadding="0">
                                
                                <tbody>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:16px;color:white;background-color:#A9A9A9;">Norte</td>
                                        <td style="padding:12px;text-align:center;color:white;background-color:#A9A9A9;" :key="componentKey">{{ arrayTmp[180] }}  </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(11)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: '11'} }">Rondônia</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[13] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;"  @click="setUf(12)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 12 } }">Acre</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[14] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(13)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 13 } }">Amazonas</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[15] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(14)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 14 } }">Roraima</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[182] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(15)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 15 } }">Pará</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[17] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(16)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 16 } }">Amapá</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[18] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(17)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 17 } }">Tocatins</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[19] }}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </v-form>

                        
                        </div>

                </div>
                
            </div>

        </template>
       
        <template>

  
     <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:100%;margin-left:20px" cellspacing="0" cellpadding="0">
                                
                                <tbody>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:16px;color:white;background-color:#A9A9A9">Nordeste</td>
                                        <td style="padding:12px 18px;;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[32] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(21)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 21 } }">Maranhão</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[33] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(22)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 22 } }">Piauí</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[34] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(23)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 23 } }">Ceará</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[35] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(24)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 24 } }">Rio Grande do Norte</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[36] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(25)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 25 } }">Paraíba</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[37] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(26)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 26 } }">Pernambuco</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[38] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(27)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 27 } }">Alagoas</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[39] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(28)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 28 } }">Sergipe</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[40] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(29)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 29 } }">Bahia</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[41] }}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>


        <template>

            <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                                            

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:100%;margin-left:20px" cellspacing="0" cellpadding="0">
                                
                                <tbody>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:16px;color:white;color:white;background-color:#A9A9A9">Sudeste</td>
                                        <td style="padding:12px 17px;;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[95] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(31)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 31 } }">Minas Gerais</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[96] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(32)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 32 } }">Espírito Santo</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[97] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(33)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 33 } }">Rio de Janeiro</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[98] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(35)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 35 } }">São Paulo</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[99] }}</td>
                                    </tr>

                                </tbody>
                            </table>

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>


<template>

            <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                                            

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:100%;margin-left:20px">
                                
                                <tbody>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:16px;color:white;background-color:#A9A9A9">Centro Oeste</td>
                                        <td style="padding:12px 22px;;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[161] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(50)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 50 } }">Mato Grosso do Sul</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[181] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(51)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 51 } }">Mato Grosso</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[183] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(52)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 52 } }">Goiás</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[173] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(53)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 53 } }">Distrito Federal</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[176] }}</td>
                                    </tr>

                                </tbody>
                            </table>

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>
      


        <template>

            <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                                            

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:100%;margin-left:20px">
                                
                                <tbody>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:16px;color:white;background-color:#A9A9A9">Sul</td>
                                        <td style="padding:12px 22px;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[105] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(41)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 41 } }">Paraná</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[106] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(42)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 42 } }">Santa Catarina</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[107] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:1px 8px;font-size:14px;" @click="setUf(43)"><router-link :to="{ path: 'ResultsMunicipio', query: { q: 43 } }">Rio Grande do Sul</router-link></td>
                                        <td style="padding:12px;text-align:center">{{ arrayTmp[108] }}</td>
                                    </tr>

                                </tbody>
                            </table>

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>
      </v-flex>

      <v-flex
        sm8
        xs12
        md8
        lg8>
 

 
        <template>




       
            <div class="card text-center m-3" style="position:fixed;width:1414px;top:120px;left:524px">

                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                    

                        <!--div v-html="'<b style=\'font-size:20px\'>Grupo '+(count+1)+'</b><br/><b style=\'font-size:18px\'>Pergunta '+group.id+':</b> '+group.answer" style="margin-top:-100px;position:absolute;font-size:18px;text-align: justify-all!important;"></div>
                        <br/><br/><br/><br/-->

                        <v-form ref="form_research" lazy-validation>

          <material-card 
                         class="card-tabs"
                         :color="color"
                         elevation="3"
                         dense
                         fixed
                         style="margin-top:-5px;position:absolute;font-size:18px;text-align: justify-all!important;width:85%"
                         >
            <v-flex slot="header"
            style="height: 140px;overflow-y:auto !important"
            >

                    <span
                      class="subheading font-weight-light mr-3"
                      style="align-self: center"
                      v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+group.id+'</center><br></b>'+group.answer"
                    ></span>
                    <input type="hidden" id="pergunta" name="pergunta" :value="group.id">

            </v-flex>
            <v-layout wrap>

              <v-flex md4 v-for="item in group.response">
                <v-card style="height: 130px;width:398px"
                  class="pa-3"
                  outlined
                  tile                                
                >
                  {{item.name}}

                </v-card>
              </v-flex>
            </v-layout>

     </material-card>


                            <!--table class="v-datatable theme--light" style="margin-top:-103px;background-color:#fff;border-collapse:collapse;width:1200px;">
                                <thead>
                                    <tr height="200px">                                      
                                        <th class="card-tabs" v-for="item in group.response" :key="item.id" style="height:10px!important;padding:12px 8px;font-weight:400!important;color:white;background-color:#00bcd4!important">{{item.name}}</th>
                                    </tr>
                                </thead>
                                
                            </table-->

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>



<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <template>

            <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                                            

                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="margin-top:auto;background-color:#fff;border-collapse:collapse;width:1200px;">
                                
                                <tbody>
                                    <tr>
                                
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[1] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[2] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9">{{ arrayTmp[3] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[4] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[5] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[6] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[7] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[8] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[9] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[10] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[11] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[12] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[20] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[21] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[22] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[23] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[24] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[25] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[26] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[27] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[28] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[29] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[30] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[31] }}</td>

                                    </tr>
                                </tbody>
                            </table>

                        </v-form>
                        </div>

                </div>
                
            </div>

        </template>
        


        <template>

            <div class="card text-center m-3">
        <!--      <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3> -->
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                        
                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="border-spacing:0;border:0px;margin-top:auto;background-color:#fff;border-collapse:collapse!important;width:1200px;">
                                <thead>
                                    <tr height="0px" style="font-size:0; margin:0;height:0;background-color:blue;padding:0!important">
                                        <th v-for="item in group.response" :key="item.id" style="background-color:blue;padding:0!important;">{{item.name}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[42] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[43] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[44] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[45] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[46] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[47] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[48] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[49] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[50] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[51] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[52] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[53] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:14px 8px;text-align:center">{{ arrayTmp[54] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[55] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[56] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[57] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[58] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[59] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[60] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[61] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[62] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[63] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[64] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[65] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[66] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[67] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[68] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[69] }}</td>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[70] }}</td>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[71] }}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </v-form>

                    </div>
                </div>
             </div>   
        </template>      
        <template>

            <div class="card text-center m-3">
                 <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                        
                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="border-spacing:0;border:0px;margin-top:auto;background-color:#fff;border-collapse:collapse!important;width:1200px;">
                                <thead>
                                    <tr height="0px" style="font-size:0; margin:0;height:0;background-color:blue;padding:0!important">
                                        <th v-for="item in group.response" :key="item.id" style="background-color:blue;padding:0!important;">{{item.name}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[80] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[81] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[82] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[83] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[84] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[85] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[86] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[87] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[88] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[89] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[90] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[91] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[92] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[93] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[94] }}</td>

                                    </tr>
                                    
                                </tbody>
                            </table>

                        </v-form>

                    </div>
                </div>
            </div>    
 </template>
 <template>
          <div class="card text-center m-3">
                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                        
                        <v-form ref="form_research" lazy-validation>

                          <div v-html="setaGrupoPergunta(grupo,group.id)" />

                            <table id="customers" class="v-datatable theme--light" style="border-spacing:0;border:0px;margin-top:auto;background-color:#fff;border-collapse:collapse!important;width:1200px;">
                                <thead>
                                    <tr height="0px" style="font-size:0; margin:0;height:0;background-color:blue;padding:0!important">
                                        <th v-for="item in group.response" :key="item.id" style="background-color:blue;padding:0!important;">{{item.name}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[130] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[130] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[132] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:14px 8px;text-align:center">{{ arrayTmp[113] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[114] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[115] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[116] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[117] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[118] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[119] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[120] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[121] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[162] }}</td>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[163] }}</td>
                                        <td style="padding:11px 8px;text-align:center">{{ arrayTmp[164] }}</td>

                                    </tr>
                                    
                                </tbody>
                            </table>
                        
                        </v-form>
                      </div>
                    </div>
                </div>

  </template>

  <template>
    <div class="card text-center m-3">

                <div class="card-body">
                    <div v-for="group in pageOfItems" :key="group.id">
                        
                        <v-form ref="form_research" lazy-validation>

                            <table id="customers" class="v-datatable theme--light" style="border-spacing:0;border:0px;margin-top:auto;background-color:#fff;border-collapse:collapse!important;width:1200px;">
                                <thead>
                                    <tr height="0px" style="font-size:0; margin:0;height:0;background-color:blue;padding:0!important">
                                        <th v-for="item in group.response" :key="item.id" style="background-color:blue;padding:0!important;">{{item.name}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[160] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[143] }}</td>
                                        <td style="padding:12px 8px;text-align:center;color:white;background-color:#A9A9A9;">{{ arrayTmp[144] }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[145] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[146] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[147] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[148] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[149] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[150] }}</td>

                                    </tr>
                                    <tr>
                                        <td style="padding:14px 8px;text-align:center">{{ arrayTmp[151] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[152] }}</td>
                                        <td style="padding:12px 8px;text-align:center">{{ arrayTmp[160] }}</td>

                                    </tr>
                                    
                                    
                                </tbody>
                            </table>

                        </v-form>

                    </div>
                </div>
                <!--div id="components-demo" style="position:fixed;botton:40px">
                  <button class="font-weight-light v-btn theme--dark blue" v-on:click="count=0">Grupo 1</button>
                  <button class="font-weight-light v-btn theme--dark blue" v-on:click="count=1">Grupo 2</button>
                  <button class="font-weight-light v-btn theme--dark blue" v-on:click="count=2">Grupo 3</button>
                  <button class="font-weight-light v-btn theme--dark blue" v-on:click="count=3">Grupo 4</button>
                </div-->
                
                <div class="social font-weight-light theme--dark" style="border: 1px solid #ddd;position:fixed;bottom:0;right:0;z-index:20;padding:5px;color:white!important;background-color: #EBEBEB">
                <p align="center">
                <jw-pagination :items="combined" :pageSize=1 @changePage="onChangePage" ></jw-pagination><br></p>
                
                </div>
               <!-- <button v-on:click="setPage(3)">Click me</button>-->
         </div>


        </template>

    </v-flex>
            <!--            <v-layout justify-center>-->
            <!--              <v-flex>-->

            <!--                <v-card>-->
            <!--                  <v-container-->
            <!--                    fluid-->
            <!--                    grid-list-md-->
            <!--                  >-->
            <!--                    <v-layout row wrap>-->
            <!--                      <v-flex v-for="n in item.response">-->
            <!--                        <v-card>-->
            <!--                            <v-container-->
            <!--                              fill-height-->
            <!--                              fluid-->
            <!--                              pa-2-->
            <!--                            >-->
            <!--                              <v-layout fill-height>-->
            <!--                                <v-flex xs12 align-end flexbox>-->
            <!--                                  <span class="headline white&#45;&#45;text">{{n.name}}</span>-->
            <!--                                </v-flex>-->
            <!--                              </v-layout>-->
            <!--                            </v-container>-->
            <!--                          <v-card-actions>-->
            <!--                            <v-spacer></v-spacer>-->
            <!--                            <v-btn icon>-->
            <!--                              <v-icon>favorite</v-icon>-->
            <!--                            </v-btn>-->
            <!--                            <v-btn icon>-->
            <!--                              <v-icon>bookmark</v-icon>-->
            <!--                            </v-btn>-->
            <!--                            <v-btn icon>-->
            <!--                              <v-icon>share</v-icon>-->
            <!--                            </v-btn>-->
            <!--                          </v-card-actions>-->
            <!--                        </v-card>-->
            <!--                      </v-flex>-->
            <!--                    </v-layout>-->
            <!--                  </v-container>-->
            <!--                </v-card>-->
            <!--              </v-flex>-->
            <!--            </v-layout>-->


            <!--                            <v-card v-for="n in item.response">-->
            <!--                              <v-card-title primary-title>-->
            <!--                                <div>-->
            <!--                                  <p> {{ n.name }} </p>-->
            <!--                                  <div v-if="n.name === 'Sim'"></div>-->
            <!--                                </div>-->
            <!--                              </v-card-title>-->

            <!--                              <v-card-actions>-->
            <!--                                100-->
            <!--                              </v-card-actions>-->
            <!--                            </v-card>-->

            <!--            <v-radio-group v-model="item.selected">-->
            <!--              <v-radio v-for="n in item.response" :label="n.name" :value="n.value"></v-radio>-->
            <!--            </v-radio-group>-->






      <!--      <v-flex md12>-->
      <!--        <vue-excel-xlsx-->
      <!--          :data="users"-->
      <!--          :columns="headers"-->
      <!--          :filename="'filename'"-->
      <!--          :sheetname="'sheetname'"-->
      <!--        >-->
      <!--          <button type="button" class="font-weight-light v-btn v-btn&#45;&#45;large theme&#45;&#45;light success">-->
      <!--            Download-->
      <!--          </button>-->

      <!--        </vue-excel-xlsx>-->
      <!--        <v-data-table-->
      <!--          :headers="headers"-->
      <!--          :items="users"-->
      <!--          :loading="true"-->
      <!--          :search="search"-->
      <!--          item-key="uid"-->
      <!--          :items-per-page="100"-->
      <!--          :hide-default-footer="true"-->
      <!--        >-->
      <!--          <template-->
      <!--            slot="headerCell"-->
      <!--            slot-scope="{ header }">-->
      <!--                    <span-->
      <!--                      class="subheading font-weight-light text&#45;&#45;darken-3"-->
      <!--                      v-text="header.text"-->
      <!--                    />-->
      <!--            <br>-->
      <!--            <small>{{ header.description }}</small>-->
      <!--          </template>-->
      <!--          <template-->
      <!--            slot="items"-->
      <!--            slot-scope="props">-->
      <!--            <td>-->
      <!--              <span v-if="props.item.name">{{ props.item.name}}</span>-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.telefone ? props.item.telefone : 'NI'}}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.city }}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.uf}}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              <span v-if="props.item.school">{{props.item.school}}</span>-->
      <!--              <span v-else="props.item.school">Não Informado</span>-->
      <!--            </td>-->
      <!--          </template>-->
      <!--        </v-data-table>-->
      <!--        <v-progress-linear-->
      <!--          :active="loading"-->
      <!--          :color="color"-->
      <!--          indeterminate-->
      <!--        />-->
      <!--      </v-flex>-->
    </v-layout>
  </v-container>

 
</template>
	
<script>

import {db, auth, usersCollection, fireSQL} from "../firebase";
import ufid from "../assets/estado.js";
//const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
import Vue from 'vue';
localStorage.removeItem("munic")

let userAdmin = localStorage.getItem("admin");



localStorage.setItem("titulo", "regiao");

  export default {
    data() {
      return {
        grupo: 0,
        pergunta: 0,
        index_pergunta: 0,
        combined: [],
        pageOfItems: [],
        arrayTmp: [],
        componentKey: 0,
        select: { report: 'Rep1', src: '' },
        items: [
          { report: 'Territórios', src: '/resultsterritorio' },
          { report: 'Municípios', src: '/resultsmunicipio' },
          { report: 'Escola', src: '/resultsescola' }
        ],

      text: 'Carregando',
      dark: false,
      classes: null,
      loading: false,
      background: null,
      customLoader: null,        
        i_aux: [
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
          {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'}
        ],        
        cards: [
          {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
          {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6}
        ],
        quest: [

          {
            id: 0,
            group: "1. Água",
            questions: [
              {
                id: 1,
                answer: '<span>A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'A água está disponível nas instalações da escola para todas as necessidades, em quantidade suficiente mas não durante todo o ano letivo.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade suficiente, seja por que não está disponível durante o ano letivo.',
                    value: 0,
                  }
                ]
              },
              {
                id: 2,
                answer: '<span>Existe armazenamento de água e ele é suficiente para satisfazer as necessidades da escola durante, pelo menos, dois dias</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'O armazenamento de água é insuficiente para satisfazer as necessidades da escola.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há armazenamento de água.',
                    value: 0,
                  }
                ]
              },
              {
                id: 3,
                answer: "<span>A água está tratada com cloro (teor mínimo,  0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovado e que segue as especificações do Ministério da Saúde [Portaria nº 2.914/2011 do Ministério da Saúde determina a obrigatoriedade de se manter, no mínimo, 0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede)]  ou da Organização Mundial da Saúde (OMS)</span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Água tratada, mas abaixo do teor mínimo (de 0 a 0,2 mg/l) no momento do estudo.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Nenhum tratamento foi relatado.',
                    value: 0,
                  }
                ]
              }
            ],
            recommendations: [
              {
                id: 1,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Verifique com o prestador de serviço de água local as alternativas ou soluções para o fornecimento mais regular na escola.</li>"
                  + "<li>Viabilize o serviço de abastecimento onde não houver ligação da escola ao sistema de abastecimento de água.</li>"
                  + "<li>Providencie o abastecimento móvel de água para a reabertura das escolas, enquanto mais soluções são estudadas.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 2,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Providencie reservatórios complementares de armazenamento de água.</li>"
                  + "<li>Viabilize a aquisição de reservatórios de água, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 3,
                text: "<span>"
                  + "<ul>"
                  + "<li>Busque informações sobre como verificar o teor mínimo de cloro residual livre. <br/>"
                  + " <a href=\"http://www.funasa.gov.br/site/wp-content/files_mf/manual_pratico_de_analise_de_agua_2.pdf\" target=\"_blank\">Clique para acessar o Manual Prático de Análise de Água</a> </li>"
                  + "<li>Verifique junto ao prestador de serviço de água se a água fornecida à escola é adequadamente clorada.</li>"
                  + "</ul>"
                  + "</span>"
              }
            ],
            limitForGroupRecommendation: 3,
            headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>Discuta as limitações no fornecimento de água em sua escola e, conjuntamente com a Secretaria, busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          },

          {
            id: 1,
            group: "2. Higiene das mãos e menstrual",
            questions: [
              {
                id: 4,
                answer: "<span>Há pias ou locais para a lavagem de mãos com água e sabão na entrada da escola. </span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há pias ou locais para a lavagem de mãos com água na entrada, mas sem sabão.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'A escola não dispõe de pias ou de locais  para a lavagem de mãos em funcionamento nas suas entradas.',
                    value: 0,
                  }
                ]
              },
              {
                id: 5,
                answer: "<span>Há pias ou locais para a lavagem de mãos com água e sabão na frente das salas de aula e a menos de 5 metros de cada banheiro</span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há pias ou locais para a lavagem das mãos, com água, próximas das salas de aula, mas sem sabão.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'As pias ou locais de lavagem das mãos não estão próximos das salas de aula.',
                    value: 0,
                  }
                ]
              },
              {
                id: 6,
                answer: '<span>São organizadas atividades de lavagem de mãos para todos os estudantes, pelo menos três vezes por dia na escola</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'As atividades de lavagem de mãos são organizadas, mas não três vezes por dia e nem todos os dias da semana.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há atividades de lavagem de mãos.',
                    value: 0,
                  }
                ]
              },
              {
                id: 7,
                answer: '<span>' +
                  'Os seguintes recursos para a higiene menstrual estão disponíveis na escola:' +
                  '<br/> i) duchas higiênicas ou locais de banho' +
                  '<br/> ii) itens de higiene (por exemplo, absorventes íntimos)' +
                  '<br/> iii) educação sobre higiene menstrual' +
                  '<br/> iv) cesto de lixo com tampa' +
                  '<br/> v) pias para lavagem das mãos perto dos banheiros.' +
                  '</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Pelo menos um ou dois, mas não todos; recursos para a higiene menstrual estão disponíveis na escola.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Nenhum dos recursos para a higiene menstrual está disponível na escola.',
                    value: 0,
                  }
                ]
              }
            ],
            recommendations: [
              {
                id: 4,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, em todas as entradas da escola;</li>"
                  + "<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 5,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, nas proximidades de todos os banheiros.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 6,
                text: "<span>"
                  + "<ul>"
                  + "<li>Promova, juntamente com a Secretaria e a comunidade escolar, a realização de atividades de sensibilização e de lavagem de mãos em grupo, chamando a atenção de estudantes para a importância da higiene das mãos.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 7,
                text: "<span>"
                  + "<ul>"
                  + "<li>Promova, juntamente com a Secretaria e a comunidade escolar, a importância da higiene menstrual;</li>"
                  + "<li>Viabilize a existência de espaços e a disponibilidade de materiais adequados e seguros para a prática da higiene menstrual.</li>"
                  + "</ul>"
                  + "</span>"
              }
            ],
            limitForGroupRecommendation: 4,
            headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>Discuta as limitações para a lavagem das mãos e higiene menstrual em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          },

          {
            id: 2,
            group: "3. Saneamento",
            questions: [
              {
                id: 8,
                answer: '<span>A escola tem um número suficiente de banheiros ou vasos sanitários funcionando para uso dos estudantes.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
                    value: 0,
                  }
                ]
              },
              {
                id: 9,
                answer: '<span>Os banheiros ou sanitários estão claramente separados para meninos e meninas</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Alguns banheiros estão claramente separados, mas não todos.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há banheiros separados.',
                    value: 0,
                  }
                ]
              },
              {
                id: 10,
                answer: '<span>A escola tem um número suficiente de banheiros ou sanitários para os professores e funcionários.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
                    value: 0,
                  }
                ]
              },
              {
                id: 11,
                answer: '<span>O piso, a maçaneta da porta, a área dos banheiros e sanitários são limpos pelo menos uma vez por dia, com água e detergente, e são desinfectados com água sanitária</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Os sanitários são limpos, mas não todos os dias ou com água e detergente; e não desinfectados com água sanitária.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Os banheiros ou sanitários não são limpos regularmente.',
                    value: 0,
                  }
                ]
              },
              {
                id: 12,
                answer: '<span>Todos os banheiros têm pia ou um local para a lavagem de mãos com água e sabão em um raio mínimo de 5 metros</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Pias ou locais para lavagem de mãos com água, mas sem sabão ou a mais de 5 metros dos banheiros ou sanitários.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Pias ou locais para lavagem de mãos sem água e sabão ou pias ou locais inexistentes.',
                    value: 0,
                  }
                ]
              },
              {
                id: 13,
                answer: '<span>Há lixeiras em cada sala de aula, nos banheiros e sanitários e em locais estratégicos nas dependências da escola, e o lixo é recolhido de forma segura</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há lixeiras na escola, mas não em cada sala de aula, cada banheiro ou sanitário, ou outros locais importantes ou o lixo não é recolhido todos os dias.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Sem lixeiras nas salas de aula e em outros locais.',
                    value: 0,
                  }
                ]
              },
              {
                id: 14,
                answer: '<span>Os resíduos sólidos (lixo) da escola são descartados de forma segura.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Os resíduos sólidos são retirados de forma segura e levados para aterros sanitários, adequadamente.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Os resíduos sólidos são retirados da escola, mas de forma inadequada.',
                    value: 0,
                  }
                ]
              }
            ],
            recommendations: [
              {
                id: 8,
                text: "<span>"
                  + "<ul>"
                  + "<li>Instale mais banheiros para estudantes, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 9,
                text: "<span>"
                  + "<ul>"
                  + "<li>Promova a importância de ter banheiros separados para meninas e meninos, sinalizados claramente. Viabilize a separação dos banheiros e sanitários quando necessário e o quanto antes.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 10,
                text: "<span>"
                  + "<ul>"
                  + "<li>Instale mais banheiros para professores e funcionários, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 11,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Crie, antes da reabertura, orientações e rotinas diárias de limpeza e desinfecção nas escolas.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 12,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Instale mais pias ou locais para lavagem das mãos, com disponibilidade de sabão, próximos a cada grupo de banheiros.</li>"
                  + "<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 13,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Instale lixeiras em cada sala de aula, nos banheiros e em locais estratégicos da escola. </li>"
                  + "<li>Viabilize a aquisição de lixeiras, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 14,
                text: "<span>"
                  + "<ul>"
                  + "<li>Promova a importância de gerir e descartar resíduos sólidos adequadamente, com a orientação e o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  + "<li>Certifique-se de que ocorre o recolhimento e destinação final adequada dos resíduos da escola, com o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  + "</ul>"
                  + "</span>"
              }
            ],
            limitForGroupRecommendation: 7,
            headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais, em especial os provedores de serviços de água e esgoto e de limpeza urbana e manejo dos resíduos sólidos:</strong></span>",
            groupRecommendation: "<span>Discuta as limitações dos serviços de água e esgoto e/ou de limpeza urbana e manejo dos resíduos sólidos em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          },

          {
            id: 3,
            group: "4. Prevenção e controle de infecções",
            questions: [
              {
                id: 15,
                answer: '<span>Todas as salas de aula dispõem de material informativo sobre o COVID-19 e outras doenças infecciosas.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há informações sobre a COVID-19 e outras doenças infecciosas disponíveis, mas não em todas as salas de aula.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há informação disponível sobre a COVID-19 e outras doenças infecciosas.',
                    value: 0,
                  }
                ]
              },
              {
                id: 16,
                answer: '<span>Há pessoal designado e informado, professores, equipe de limpeza, funcionários, estudantes mais velhos, membros da comunidade ou associações que atuem no tema de água e saneamento e de prevenção e controle de doenças transmissíveis para supervisionar os locais de lavagem de mãos e banheiros (disponibilidade de água e sabão, manutenção, comportamento de lavagem de mãos e respeito às normas de distanciamento físico, etc).</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Apenas uma pessoa é capacitada em protocolos de saúde escolar para o COVID-19 e nem sempre está presente na escola.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há pessoas formadas nos protocolos de saneamento.',
                    value: 0,
                  }
                ]
              },
              {
                id: 17,
                answer: '<span>Há um planejamento claro e detalhando para a limpeza de toda a dependência escolar, que é supervisionado e aplicado.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há um planejamento claro e detalhando de limpeza, mas não cumprido ou monitorado.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há um planejamento de limpeza.',
                    value: 0,
                  }
                ]
              },
              {
                id: 18,
                answer: '<span>Estão disponíveis equipamentos de proteção individual (máscaras, luvas) para a equipe de limpeza, e materiais de limpeza apropriados e bem armazenados (detergente, esfregão, vassouras, baldes, etc.).</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Sim, estão disponíveis, mas não bem conservados ou não há disponibilidade de material ou equipamento.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Nenhum equipamento ou material de limpeza disponível.',
                    value: 0,
                  }
                ]
              },
              {
                id: 19,
                answer: '<span>É respeitada a distância física entre os professores e os estudantes, e entre os estudantes, nas salas de aula (pelo menos 1,5 metro).</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'O distanciamento físico é exercido de forma irregular, quer devido ao espaço limitado em algumas aulas, quer porque não é praticado em todos os momentos.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Não há espaço suficiente na sala de aula para a distância física ou professores e alunos não a praticam de todo.',
                    value: 0,
                  }
                ]
              },
              {
                id: 20,
                answer: '<span>É respeitada a distância física entre os usuários dos locais de lavagem de mãos ou enquanto fazem fila para ir ao banheiro</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'O distanciamento físico é implementado e respeitado de forma irregular.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'O distanciamento físico durante a lavagem das mãos não é totalmente implementado ou respeitado.',
                    value: 0,
                  }
                ]
              },
              {
                id: 21,
                answer: '<span>Se há um refeitório escolar, a distância física entre os estudantes é implementado e respeitada</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'A distância física entre os assentos dos estudantes no refeitório só é implementado às vezes ou desrespeitado.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'A distância física entre os assentos dos estudantes no refeitório não é implementado ou respeitado.',
                    value: 0,
                  }
                ]
              },
              {
                id: 22,
                answer: '<span>A equipe da cozinha usa máscaras e dispõe de locais para a lavagem ou produtos desinfectantes para as mãos</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'O pessoal da cozinha não usa máscaras regularmente e não tem água para lavar as mãos, ou produtos desinfectantes para as mãos, com regularidade.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'O pessoal da cozinha não usa máscaras e não tem água para lavar as mãos ou produtos desinfectantes para as mãos.',
                    value: 0,
                  }
                ]
              },
              {
                id: 23,
                answer: '<span>As salas de aulas têm uma boa ventilação natural</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },

                  {
                    id: 2,
                    name: 'Não',
                    value: 0,
                  }
                ]
              },
              {
                id: 24,
                answer: '<span>Existe um protocolo para identificar os estudantes com sintomas de COVID-19 e informar às autoridades sanitárias.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Existe um protocolo mas, não é conhecido pelos professores ou pelos estudantes.',
                    value: 1
                  },
                  {
                    id: 2,
                    name: 'Não há protocolo',
                    value: 0,
                  }
                ]
              },
              {
                id: 25,
                answer: '<span>A escola dispõe de um espaço privado, designado para o isolamento de estudantes com sintomas de COVID -19, onde possam aguardar que seus responsáveis os busquem</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Os alunos com sintomas são isolados em espaço aberto enquanto esperam que seus responsáveis os busquem.',
                    value: 1
                  },
                  {
                    id: 2,
                    name: 'Não há espaço designado para estudantes com sintomas de COVID-19.',
                    value: 0,
                  }
                ]
              },
              {
                id: 26,
                answer: '<span>A escola tem uma reserva de máscaras para uso dos estudantes, que tenham sido identificados com sintomas de COVID, até que seus responsáveis os busquem</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'A escola não tem uma reserva suficiente de máscaras para os alunos detectados com sintomas de COVID-19.',
                    value: 1
                  },
                  {
                    id: 2,
                    name: 'A escola não possui uma reserva de máscaras para estudantes detectados com sintomas de COVID-19.',
                    value: 0,
                  }
                ]
              },
              {
                id: 27,
                answer: '<span>Na escola onde se recomenda o uso de máscaras, todos os estudantes têm acesso a máscaras (em particular estudantes de famílias mais vulneráveis)</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Alguns estudantes não têm acesso a máscaras.',
                    value: 1
                  },
                  {
                    id: 2,
                    name: 'Nenhum estudante tem acesso a máscaras.',
                    value: 0,
                  }
                ]
              },
              {
                id: 28,
                answer: '<span>Há uma lista de controle para uso da equipe de limpeza e funcionários para monitorar os pontos críticos.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Existe uma lista de controle, mas não é utilizada regularmente.',
                    value: 1
                  },
                  {
                    id: 2,
                    name: 'Não há lista de controle.',
                    value: 0,
                  }
                ]
              }
            ],
            recommendations: [
              {
                id: 15,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Coloque cartazes sobre a prevenção e transmissão do COVID-19 em cada sala de aula, banheiros e em locais estratégicos da escola. Busque apoio para a produção e obtenção de materiais educativos sobre COVID-19, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 16,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Identifique pessoas (incluindo da comunidade escolar) para que se tornem pontos focais de água, esgotamento sanitário, higiene e saúde escolar, oferecendo informações e orientações, presenciais ou à distância.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 17,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Elabore um planejamento de limpeza e desinfecção das dependências das escolas.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 18,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Verifique a disponibilidade de equipamentos e materiais de limpeza e desinfecção e, se for o caso, viabilize-os antes da reabertura da escola.</li>"
                  + "<li>Viabilize a disponibilidade de equipamentos ou materiais de limpeza e desinfecção ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 19,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Crie condições que permitam o distanciamento físico adequado ou quais as melhores alternativas: uso de máscara, turnos escolares etc.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 20,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Sinalize, antes da reabertura, o chão das pias ou dos locais de lavagem de mãos e dos banheiros para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 21,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Sinalize, antes da reabertura, o chão dos locais das carteiras e das áreas do refeitório para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 22,
                text: "<span>"
                  + "<ul>"
                  + "<li>Disponibilize máscaras faciais e produtos desinfetantes para as mãos, para funcionários da cozinha.</li>"
                  + "<li>Viabilize a disponibilidade de máscaras faciais e produtos desinfetantes para as mãos ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 23,
                text: "<span>"
                  + "<ul>"
                  + "<li>Promova a importância de uma boa ventilação em todas as salas de aula e busque soluções para os espaços da escola que não têm ventilação suficiente.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 24,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Busque junto aos órgãos responsáveis pela Saúde, orientações para a pronta identificação de estudantes com sintomas de COVID-19.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 25,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Reserve um espaço privado, com acesso à água potável e banheiro, para o isolamento de estudantes com sintomas de COVID -19, onde devem ficar até que os responsáveis venham buscá-los.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 26,
                text: "<span><strong>"
                  + "<ul>"
                  + "<li>Disponibilize máscaras faciais para estudantes que apresentem sintomas de COVID-19.</li>"
                  + "<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span></strong>"
              },
              {
                id: 27,
                text: "<span>"
                  + "<ul>"
                  + "<li>Disponibilize (nos Estados e Municípios em que for recomendado) máscaras faciais para os estudantes, educadores e funcionários.</li>"
                  + "<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  + "</ul>"
                  + "</span>"
              },
              {
                id: 28,
                text: "<span>"
                  + "<ul>"
                  + "<li>Elabore listas de verificação que permitam acompanhar, ao menos semanalmente, o cumprimento das exigências de água, esgotamento sanitário, higiene e prevenção e controle de doenças transmissíveis.</li>"
                  + "</ul>"
                  + "</span>"
              }
            ],
            limitForGroupRecommendation: 14,
            headerRecommendation: "<span><strong>É sugerido que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>Discuta as limitações e dificuldades na prevenção e controle de infecções em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          }

        ],
        regions: [],
        users: '',
        loading: true,
        color: 'cyan',
        search: '',
        responses: '',
        rowsPerPageItems: [20, 300, 400, 500],
        pagination: {
          rowsPerPage: 20
        },
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [[12, 17, 7, 17, 23, 18, 38]]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [[230, 750, 450, 300, 280, 240, 200, 190]]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        },
        emailsSubscriptionChart: {
          data: {
            labels: [
              'Ja',
              'Fe',
              'Ma',
              'Ap',
              'Mai',
              'Ju',
              'Jul',
              'Au',
              'Se',
              'Oc',
              'No',
              'De'
            ],
            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
          },
          options: {
            axisX: {
              showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0
            }
          },
          responsiveOptions: [
            [
              'screen and (max-width: 640px)',
              {
                seriesBarDistance: 15,
                axisX: {
                  labelInterpolationFnc: function (value) {
                    return value[0]
                  }
                }
              }
            ]
          ]
        },
        norte: {
          id: 1,
          headers: [
            {
              sortable: false,
              text: 'Norte',
              value: 'regioes',
              width: "230px"
            },
            {
              sortable: false,
              text: '',
              value: 'total'
            }
          ],
          items: [
            {
              name: 'Rondônia',
              country: 'Niger',
              city: 'Oud-Tunrhout',
              salary: '52'
            },
            {
              name: 'Acre',
              country: 'Curaçao',
              city: 'Sinaai-Waas',
              salary: '22'
            },
            {
              name: 'Amazonas',
              country: 'Netherlands',
              city: 'Overland Park',
              salary: '62'
            },
            {
              name: 'Roraima',
              country: 'Korea, South',
              city: 'Gloucester',
              salary: '15'
            },
            {
              name: 'Pará',
              country: 'Malawi',
              city: 'Feldkirchen in Kārnten',
              salary: '144'
            },
            {
              name: 'Amapá',
              country: 'Chile',
              city: 'Gloucester',
              salary: '16'
            },
            {
              name: 'Tocantins',
              country: 'Chile',
              city: 'Gloucester',
              salary: '139'
            }
          ],
        },
        nordeste: {
          id: 2,
          headers: [
            {
              sortable: false,
              text: 'Nordeste',
              value: 'nordeste',
              width: "230px"
            },
            {
              sortable: false,
              text: '',
              value: 'total'
            }
          ],
          items: [
            {
              name: 'Maranhão',
              country: 'Niger',
              city: 'Oud-Tunrhout',
              salary: '52'
            },
            {
              name: 'Piauí',
              country: 'Curaçao',
              city: 'Sinaai-Waas',
              salary: '22'
            },
            {
              name: 'Ceará',
              country: 'Netherlands',
              city: 'Overland Park',
              salary: '62'
            },
            {
              name: 'Rio Grande do Norte',
              country: 'Korea, South',
              city: 'Gloucester',
              salary: '15'
            },
            {
              name: 'Paraíba',
              country: 'Malawi',
              city: 'Feldkirchen in Kārnten',
              salary: '144'
            },
            {
              name: 'Pernambuco',
              country: 'Chile',
              city: 'Gloucester',
              salary: '16'
            },
            {
              name: 'Alagoas',
              country: 'Chile',
              city: 'Gloucester',
              salary: '139'
            },
            {
              name: 'Sergipe',
              country: 'Chile',
              city: 'Gloucester',
              salary: '139'
            },
            {
              name: 'Bahia',
              country: 'Chile',
              city: 'Gloucester',
              salary: '139'
            }
          ],
        },
        sudeste: {
          id: 3,
          headers: [
            {
              sortable: false,
              text: 'Sudeste',
              value: 'regioes',
              width: "230px"
              
            },
            {
              sortable: false,
              text: '',
              value: 'total'
            }
          ],
          items: [
            {
              name: 'Minas Gerais',
              country: 'Niger',
              city: 'Oud-Tunrhout',
              salary: '52'
            },
            {
              name: 'Espirito Santo',
              country: 'Curaçao',
              city: 'Sinaai-Waas',
              salary: '22'
            },
            {
              name: 'Rio de Janeiro',
              country: 'Netherlands',
              city: 'Overland Park',
              salary: '62'
            },
            {
              name: 'São Paulo',
              country: 'Korea, South',
              city: 'Gloucester',
              salary: '15'
            }
          ],
        },
        sul: {
          id: 4,
          headers: [
            {
              sortable: false,
              text: 'Sul',
              value: 'regioes',
             width: "230px"
            },
            {
              sortable: false,
              text: '',
              value: 'total'
            }
          ],
          items: [
            {
              name: 'Paraná',
              country: 'Niger',
              city: 'Oud-Tunrhout',
              salary: '52'
            },
            {
              name: 'Santa Catarina',
              country: 'Curaçao',
              city: 'Sinaai-Waas',
              salary: '22'
            },
            {
              name: 'Rio Grande do Sul',
              country: 'Netherlands',
              city: 'Overland Park',
              salary: '62'
            }
          ],
        },
        centro_oeste: {
          id: 5,
          headers: [
            {
              sortable: false,
              text: 'Centro Oeste',
              value: 'regioes',
              width: "230px"
            },
            {
              sortable: false,
              text: '',
              value: 'total'
            }
          ],
          items: [
            {
              name: 'Mato Grosso do Sul',
              country: 'Niger',
              city: 'Oud-Tunrhout',
              salary: '52'
            },
            {
              name: 'Mato Grosso',
              country: 'Curaçao',
              city: 'Sinaai-Waas',
              salary: '22'
            },
            {
              name: 'Goiás',
              country: 'Netherlands',
              city: 'Overland Park',
              salary: '62'
            },
            {
              name: 'Distrito Federal',
              country: 'Korea, South',
              city: 'Gloucester',
              salary: '15'
            }
          ],
        },
        headers: [
          {
            sortable: false,
            text: 'Nome',
            value: 'name',
            field: 'name',
            label: 'Nome'
          },
          {
            sortable: false,
            text: 'Telefone',
            value: 'telefone',
            align: 'left',
            field: 'telefone',
            label: 'Telefone'
          },
          {
            sortable: false,
            text: 'Cidade',
            value: 'city',
            align: 'left',
            field: 'city',
            label: 'Cidade'
          },
          {
            sortable: false,
            text: 'UF',
            value: 'UF',
            align: 'left',
            field: 'uf',
            label: 'UF'
          },
          {
            sortable: false,
            text: 'Escola',
            value: 'school',
            align: 'left',
            field: 'school',
            label: 'Escola'
          }
        ],
        // tabs: 0,
        // list: {
        //   0: false,
        //   1: false,
        //   2: false
        // }
      }
    },


    methods: {
        myFunction() {
      // `this` inside methods point to the Vue instance

       this.current_page = 2;
      },
        changeRoute(a) {
          this.$router.push({path: a })
          console.log(a, this.select.src)
        },
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
            let i = 1;
            let tamanho = 1;
            this.getResult('regiao',true,'1',180,1);
            this.getResult('estado',true,'11',13,1);
            this.getResult('estado',true,'12',14,1);
            this.getResult('estado',true,'13',15,1);
            this.getResult('estado',true,'14',182,1);
            this.getResult('estado',true,'15',17,1);
            this.getResult('estado',true,'16',18,1);
            this.getResult('estado',true,'17',19,1);
            this.getResult('estado',true,'16',18,1);
            this.getResult('estado',true,'17',19,1);

            this.getResult('regiao',true,'2',32,1);
            this.getResult('estado',true,'21',33,1);
            this.getResult('estado',true,'22',34,1);
            this.getResult('estado',true,'23',35,1);
            this.getResult('estado',true,'23',35,1);
            this.getResult('estado',true,'24',36,1);
            this.getResult('estado',true,'25',37,1);
            this.getResult('estado',true,'26',38,1);
            this.getResult('estado',true,'27',39,1);
            this.getResult('estado',true,'28',40,1);
            this.getResult('estado',true,'29',41,1);

            this.getResult('regiao',true,'3',95,1);
            this.getResult('estado',true,'31',96,1);
            this.getResult('estado',true,'32',97,1);
            this.getResult('estado',true,'33',98,1);
            this.getResult('estado',true,'35',99,1);

            this.getResult('regiao',true,'5',161,1);
            this.getResult('estado',true,'50',181,1);
            this.getResult('estado',true,'51',183,1);
            this.getResult('estado',true,'52',173,1);
            this.getResult('estado',true,'53',176,1);

            this.getResult('regiao',true,'4',105,1);
            this.getResult('estado',true,'41',106,1);
            this.getResult('estado',true,'42',107,1);
            this.getResult('estado',true,'43',108,1);

            this.getResult('regiao',false,'1',1,2);
            this.getResult('regiao',false,'1',2,1);
            this.getResult('regiao',false,'1',3,0);

            this.getResult('estado',false,'11',4,2);
            this.getResult('estado',false,'11',5,1);
            this.getResult('estado',false,'11',6,0);

            this.getResult('estado',false,'12',7,2);
            this.getResult('estado',false,'12',8,1);
            this.getResult('estado',false,'12',9,0);

            this.getResult('estado',false,'13',10,2);
            this.getResult('estado',false,'13',11,1);
            this.getResult('estado',false,'13',12,0);

            this.getResult('estado',false,'14',20,2);
            this.getResult('estado',false,'14',21,1);
            this.getResult('estado',false,'14',22,0);

            this.getResult('estado',false,'15',23,2);
            this.getResult('estado',false,'15',24,1);
            this.getResult('estado',false,'15',25,0);

            this.getResult('estado',false,'16',26,2);
            this.getResult('estado',false,'16',27,1);
            this.getResult('estado',false,'16',28,0);

            this.getResult('estado',false,'17',29,2);
            this.getResult('estado',false,'17',30,1);
            this.getResult('estado',false,'17',31,0);

            this.getResult('regiao',false,'2',42,2);
            this.getResult('regiao',false,'2',43,1);
            this.getResult('regiao',false,'2',44,0);
            this.getResult('estado',false,'21',45,2);
            this.getResult('estado',false,'21',46,1);
            this.getResult('estado',false,'21',47,0);
            this.getResult('estado',false,'22',48,2);
            this.getResult('estado',false,'22',49,1);
            this.getResult('estado',false,'22',50,0);
            this.getResult('estado',false,'23',51,2);
            this.getResult('estado',false,'23',52,1);
            this.getResult('estado',false,'23',53,0);
            this.getResult('estado',false,'24',54,2);
            this.getResult('estado',false,'24',55,1);
            this.getResult('estado',false,'24',56,0);
            this.getResult('estado',false,'25',57,2);
            this.getResult('estado',false,'25',58,1);
            this.getResult('estado',false,'25',59,0);
            this.getResult('estado',false,'26',60,2);
            this.getResult('estado',false,'26',61,1);
            this.getResult('estado',false,'26',62,0);
            this.getResult('estado',false,'27',63,2);
            this.getResult('estado',false,'27',64,1);
            this.getResult('estado',false,'27',65,0);
            this.getResult('estado',false,'28',66,2);
            this.getResult('estado',false,'28',67,1);
            this.getResult('estado',false,'28',68,0);
            this.getResult('estado',false,'29',69,2);
            this.getResult('estado',false,'29',70,1);
            this.getResult('estado',false,'29',71,0);
            this.getResult('regiao',false,'3',80,2);
            this.getResult('regiao',false,'3',81,1);
            this.getResult('regiao',false,'3',82,0);
            this.getResult('estado',false,'31',83,2);
            this.getResult('estado',false,'31',84,1);
            this.getResult('estado',false,'31',85,0);
            this.getResult('estado',false,'32',86,2);
            this.getResult('estado',false,'32',87,1);
            this.getResult('estado',false,'32',88,0);
            this.getResult('estado',false,'33',89,2);
            this.getResult('estado',false,'33',90,1);
            this.getResult('estado',false,'33',91,0);
            this.getResult('estado',false,'35',92,2);
            this.getResult('estado',false,'35',93,1);
            this.getResult('estado',false,'35',94,0);
            this.getResult('regiao',false,'5',130,2);
            this.getResult('regiao',false,'5',131,1);
            this.getResult('regiao',false,'5',132,0);
            this.getResult('estado',false,'50',113,2);
            this.getResult('estado',false,'50',114,1);
            this.getResult('estado',false,'50',115,0);
            this.getResult('estado',false,'51',116,2);
            this.getResult('estado',false,'51',117,1);
            this.getResult('estado',false,'51',118,0);
            this.getResult('estado',false,'52',119,2);
            this.getResult('estado',false,'52',120,1);
            this.getResult('estado',false,'52',121,0);

            this.getResult('estado',false,'53',162,2);
            this.getResult('estado',false,'53',163,1);
            this.getResult('estado',false,'53',164,0);

            this.getResult('regiao',false,'4',160,2);
            this.getResult('regiao',false,'4',143,1);
            this.getResult('regiao',false,'4',144,0);
            this.getResult('estado',false,'41',145,2);
            this.getResult('estado',false,'41',146,1);
            this.getResult('estado',false,'41',147,0);
            this.getResult('estado',false,'42',148,2);
            this.getResult('estado',false,'42',149,1);
            this.getResult('estado',false,'42',150,0);
            this.getResult('estado',false,'43',151,2);
            this.getResult('estado',false,'43',152,1);
            this.getResult('estado',false,'43',153,0);
            for(let i=0;i<=5;i++){
              for (let j=1;j<=20;j++){
                if (this.grupo==0) {
                  $('<style>.page-link'+j+'{visibility:hidden!important}</style>').appendTo('head');
                  $('<style>.page-link'+j+':before{visibility:visible!important;content:"'+j+'"}</style>').appendTo('head');
              }
              if (this.grupo==1) {
                  $('<style>.page-link'+j+'{visibility:hidden!important}</style>').appendTo('head');
                  $('<style>.page-link'+j+':before{visibility:visible!important;content:"'+(j+3)+'"}</style>').appendTo('head');
              }
              if (this.grupo==2) {
                  $('<style>.page-link'+j+'{visibility:hidden!important}</style>').appendTo('head');
                  $('<style>.page-link'+j+':before{visibility:visible!important;content:"'+(j+7)+'"}</style>').appendTo('head');
              }
              if (this.grupo==3) {
                  $('<style>.page-link'+j+'{visibility:hidden!important}</style>').appendTo('head');
                  $('<style>.page-link'+j+':before{visibility:visible!important;content:"'+(j+14)+'"}</style>').appendTo('head');
              }
            }
            }

            
           // $('.page-link2:after').css({content: 'whatever it is you want to add'});
        },
        setas(value){
          //this.topFunction();
          if (value == 'prev'){
            $("a.page-link-previous")[0].click();
            var number = $("#pergunta").val()-1
            $("#tituloPergunta").text("Pergunta: "+number)
          }else{
            $("a.page-link-next")[0].click();
            var number = parseInt($("#pergunta").val()*1)+1
            $("#tituloPergunta").text("Pergunta: "+
            number)            
          }
        },
        scrollFunction() {
          var mybutton = document.getElementById("myBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        },
        topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
        limpaPergunta(){
         //$("#pergunta").text('kkkkk');
        },
        setUf(value){
          let uf = ufid.find((item) => item.value == value);
          setInterval(function () {
            window.location.reload();
            localStorage.setItem("estado", "("+uf.text+")");
          }, 100); 
            
        },
        setaGrupoPergunta(grupo,pergunta)  {
          this.grupo = grupo;
          this.pergunta = pergunta;
      },
      getResult(tipo,geral,info,idx,resp) {

        var filtroGeo;

        let uf = ufid.find((item) => item.value == info);


        switch (tipo) {
          case 'regiao':
          filtroGeo = '\`school.ibge_region_id\`';
          break;
          case 'estado':
          filtroGeo = '\`school.ibge_uf_id\`';
          break;
          case 'municipio':
          filtroGeo = '\`school.ibge_id\`';
          break;
          case 'escola':
          filtroGeo = '\`school.id\`';
          break;
        }

       // console.log(filtroGeo);

        let users = fireSQL.query(`
        SELECT *
        FROM users
        WHERE `+filtroGeo+`='`+info+`'
        `);
        
     //   console.log('aqui'+JSON.stringify(users));

        let i = 0;
        let flag = 0;
        let tamanho = 0;
        let grupo;

        users.then((users) => {
        for (let user of users) {

          for(let j = 0; j<user.quest.length; j++) {
            tamanho = j;
            for (let y = 0; y < user.quest[j].questions.length; y++) {
              if (user.quest[j].questions[y].id == this.pergunta) { grupo = j; }
            }

          }
          
        }
        });

        users.then((users) => {
        for (let user of users) {
          //console.log('leoharley'+info);

        if (typeof user.quest == 'undefined') { flag = 1; } else { flag = 0; }
        if (user.school.quest_complete == '') { flag = 1; } else { flag = 0; }

        if (typeof user.quest !== 'undefined') {
         if (!geral) {
            
          for (let y = 0; y < user.quest[grupo].questions.length; y++) {
            if (user.quest[grupo].questions[y].id == this.pergunta) { this.index_pergunta = y; }
          }
          
          if (flag == 0)  {
          ((user.quest[grupo].questions[this.index_pergunta].selected == resp)&&(user.quest[grupo].questions[this.index_pergunta].selected != null)) ? i++ : '';
          } else {
          ((user.quest[grupo].questions[this.index_pergunta].selected == resp)&&(user.quest[grupo].questions[this.index_pergunta].selected != null)) ? i : '';  
          }
           this.i = i;
           // for (let y = 0; y < user.quest[grupo].questions.length; y++) {
                        

                    //   ((user.quest[grupo].questions[0].selected == resp)&&(user.quest[grupo].questions[0].selected != null)) ? i++ : '';

                        //CONSOLIDADO GERAL DE TODAS AS QUESTOES DE TODOS OS GRUPOS
                      /*   for (let x = 0; x < user.quest.length; x++) {
                            for (let y = 0; y < user.quest[x].questions.length; y++) {
                            ((user.quest[x].questions[y].selected == resp)&&(user.quest[x].questions[y].selected != null)) ? i++ : '';
                            }
                        } */ 

          } else {

            for (let y = 0; y < user.quest[grupo].questions.length; y++) {
            if (user.quest[grupo].questions[y].id == this.pergunta) { this.index_pergunta = y; }
          }
          
          if (flag == 0)  {
          ((user.quest[grupo].questions[this.index_pergunta].selected != null)) ? i++ : '';
          } else {
          ((user.quest[grupo].questions[this.index_pergunta].selected != null)) ? i : '';
          }

              //  ((user.quest[grupo].questions[0].selected == resp)&&(user.quest[grupo].questions[0].selected != null)) ? i++ : '';

              //CONSOLIDADO GERAL DE TODAS AS QUESTOES DE TODOS OS GRUPOS
              /*  for (let x = 0; x < user.quest.length; x++) {
                  for (let y = 0; y < user.quest[x].questions.length; y++) {
                  ((user.quest[x].questions[y].selected != null)) ? i++ : '';
                  }
                } */
          this.i = i;

          }
        }   
        }
        this.i_aux[idx].valor = this.i;

        this.arrayTmp[idx] = this.i;

        this.componentKey += 1;
        this.$loading(true)

        return(this.i);
        });

        return (this.i);     
      //return ('grupo: '+this.grupo+' pergunta: '+this.index_pergunta);

      },
      async getData() {

            this.getResult('regiao',true,'1',180,1);
            this.getResult('estado',true,'11',13,1);
            this.getResult('estado',true,'12',14,1);
            this.getResult('estado',true,'13',15,1);
            this.getResult('estado',true,'14',182,1);
            this.getResult('estado',true,'15',17,1);
            this.getResult('estado',true,'16',18,1);
            this.getResult('estado',true,'17',19,1);
            this.getResult('estado',true,'16',18,1);
            this.getResult('estado',true,'17',19,1);

            this.getResult('regiao',true,'2',32,1);
            this.getResult('estado',true,'21',33,1);
            this.getResult('estado',true,'22',34,1);
            this.getResult('estado',true,'23',35,1);
            this.getResult('estado',true,'23',35,1);
            this.getResult('estado',true,'24',36,1);
            this.getResult('estado',true,'25',37,1);
            this.getResult('estado',true,'26',38,1);
            this.getResult('estado',true,'27',39,1);
            this.getResult('estado',true,'28',40,1);
            this.getResult('estado',true,'29',41,1);

            this.getResult('regiao',true,'3',95,1);
            this.getResult('estado',true,'31',96,1);
            this.getResult('estado',true,'32',97,1);
            this.getResult('estado',true,'33',98,1);
            this.getResult('estado',true,'35',99,1);

            this.getResult('regiao',true,'5',161,1);
            this.getResult('estado',true,'50',181,1);
            this.getResult('estado',true,'51',183,1);
            this.getResult('estado',true,'52',173,1);
            this.getResult('estado',true,'53',176,1);

            this.getResult('regiao',true,'4',105,1);
            this.getResult('estado',true,'41',106,1);
            this.getResult('estado',true,'42',107,1);
            this.getResult('estado',true,'43',108,1);

            this.getResult('regiao',false,'1',1,2);
            this.getResult('regiao',false,'1',2,1);
            this.getResult('regiao',false,'1',3,0);

            this.getResult('estado',false,'11',4,2);
            this.getResult('estado',false,'11',5,1);
            this.getResult('estado',false,'11',6,0);

            this.getResult('estado',false,'12',7,2);
            this.getResult('estado',false,'12',8,1);
            this.getResult('estado',false,'12',9,0);

            this.getResult('estado',false,'13',10,2);
            this.getResult('estado',false,'13',11,1);
            this.getResult('estado',false,'13',12,0);

            this.getResult('estado',false,'14',20,2);
            this.getResult('estado',false,'14',21,1);
            this.getResult('estado',false,'14',22,0);

            this.getResult('estado',false,'15',23,2);
            this.getResult('estado',false,'15',24,1);
            this.getResult('estado',false,'15',25,0);

            this.getResult('estado',false,'16',26,2);
            this.getResult('estado',false,'16',27,1);
            this.getResult('estado',false,'16',28,0);

            this.getResult('estado',false,'17',29,2);
            this.getResult('estado',false,'17',30,1);
            this.getResult('estado',false,'17',31,0);

            this.getResult('regiao',false,'2',42,2);
            this.getResult('regiao',false,'2',43,1);
            this.getResult('regiao',false,'2',44,0);
            this.getResult('estado',false,'21',45,2);
            this.getResult('estado',false,'21',46,1);
            this.getResult('estado',false,'21',47,0);
            this.getResult('estado',false,'22',48,2);
            this.getResult('estado',false,'22',49,1);
            this.getResult('estado',false,'22',50,0);
            this.getResult('estado',false,'23',51,2);
            this.getResult('estado',false,'23',52,1);
            this.getResult('estado',false,'23',53,0);
            this.getResult('estado',false,'24',54,2);
            this.getResult('estado',false,'24',55,1);
            this.getResult('estado',false,'24',56,0);
            this.getResult('estado',false,'25',57,2);
            this.getResult('estado',false,'25',58,1);
            this.getResult('estado',false,'25',59,0);
            this.getResult('estado',false,'26',60,2);
            this.getResult('estado',false,'26',61,1);
            this.getResult('estado',false,'26',62,0);
            this.getResult('estado',false,'27',63,2);
            this.getResult('estado',false,'27',64,1);
            this.getResult('estado',false,'27',65,0);
            this.getResult('estado',false,'28',66,2);
            this.getResult('estado',false,'28',67,1);
            this.getResult('estado',false,'28',68,0);
            this.getResult('estado',false,'29',69,2);
            this.getResult('estado',false,'29',70,1);
            this.getResult('estado',false,'29',71,0);
            this.getResult('regiao',false,'3',80,2);
            this.getResult('regiao',false,'3',81,1);
            this.getResult('regiao',false,'3',82,0);
            this.getResult('estado',false,'31',83,2);
            this.getResult('estado',false,'31',84,1);
            this.getResult('estado',false,'31',85,0);
            this.getResult('estado',false,'32',86,2);
            this.getResult('estado',false,'32',87,1);
            this.getResult('estado',false,'32',88,0);
            this.getResult('estado',false,'33',89,2);
            this.getResult('estado',false,'33',90,1);
            this.getResult('estado',false,'33',91,0);
            this.getResult('estado',false,'35',92,2);
            this.getResult('estado',false,'35',93,1);
            this.getResult('estado',false,'35',94,0);
            this.getResult('regiao',false,'5',130,2);
            this.getResult('regiao',false,'5',131,1);
            this.getResult('regiao',false,'5',132,0);
            this.getResult('estado',false,'50',113,2);
            this.getResult('estado',false,'50',114,1);
            this.getResult('estado',false,'50',115,0);
            this.getResult('estado',false,'51',116,2);
            this.getResult('estado',false,'51',117,1);
            this.getResult('estado',false,'51',118,0);
            this.getResult('estado',false,'52',119,2);
            this.getResult('estado',false,'52',120,1);
            this.getResult('estado',false,'52',121,0);

            this.getResult('estado',false,'53',162,2);
            this.getResult('estado',false,'53',163,1);
            this.getResult('estado',false,'53',164,0);

            this.getResult('regiao',false,'4',160,2);
            this.getResult('regiao',false,'4',143,1);
            this.getResult('regiao',false,'4',144,0);
            this.getResult('estado',false,'41',145,2);
            this.getResult('estado',false,'41',146,1);
            this.getResult('estado',false,'41',147,0);
            this.getResult('estado',false,'42',148,2);
            this.getResult('estado',false,'42',149,1);
            this.getResult('estado',false,'42',150,0);
            this.getResult('estado',false,'43',151,2);
            this.getResult('estado',false,'43',152,1);
            this.getResult('estado',false,'43',153,0);
     /*  let norte = await this.getDataByRegion('1').then((response) => {
          return response.length;
        }) 


        console.log(norte); */

        /*let nordeste = await this.getDataByRegion('2').then((response) => {
          return response.length;
        })
        let sudeste = await this.getDataByRegion('3').then((response) => {
          return response.length;
        })
        let sul = await this.getDataByRegion('4').then((response) => {
          return response.length;
        })
        let centro_oeste = await this.getDataByRegion('5').then((response) => {
          return response.length;
        })*/


      /*  this.norte.headers[1].text = norte;*/
     /*   this.nordeste.headers[1].text = nordeste;
        this.sudeste.headers[1].text = sudeste;
        this.sul.headers[1].text = sul;
        this.centro_oeste.headers[1].text = centro_oeste; */

        var washData = await db.collection("users").get().then(function (querySnapshot) {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.quest = data.quest;
            arrayData.push(obj);
          }
          return arrayData;
        });

        console.log(washData)

        this.questions = washData;

        let responses = this.users.length;

        this.responses = responses.toString();

        this.loading = false;


      },

    },
    created() {
      //window.addEventListener('scroll', this.handleScroll);
      this.combined=[...(this.quest[0].questions), ...(this.quest[1].questions), ...(this.quest[2].questions), ...(this.quest[3].questions)];
      console.log((this.quest[0].questions).concat(this.quest[1].questions));
      this.getData();
    }
    ,
computed:{
    bc(){
      return this.background || (this.dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)')
    }

},

  }

  window.document.body.onscroll = function() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }




</script>

<style>
a
{
    color: #000;
    font-size: 17px;
}

a:hover {
  color: #2196F3;
}

table tr td {
    text-align: left;      
}
.page-item.first {
  visibility:hidden;
  margin-left:-135px;
}
.page-item.first a:after {
  content: url('https://api.iconify.design/mdi:chevron-double-left.svg?height=27');  
  visibility: visible;
  display: block;
  position: absolute;
  padding: 6px;
  margin-left:45px;
  top: 3px; 
}
 


.page-item.previous {
  visibility:hidden;
}


.page-item.previous a:after {
  content: url('https://api.iconify.design/mdi:chevron-left.svg?height=27');
  visibility: visible;
  display: block;
  position: absolute;
  padding: 6px;
  margin-left:30px;
  top: 3px; 
}

.page-item.next {
  visibility:hidden;
}
.page-item.next a:after {
  content: url('https://api.iconify.design/mdi:chevron-right.svg?height=27');
  visibility: visible;
  display: block;
  position: absolute;
  padding: 6px;
  margin-left:-12px;
  top: 3px;  
}

.page-item.last {
  visibility:hidden;
}
.page-item.last a:after {
   content: url('https://api.iconify.design/mdi:chevron-double-right.svg?height=27');
  visibility: visible;
  display: block;
  position: absolute;
  padding: 6px;
  margin-left:-27px;
  top: 3px;
}


#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px; 
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

#caixa {
  position: fixed;
  left:600px;
}


#next {
  text-align:center;
  position:absolute;
  margin-left:20px;
  top:20px;
  content: url('https://api.iconify.design/mdi:arrow-right-bold-circle.svg?height=54&color=gray');
}
#prev {
  text-align:center;
  position:absolute;
  margin-left:20px;
  top:110px;
  content: url('https://api.iconify.design/mdi:arrow-left-bold-circle.svg?height=54&color=gray');
}
#prev:hover {
  text-align:center;
  position:absolute;
  margin-left:20px;
  top:110px;
  content: url('https://api.iconify.design/mdi:arrow-left-bold-circle.svg?height=54&color=blue');
}
#next:hover {
  text-align:center;
  position:absolute;
  margin-left:20px;
  top:20px;
  content: url('https://api.iconify.design/mdi:arrow-right-bold-circle.svg?height=54&color=blue');
}

#myBtn {
  display: none;
  position: fixed;
  bottom: 70px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  margin-left:10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  content: url('https://api.iconify.design/mdi:arrow-up-bold-circle.svg?height=54&color=gray');

}

#myBtn:hover {
   content: url('https://api.iconify.design/mdi:arrow-up-bold-circle.svg?height=54&color=blue');
}

#meuMenu {
    background:#345;
    width:100%;
    padding:20px;
    margin-top: 100px;
}
.fixar {
    position:fixed;
    margin-top: 0px !important;
}


.loading-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  flex-direction: column;
  user-select: none;
}
.loading-circle {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-left-color: #ababab;
  animation: circleanimation .45s linear infinite
}
.loading-text {
  margin-top: 15px;
  color: #808080;
  font-size: 12px;
  text-align: center;
}
@keyframes circleanimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

</style>