import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {
  rdb
} from "../main";


export default new Vuex.Store({
  state: {
    dataVisitRecord: [],

  },

  actions: {

    //Obtener datos de RealtimeDatabase
    async getColectionsdatabase({
      commit
    }) {
      try {
        await rdb.ref("RecordVisitas/").on("value", (snapshot) => {

          var dataVisit = [];

          var objeto = snapshot.val();

          for (var propiedad in objeto) {
            dataVisit.unshift({
              key: propiedad,
              actividad: objeto[propiedad].actividad,
              aprobacion: objeto[propiedad].aprobacion,
              ccproductor: objeto[propiedad].ccproductor,
              codigo: objeto[propiedad].codigo,
              departamento: objeto[propiedad].departamento,
              dosisRecomendada: objeto[propiedad].dosisRecomendada,
              fecha: objeto[propiedad].fecha,
              fincaProductor: objeto[propiedad].fincaProductor,
              idFirmaExtensionista: objeto[propiedad].idFirmaExtensionista,
              idFirmaProductor: objeto[propiedad].idFirmaProductor,
              idFotoProductor: objeto[propiedad].idFotoProductor,
              idRecord: objeto[propiedad].idRecord,
              municipio: objeto[propiedad].municipio,
              no_Visita: objeto[propiedad].no_Visita,
              nombreExtensionista: objeto[propiedad].nombreExtensionista,
              nombreProductor: objeto[propiedad].nombreProductor,
              objVisita: objeto[propiedad].objVisita,
              obsyActividades: objeto[propiedad].obsyActividades,
              producto: objeto[propiedad].producto,
              productoARecomendar: objeto[propiedad].productoARecomendar,
              recomendaciones: objeto[propiedad].recomendaciones,
              targProfesional: objeto[propiedad].targProfesional,
              telefonoProductor: objeto[propiedad].telefonoProductor,
              vereda: objeto[propiedad].vereda,
              version: objeto[propiedad].version,
            });
          }


          commit('setColectionsdatabase', dataVisit)
        });

      } catch (error) {
        console.log(error);
      } finally {}
    },

  },
  mutations: {
    setColectionsdatabase(state, dataVisit) {
      state.dataVisitRecord = dataVisit
    }
  },

  getters: {
    dataVisitRecord: state => state.dataVisitRecord
  },
  modules: {},

})