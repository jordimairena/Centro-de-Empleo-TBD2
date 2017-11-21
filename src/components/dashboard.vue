<template lang="html">
  <div class="wrapper-dashboard">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo nav-brand-logo">Empresa</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">Perfil</a></li>
          <li><a v-on:click="cerrarSesion()">Cerrar Sesion</a></li>
        </ul>
      </div>
    </nav>
    <ul v-if="usuarioLogineado.scope === 'empleado'" class="collection with-header collection-ofertas ofertas-disponibles">
      <li class="collection-header"><h4>Ofertas de trabajo disponibles</h4></li>
      <!-- <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaNoDisponible secondary-content" aria-hidden="true" title="No Disponible"></i></div></li>
      <li class="collection-item"><div>Intern Frontend Developer<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div></li>
      <li class="collection-item"><div>QA Tester<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li> -->
      <li class="collection-item" v-for="puesto in ofertasDisponibles">
        <div v-on:click="abrirOferta(puesto)">{{puesto}} <i class="fa fa-circle secondary-content ofertaDisponible"  aria-hidden="true" title="Disponible"></i></div>
      </li>
    </ul>
    <ul v-if="usuarioLogineado.scope === 'empleado'" class="collection with-header collection-ofertas">
      <li class="collection-header"><h4>Ofertas de trabajo aplicadas</h4></li>
      <!-- <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaNoDisponible secondary-content" aria-hidden="true" title="No Disponible"></i></div></li>
      <li class="collection-item"><div>Intern Frontend Developer<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div></li>
      <li class="collection-item"><div>QA Tester<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li> -->
      <li class="collection-item" v-for="aplicado in ofertasAplicadas">
        <div v-on:click="abrirOfertaAplicado(aplicado)">{{aplicado}}<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div>
      </li>
    </ul>
    <ul v-if="usuarioLogineado.scope === 'empleador'" class="collection with-header collection-ofertas">
      <li class="collection-header"><h4>Ofertas de trabajo Creadas</h4></li>
      <!-- <li class="collection-item"><div>Programador Senior de Java<i class="fa fa-circle ofertaNoDisponible secondary-content" aria-hidden="true" title="No Disponible"></i></div></li>
      <li class="collection-item"><div>Intern Frontend Developer<i class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i></div></li>
      <li class="collection-item"><div>QA Tester<i class="fa fa-circle ofertaDisponible secondary-content" aria-hidden="true" title="Disponible"></i></div></li> -->
      <li class="collection-item" v-for="creado in ofertasCreadas">
        <div v-on:click="abrirOfertaCreada(creado)">
          {{creado}}
          <i v-if="vacantes(creado) > 0" class="fa fa-circle secondary-content ofertaDisponible" aria-hidden="true" title="Disponible"></i>
          <i v-else class="fa fa-circle secondary-content ofertaNoDisponible" aria-hidden="true" title="Disponible"></i>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
export default {

  data(){
    return{
      usuarioLogineado:{
        identidad: "",
        scope: ""
      },
      ofertasDisponibles:[],
      ofertasAplicadas: [],
      ofertasDisponiblesIDs:[],
      ofertasAplicadasIDs:[],
      ofertasCreadas:[],
      ofertasCreadasIDs:[],
      ofertasCreadasVacantes:[]
    }
  }, methods:{
    getOfertasDeTrabajoDisponibles:function(){
      this.$http.get("http://localhost:8000/ofertas").then((res)=>{
        if (res.body.length > 0) {
          for (var i = 0; i < res.body.length; i++) {
            if (res.body[i].vacantes > 0) {
              this.ofertasDisponibles.push(res.body[i].tipo_puesto);
              this.ofertasDisponiblesIDs.push(res.body[i]._id);
            }
          }
        }
      });
    }, getOfertasAplicadas:function(){
      //Obtener los id de las ofertas aplicadas
      this.$http.get(`http://localhost:8000/empleados/searchbyidentificacion/${this.usuarioLogineado.identidad}`).then((res)=>{
        const {ofertas_aplicadas} = res.body[0];
        for (var i = 0; i < ofertas_aplicadas.length; i++) {
          this.$http.get(`http://localhost:8000/ofertas/searchbyid/${ofertas_aplicadas[i]}`).then((res)=>{
            this.ofertasAplicadas.push(res.body.tipo_puesto);
            this.ofertasAplicadasIDs.push(res.body._id);
          });
        }
      });
    },cerrarSesion:function(){
      localStorage.setItem("identidad", "");
      localStorage.setItem("scope", "");
      this.$router.push({path:"/"});
    },abrirOferta:function(oferta){
      const index = this.ofertasDisponibles.indexOf(oferta);
      const id = this.ofertasDisponiblesIDs[index];
      // alert(id);
      this.$router.push({name: apoferta, params:{id}})
    },abrirOfertaAplicado:function(oferta){
      const index = this.ofertasAplicadas.indexOf(oferta);
      const id = this.ofertasAplicadasIDs[index];
      // alert(id);
      this.$router.push({name: apoferta, params:{id}})
    },getOfertasDeTrabajoCreadas:function(){
      this.$http.get("http://localhost:8000/ofertas").then((res)=>{
        if (res.body.length > 0) {
          for (var i = 0; i < res.body.length; i++) {
            if (res.body[i].id_empleador === this.usuarioLogineado.identidad) {
              this.ofertasCreadas.push(res.body[i].tipo_puesto);
              this.ofertasCreadasIDs.push(res.body[i]._id);
              this.ofertasCreadasVacantes.push(res.body[i].vacantes);
            }
          }
        }
      });
    }, vacantes:function(oferta){
      const index = this.ofertasCreadas.indexOf(oferta);
      return this.ofertasCreadasVacantes[index];
    },abrirOfertaCreada:function(oferta){
      const index = this.ofertasCreadas.indexOf(oferta);
      const id = this.ofertasCreadasIDs[index];
      // alert(id);
      this.$router.push({name: nombremiraroferta, params:{id}})
    }
  },
  mounted(){
    $(document).ready(function(){
      const height = ($('.wrapper-dashboard').height() + $('.nav-wrapper').height()+50)*2;
      $('.wrapper-dashboard').css("height", height+"px");
    })
    if (this.usuarioLogineado.scope === "empleado") {
      this.getOfertasDeTrabajoDisponibles();
      this.getOfertasAplicadas();
    }else{
      this.getOfertasDeTrabajoCreadas();
    }
  },beforeMount(){
    this.usuarioLogineado.identidad = localStorage.getItem("identidad");
    this.usuarioLogineado.scope = localStorage.getItem("scope");
    // this.usuarioLogineado.identidad ="0101199202405"
    // this.usuarioLogineado.scope = "empleador"
    if (this.usuarioLogineado.identidad === "" && this.usuarioLogineado.scope === "") {
      this.$router.push({path:"/"});
    }
  }
}
</script>

<style>
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
.wrapper-dashboard{
  background: #e9e9e9;
  background-size: cover;
}

</style>
