<template>
  <div class="estadisticas">
    <b-card class="mb-2">
      <b-card  border-variant="success" class="mb-2">
        <b-card-text class="text-center text-black-50">
          <h4>Estadísticas de las visitas realizadas</h4>
        </b-card-text>
      </b-card>

      <b-row class="mb-4">         
        <b-col cols="12" md="9">

           <!--  Gráfica de Actividades -->
          <b-card  border-variant="success" header-bg-variant="transparent" no-body class="mb-4">
            <template v-slot:header>
              <center> <b class="text-success" >Gráfica de cantidad de actividades</b></center>
            </template>
            <div v-if="chartjs==true">
              <chartjs-doughnut v-bind:labels="labelsActividades" v-bind:datasets="datasetsActividades" v-bind:option="optionActividades"></chartjs-doughnut>
            </div>
          </b-card>

        <!--  Gráfica de visitas por veredas -->
          <b-card  border-variant="success" header-bg-variant="transparent" no-body class="mb-4">
            <template v-slot:header>
            <center> <b class="text-success" >Gráfica de visitas por corregimientos o veredas</b></center>
            </template>
            <div v-if="chartjs==true">
              <chartjs-bar :labels="labels1" v-bind:datasets="datasetsVeredas" v-bind:option="option1"></chartjs-bar>
            </div>
            <div v-if="cargando" class="text-center">
              <b-spinner variant="success" label="Text Centered"></b-spinner>
            </div>
          </b-card>
        <!-- Gráfica de visitas por municipios-->
          <b-card  border-variant="success" header-bg-variant="transparent" no-body class="mb-1">
            <template v-slot:header>
            <center> <b class="text-success" >Gráfica de visitas por municipios</b></center>
            </template>
            <div v-if="chartjs==true">
              <chartjs-bar :labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-bar>
            </div>
            <div v-if="cargando" class="text-center">
              <b-spinner variant="success" label="Text Centered"></b-spinner>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="3">
          <b-card border-variant="success" header-bg-variant="transparent" no-body class="mb-3">
            <template v-slot:header>
              <center><b class="text-success">Total visitas</b></center>
            </template>
            <b-card-body>
              <center>
                <b>{{dataVisitRecord.length}}</b>
              </center>
            </b-card-body>
          </b-card>
          <b-card border-variant="success" header-bg-variant="transparent" no-body class="mb-1">
            <template v-slot:header>
            <center> <b class="text-success" >Cantidad por sistema de producción</b></center>
            </template>
            <b-card-body>
              <b-card-text>
                <b>Ganadería bobina:</b>
                {{ganaderiabobina}}
                <br />
                <b>Ovino:</b>
                {{ovinos}}
                <br />
                <b>Caprinos:</b>
                {{caprinos}}
                <br />
                <b>Aves:</b>
                {{aves}}
                <br />
                <b>Piscicola:</b>
                {{piscicola}}
                <br />
                <b>Maíz:</b>
                {{maiz}}
                <br />
                <b>Plátano:</b>
                {{platano}}
                <br />
                <b>Yuca:</b>
                {{yuca}}
                <br />
                <b>Ñame:</b>
                {{ñame}}
                <br />
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      
      <b-row class="mb-4">
         <!-- <b-col  cols="12" sm="12" md="6"> -->
         <!--   <b-card> -->
         <!--     <chartjs-doughnut v-bind:labels="labelsActividades" v-bind:datasets="datasetsActividades" v-bind:option="optionActividades"></chartjs-doughnut> -->
         <!--    </b-card> -->
         <!--  </b-col> -->
          <!-- <b-col md="6" sm="12"> -->
          <!--   <b-card> -->
          <!--     <chartjs-line v-bind:labels="labels1" v-bind:datasets="datasetsVeredas" v-bind:option="option1"></chartjs-line> -->
          <!--   </b-card> -->
          <!-- </b-col> -->
        <!-- <b-col md="7" sm="12">
        <b-card>
          <chartjs-line v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-line>
        </b-card>
        </b-col>
        <b-col md="5" sm="12">
          <b-card>
            <b-calendar block locale="es-US"></b-calendar>
          </b-card>
        </b-col>
         <b-col cols="12" sm="12" md="6">
          <b-card>
            <chartjs-doughnut
              v-bind:labels="labels"
              v-bind:datasets="datasets"
              v-bind:option="option"
            ></chartjs-doughnut>
          </b-card>
        </b-col>-->
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      chartjs: false,
      cargando: true,
      //Productos
      ovinos: 0,
      ganaderiabobina: 0,
      caprinos: 0,
      aves: 0,
      piscicola: 0,
      maiz: 0,
      platano: 0,
      yuca: 0,
      ñame: 0,
      //municipios
      Montería: 0,
      cerete: 0,
      CienagaOro: 0,
      SanPelayo: 0,
      SanCarlos: 0,
      Purisima: 0,
      Momil: 0,
      Chima: 0,
      //Corregimientos o veredas
      Leticia_Cedro_Cocido:0,
      Leticia_Tronco:0,
      Nueva_Lucia:0,
      Tres_Piedras:0,
      //Actividades
      Agropecuaria:0,
      Agricola:0,
      Acuicola:0,
      Pecuaria:0,
      //
      Objdata: [],
      ObjdataVeredas: [],
      ObjdataActividad: [],
      //datos grafica
      labels: [
        "Montería",
        "Cereté",
        "Ciénaga de Oro",
        "San Pelayo",
        "San Carlos",
        "Purísima",
        "Momíl",
        "Chimá",
      ],
      labels1: [
      "Leticia (Cedro Cocido)",
      "Leticia (Tronco)",
      "Nueva Lucia",
      "Tres Piedras",
      ],
      labelsActividades: [
        "Agropecuaria",
        "Agricola",
        "Acuicola",
        "Pecuaria",
      ],
      datasets: [],
      datasetsVeredas:[],
      datasetsActividades:[],
      //titulo para la grafiac los municipios
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Municipios"
        }
      },
      //titulo para grafica las veredas
      option1: {
        title: {
          display: true,
          position: "bottom",
          text: "Corregimientos o Veredas"
        }
      },
      //titulo para grafica de actividades
      optionActividades: {
        title: {
          display: true,
          position: "bottom",
          text: "Actividades"
        }
      }
    };
  },

  mounted() {
    this.getColectionsdatabase();
    this.LlenarData();
    this.LlenarDataVereda();
    this.LlenarDataActividades();
    this.CantidadProductos();
  },
  computed: {
    ...mapGetters(["dataVisitRecord"]),
  },
  methods: {
    ...mapActions(["getColectionsdatabase"]),

    CantidadProductos() {
      this.dataVisitRecord.forEach((element) => {
        if (element.producto == "Ovinos") {
          this.ovinos += 1;
        }
        if (element.producto == "Ganaderia bobina") {
          this.ganaderiabobina++;
        }
        if (element.producto == "Caprinos") {
          this.caprinos++;
        }
        if (element.producto == "Aves") {
          this.aves++;
        }
        if (element.producto == "Piscicola") {
          this.piscicola++;
        }
        if (element.producto == "Maíz") {
          this.maiz++;
        }
        if (element.producto == "Plátano") {
          this.platano++;
        }
        if (element.producto == "Yuca") {
          this.yuca++;
        }
        if (element.producto == "Ñame") {
          this.ñame++;
        }
      });
    },
    //Llenar datos de la grafica de municipios
    async LlenarData() {
      try {
        await this.dataVisitRecord.forEach((element) => {
          if (element.municipio == "Montería") {
            this.Montería++;
          }
           if (element.municipio == "Cereté") {
            this.cerete++;
          }
          if (element.municipio == "Ciénaga de Oro") {
            this.CienagaOro++;
          }
          if (element.municipio == "San Pelayo") {
            this.SanPelayo++;
          }
          if (element.municipio == "San Carlos") {
            this.SanCarlos++;
          }
          if (element.municipio == "Purísima") {
            this.Purisima++;
          }
          if (element.municipio == "Momíl") {
            this.Momil++;
          }
          if (element.municipio == "Chimá") {
            this.Chima++;
          }
        });
        this.Objdata.push(
          this.Montería,
          this.cerete,
          this.CienagaOro,
          this.SanPelayo,
          this.SanCarlos,
          this.Purisima,
          this.Momil,
          this.Chima,
          0
        );
        this.datasets.push({
          label: "Número de Visitas",
           backgroundColor: [
            'rgba(75, 192, 192, 1)',
                /* 'rgba(255, 99, 132, 1)', */
                'rgba(10,255,178,0.49)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',                
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          data: this.Objdata,
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.chartjs = true;
        this.cargando = false;
      }
    },

    //Llenar datos de la grafica de veredas
    async LlenarDataVereda() {
      try {
        await this.dataVisitRecord.forEach((element) => {
          if (element.vereda == "Leticia (Tronco)") {
            this.Leticia_Tronco++;
          }
          if (element.vereda == "Leticia (Cedro cocido)") {
            this.Leticia_Cedro_Cocido++;
          }
          if (element.vereda == "Nueva Lucia") {
            this.Nueva_Lucia++;
          }
          if (element.vereda ==  "Tres piedras") {
            this.Tres_Piedras++;
          }
        });
        this.ObjdataVeredas.push(
          this.Leticia_Tronco,
          this.Leticia_Cedro_Cocido,
          this.Nueva_Lucia,
          this.Tres_Piedras,
          0
        );
        this.datasetsVeredas.push({
          label: "Número de Visitas",
           backgroundColor: [
             '#4af15da8',
                'rgba(255, 99, 132, 1)',
                'rgba(10,255,178,0.49)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',                
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          data: this.ObjdataVeredas,
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.chartjs = true;
        this.cargando = false;
      }
    },

    //Llenar datos de la grafica de actividades
    async LlenarDataActividades() {
      try {
        await this.dataVisitRecord.forEach((element) => {
          if (element.actividad == "Agropecuaria") {
            this.Agropecuaria++;
          }
          if (element.actividad == "Agricola") {
            this.Agricola++;
          }
          if (element.actividad == "Acuicola") {
            this.Acuicola++;
          }
          if (element.actividad ==  "Pecuaria") {
            this.Pecuaria++;
          }
        });

        this.ObjdataActividad.push(
          this.Agropecuaria,
          this.Agricola,
          this.Acuicola,
          this.Pecuaria,
          0
        );
        this.datasetsActividades.push({
          label: "Número de Actividades",
           backgroundColor: [
             '#4af15da8',
                'rgba(255, 99, 132, 1)',
                'rgba(10,255,178,0.49)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',                
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          data: this.ObjdataActividad,
        });
      } catch (err) {
        console.error(err);
      } finally {
        this.chartjs = true;
        this.cargando = false;
      }
    },

  },

  props: {},
};
</script>

<style scoped> 
  
</style>