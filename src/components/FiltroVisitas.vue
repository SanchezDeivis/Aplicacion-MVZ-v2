<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h5 class="text-black-50">{{ msg }}</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8">
        <b-input-group>
          <b-input-group-append>
            <b-button v-b-toggle="'collapse-2'" variant="outline-success">
              Buscar por:
              <b-icon icon="caret-down-square"></b-icon>
            </b-button>
          </b-input-group-append>
          <b-form-input
            type="search"
            placeholder="Search"
            v-model="busqueda"
            @keyup.enter="filteredList"
          ></b-form-input>
          <b-input-group-append>
            <!--  <b-button type="submit" variant="outline-warning">
              <b-icon icon="search" @click="BarraProgress"></b-icon>
            </b-button>-->
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8">
        <b-collapse id="collapse-2">
          <b-card style="background:#4cdd5d2a; : 5099px; ">
            <b-form-checkbox-group v-model="checkbox" :options="elementos" switches></b-form-checkbox-group>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
    <b-progress height="2px" :value="Porcen" variant="success" striped animated></b-progress>
    <hr style="background:#4af15da8;" />

    <b-card class="mb-3">
      <!--  <b-alert
        :show="loading.estado"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>{{loading.titulo}}</p>
        <b-progress :value="loading.progressValue" variant="warning" height="4px"></b-progress>
      </b-alert>-->
      <b-row>
        <b-col cols="12" md="5" id="scrollbar">
          <div v-for="(visitast, index) in filteredList" :key="index">
            <b-list-group>
              <b-list-group-item href="#" variant="light">
                <b-card border-variant="success" header-bg-variant="transparent" class="mb-1">
                  <template v-slot:header>
                    <h5 class="text-center">
                      <b>Visita realizada el {{visitast.fecha}}</b>
                    </h5>
                  </template>
                  <b-card-text>
                    <a href>
                      <b>Id del record:</b>
                      <mark>{{visitast.idRecord}}</mark>
                    </a>
                    <br />
                    <b>Finca:</b>
                    {{visitast.fincaProductor}}
                    <br />
                    <b>Actividad:</b>
                    {{visitast.actividad}}
                    <br />
                    <b>Productor:</b>
                    {{visitast.nombreProductor}}
                    <br />...
                    <b-button
                      style="float: right;"
                      variant="outline-success"
                      class="btn-sm"
                      role="button"
                      @click="dialog = visitast.key"
                    >Ver más</b-button>
                  </b-card-text>
                </b-card>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
        <!--Detalle de la visita-->
        <b-col cols="12" md="7">
          <div v-for="(itemList, index) in  visitast " :key="index">
            <div v-if="dialog==itemList.key">
              <h5 class="text-center">Ultima busqueda</h5>
              <b-card border-variant="success" header-bg-variant="success" no-body class="mb-1">
                <div class="hrDiv"></div>
                <template v-slot:header>
                  <h5>
                    <b>Id del record</b>
                    {{itemList.idRecord}}
                  </h5>
                </template>
                <b-card-body>
                  <b-card-text>
                    <b>Fecha de la visita</b>
                    {{itemList.fecha}}
                    <br />
                    <b>Finca y municipio</b>
                    <br />
                    {{itemList.fincaProductor}} en {{itemList.municipio}} - {{itemList.departamento}}.
                    <br />
                    <b>Actividad</b>
                    {{itemList.actividad}}.
                    <br />
                    <b>Producto</b>
                    {{itemList.producto}}
                    <br />
                    <b>Extensionista</b>
                    {{itemList.nombreExtensionista}}
                    <br />...
                    <router-link :to="{name:'vista_detallada', params:{id: itemList.key} }">
                      <b-button
                        style="float: right;"
                        variant="outline-success"
                        class="btn-sm"
                        role="button"
                        @click="idVista = itemList.key"
                      >Vista detallada</b-button>
                    </router-link>
                  </b-card-text>
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
                        <b-card-img :src="itemList.idFirmaProductor" height="80"></b-card-img>
                      </b-card>
                    </b-col>

                    <b-col cols="12" md="4" class="mb-2" v-b-modal.modal-center-firmaE>
                      <b-card>
                        <template v-slot:header>
                          <h6 class="text-center">
                            <b>Extensionista</b>
                          </h6>
                        </template>
                        <b-card-img :src="itemList.idFirmaExtensionista" height="80"></b-card-img>
                      </b-card>
                    </b-col>

                    <b-col cols="12" md="4" class="mb-2" v-b-modal.modal-center-fotoE>
                      <b-card>
                        <template v-slot:header>
                          <h6 class="text-center">
                            <b>Evidencia</b>
                          </h6>
                        </template>
                        <b-card-img :src="itemList.idFotoProductor" height="80"></b-card-img>
                      </b-card>
                    </b-col>
                  </b-row>
                  <b-modal id="modal-center-firmaP" centered title="Firma del Productor">
                    <b-card-img :src="itemList.idFirmaProductor"></b-card-img>
                  </b-modal>

                  <b-modal id="modal-center-firmaE" centered title="Firma del Extensionista">
                    <b-card-img :src="itemList.idFirmaExtensionista"></b-card-img>
                  </b-modal>

                  <b-modal id="modal-center-fotoE" centered title="Foto Evidencia">
                    <b-card-img :src="itemList.idFotoProductor"></b-card-img>
                  </b-modal>
                </b-card-body>
                <b-card-footer>
                  <b-card-sub-title>Código del recor {{itemList.codigo}}</b-card-sub-title>
                </b-card-footer>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { rdb } from "../main";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default {
  // name: "ComponenteInicio",
  name: "FiltroVisitas",
  data() {
    return {
      Porcen: 0,
      dialog: "",
      checkbox: [],
      busqueda: "",
      elementos: [
        { value: 1, text: "Municipio" },
        { value: 2, text: "Vereda" },
        { value: 3, text: "Fincas" },
        { value: 4, text: "Productos" },
        { value: 5, text: "Actividad" },
      ],
      // visitast: [],
    };
  },
  components: {},
  computed: {
    ...mapGetters(["dataVisitRecord"]),

    visitast() {
      return this.dataVisitRecord;
    },

    filteredList() {
      return this.visitast.filter((visitast) => {
        if (this.checkbox.length == 0) {
          return (
            visitast.municipio
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.vereda
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.fincaProductor
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.producto
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.actividad
              .toLowerCase()
              .includes(this.busqueda.toLowerCase())
          );
        }
        if (this.checkbox.length > 1) {
          return (
            visitast.municipio
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.vereda
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.fincaProductor
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.producto
              .toLowerCase()
              .includes(this.busqueda.toLowerCase()) ||
            visitast.actividad
              .toLowerCase()
              .includes(this.busqueda.toLowerCase())
          );
        }
        if (this.checkbox == 1) {
          return visitast.municipio
            .toLowerCase()
            .includes(this.busqueda.toLowerCase());
        }
        if (this.checkbox == 2) {
          return visitast.vereda
            .toLowerCase()
            .includes(this.busqueda.toLowerCase());
        }
        if (this.checkbox == 3) {
          return visitast.fincaProductor
            .toLowerCase()
            .includes(this.busqueda.toLowerCase());
        }
        if (this.checkbox == 4) {
          return visitast.producto
            .toLowerCase()
            .includes(this.busqueda.toLowerCase());
        }
        if (this.checkbox == 5) {
          return visitast.actividad
            .toLowerCase()
            .includes(this.busqueda.toLowerCase());
        }
      });
    },
  },
  props: {
    msg: String,
  },
  mounted() {
    //this.getColectionsdatabase();
  },
  created() {
    /* this.getColections(); */
    /* this.getColectionsdatabase(); */
  },
  methods: {
    //...mapActions(["getColectionsdatabase"]),
    //Obtener datos de firestore
    /* async getColections() {
      try {
        const snapshot = await rdb.collection("aplicacionmvz").get();
        const events = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    },*/
    Verdetalle() {
      this.dialog = true;
    },
    BarraProgress() {
      this.Porcen = 100;
    },
  },
};
</script>

<style scoped>
.subnav {
  font-weight: bold;
  background: #11831ea8;
}
.hrDiv {
  background: #11831ea8;
  height: 5px;
}
#scrollbar {
  max-height: 500px;
  scrollbar-width: 1px;
  overflow-y: scroll;
  scrollbar-base-color: blue;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: #18ec31a8;
  border-radius: 20px;
}
#scrollbar::-webkit-scrollbar-thumb:hover {
  background: #43b456e7;
}
#scrollbar::-webkit-scrollbar-thumb:active {
  background: #18ec31a8;
  float: left;
  float: right;
}
</style>