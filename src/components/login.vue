<template lang="html">
  <div class="wrapper-login">
    <div class="login-page">
      <div class="form">
        <H1>Empleos</H1>
        <form class="register-form">
          <input v-model="userSignin.nombre" type="text" placeholder="Nombre">
          <input v-model="userSignin.identidad" type="text" placeholder="Identidad">
          <input v-model="userSignin.password" type="password" placeholder="Contraseña">
          <button>CREAR</button>
          <p class="message">Ya estas registrado? <a href="#" v-on:click="clickCrearCuenta()">Inicia Sesion!</a></p>
        </form>
        <form class="login-form">
          <input v-model="userLogin.identidad" type="text" placeholder="Identidad">
          <input v-model="userLogin.password" type="password" placeholder="Contraseña">
          <button v-on:click="LogIn()">Iniciar Sesión</button>
          <p class="message">No estas registrado? <a href="#" v-on:click="clickCrearCuenta()">Crea una cuenta</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert'
export default {
  data(){
    return{
      userLogin:{
        identidad: "",
        password: ""
      },
      userSignin:{
        identidad:"",
        nombre:"",
        password:""
      }
    }
  },
  methods:{
    clickCrearCuenta:function(){
       $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },
    LogIn:function(){
      const {identidad, password} = this.userLogin;
      alert("Login... id: " + identidad + "password: "+password);

      sweetAlert(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      //Cambiar el enlace de localhost a conveniencia.
      this.$http.post("http://localhost:8000/login", this.userLogin).then((res)=>{
        if (res.body.success === true) {
          localStorage.setItem("identidad", identidad);
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
          this.userLogin.identidad = "";
          this.userLogin.password = "";
        }
      });
    }
  }
}
</script>


<style lang="css" scoped>
  .login-page{
    width: 420px;
    padding: 8% 0 0;
    margin: auto;
  }

  .form{
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 380px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 10px 10px 5px #888888;
  }

  .form input{
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    /*border: 0;*/
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
  }

  .form button{
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    transition: all 0.3 ease;
    cursor: pointer;
  }

  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #43A047;
  }

  .form .message{
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }

  .form .register-form{
    display: none;
  }

  .wrapper-login{
    background: #76b852;
    height: 100vh;
  }
</style>
