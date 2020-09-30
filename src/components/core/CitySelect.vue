<template>
  <v-container class="pa-2">
    <v-layout>
      <v-flex xs12 md6 v-if="estados">
        <v-select
          v-model="estado"
          :items="estados"
          label="Estado"
          :rules="[rules.required]"
        ></v-select>
      </v-flex>
      <v-flex xs12 md6>
        <v-combobox
          v-model="cidade"
          :items="cidades"
          label="Município"
          :rules="[rules.required]"
          @change="emitToParent({uf: estado, city: cidade})"
        ></v-combobox>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>

</style>

<script>

  import brasil from "../../assets/brasil.json";

  export default {
    name: "Estados",
    data() {
      return {
        cidades: [],
        estado: '',
        cidade: '',
        brasil,
        rules: {
          required: value => !!value || 'Obrigatório.',
        },
        estados: [
          {value: '', text: "Estado"},
          {value: "AC", text: "Acre"},
          {value: "AL", text: "Alagoas"},
          {value: "AP", text: "Amapá"},
          {value: "AM", text: "Amazonas"},
          {value: "BA", text: "Bahia"},
          {value: "CE", text: "Ceará"},
          {value: "DF", text: "Distrito Federal"},
          {value: "ES", text: "Espírito Santo"},
          {value: "GO", text: "Goiás"},
          {value: "MA", text: "Maranhão"},
          {value: "MT", text: "Mato Grosso"},
          {value: "MS", text: "Mato Grosso do Sul"},
          {value: "MG", text: "Minas Gerais"},
          {value: "PA", text: "Pará"},
          {value: "PB", text: "Paraíba"},
          {value: "PR", text: "Paraná"},
          {value: "PE", text: "Pernambuco"},
          {value: "PI", text: "Piauí"},
          {value: "RJ", text: "Rio de Janeiro"},
          {value: "RN", text: "Rio Grande do Norte"},
          {value: "RS", text: "Rio Grande do Sul"},
          {value: "RO", text: "Rondônia"},
          {value: "RR", text: "Roraima"},
          {value: "SC", text: "Santa Catarina"},
          {value: "SP", text: "São Paulo"},
          {value: "SE", text: "Sergipe"},
          {value: "TO", text: "Tocantins"}
        ]
      };
    },
    watch: {
      'estado': function () {
        this.cidades = brasil[this.estado].cidades
      }
    },
    methods: {
      // getCitys: function (event) {
      //   this.cidades = brasil[this.estado].cidades
      //
      // },
      emitToParent (event) {
        this.$emit('childToParent', event)
      }
    }
  };
</script>
