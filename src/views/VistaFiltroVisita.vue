<template>
  <div class="filtrovistas">
    <FiltrosVisitas msg="Filtra y busca todas las visitas con  Web MVZ " />
  </div>
</template>

<script>
// @ is an alias to /src
//import ComponenteInicio from "@/components/ComponenteInicio.vue";
import FiltrosVisitas from "@/components/FiltroVisitas.vue";

export default {
  name: "filtrovistas",
  components: {
    FiltrosVisitas,
  },
};
</script>