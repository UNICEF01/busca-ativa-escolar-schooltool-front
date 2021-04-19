<template>
   <v-container
      fill-height
      fluid
      grid-list-xl style="margin-left: -400px;">
      <v-layout wrap>
         <v-flex
            sm4
            xs12
            md4
            lg2>
            <br/>

            <div id="divOverlay" style="font-size: 50px!important;color:black!important;margin-left: 100px !important;width: 7000px!important;z-index: 2147483647 !important;height: 100% !important;background-color: white !important;position: absolute !important;margin-top: -100px;overflow-y: hidden!important;">
            <div class="fileUploaderBtn" style="position:absolute;top:400px!important;left:700px!important;overflow: hidden!important;">Aguarde, gerando PDF<br><img border="0" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></div>
            

            </div>
<!-- APARECE NO RELATÓRIO -->
            <template>
              <div style="font-size: 40px!important;color:black!;margin-top:0px!important;margin-left:450px;width:800px">Relatório de Território</div>

              <br><div align="center" style="font-size: 40px!important;color:black!;width:1200px">{{quest[0].group}}</div>
             
               <div ref="content" class="card text-center m-4" style="margin-top:30px!important;margin-left:190px" >
                  <div class="card-body">
                     <div v-for="group in pageOfItems" :key="group.id">
                        <v-form ref="form_research" lazy-validation>
                           
                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[0].id+'</center><br></b>'+combined[0].answer"
                                    ></span>
                     
                              </v-flex>
                         

                           </div>

                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding: 0px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[1].id+'</center><br></b>'+combined[1].answer"
                                    ></span>
                                
                              </v-flex>
                           </div>

                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding: 0px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[2].id+'</center><br></b>'+combined[2].answer"
                                    ></span>
                     
                              </v-flex>
                           </div>

                           <br/>

                           <apexchart
                           ref="exampleChart"
                           width="1100px" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series0"
                           :key="componentKey"
                           class="graficoConsolidado"
                           />
                           <center><div style="width:500px;margin-left:200px;font-size:20px!important;color:black!important">Gráfico consolidado</div></center>                           
                           <div v-html="setaGrupoPergunta(grupo,group.id)" />

                           <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[0].id+'</center><br></b>'+combined[0].answer"
                                    ></span>
                     
                              </v-flex>
                 

                           </div>

                           <br/>

                           <apexchart
                           ref="exampleChart"
                           width="1100px" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series1"
                           :key="componentKey"
                           class="graficoPadrao"/>

                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[1].id+'</center><br></b>'+combined[1].answer"
                                    ></span>
                     
                              </v-flex>
                         

                           </div>

                           <br/>

                           <apexchart
                           ref="exampleChart"
                           width="1100px" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series2"
                           :key="componentKey"
                           class="graficoPadrao"/>

                           <br/> <br/> <br/> <br/> <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[2].id+'</center><br></b>'+combined[2].answer"
                                    ></span>
                     
                              </v-flex>
                         

                           </div>

                           <br/>

                           <apexchart
                           ref="exampleChart"
                           width="1100px" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series3"
                           :key="componentKey"
                           class="graficoPadrao"/>

                           
                           
                          <br><div align="center" style="font-size: 40px!important;color:black!;width:900px">{{quest[1].group}}</div>
                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[3].id+'</center><br></b>'+combined[3].answer"
                                    ></span>
                     
                              </v-flex>
                         

                           </div>

                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding: 0px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[4].id+'</center><br></b>'+combined[4].answer"
                                    ></span>
                                
                              </v-flex>

                           </div>

                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding: 0px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[5].id+'</center><br></b>'+combined[5].answer"
                                    ></span>
                     
                              </v-flex>

                           </div>

                           <br/> <br/> <br/> <br/> <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding: 0px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 300;"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[6].id+'</center><br></b>'+combined[6].answer"
                                    ></span>
                     
                              </v-flex>
                           </div>

                           <br/>

                           <apexchart
                           ref="exampleChart"
                           width="1100px" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series4"
                           :key="componentKey"
                           class="graficoConsolidado"
                           />
                           <center><div style="width:500px;margin-left:200px;font-size:20px!important;color:black!important">Gráfico consolidado</div></center>
                           <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[3].id+'</center><br></b>'+combined[3].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series5"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/> <br/> <br/> <br/> <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[4].id+'</center><br></b>'+combined[4].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series6"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[5].id+'</center><br></b>'+combined[5].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series7"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/> <br/> <br/> <br/> <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 300px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[6].id+'</center><br></b>'+combined[6].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series8"
                            :key="componentKey"
                            class="graficoPadrao"/>

                          <br><div align="center" style="font-size: 40px!important;color:black!;width:900px">{{quest[2].group}}</div>
                            <br/>

                           <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[7].id+'</center><br></b>'+combined[7].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[8].id+'</center><br></b>'+combined[8].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[9].id+'</center><br></b>'+combined[9].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[10].id+'</center><br></b>'+combined[10].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[11].id+'</center><br></b>'+combined[11].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[12].id+'</center><br></b>'+combined[12].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[13].id+'</center><br></b>'+combined[13].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series9"
                            :key="componentKey"
                            class="graficoConsolidado"/>
                           <center><div style="width:500px;margin-left:200px;font-size:20px!important;color:black!important">Gráfico consolidado</div></center>
                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[7].id+'</center><br></b>'+combined[7].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series10"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[8].id+'</center><br></b>'+combined[8].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series11"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[9].id+'</center><br></b>'+combined[9].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series12"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[10].id+'</center><br></b>'+combined[10].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series13"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[11].id+'</center><br></b>'+combined[11].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series14"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[12].id+'</center><br></b>'+combined[12].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series15"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[13].id+'</center><br></b>'+combined[13].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series16"
                            :key="componentKey"
                            class="graficoPadrao"/>


                           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                          <br><div align="center" style="font-size: 40px!important;color:black!;width:900px">{{quest[3].group}}</div>


                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[14].id+'</center><br></b>'+combined[14].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[15].id+'</center><br></b>'+combined[15].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  


                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[16].id+'</center><br></b>'+combined[16].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[17].id+'</center><br></b>'+combined[17].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[18].id+'</center><br></b>'+combined[18].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[19].id+'</center><br></b>'+combined[19].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[20].id+'</center><br></b>'+combined[20].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[21].id+'</center><br></b>'+combined[21].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[22].id+'</center><br></b>'+combined[22].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[23].id+'</center><br></b>'+combined[23].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[24].id+'</center><br></b>'+combined[24].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[25].id+'</center><br></b>'+combined[25].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[26].id+'</center><br></b>'+combined[26].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[27].id+'</center><br></b>'+combined[27].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series17"
                            :key="componentKey"
                            class="graficoConsolidado"/>
                           <center><div style="width:500px;margin-left:200px;font-size:20px!important;color:black!important">Gráfico consolidado</div></center>
                            <br/><br/><br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[14].id+'</center><br></b>'+combined[14].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series18"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[15].id+'</center><br></b>'+combined[15].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series19"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[16].id+'</center><br></b>'+combined[16].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series20"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[17].id+'</center><br></b>'+combined[17].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series21"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[18].id+'</center><br></b>'+combined[18].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series22"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[19].id+'</center><br></b>'+combined[19].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series23"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[20].id+'</center><br></b>'+combined[20].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series24"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[21].id+'</center><br></b>'+combined[21].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series25"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[22].id+'</center><br></b>'+combined[22].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series26"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[23].id+'</center><br></b>'+combined[23].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series27"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[24].id+'</center><br></b>'+combined[24].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series28"
                            :key="componentKey"
                            class="graficoPadrao"/>
                         
                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[25].id+'</center><br></b>'+combined[25].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series29"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/><br/><br/><br/><br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[26].id+'</center><br></b>'+combined[26].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series30"
                            :key="componentKey"
                            class="graficoPadrao"/>

                            <br/>

                            <div
                              style="-webkit-print-color-adjust: exact;margin-left:220px;width:900px;padding-top: -10px;margin: 0px; border-radius:5px!important;color:white;background-color:#00bcd4!important;margin-top:-5px;font-size:18px;text-align: justify-all!important;"
                              >
                              <v-flex slot="header"
                                 style="height: 220px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+combined[27].id+'</center><br></b>'+combined[27].answer"
                                    ></span>
                     
                              </v-flex>
                            </div>  

                            <br/>

                            <apexchart
                            ref="exampleChart"
                            width="1100px" 
                            height="500px" 
                            type="bar" 
                            :options="chartOptions" 
                            :series="series31"
                            :key="componentKey"
                            class="graficoPadrao"
                            @animationEnd="openPrintWindow"/>
         

                        </v-form>
                     </div>
                  </div>
               </div>
            </template>
           
         </v-flex>

