<template lang="html">
  <div class="form-empleador">
    <div class="contenido">
      <h3>Modificar Empresa</h3>
      <input v-model="empleador.nombre_empresa" type="text" >
      <input v-model="empleador.rtn" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="13" maxlength="13" >
      <input v-model="empleador.ceo" type="text" >
      <input v-model="empleador.direccion" type="text">
      <input v-model="empleador.telefono" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="8" maxlength="8">
      <input v-model="empleador.password" type="password" >
      <a name="empleador.aceptar" class="waves-effect waves-light btn" v-on:click="editEmpleador()">  Aceptar</a>
      <a name="empleador.cancelar" class="waves-effect waves-light btn" v-on:click="cancelar()">Cancelar</a>
    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert'
export default {
  data(){
    return{
      empleador:{
      },
      loading:false
    }
  },
  methods:{
    getEmpleador(){
      localStorage.setItem("identidad","1111111111111");
      var rtn = localStorage.getItem('identidad');
      this.$http.get('http://localhost:8000/empleadores/searchbyRTN/'+rtn).then((response)=>{
        this.empleador=response.body[0];
        // console.log(response.body[0]);
      });
    },
    editEmpleador(){
      var _id= this.empleador._id;
      this.$http.put('http://localhost:8000/empleadores/update/'+_id,this.empleador).then((response)=>{
        console.log(response.body);
        if (response.body.success==true){
          sweetAlert({
            title:"Correcto",
            text:"Modificado con exito",
            icon:"sucess"
          });
          localStorage.setItem("identidad", this.empleador.rtn);
          this.$router.push({path:"/home"});
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
  },
  beforeMount(){
    this.getEmpleador();
  }
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
.form-empleador{
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
