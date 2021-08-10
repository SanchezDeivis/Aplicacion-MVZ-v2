<template>
  <div id="app">
    <b-navbar fixed ="top" toggleable ="md" type="dark" id="nav">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand class="pr-5">
          <img src = "@/assets/logoIcon.png" width="30px"/>
          Web MVZ
        </b-navbar-brand>

        <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class="active">
            <b-nav-item :to="{ name: 'inicio' }">Inicio</b-nav-item>
            <b-nav-item :to="{ name: 'filtrovistas' }">Visitas</b-nav-item>
            <b-nav-item :to="{ name: 'estadisticas' }">Estadisticas</b-nav-item>
            <b-nav-item :to="{ name: 'about' }"></b-nav-item>
            <b-nav-item :to="{ name: 'vista_detallada', params:{id: 0} }"></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <hr id="hr1"/>

    <b-container>
      <b-card class="mb-2">
        <router-view />
      </b-card>
    </b-container>
    
    <footer class="py-3 text-center" id="footer">
      <b-container>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
            <b-navbar-brand>
              <img src="@/assets/logoIcon.png" width="40px"/>
              Web MVZ 
            </b-navbar-brand>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div>
              FORTALECIMIENTO DEL SECTOR LÁCTEO MEDIANTE LA IMPLEMENTACIÓN DE ALTERNATIVAS TECNOLÓGICAS PARA AUMENTAR LA COMPETITIVIDAD DEL MUNICIPIO DE MONTERÍA
            </div>
            <router-link :to="{ name: 'about' }">
              <b-button class="btn-sm text-black-50" variant="outline-success" role="">Sobre los desarrolladores...</b-button>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
      <hr width="80%"/>
      <div class="footer-copyright text-center py-1" id="footer">
        <b>© 2021 Copyright: <a>MVZ</a></b>
      </div>
    </footer>
  </div>
</template>

<style>
#nav {
  font-weight: bold;
  background: #11831ea8;
}
#nav a.router-link-exact-active {
  color: white;
}
#footer {
  color: white;
  background: #11831ea8;
}
#hr1 {
  background: #18ec31a8;
  height: 60px;
}
</style>