<!-- NÃO APARECE NO RELATÓRIO -->
         <v-flex
            sm8
            xs12
            md8
            lg8>
            <template>

               <div class="card text-center m-3" style="display:none;margin-top:240px!important;margin-left:-234px!important">
                  
                  <div class="social font-weight-light theme--dark" style="border: 1px solid #ddd;position:fixed;bottom:0;right:0;z-index:20;padding:5px;color:white!important;background-color: #EBEBEB">
                     <p align="center">
                        <jw-pagination :items="combined" :pageSize=1 @changePage="onChangePage"></jw-pagination>
                        <br>
                     </p>
                  </div>
               </div>
            </template>
         </v-flex>
      </v-layout>
   </v-container>
</template>
<script>
   import {db, auth, usersCollection, fireSQL} from "../firebase";
   import ufid from "../assets/estado.js";

   import jsPDF from 'jspdf' 
   import domtoimage from "dom-to-image";

   
   localStorage.removeItem("munic")
   
   let userAdmin = localStorage.getItem("admin");
   
   if (!userAdmin || auth.currentUser == null){self.location='/login'}
   
   localStorage.setItem("titulo", "regiao");
   
     export default {
       data() {
         return {
           grupo: 0,
           valObj: [],
           results: [],
           pergunta: 0,
           arrayTmp: [],         
           chartOptions: {
            chart: {
              id: 'vuechart-example',
              toolbar:{
               show: false
              },
              events: {
                dataPointMouseLeave(event, chartContext, config) {
                    console.log(chartContext,config)
                }
            }
            },
            grid: {
            show: true
            },
            colors: ['#00CC66', '#FFDC00', '#F55A4E'],
            dataLabels: {
                enabled: true,
                enabledOnSeries: undefined,
                formatter: function (val, opts) {
                    return val
                },
                textAnchor: 'middle',
                distributed: false,
                offsetX: 0,
                offsetY: 0,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: undefined
                },
                background: {
                  enabled: true,
                  foreColor: '#fff',
                  padding: 6,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: '#fff',
                  opacity: 0.9,
                  dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                  }
                },
                dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                }
            },
            plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '85%',
                  endingShape: 'rounded'
                }
            },
            tooltip: {
                enabled: false,
                followCursor: true,
                x: {
                    format: 'dd MMM',
                    formatter: undefined,
                },

                yaxis: {
                    labels: {
                        formatter: (value) => { return val + "%" },
                    },
                },

            },
            xaxis: {
            show: false,
            //  categories: ['Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul']
            categories: []
            },
            //labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
            labels: [],
            legend: {
              show: true,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              position: 'bottom',
              horizontalAlign: 'center', 
              floating: false,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial',
              fontWeight: 400,
              formatter: undefined,
              inverseOrder: false,
              width: undefined,
              height: undefined,
              tooltipHoverFormatter: undefined,
              offsetX: 0,
              offsetY: 0,
              labels: {
                  colors: undefined,
                  useSeriesColors: false
              },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#000',
                fillColors: undefined,
                radius: 12,
                customHTML: function() {
                  return '<br/>'
                },
                //onClick: undefined,
                offsetX: 0,
                offsetY: 0
            }
            }
          },
          /*CONSOLIDADO*/
          series0: [{
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }],
          series1: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A água está disponível nas instalações da escola para todas as necessidades, em quantidade suficiente mas não durante todo o ano letivo.',
              data: []
            }, {
              name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade suficiente, seja por que não está disponível durante o ano letivo.',
              data: []
            }],
            series2: [{
              name: 'Sim',
              data: []
            }, {
              name: 'O armazenamento de água é insuficiente para satisfazer as necessidades da escola.',
              data: []
            }, {
              name: 'Não há armazenamento de água.',
              data: []
            }],
            series3: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Água tratada, mas abaixo do teor mínimo (de 0 a 0,2 mg/l) no momento do estudo.',
              data: []
            }, {
              name: 'Nenhum tratamento foi relatado.',
              data: []
            }],
            /*CONSOLIDADO*/
            series4: [{
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }],
            series5: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Há pias ou locais para a lavagem de mãos com água na entrada, mas sem sabão.',
              data: []
            }, {
              name: 'A escola não dispõe de pias ou de locais  para a lavagem de mãos em funcionamento nas suas entradas.',
              data: []
            }],
            series6: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Há pias ou locais para a lavagem das mãos, com água, próximas das salas de aula, mas sem sabão.',
              data: []
            }, {
              name: 'As pias ou locais de lavagem das mãos não estão próximos das salas de aula.',
              data: []
            }],
            series7: [{
              name: 'Sim',
              data: []
            }, {
              name: 'As atividades de lavagem de mãos são organizadas, mas não três vezes por dia e nem todos os dias da semana.',
              data: []
            }, {
              name: 'Não há atividades de lavagem de mãos.',
              data: []
            }],
            series8: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Pelo menos um ou dois, mas não todos; recursos para a higiene menstrual estão disponíveis na escola.',
              data: []
            }, {
              name: 'Nenhum dos recursos para a higiene menstrual está disponível na escola.',
              data: []
            }],
            /*CONSOLIDADO*/
            series9: [{
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }],
            series10: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
              data: []
            }, {
              name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
              data: []
            }],
            series11: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Alguns banheiros estão claramente separados, mas não todos.',
              data: []
            }, {
              name: 'Não há banheiros separados.',
              data: []
            }],
            series12: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
              data: []
            }, {
              name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
              data: []
            }],
            series13: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Os sanitários são limpos, mas não todos os dias ou com água e detergente; e não desinfectados com água sanitária.',
              data: []
            }, {
              name: 'Os banheiros ou sanitários não são limpos regularmente.',
              data: []
            }],
            series14: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Pias ou locais para lavagem de mãos com água, mas sem sabão ou a mais de 5 metros dos banheiros ou sanitários.',
              data: []
            }, {
              name: 'Pias ou locais para lavagem de mãos sem água e sabão ou pias ou locais inexistentes.',
              data: []
            }],
            series15: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Há lixeiras na escola, mas não em cada sala de aula, cada banheiro ou sanitário, ou outros locais importantes ou o lixo não é recolhido todos os dias.',
              data: []
            }, {
              name: 'Sem lixeiras nas salas de aula e em outros locais.',
              data: []
            }],
            series16: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Os resíduos sólidos são retirados de forma segura e levados para aterros sanitários, adequadamente.',
              data: []
            }, {
              name: 'Os resíduos sólidos são retirados da escola, mas de forma inadequada.',
              data: []
            }],
            /*CONSOLIDADO*/
            series17: [{
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }, {
              name: '',
              data: []
            }],
            series18: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Há informações sobre a COVID-19 e outras doenças infecciosas disponíveis, mas não em todas as salas de aula.',
              data: []
            }, {
              name: 'Não há informação disponível sobre a COVID-19 e outras doenças infecciosas.',
              data: []
            }],
            series19: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Apenas uma pessoa é capacitada em protocolos de saúde escolar para o COVID-19 e nem sempre está presente na escola.',
              data: []
            }, {
              name: 'Não há pessoas formadas nos protocolos de saneamento.',
              data: []
            }],
            series20: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Há um planejamento claro e detalhando de limpeza, mas não cumprido ou monitorado.',
              data: []
            }, {
              name: 'Não há um planejamento de limpeza.',
              data: []
            }],
            series21: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Sim, estão disponíveis, mas não bem conservados ou não há disponibilidade de material ou equipamento.',
              data: []
            }, {
              name: 'Nenhum equipamento ou material de limpeza disponível.',
              data: []
            }],
            series22: [{
              name: 'Sim',
              data: []
            }, {
              name: 'O distanciamento físico é exercido de forma irregular, quer devido ao espaço limitado em algumas aulas, quer porque não é praticado em todos os momentos.',
              data: []
            }, {
              name: 'Não há espaço suficiente na sala de aula para a distância física ou professores e alunos não a praticam de todo.',
              data: []
            }],
            series23: [{
              name: 'Sim',
              data: []
            }, {
              name: 'O distanciamento físico é implementado e respeitado de forma irregular.',
              data: []
            }, {
              name: 'O distanciamento físico durante a lavagem das mãos não é totalmente implementado ou respeitado.',
              data: []
            }],
            series24: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A distância física entre os assentos dos estudantes no refeitório só é implementado às vezes ou desrespeitado.',
              data: []
            }, {
              name: 'A distância física entre os assentos dos estudantes no refeitório não é implementado ou respeitado.',
              data: []
            }],
            series25: [{
              name: 'Sim',
              data: []
            }, {
              name: 'O pessoal da cozinha não usa máscaras regularmente e não tem água para lavar as mãos, ou produtos desinfectantes para as mãos, com regularidade.',
              data: []
            }, {
              name: 'O pessoal da cozinha não usa máscaras e não tem água para lavar as mãos ou produtos desinfectantes para as mãos.',
              data: []
            }],
            series26: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Não',
              data: []
            }, {
              name: '',
              data: []
            }],
            series27: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Existe um protocolo mas, não é conhecido pelos professores ou pelos estudantes.',
              data: []
            }, {
              name: 'Não há protocolo',
              data: []
            }],
            series28: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Os alunos com sintomas são isolados em espaço aberto enquanto esperam que seus responsáveis os busquem.',
              data: []
            }, {
              name: 'Não há espaço designado para estudantes com sintomas de COVID-19.',
              data: []
            }],
            series29: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A escola não tem uma reserva suficiente de máscaras para os alunos detectados com sintomas de COVID-19.',
              data: []
            }, {
              name: 'A escola não possui uma reserva de máscaras para estudantes detectados com sintomas de COVID-19.',
              data: []
            }],
            series30: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Alguns estudantes não têm acesso a máscaras.',
              data: []
            }, {
              name: 'Nenhum estudante tem acesso a máscaras.',
              data: []
            }],
            series31: [{
              name: 'Sim',
              data: []
            }, {
              name: 'Existe uma lista de controle, mas não é utilizada regularmente.',
              data: []
            }, {
              name: 'Não há lista de controle.',
              data: []
            }],
           grupo: 0,
           pergunta: 0,
           index_pergunta: 0,
           combined: [],
           pageOfItems: [],
           componentKey: 0,
           select: { report: 'Rep1', src: '' },
           items: [
             { report: 'Territórios', src: '/resultsterritorio' },
             { report: 'Estado', src: '/resultsescola' }
           ],
           text: 'Consultando dados, aguarde',
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
         }
       },
   
   
       methods: {
          openPrintWindow() {
            window.print();
            history.back();
          },

      /*  downloadWithCSS() {
            domtoimage
            .toPng(this.$refs.content)
            .then(function(dataUrl) {

              var imgData = new Image();
              imgData.src = dataUrl;
              var doc = new jsPDF('p', 'mm');

              const imgProps= doc.getImageProperties(imgData);

              var imgWidth = 210; 
              var pageHeight = 295;  
              var imgHeight = imgProps.height * imgWidth / imgProps.width;
              var heightLeft = imgHeight;
              var position = 10; // give some top padding to first page

              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;

              while (heightLeft >= 0) {
                position += heightLeft - imgHeight; // top padding for other pages
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
              }
              const date = new Date();
              const filename =
                "relatorioRegiao_" +
                date.getFullYear() +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                ("0" + date.getDate()).slice(-2) +
                ("0" + date.getHours()).slice(-2) +
                ("0" + date.getMinutes()).slice(-2) +
                ("0" + date.getSeconds()).slice(-2) +
                ".pdf";
              doc.save(filename);  
            //  window.location.href = "/chartsestadov2";
            })
            .catch(function(error) {
              console.error("oops, something went wrong!", error);
            });
        }, */
        downloadWithCSS() {
          /** WITH CSS */
            domtoimage
            .toPng(this.$refs.content)
            .then(function(dataUrl) {
              var img = new Image();
              img.src = dataUrl;
              const doc = new jsPDF({
                orientation: "portrait",
                // unit: "pt",
                format: [600,900]
              });

              
              const imgProps= doc.getImageProperties(img);
              const pdfWidth = doc.internal.pageSize.getWidth();
              const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              doc.addImage(img, "JPEG", 0, 0, pdfWidth, pdfHeight);
              const date = new Date();
              const filename =
                "relatorioRegiao_" +
                date.getFullYear() +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                ("0" + date.getDate()).slice(-2) +
                ("0" + date.getHours()).slice(-2) +
                ("0" + date.getMinutes()).slice(-2) +
                ("0" + date.getSeconds()).slice(-2) +
                ".pdf";
              doc.save(filename);
            //  window.location.href = "/chartsestadov2";
            })
            .catch(function(error) {
              console.error("oops, something went wrong!", error);
            });
        },
        atualizarGrafico(pergunta,resposta1,resposta2,resposta3,flag_first) {

               this.series0[0].name = resposta1;
               this.series0[1].name = resposta2;
               this.series0[2].name = resposta3;

               let geoParaConsulta = [
              {filtroGeo: 'school.territory', ibge: 'TAM', sg_uf: 'TAM'},
              {filtroGeo: 'school.territory', ibge: 'PCU', sg_uf: 'PCU'},
              {filtroGeo: 'school.territory', ibge: 'SAB', sg_uf: 'SAB'},
              {filtroGeo: 'school.territory', ibge: 'Outros', sg_uf: 'OUTROS'}
              ];


                /*MONTAR UM FOREACH PARA MONTAR TUDO DINAMICAMENTE DE ACORDO COM O TAMANHO DO ARRAY DE CADA GRUPO*/

                let arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,1,'0'))+parseInt(this.consultaQtd(geo.ibge,2,'0'))+parseInt(this.consultaQtd(geo.ibge,3,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,1,'1'))+parseInt(this.consultaQtd(geo.ibge,2,'1'))+parseInt(this.consultaQtd(geo.ibge,3,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,1,'2'))+parseInt(this.consultaQtd(geo.ibge,2,'2'))+parseInt(this.consultaQtd(geo.ibge,3,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                  let i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series0[0].data[i] = array.qntResp_0;
                      this.series0[1].data[i] = array.qntResp_1;
                      this.series0[2].data[i] = array.qntResp_2;
                     if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }


                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = this.consultaQtd(geo.ibge,1,'0');
                    let qntResp_1 = this.consultaQtd(geo.ibge,1,'1');
                    let qntResp_2 = this.consultaQtd(geo.ibge,1,'2');
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series1[0].data[i] = array.qntResp_0;
                      this.series1[1].data[i] = array.qntResp_1;
                      this.series1[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = this.consultaQtd(geo.ibge,2,'0');
                    let qntResp_1 = this.consultaQtd(geo.ibge,2,'1');
                    let qntResp_2 = this.consultaQtd(geo.ibge,2,'2');
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series2[0].data[i] = array.qntResp_0;
                      this.series2[1].data[i] = array.qntResp_1;
                      this.series2[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = this.consultaQtd(geo.ibge,3,'0');
                    let qntResp_1 = this.consultaQtd(geo.ibge,3,'1');
                    let qntResp_2 = this.consultaQtd(geo.ibge,3,'2');
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series3[0].data[i] = array.qntResp_0;
                      this.series3[1].data[i] = array.qntResp_1;
                      this.series3[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,4,'0'))+parseInt(this.consultaQtd(geo.ibge,5,'0'))+parseInt(this.consultaQtd(geo.ibge,6,'0'))+parseInt(this.consultaQtd(geo.ibge,7,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,4,'1'))+parseInt(this.consultaQtd(geo.ibge,5,'1'))+parseInt(this.consultaQtd(geo.ibge,6,'1'))+parseInt(this.consultaQtd(geo.ibge,7,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,4,'2'))+parseInt(this.consultaQtd(geo.ibge,5,'2'))+parseInt(this.consultaQtd(geo.ibge,6,'2'))+parseInt(this.consultaQtd(geo.ibge,7,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series4[0].data[i] = array.qntResp_0;
                      this.series4[1].data[i] = array.qntResp_1;
                      this.series4[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                 arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,4,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,4,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,4,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series5[0].data[i] = array.qntResp_0;
                      this.series5[1].data[i] = array.qntResp_1;
                      this.series5[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,5,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,5,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,5,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series6[0].data[i] = array.qntResp_0;
                      this.series6[1].data[i] = array.qntResp_1;
                      this.series6[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,6,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,6,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,6,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series7[0].data[i] = array.qntResp_0;
                      this.series7[1].data[i] = array.qntResp_1;
                      this.series7[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,7,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,7,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,7,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series8[0].data[i] = array.qntResp_0;
                      this.series8[1].data[i] = array.qntResp_1;
                      this.series8[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,8,'0'))+parseInt(this.consultaQtd(geo.ibge,9,'0'))+parseInt(this.consultaQtd(geo.ibge,10,'0'))+parseInt(this.consultaQtd(geo.ibge,11,'0'))+parseInt(this.consultaQtd(geo.ibge,12,'0'))+parseInt(this.consultaQtd(geo.ibge,13,'0'))+parseInt(this.consultaQtd(geo.ibge,14,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,8,'1'))+parseInt(this.consultaQtd(geo.ibge,9,'1'))+parseInt(this.consultaQtd(geo.ibge,10,'1'))+parseInt(this.consultaQtd(geo.ibge,11,'1'))+parseInt(this.consultaQtd(geo.ibge,12,'1'))+parseInt(this.consultaQtd(geo.ibge,13,'1'))+parseInt(this.consultaQtd(geo.ibge,14,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,8,'2'))+parseInt(this.consultaQtd(geo.ibge,9,'2'))+parseInt(this.consultaQtd(geo.ibge,10,'2'))+parseInt(this.consultaQtd(geo.ibge,11,'2'))+parseInt(this.consultaQtd(geo.ibge,12,'2'))+parseInt(this.consultaQtd(geo.ibge,13,'2'))+parseInt(this.consultaQtd(geo.ibge,14,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series9[0].data[i] = array.qntResp_0;
                      this.series9[1].data[i] = array.qntResp_1;
                      this.series9[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,8,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,8,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,8,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series10[0].data[i] = array.qntResp_0;
                      this.series10[1].data[i] = array.qntResp_1;
                      this.series10[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,9,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,9,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,9,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series11[0].data[i] = array.qntResp_0;
                      this.series11[1].data[i] = array.qntResp_1;
                      this.series11[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,10,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,10,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,10,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series12[0].data[i] = array.qntResp_0;
                      this.series12[1].data[i] = array.qntResp_1;
                      this.series12[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,11,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,11,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,11,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series13[0].data[i] = array.qntResp_0;
                      this.series13[1].data[i] = array.qntResp_1;
                      this.series13[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,12,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,12,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,12,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series14[0].data[i] = array.qntResp_0;
                      this.series14[1].data[i] = array.qntResp_1;
                      this.series14[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,13,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,13,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,13,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series15[0].data[i] = array.qntResp_0;
                      this.series15[1].data[i] = array.qntResp_1;
                      this.series15[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,14,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,14,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,14,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series16[0].data[i] = array.qntResp_0;
                      this.series16[1].data[i] = array.qntResp_1;
                      this.series16[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,15,'0'))+parseInt(this.consultaQtd(geo.ibge,16,'0'))+parseInt(this.consultaQtd(geo.ibge,17,'0'))+parseInt(this.consultaQtd(geo.ibge,18,'0'))+parseInt(this.consultaQtd(geo.ibge,19,'0'))+parseInt(this.consultaQtd(geo.ibge,20,'0'))+parseInt(this.consultaQtd(geo.ibge,21,'0'))+parseInt(this.consultaQtd(geo.ibge,22,'0'))+parseInt(this.consultaQtd(geo.ibge,23,'0'))+parseInt(this.consultaQtd(geo.ibge,24,'0'))+parseInt(this.consultaQtd(geo.ibge,25,'0'))+parseInt(this.consultaQtd(geo.ibge,26,'0'))+parseInt(this.consultaQtd(geo.ibge,27,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,15,'1'))+parseInt(this.consultaQtd(geo.ibge,16,'1'))+parseInt(this.consultaQtd(geo.ibge,17,'1'))+parseInt(this.consultaQtd(geo.ibge,18,'1'))+parseInt(this.consultaQtd(geo.ibge,19,'1'))+parseInt(this.consultaQtd(geo.ibge,20,'1'))+parseInt(this.consultaQtd(geo.ibge,21,'1'))+parseInt(this.consultaQtd(geo.ibge,22,'1'))+parseInt(this.consultaQtd(geo.ibge,23,'1'))+parseInt(this.consultaQtd(geo.ibge,24,'1'))+parseInt(this.consultaQtd(geo.ibge,25,'1'))+parseInt(this.consultaQtd(geo.ibge,26,'1'))+parseInt(this.consultaQtd(geo.ibge,27,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,15,'2'))+parseInt(this.consultaQtd(geo.ibge,16,'2'))+parseInt(this.consultaQtd(geo.ibge,17,'2'))+parseInt(this.consultaQtd(geo.ibge,18,'2'))+parseInt(this.consultaQtd(geo.ibge,19,'2'))+parseInt(this.consultaQtd(geo.ibge,20,'2'))+parseInt(this.consultaQtd(geo.ibge,21,'2'))+parseInt(this.consultaQtd(geo.ibge,22,'2'))+parseInt(this.consultaQtd(geo.ibge,23,'2'))+parseInt(this.consultaQtd(geo.ibge,24,'2'))+parseInt(this.consultaQtd(geo.ibge,25,'2'))+parseInt(this.consultaQtd(geo.ibge,26,'2'))+parseInt(this.consultaQtd(geo.ibge,27,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series17[0].data[i] = array.qntResp_0;
                      this.series17[1].data[i] = array.qntResp_1;
                      this.series17[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,15,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,15,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,15,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series18[0].data[i] = array.qntResp_0;
                      this.series18[1].data[i] = array.qntResp_1;
                      this.series18[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,16,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,16,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,16,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series19[0].data[i] = array.qntResp_0;
                      this.series19[1].data[i] = array.qntResp_1;
                      this.series19[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,17,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,17,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,17,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series20[0].data[i] = array.qntResp_0;
                      this.series20[1].data[i] = array.qntResp_1;
                      this.series20[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,18,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,18,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,18,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series21[0].data[i] = array.qntResp_0;
                      this.series21[1].data[i] = array.qntResp_1;
                      this.series21[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,19,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,19,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,19,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series22[0].data[i] = array.qntResp_0;
                      this.series22[1].data[i] = array.qntResp_1;
                      this.series22[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,20,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,20,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,20,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series23[0].data[i] = array.qntResp_0;
                      this.series23[1].data[i] = array.qntResp_1;
                      this.series23[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,21,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,21,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,21,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series24[0].data[i] = array.qntResp_0;
                      this.series24[1].data[i] = array.qntResp_1;
                      this.series24[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,22,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,22,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,22,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series25[0].data[i] = array.qntResp_0;
                      this.series25[1].data[i] = array.qntResp_1;
                      this.series25[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,23,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,23,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,23,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series26[0].data[i] = array.qntResp_0;
                      this.series26[1].data[i] = array.qntResp_1;
                      this.series26[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,24,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,24,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,24,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series27[0].data[i] = array.qntResp_0;
                      this.series27[1].data[i] = array.qntResp_1;
                      this.series27[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,25,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,25,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,25,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series28[0].data[i] = array.qntResp_0;
                      this.series28[1].data[i] = array.qntResp_1;
                      this.series28[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,26,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,26,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,26,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series29[0].data[i] = array.qntResp_0;
                      this.series29[1].data[i] = array.qntResp_1;
                      this.series29[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,27,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,27,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,27,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series30[0].data[i] = array.qntResp_0;
                      this.series30[1].data[i] = array.qntResp_1;
                      this.series30[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

                arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,'1','0') != undefined) {
                    
                    let qntResp_0 = parseInt(this.consultaQtd(geo.ibge,28,'0'));
                    let qntResp_1 = parseInt(this.consultaQtd(geo.ibge,28,'1'));
                    let qntResp_2 = parseInt(this.consultaQtd(geo.ibge,28,'2'));
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                 i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series31[0].data[i] = array.qntResp_0;
                      this.series31[1].data[i] = array.qntResp_1;
                      this.series31[2].data[i] = array.qntResp_2;
                    // if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

               //this.chartOptions.xaxis.categories = [this.results];



          /*     this.series[0].data[0] = this.consultaQtd('11',pergunta,'0');
               this.series[1].data[0] = this.consultaQtd('11',pergunta,'1');
               this.series[2].data[0] = this.consultaQtd('11',pergunta,'2');

             //  this.chartOptions.xaxis.categories = ['RO'];
               console.log('aqui leo veio'+this.series[0].data[0]);

               this.series[0].data[1] = this.consultaQtd('12',pergunta,'0');
               this.series[1].data[1] = this.consultaQtd('12',pergunta,'1');
               this.series[2].data[1] = this.consultaQtd('12',pergunta,'2');

               this.series[0].data[2] = this.consultaQtd('13',pergunta,'0');
               this.series[1].data[2] = this.consultaQtd('13',pergunta,'1');
               this.series[2].data[2] = this.consultaQtd('13',pergunta,'2');

               this.series[0].data[3] = this.consultaQtd('14',pergunta,'0');
               this.series[1].data[3] = this.consultaQtd('14',pergunta,'1');
               this.series[2].data[3] = this.consultaQtd('14',pergunta,'2'); 

               this.series[0].data[4] = this.consultaQtd('15',pergunta,'0');
               this.series[1].data[4] = this.consultaQtd('15',pergunta,'1');
               this.series[2].data[4] = this.consultaQtd('15',pergunta,'2');

               this.series[0].data[5] = this.consultaQtd('16',pergunta,'0');
               this.series[1].data[5] = this.consultaQtd('16',pergunta,'1');
               this.series[2].data[5] = this.consultaQtd('16',pergunta,'2');
            
               this.series[0].data[6] = this.consultaQtd('17',pergunta,'0');
               this.series[1].data[6] = this.consultaQtd('17',pergunta,'1');
               this.series[2].data[6] = this.consultaQtd('17',pergunta,'2');
               
               this.series[0].data[7] = this.consultaQtd('21',pergunta,'0');
               this.series[1].data[7] = this.consultaQtd('21',pergunta,'1');
               this.series[2].data[7] = this.consultaQtd('21',pergunta,'2');
               
               this.series[0].data[8] = this.consultaQtd('22',pergunta,'0');
               this.series[1].data[8] = this.consultaQtd('22',pergunta,'1');
               this.series[2].data[8] = this.consultaQtd('22',pergunta,'2');               
            
               this.series[0].data[9] = this.consultaQtd('23',pergunta,'0');
               this.series[1].data[9] = this.consultaQtd('23',pergunta,'1');
               this.series[2].data[9] = this.consultaQtd('23',pergunta,'2');
               
               this.series[0].data[10] = this.consultaQtd('24',pergunta,'0');
               this.series[1].data[10] = this.consultaQtd('24',pergunta,'1');
               this.series[2].data[10] = this.consultaQtd('24',pergunta,'2');

               this.series[0].data[11] = this.consultaQtd('25',pergunta,'0');
               this.series[1].data[11] = this.consultaQtd('25',pergunta,'1');
               this.series[2].data[11] = this.consultaQtd('25',pergunta,'2');

               this.series[0].data[12] = this.consultaQtd('26',pergunta,'0');
               this.series[1].data[12] = this.consultaQtd('26',pergunta,'1');
               this.series[2].data[12] = this.consultaQtd('26',pergunta,'2');
               
               this.series[0].data[13] = this.consultaQtd('27',pergunta,'0');
               this.series[1].data[13] = this.consultaQtd('27',pergunta,'1');
               this.series[2].data[13] = this.consultaQtd('27',pergunta,'2');
               
               this.series[0].data[14] = this.consultaQtd('28',pergunta,'0');
               this.series[1].data[14] = this.consultaQtd('28',pergunta,'1');
               this.series[2].data[14] = this.consultaQtd('28',pergunta,'2');
               
               this.series[0].data[15] = this.consultaQtd('29',pergunta,'0');
               this.series[1].data[15] = this.consultaQtd('29',pergunta,'1');
               this.series[2].data[15] = this.consultaQtd('29',pergunta,'2');               

               this.series[0].data[16] = this.consultaQtd('31',pergunta,'0');
               this.series[1].data[16] = this.consultaQtd('31',pergunta,'1');
               this.series[2].data[16] = this.consultaQtd('31',pergunta,'2');
               
               this.series[0].data[17] = this.consultaQtd('32',pergunta,'0');
               this.series[1].data[17] = this.consultaQtd('32',pergunta,'1');
               this.series[2].data[17] = this.consultaQtd('32',pergunta,'2');    
               
               this.series[0].data[18] = this.consultaQtd('33',pergunta,'0');
               this.series[1].data[18] = this.consultaQtd('33',pergunta,'1');
               this.series[2].data[18] = this.consultaQtd('33',pergunta,'2');    
               
               this.series[0].data[19] = this.consultaQtd('35',pergunta,'0');
               this.series[1].data[19] = this.consultaQtd('35',pergunta,'1');
               this.series[2].data[19] = this.consultaQtd('35',pergunta,'2');    
               
               this.series[0].data[20] = this.consultaQtd('41',pergunta,'0');
               this.series[1].data[20] = this.consultaQtd('41',pergunta,'1');
               this.series[2].data[20] = this.consultaQtd('41',pergunta,'2');    
               
               this.series[0].data[21] = this.consultaQtd('42',pergunta,'0');
               this.series[1].data[21] = this.consultaQtd('42',pergunta,'1');
               this.series[2].data[21] = this.consultaQtd('42',pergunta,'2');    
               
               this.series[0].data[22] = this.consultaQtd('43',pergunta,'0');
               this.series[1].data[22] = this.consultaQtd('43',pergunta,'1');
               this.series[2].data[22] = this.consultaQtd('43',pergunta,'2');    
               
               this.series[0].data[23] = this.consultaQtd('50',pergunta,'0');
               this.series[1].data[23] = this.consultaQtd('50',pergunta,'1');
               this.series[2].data[23] = this.consultaQtd('50',pergunta,'2');    
               
               this.series[0].data[24] = this.consultaQtd('51',pergunta,'0');
               this.series[1].data[24] = this.consultaQtd('51',pergunta,'1');
               this.series[2].data[24] = this.consultaQtd('51',pergunta,'2');    
               
               this.series[0].data[25] = this.consultaQtd('52',pergunta,'0');
               this.series[1].data[25] = this.consultaQtd('52',pergunta,'1');
               this.series[2].data[25] = this.consultaQtd('52',pergunta,'2');
               
               this.series[0].data[26] = this.consultaQtd('53',pergunta,'0');
               this.series[1].data[26] = this.consultaQtd('53',pergunta,'1');
               this.series[2].data[26] = this.consultaQtd('53',pergunta,'2'); */
             

       /*
            this.series = [{
              data: [this.consultaQtd('11',pergunta,'0'), 55, 41, 64, 22, 43, 21]
            }, {
              data: [this.consultaQtd('11',pergunta,'1'), 32, 33, 52, 13, 44, 32]
            }, {
              data: [this.consultaQtd('11',pergunta,'2'), 32, 33, 52, 13, 44, 32]
            }]; */
            
        },
        random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
         consultaQtd(ibge,idpergunta,resp) {
           let valObj = [];
           switch (resp) {
             case '0':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_0; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_0);
             }
             break;
             case '1':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_1; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_1);
             }
             break;
             case '2':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_2; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_2);
             }
             break;
             case 'total':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.total; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].total);
             }
            break;
           }
            
         },
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
               
              // this.chartOptions.xaxis.categories = [];

             //  this.chartOptions.xaxis.categories=[this.results[0].sg_uf];
               console.log(pageOfItems);
               this.pageOfItems = pageOfItems;
               this.atualizarGrafico(pageOfItems[0].id,pageOfItems[0].response[0].name,pageOfItems[0].response[1].name,pageOfItems[0].response[2].name,0);
  
           },
           setas(value){
             if (value == 'prev'){
               $(".previous a")[0].click();
               var number = $("#pergunta").val()-1
               $("#tituloPergunta").text("Pergunta: "+number)
             }else{
               $(".next a")[0].click();
               var number = parseInt($("#pergunta").val()*1)+1
               $("#tituloPergunta").text("Pergunta: "+number)            
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
         async getData() {

   /* INICIO DO PRÉ-CARREGAMENTO DE TODAS AS INFORMAÇÕES */
           let geoParaConsulta = [
            {filtroGeo: 'school.territory', ibge: 'TAM', sg_uf: 'TAM'},
            {filtroGeo: 'school.territory', ibge: 'PCU', sg_uf: 'PCU'},
            {filtroGeo: 'school.territory', ibge: 'SAB', sg_uf: 'SAB'},
            {filtroGeo: 'school.territory', ibge: 'Outros', sg_uf: 'OUTROS'}
            ];

           let results = [];
            for (let geo of geoParaConsulta) {

            var washData = await db.collection("users").where(geo.filtroGeo, '==', geo.ibge).get().then(function (querySnapshot) {

             let values = querySnapshot.docs;
             let arrayData = [];
             let consolidadoTotal = 0;
             let consolidado0 = 0;
             let consolidado1 = 0;
             let consolidado2 = 0;
             let modelo = undefined;
             let idPergunta = '';
             let quest_complete = 'S';

             for (let i = 0; i < values.length; i++) {
               let obj = {}
               let data = values[i].data();
               obj = data;
               arrayData.push(obj);
             }

             for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  modelo = i;
                }
             }

             if (modelo != undefined) {

             for (let j = 0; j < arrayData[modelo].quest.length; j++) {
                  if (arrayData[modelo].quest[j].questions != undefined) { 
                    for (let k = 0; k < arrayData[modelo].quest[j].questions.length; k++) {

                      for (let i = 0; i < arrayData.length; i++) {
                        if (arrayData[i].quest != undefined&&arrayData[i].school.quest_complete == 'S') {
                          ((arrayData[i].quest[j].questions[k].selected == '0')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado0++ : '';
                          ((arrayData[i].quest[j].questions[k].selected == '1')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado1++ : '';
                          ((arrayData[i].quest[j].questions[k].selected == '2')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado2++ : '';
                          ((arrayData[i].quest[j].questions[k].selected != null)) ? consolidadoTotal++ : '';
                          ((arrayData[i].quest[j].questions[k].id != null)) ? idPergunta = arrayData[i].quest[j].questions[k].id : '';
                        }
                    }
                   
                    results.push({ibge: geo.ibge, sg_uf: geo.sg_uf, grupo: j.toString(), pergunta: k.toString(), id_pergunta: idPergunta, 
                    total: consolidadoTotal.toString(), qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});
                    consolidado0 = 0;
                    consolidado1 = 0;
                    consolidado2 = 0;
                    consolidadoTotal = 0;
                    idPergunta = '';
                    quest_complete = 'S';
                    }
                  }
              }

             }
             

              console.log(results);


       /*      for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  ((arrayData[i].quest[0].questions[0].selected == '0')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado0++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '1')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado1++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '2')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado2++ : '';
                  ((arrayData[i].quest[0].questions[0].selected != null)) ? consolidadoTotal++ : '';
                }
             }

             results.push({tipo: 'estado', info: '53', grupo: '0', pergunta: '0', total: consolidadoTotal.toString(), 
             qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});

        */     

      /*       for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  ((arrayData[i].quest[0].questions[0].selected == '0')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado0++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '1')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado1++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '2')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado2++ : '';
                  ((arrayData[i].quest[0].questions[0].selected != null)) ? consolidadoTotal++ : '';
                }
             }
        
             results.push({tipo: 'estado', info: '53', grupo: '0', pergunta: '0', total: consolidadoTotal.toString(), 
             qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});

        */     

         /*    for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) { for (let j = 0; j < arrayData[i].quest.length; j++) {
                    if (arrayData[i].quest[j].questions != undefined) { for (let k = 0; k < arrayData[i].quest[j].questions.length; k++) {
                        ((arrayData[i].quest[j].questions[k].selected == '0')&&(arrayData[i].quest[j].questions[k].selected != null)) ? contador++ : '';
                      }
                    }
                  }
                }
             } */

            //  testeArray.push({uf: "sp", resposta: arrayData[0].quest[0].questions[0].selected});
            //  console.log('olha aqui royce:'+JSON.stringify(testeArray))
             return results;
           });

           this.series0 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series1 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series2 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series3 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series4 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series5 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series6 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series7 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series8 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series9 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series10 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series11 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series12 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series13 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series14 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series15 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series16 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series17 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series18 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series19 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series20 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series21 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series22 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series23 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series24 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series25 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series26 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series27 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series28 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series29 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series30 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.series31 = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.results = washData;

            //this.atualizarGrafico(1,this.pageOfItems[0].response[0].name,this.pageOfItems[0].response[1].name,this.pageOfItems[0].response[2].name);

            }
            /*FIM DO PRÉ-CARREGAMENTO DE INFORMAÇÕES*/
            this.atualizarGrafico(1,this.pageOfItems[0].response[0].name,this.pageOfItems[0].response[1].name,this.pageOfItems[0].response[2].name,1);

           this.questions = washData;
   
           let responses = this.users.length;
   
           this.responses = responses.toString();
   
           this.loading = false;
   
         },
   
       },
       created() {
         this.combined=[...(this.quest[0].questions), ...(this.quest[1].questions), ...(this.quest[2].questions), ...(this.quest[3].questions)];
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
   
    function setTopo(){
      $(window).scrollTop(0);
    }
    $(window).bind('scroll', setTopo); 
   
   
   
</script>
<style>
   
   .graficoPadrao {
      margin-left:-100px!important;
    }

    .graficoConsolidado {
      margin-left:-100px!important;
    }

    .graficoConsolidado .apexcharts-legend {
      display: none!important;
    }

   @media print {
    #divOverlay {
     display: none!important; 
    }
    @page { margin: 0; }
    body { margin: 1.6cm; }
  }
   @keyframes circleanimation {
   from {
   transform: rotateZ(0deg);
   }
   to {
   transform: rotateZ(360deg);
   }
   }

@media print {
  @page { margin: 0; }
  body { margin: 1.6cm; }
  .apexcharts-legend-marker:before {
    content: "\25CF";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    line-height: 12px;
    font-size: 24px;
  }

}



</style>