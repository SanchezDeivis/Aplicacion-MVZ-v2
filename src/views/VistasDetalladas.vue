<template>
  <div class="vista_detallada">
   <center> <h5 class="text-success">Record de todas las visitas por finca</h5> </center> 
    <div class="scroll_horizontal" id="#scrollbar">
      <router-link
        :to="{ name: 'vista_detallada', params: { id: item.key } }"
        v-for="(item, index) of dataVisitRecord"
        :key="index"
      >
        <b-button
          variant="outline-success"
          class="btn-sm m-1"
          role="button"
        >{{ item.fincaProductor}} / {{ item.fecha}}</b-button>
      </router-link>
    </div>

    <br />
    <VistaDetallada></VistaDetallada>
    <b-button-group variant="outline-success" class="btn-sm" role="button">
      <b-button variant="outline-success" class="btn-sm m-1" role="button" @click="home">Inicio</b-button>
      <b-button
        variant="outline-success"
        class="btn-sm m-1"
        role="button"
        @click="anterior"
      >Anterior</b-button>
      <b-button
        variant="outline-success"
        class="btn-sm m-1"
        role="button"
        @click="siguiente"
      >Siguiente</b-button>
    </b-button-group>
  </div>
</template>

<script>
import VistaDetallada from "@/components/CompVistaDetallada.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "vista_detallada",
  components: {
    VistaDetallada,
  },
  data() {
    return {
      fotosArreglo: [1, 2, 3, 4],
    };
  },
  computed: {
    ...mapGetters(["dataVisitRecord"]),
  },
  mounted() {
    this.getColectionsdatabase();
  },
  methods: {
    ...mapActions(["getColectionsdatabase"]),
    home() {
      this.$router.push("/");
    },
    anterior() {
      this.$router.go(-1);
    },
    siguiente() {
      this.$router.go(+1);
    },
  },
};
</script>
<style scoped>
div.scroll_horizontal {
  height: 180px;
  width: 100%;
  overflow: auto;
  border: 1px solid rgba(88, 168, 63, 0.253);
  background: #a4a7a483;
  padding: 8px;
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