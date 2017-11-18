<template lang="html">
  <div class="wrapper-dashboard">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo nav-brand-logo">Empresa</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">Perfil</a></li>
          <li><a href="">Cerrar Sesion</a></li>
        </ul>
      </div>
    </nav>
    <ul class="collection with-header collection-ofertas ofertas-disponibles">
        <li class="collection-header"><h4>Ofertas de trabajo disponibles</h4></li>
        <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaNoDisponible secondary-content" aria-hidden="true" title="No Disponible"></i></div></li>
        <li class="collection-item"><div>Intern Frontend Developer<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div></li>
        <li class="collection-item"><div>QA Tester<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li>
    </ul>
    <ul class="collection with-header collection-ofertas">
        <li class="collection-header"><h4>Ofertas de trabajo aplicadas</h4></li>
        <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaNoDisponible secondary-content" aria-hidden="true" title="No Disponible"></i></div></li>
        <li class="collection-item"><div>Intern Frontend Developer<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div></li>
        <li class="collection-item"><div>QA Tester<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li>
    </ul>
    <ul class="collection with-header collection-ofertas">
        <li class="collection-header"><h4>Tu actual trabajo</h4></li>
        <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li>
    </ul>

  </div>
</template>

<script>
export default {

  data(){
    return{

    }
  }, methods:{

  }
}
</script>

<style lang="css">
.ofertas-disponibles{
  overflow: auto;
  max-height: 300px;
}

.nav-brand-logo{
  margin-left: 2%;
}

.collection-ofertas{
  width: 80%;
  margin: 5% auto;
}

.ofertaNoDisponible{
  color: red;
}


</style>
