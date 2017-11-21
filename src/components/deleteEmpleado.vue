<template >
  <div class="contenedor">
    <div class="container4">
      <p class="center-align">
        Al presionar "Aceptar", su cuenta sera borrada permanentemente y no se podra recuperar.
      </p>
      <br>
      <p class="center-alaign">¿Esta seguro que desea eliminar su cuenta?</p>
      <p class="center-align">
        <a name="empleado_delete" class="waves-effect waves-light btn" v-on:click="deleteEmpleado()">  Aceptar</a>
        <a name="empleado_delete" class="waves-effect waves-light btn" v-on:click="cancelar()">  Cancelar</a>
      </p>

    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetAlert'
export default {
  data(){
  },
  methods:{
    deleteEmpleado(){
      var identificacion = localStorage.getItem('identidad');
      this.$http.delete('http://localhost:8000/empleados/deleteIdentificacion/'+identificacion).then((response)=>{
        if (response.body.success==true){
          sweetAlert({
            title:"Correcto",
            text:"Eliminado con exito",
            icon:"sucess"
          });
          this.$router.push({path:"/"});
        }else{
          sweetAlert(
            'error',
            'Error!',
            'error'
          )
        }
      });
    },
    cancelar(){
      this.$router.push({path:"/home"});
    }
  }
}
</script>

<style lang="css">
.container4{
  position: relative;
  z-index: 1;
  background-color: white;
  max-width: 70%;
  max-height: 0%;
  margin: 0 auto 0;
  padding: 45px;
  text-align: top center;
  box-shadow: 10px 10px 5px #888888;
}
P{
  text-align: center;
}
.contenedor{
  margin: 200px 100px 200px 100px;
}
.empleado_delete{

}
body{
  background: #76b852;
}
@media(max-width: 480px){
  .contenido{
    position: relative;
    z-index: 1;
    background-color: white;
    max-width: 380px;
    max-height: 0%;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 10px 10px 5px #888888;
    border-style: solid;
  }
}
</style>
