<template>
  <div>
    <b-row>
      <b-col cols="12" md="12">
        <b-card border-variant="success" header-bg-variant="trnsparent" no-body class="mb-1">
          <template v-slot:header>
            <b-card no-body class="overflow-hidden" style="max-width: 100%;">
              <b-row>
                <b-col md="2">
                  <center>
                    
                    <img style="float: center;" src="@/assets/escudo.png" width="110px" />
                  </center>
                </b-col>
                <b-col md="10">
                  <br />
                  <br />
                  <h3>
                    <b>UNIVERSIDAD DE</b>
                    <b>CÓRDOBA</b>
                  </h3>
                
                  
                    <b-card-text>
                      <h2 class="text-success" style="float: left;">
                        FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
                        <br />
                        <h6 style="float:right;">COMITÉ DE EXTENSIÓN</h6>
                      </h2>
                    </b-card-text>
                    <!-- <img src="@/assets/minedu.png" width="100px" height="20px" /> -->
                  
                </b-col>
               <!--  <b-col md="6">
                  <center>
                    <br />
                    <img src="@/assets/programa.png" width="190px" />
                  </center>
                </b-col> -->
              </b-row>
              <!-- <b-row>
                <b-col md="12">
                  <b-card-body>
                    <b-card-text>
                      <h5 class="text-success" style="float:right;">
                        FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
                        <br />
                        <h6 style="float:right;">COMITÉ DE EXTENSIÓN</h6>
                      </h5>
                    </b-card-text>
                     <img src="@/assets/minedu.png" width="100px" height="20px" /> 
                  </b-card-body>
                </b-col>
              </b-row> -->
               <center><hr style="background: rgba(10,255,178,0.49); width:90%; " /></center>

              <b-row class="text-black-90">
              <b-col cols="12" md="6" class="mb-4">
                <center>
                <img src="@/assets/Monteria 2021.png"/>
              <!-- <div> -->
              <!--     <b>Alcaldia de Montería</b> -->
              <!--  </div> -->
                </center>
              </b-col>
              <b-col cols="12" md="6" class="mt-2">
                <center>
                  
                  <img src="@/assets/minagricultura-gob1.png" width="350px"/>
                  
                <!--   <div> -->
                <!--     <b>Minagricultura      </b> -->
                <!--   </div> -->
                </center>
              </b-col>
            </b-row>
            </b-card>
          </template>
          <b-card-body>
            <div class="text-black-90 text-center">
              <hr style="background: #4af15da8;" />
Página de consultas y estadísticas de los reportes de records de visita realizados por los extensionistas a los pequeños productores en el departamento de Córdoba. Se puede consultar toda la información del record de visitas junto con las imágenes de evidencia y firmas de los extensionistas y productores mediante los filtros de Municipio, Vereda, Fincas, Productos, Actividad y en general, también puede editar algunos campos del record y visualizar estadísticas de las visitas por municipio y saber la cantidad de visitas totales y cantidad de visitas por productos.
              <hr style="background: #4af15da8;" />
            </div>
            <center>
              <b-button
                type="submit"
                style="float: center"
                variant="outline-success"
                class="btn-sm m-1"
                role="button"
                onclick="window.location.href='https://sites.google.com/view/app-mvz-v2/p%C3%A1gina-principal';"
              >OBTENER APLICACIÓN MOVIL</b-button>
            </center>

            <div style="width: 100%;">
              <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;">
                <iframe
                  frameborder="0"
                  width="1200px"
                  height="675px"
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                  src="https://view.genial.ly/5bb623d643bd245e044f9fd2"
                  type="text/html"
                  allowscriptaccess="always"
                  allowfullscreen="true"
                  scrolling="yes"
                  allownetworking="all"
                ></iframe>
              </div>
            </div>
          </b-card-body>
         <!--  <b-card-footer>
            <b-row class="text-black-90">
              <b-col cols="12" md="3">
                <center>
                  <img
                    src="@/assets/escudo.png"
                    width="100px"
                    title="Universidad de Córdoba Sede Berástegui"
                    href="https://www.unicordoba.edu.co/index.php/facultad-medicina-veterinaria-y-zootecnia/medicina-veterinaria-y-zootecnia/"
                    alt="Universidad de Córdoba Sede Berástegui"
                  />
                  <div>
                    <b>Universidad de Córdoba</b>
                  </div>
                </center>
              </b-col>
              <b-col cols="12" md="3">
                <center>
                  <img src="@/assets/programa.png" width="100px" />
                  <div>
                    <b>
                      Programa Escuela de formacion
                      <br />de lideres multiplicadores rurales
                    </b>
                  </div>
                </center>
              </b-col>
              <b-col cols="12" md="3">
                <center>
                <img src="@/assets/gobernacionCord.png" width="200px" />
                <b>Gobernación de Córdoba</b>
                </center>
              </b-col>
              <b-col cols="12" md="3">
                <center>
                  <br />
                  <img src="@/assets/minedu.png" width="200px"  />
                  <div>
                    <b>Vigilada Mineducación</b>
                  </div>
                </center>
              </b-col>
            </b-row>
          </b-card-footer> -->
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getColectionsdatabase();
  },
  methods: {
    ...mapActions(["getColectionsdatabase"]),
  },
};
</script>