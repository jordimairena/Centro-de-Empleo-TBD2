<template lang="html">
  <div class="lol">
    <div class="contenido">
      <h3>Nueva Empresa</h3>
      <input v-model="empleador.nombre_empresa" type="text"  placeholder="Nombre">
      <input v-model="empleador.rtn" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="13" maxlength="13" placeholder="RTN ">
      <input v-model="empleador.ceo" type="text"  placeholder="CEO ">
      <input v-model="empleador.direccion" type="text" placeholder="Direccion ">
      <input v-model="empleador.telefono" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="8" maxlength="8" placeholder="Numero de Telefono">
      <a name="empleador.aceptar" class="waves-effect waves-light btn" v-on:click="CreoEmpresa()">  Aceptar</a>

    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert'
export default {
  data(){
    return{
      empleador:{
        nombre_empresa: "",
        rtn: "",
        ceo: "",
        direccion: "",
        telefono: ""
      },
    }
  },
    methods:{
      //no se cierra bien
      CreoEmpresa:function(){
        const {nombreEmpresa,rtn,ceo,Direccion,Telefono} = this.empleador;
        // alert("Nombre Empresa: " + nombreEmpresa + "RTN: "+rtn);
        if(this.empleador.nombre_empresa.length===0 &&this.empleador.ceo.length===0 &&this.empleador.direccion.length===0){
          Materialize.toast('Un campo esta vacio!', 3000)
        }else if (this.empleador.rtn.length != 13) {
          // alert("length must be exactly 13 characters")
          Materialize.toast('RTN debe contener 13 numeros', 3000)
        }else if(this.empleador.telefono.length !=8){
          Materialize.toast('Numero de telefono invalido!', 3000)
        }else{
          //   sweetAlert(
          //     'Good job!',
          //     'You clicked the button!',
          //     'success'
          //   )
        }
          this.$http.post(`http://localhost:8000/empleadores/create`,this.empleador).then((response)=>{
            if(response.body.success==true){
              sweetAlert({
                title: "Genial!!!",
                text: "Empleador ha sido creado con exito!",
                icon: "success",
              });
              this.empleador.nombre_empresa="";
              this.empleador.rtn="";
              this.empleador.ceo="";
              this.empleador.direccion="";
              this.empleador.telefono="";
            }else {
              alert("ijihiu");
            }
          });

      },

    },
  }
</script>

<style lang="css">

.contenido{
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


.lol{
  margin: 0;
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
  }
}

</style>
