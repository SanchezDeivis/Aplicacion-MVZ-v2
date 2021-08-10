<template>
  <div>
    <b-row>
      <b-col cols="12" md="12" class="mb-2">
        <center>
          <h5 class="text-success">
            <b>INFORME VISITA DE CAMPO</b>
          </h5>
        </center>        
    </b-col>
   </b-row>

    <b-row>
      <!--Detalle de la visita-->
      <b-col cols="12" md="12">
        <div v-for="(List, index) in  dataVisitRecord " :key="index">
          <div v-if="$route.params.id == List.key">
            <b-card border-variant="success" header-bg-variant="transparent" no-body class="mb-1">
              <b-card-body>
                <b-row>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card  border-variant="success">
                        <template v-slot:header>
                          <b>Código</b>
                        </template>

                        <h6>{{List.codigo}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Versión</b>
                        </template>
                        <h6>{{List.version}}</h6>
                      </b-card>
                    </center>
                  </b-col>

                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Aprobación</b>
                        </template>
                        <h6>{{List.aprobacion}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <b-row>
                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Departamento</b>
                        </template>
                        <h6>{{List.departamento}}</h6>
                      </b-card>
                    </center>
                  </b-col>

                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Municipio</b>
                        </template>
                        <h6>{{List.municipio}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Vereda</b>
                        </template>
                        <h6>{{List.vereda}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Finca</b>
                        </template>
                        <h6>{{List.fincaProductor}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <!--Info Productor -->
                <b-row>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Productor</b>
                        </template>
                        <h6>{{List.nombreProductor}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>CC</b>
                        </template>
                        <h6>{{List.ccproductor}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Télefono</b>
                        </template>
                        <h6>{{List.telefonoProductor}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <b-row>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Atividad</b>
                        </template>
                        <h6>{{List.actividad}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Producto</b>
                        </template>
                        <h6>{{List.producto}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <b-row>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Extensionista</b>
                        </template>
                        <h6>{{List.nombreExtensionista}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Tarjeta Profesional</b>
                        </template>
                        <h6>{{List.targProfesional}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />

                <b-row>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Fecha</b>
                        </template>
                        <h6>{{List.fecha}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Número de visita</b>
                        </template>
                        <h6>{{List.no_Visita}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <b-row>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Objetivo de la visita</b>
                        </template>
                        <h6>{{List.objVisita}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Observaciones y actividades relacionadas</b>
                        </template>
                        <h6>{{List.obsyActividades}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="4">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Tratamiento recomendado</b>
                        </template>
                        <h6>{{List.productoARecomendar}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>
                <hr style="background: #4af15da8;" />
                <b-row>
                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Recomendaciones</b>
                        </template>
                        <h6>{{List.recomendaciones}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="3">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Producto a recomendar</b>
                        </template>
                        <h6>{{List.productoARecomendar}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                  <b-col cols="12" md="6">
                    <center>
                      <b-card border-variant="success">
                        <template v-slot:header>
                          <b>Dosis recomendada</b>
                        </template>
                        <h6>{{List.dosisRecomendada}}</h6>
                      </b-card>
                    </center>
                  </b-col>
                </b-row>

                <div class="text-success text-center">
                  <hr style="background: #4af15da8;" />
                  <h5>Firmas y evidencia</h5>
                  <hr style="background: #4af15da8;" />
                </div>

                <b-row>
                  <b-col cols="12" md="4" class="mb-2" v-b-modal.modal-center-firmaP>
                    <b-card>
                      <template v-slot:header>
                        <h6 class="text-center">
                          <b>Productor</b>
                        </h6>
                      </template>
                      <b-card-img :src="List.idFirmaProductor" height="100"></b-card-img>
                    </b-card>
                  </b-col>

                  <b-col cols="12" md="4" class="mb-2" v-b-modal.modal-center-firmaE>
                    <b-card>
                      <template v-slot:header>
                        <h6 class="text-center">
                          <b>Extensionista</b>
                        </h6>
                      </template>
                      <b-card-img :src="List.idFirmaExtensionista" height="100"></b-card-img>
                    </b-card>
                  </b-col>

                  <b-col cols="12" md="4" class="mb-2" v-b-modal.modal-center-fotoE>
                    <b-card>
                      <template v-slot:header>
                        <h6 class="text-center">
                          <b>Evidencia</b>
                        </h6>
                      </template>
                      <b-card-img :src="List.idFotoProductor" height="100"></b-card-img>
                    </b-card>
                  </b-col>
                </b-row>
                <b-modal id="modal-center-firmaP" centered title="Firma del Productor">
                  <b-card-img :src="List.idFirmaProductor"></b-card-img>
                </b-modal>

                <b-modal id="modal-center-firmaE" centered title="Firma del Extensionista">
                  <b-card-img :src="List.idFirmaExtensionista"></b-card-img>
                </b-modal>

                <b-modal id="modal-center-fotoE" centered title="Foto Evidencia">
                  <b-card-img :src="List.idFotoProductor"></b-card-img>
                </b-modal>
              </b-card-body>
              <b-card-footer>
                <b-card-sub-title>
                  Id del record {{ $route.params.id}}        
                            
                  <b-button v-b-modal.modal-center-Editar style="float: right;" variant="outline-danger"
                    class="btn-sm, mr-2" role="button" @click="editar(List.key)">
                    <b-icon icon="pencil"></b-icon> Editar
                  </b-button>
                  <b-button style="float: right;" variant="outline-secondary" class="btn-sm, mr-2" role="button"
                    @click="downloadReport(List.key)">
                      <b-icon icon="download"></b-icon>  Descargar informe de visita 
                   </b-button>  
                </b-card-sub-title>
              </b-card-footer>
            </b-card>
            <b-modal
              v-model="show"
              hide-footer
              size="xl"
              body-text-variant="success"
              id="modal-center-Editar"
              centered
              title="Puedes editar los datos de esta visita"
            >
              <b-card border-variant="success" header-bg-variant="transparent" no-body class="mb-1">
                <b-card-body>
                  <b-row>
                    <b-col cols="12" md="2">
                      <b-form-group label="Número de visita">
                        <b-form-input v-model="E_numero_visita" type="number"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="1">
                      <b-form-group label="Versión">
                        <b-form-input v-model="E_version" type="number"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="2">
                      <b-form-group label="Aprobación">
                        <b-form-input v-model="E_aprovacion" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="3">
                      <b-form-group label="Vereda">
                        <b-form-input v-model="E_vereda" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                      <b-form-group label="Finca">
                        <b-form-input v-model="E_finca" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" md="4">
                      <b-form-group label="Nombre del productor">
                        <b-form-input v-model="E_nomb_P" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                      <b-form-group label="Cédula del productor">
                        <b-form-input v-model="E_cedula_P" type="number"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                      <b-form-group label="Télefono del productor">
                        <b-form-input v-model="E_telf_P" type="number"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div v-if="cargando==true" class="text-center">
                    <b-spinner variant="success" label="Text Centered"></b-spinner>
                  </div>
                  <b-row>
                    <b-col cols="12" md="4">
                      <b-form-group label="Nombre del extensionista">
                        <b-form-input v-model="E_nomb_E" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12" md="6">
                      <b-form-group label="Tarjeta profesional del extensionista">
                        <b-form-input v-model="E_targeta_p_E" type="search"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
              <b-button
                style="float: right;"
                class="mt-2 btn-sm m-2"
                variant="outline-danger"
                role="button"
                @click="show=false"
              >Descartar Cambios</b-button>

              <b-button
                style="float: right;"
                class="mt-2 btn-sm m-2"
                variant="outline-success"
                role="button"
                @click="ActualizarDatos(List.key)"
              >Guardar Cambios</b-button>
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rdb } from "../main";

import { jsPDF } from "jspdf";
/* import {html2canvas} from "html2canvas" */



export default {
  data() {
    return {
      cargando: false,
      show: false,
      E_numero_visita: "",
      E_version: "",
      E_aprovacion: "",
      E_finca: "",
      E_cedula_P: "",
      E_targeta_p_E: "",
      E_vereda: "",
      E_nomb_P: "",
      E_telf_P: null,
      E_nomb_E: "",

      actividad: "", 
      aprobacion: "",
      ccproductor:"",
      codigo: "",
      departamento: "",
      dosisRecomendada: "",
      fecha: "",
      fincaProductor: "",
      idFirmaExtensionista: "",
      idFirmaProductor: "",
      idFotoProductor: "",
      idRecord: "",
      municipio: "",
      no_Visita: "",
      nombreExtensionista: "",
      nombreProductor: "",
      objVisita: "",
      obsyActividades: "",
      producto: "",
      productoARecomendar: "",
      recomendaciones: "",
      targProfesional: "",
      telefonoProductor: "",
      vereda: "",
      version: "",
    };
  },
  name: "vista_detallada",
  computed: {
    ...mapGetters(["dataVisitRecord"]),
  },
  methods: {
    editar(id_key) {
      this.show = true;
      this.dataVisitRecord.forEach((element) => {
        if (element.key == id_key) {
          (this.E_vereda = element.vereda),
            (this.E_nomb_P = element.nombreProductor),
            (this.E_telf_P = element.telefonoProductor),
            (this.E_nomb_E = element.nombreExtensionista),
            (this.E_numero_visita = element.no_Visita),
            (this.E_version = element.version),
            (this.E_aprovacion = element.aprobacion),
            (this.E_finca = element.fincaProductor),
            (this.E_cedula_P = element.ccproductor),
            (this.E_targeta_p_E = element.targProfesional);
        }
      });
    },
    
    //Actualiza datos de RealtimeDatabase
    async ActualizarDatos(Id_key) {
      this.cargando = true;
      try {
        await rdb.ref("RecordVisitas/" + Id_key).update({
          nombreExtensionista: this.E_nomb_E,
          nombreProductor: this.E_nomb_P,
          telefonoProductor: this.E_telf_P,
          vereda: this.E_vereda,
          no_Visita: this.E_numero_visita,
          version: this.E_version,
          aprobacion: this.E_aprovacion,
          fincaProductor: this.E_finca,
          ccproductor: this.E_cedula_P,
          targProfesional: this.E_targeta_p_E,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.cargando = false;
        this.show = false;
      }
    },

    downloadReport(id_key){

      this.dataVisitRecord.forEach((element) => {
        if (element.key == id_key) {
          
          (this.actividad= element.actividad),
          (this.aprobacion= element.aprobacion),
          (this.ccproductor= element.ccproductor),
          (this.codigo= element.codigo),
          (this.departamento= element.departamento),
          (this.dosisRecomendada= element.dosisRecomendada),
          (this.fecha= element.fecha),
          (this.fincaProductor= element.fincaProductor),
          (this.idFirmaExtensionista= element.idFirmaExtensionista),
          (this.idFirmaProductor= element.idFirmaProductor),
          (this.idFotoProductor= element.idFotoProductor),
          (this.idRecord= element.idRecord),
          (this.municipio= element.municipio),
          (this.no_Visita= element.no_Visita),
          (this.nombreExtensionista= element.nombreExtensionista),
          (this.nombreProductor= element.nombreProductor),
          (this.objVisita= element.objVisita),
          (this.obsyActividades= element.obsyActividades),
          (this.producto= element.producto),
          (this.productoARecomendar= element.productoARecomendar),
          (this.recomendaciones= element.recomendaciones),
          (this.targProfesional= element.targProfesional),
          (this.telefonoProductor= element.telefonoProductor),
          (this.vereda= element.vereda),
          (this.version= element.version);
        }
      });     
     
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter"
      });

      var img = new Image();
      img.src = 'data:image/jpeg;base64,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'; 
      doc.setFont("helvetica")
      doc.setFontSize(12)
        
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold");       
      doc.addImage(img, 'PNG', 0.75, 0.4, 0.9, 1.5); 
      doc.text("UNIVERSIDAD DE CÓRDOBA", 4.2, 1, { align: "center", maxWidth: "6.9" });
       /*doc.line(20, 20, 200, 20);*/
      doc.setFont("helvetica", "bold");
      doc.setTextColor("green");
      doc.setFontSize(12)
      doc.text("FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA \n"+ "(COMITÉ DE EXTENSIÓN)",  4.2, 1.25, { align: "center", maxWidth: "6.9" });
         
      doc.setFont("times", "bold"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
    
      doc.text("INFORME DE RECORD DE VISITAS",4.2, 2.2, { align: "center", maxWidth: "6.9" });    
      doc.text("Datos de ubicación", 0.75, 2.7, { align: "left", maxWidth: "6.9" }); 

      doc.setFont("times", "normal"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      
      doc.text("Visita realizada el " + this.fecha + " en el municipio de " + this.municipio + " Departamento de " + this.departamento + ".", 0.75, 3, { align: "left", maxWidth: "6.9" })
      doc.text("Vereda o corregimiento: "+this.vereda, 0.75, 3.25, { align: "left", maxWidth: "6.9" });
      doc.text("Nombre de la finca: "+this.fincaProductor, 0.75, 3.5, { align: "left", maxWidth: "6.9" });

      doc.setFont("times", "bold"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Datos del productor", 0.75, 4, { align: "left", maxWidth: "6.9" }); 

      doc.setFont("times", "normal"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Nombre: "+this.nombreProductor, 0.75, 4.25, { align: "left", maxWidth: "6.9" });
      doc.text("Documento de identidad: "+this.ccproductor, 0.75, 4.5, { align: "left", maxWidth: "6.9" });
      doc.text("Teléfono: " + this.telefonoProductor, 0.75, 4.75, { align: "left", maxWidth: "6.9" });

      doc.setFont("times", "bold"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Información de la actividad desarrollada", 0.75, 5.25, { align: "left", maxWidth: "6.9" }); 
      doc.setFont("times", "normal"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Actividad: " + this.actividad +" \n"+
      "Productos: "+this.producto +" \n"+
      "Objetivo de la visita realizada: " + this.objVisita +" \n"+
      "Número de visitas realizadas en la finca "+this.fincaProductor+": "+this.no_Visita, 0.75, 5.5, { align: "left", maxWidth: "6.9" });
      
      doc.setFont("times", "bold"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Datos del extensionista y recomendaciones", 0.75, 7, { align: "left", maxWidth: "6.9" }); 
      doc.setFont("times", "normal"); 
      doc.setTextColor("black");   
      doc.setFontSize(12)
      doc.text("Nombre del extensionista: "+this.nombreExtensionista +" \n"+
      "Tarjeta profesional del extensionista: "+this.targProfesional +" \n"+" \n"+
      "Observaciones y actividades: " + this.obsyActividades +" \n"+
      "Dosis recomendada: "+this.dosisRecomendada +" \n"+
      "Productos a recomendar: "+this.productoARecomendar, 0.75, 7.25, { align: "left", maxWidth: "6.9" });

      doc.save("Informe de visita "+this.codigo+".pdf");
    },
  },
};
</script>
<style scoped>
.hrDiv {
  background: #b84e07a8;
  height: 5px;
}
</style>