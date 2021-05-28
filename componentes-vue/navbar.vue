<template>
  <div class="masterDiv">
    <div class="navBar">
      <b-navbar id="navbox" toggleable="md">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-links" >
            <b-nav-item class="nav-itens" router-link to="/">Home</b-nav-item>
            <b-nav-item class="nav-itens" router-link to="/sobre">Sobre Nós</b-nav-item>
            <b-nav-item class="nav-itens" router-link to="/conteudos">Conteúdos</b-nav-item>
            <b-nav-item class="nav-itens" router-link to="/quero-Ajudar">Quero Ajudar</b-nav-item>
            <b-nav-item class="nav-itens" router-link to="/solicitar-conteudo">Solicitar Conteúdo</b-nav-item>
            <b-nav-item class="nav-itens" router-link to="/inspire-se">Inspire-se</b-nav-item>
            <b-nav-item>
            <b-button class="nav-itens" router-link to="/login" click id="botao" variant="outline-dark"> Login </b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
//Script padrão do import
export default {
  name: "navbar",
};
</script>

<style scoped>
/* Deixo a navBar fixa, e com uma distância do top*/
.navBar {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 100;
}
#navbox {
  background: #6BC2BE;
}
#nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
}
.nav-itens{
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.navbar-light .navbar-nav .nav-link {
  transition: 0.3s;
  color: #0E0E0E;
}
@media (max-width: 778px) {
  #navbox {
    display: flex;
    justify-content: flex-end;
  }
}

#botao{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 30px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.533);

}
#botao:hover{
  color: #0E0E0E;
  border-color: #0E0E0E;
  background: #CCFFFB;
}

</style>
