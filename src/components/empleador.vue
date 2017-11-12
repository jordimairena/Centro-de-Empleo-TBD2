<template lang="html">
  <div class="lol">
    <div class="contenido">
      <h3>Nueva Empresa</h3>
      <input v-model="empleador.nombreEmpresa" type="text"  placeholder="Nombre">
      <input v-model="empleador.rtn"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' placeholder="RTN ">
      <input v-model="empleador.ceo" type="text"  placeholder="CEO ">
      <input v-model="empleador.Direccion" type="text" placeholder="Direccion ">
      <input v-model="empleador.Telefono" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' placeholder="Numero de Telefono">
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
        nombreEmpresa: "",
        rtn: "",
        ceo: "",
        Direccion: "",
        Telefono: ""
      }
    }
  },
  methods:{
    CreoEmpresa:function(){
      const {nombreEmpresa,rtn,ceo,Direccion,Telefono} = this.empleador;
      // alert("Nombre Empresa: " + nombreEmpresa + "RTN: "+rtn);
      if(this.empleador.nombreEmpresa===""&&this.empleador.rtn===""&&this.empleador.ceo===""&&this.empleador.Direccion===""&&this.empleador.Telefono===""){
        sweetAlert( "Oopsie" ,  "Un campo esta vacio!" ,  "error" )
      }else{
      sweetAlert(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
      this.$http.post("http://localhost:8000/newempleador", this.empleador).then((res)=>{
        if (res.body.success === true) {
          localStorage.setItem("Ceo", ceo);
          //Propongo usar scopes "empleado" o "empresa"
          if (res.body.scope[0] === "empleado") {
            this.userLogin.identidad = "";
            this.userLogin.password = "";

            sweetAlert(
              'Good job!',
              'You clicked the button!',
              'success'
            )

            //Redireccionar al home del empleado
          }else if(res.body.scope[0] === "empresa"){
            this.userLogin.identidad = "";
            this.userLogin.password = "";

            sweetAlert(
              'Good job!',
              'You clicked the button!',
              'success'
            )

            //Redireccionar al home de la empresa
          }
        }else if(res.body.success === false) {
          sweetAlert(
            'Oops...',
            'Usuario o contraseña incorrectos',
            'error'
          )

        }
      });
    }
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
