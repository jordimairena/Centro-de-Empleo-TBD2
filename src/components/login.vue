<template lang="html">
  <div class="wrapper-login">
    <div class="login-page">
      <div class="form-login">
        <h1>Empleos</h1>
        <form class="register-form">
          <input v-model="userSignin.nombre" type="text" placeholder="Nombre">
          <input v-model="userSignin.identidad" type="text" placeholder="Identidad">
          <input v-model="userSignin.password" type="password" placeholder="Contraseña">
          <div class="radiobotones-signup">
            <input v-model="userSignin.scope" value="empleado" type="radio" name="radio-empleado" id="radio-empleado" checked="checked">
            <label for="radio-empleado">Empleado</label>
            <input v-model="userSignin.scope" type="radio" value="empleador" name="radio-empleado" id="radio-empleador">
            <label for="radio-empleador">Empleador</label>
          </div>
          <button v-on:click="SignUp()" type="button">CREAR</button>
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
        password:"",
        scope:"empleado"
      }
    }
  },
  methods:{
    clickCrearCuenta:function(){
       $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },
    LogIn:function(){
      const {identidad, password} = this.userLogin;
      // alert("Login... id: " + identidad + "password: "+password);
      //
      // sweetAlert(
      //   'Good job!',
      //   'You clicked the button!',
      //   'success'
      // )
      //Cambiar el enlace de localhost a conveniencia.
      this.$http.post("http://localhost:8000/login", this.userLogin).then((res)=>{
        if (res.body.success === true) {
          alert(identidad);
          localStorage.setItem("identidad", identidad);
          //Propongo usar scopes "empleado" o "empresa"
          if (res.body.scope === "empleado") {
            // localStorage.setItem("identidad", this.userLogin.id);
            this.userLogin.identidad = "";
            this.userLogin.password = "";

            sweetAlert(
              'Good job!',
              'You clicked the button!',
              'success'
            )

            localStorage.setItem("scope", res.body.scope)

            this.$router.push({path:"/home"});
            //Redireccionar al home del empleado
          }else if(res.body.scope === "empleador"){
            // localStorage.setItem("identidad", this.userLogin.id);
            this.userLogin.identidad = "";
            this.userLogin.password = "";

            sweetAlert(
              'Good job!',
              'You clicked the button!',
              'success'
            )

            localStorage.setItem("scope", res.body.scope)

            this.$router.push({path:"/home"});
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
    }, SignUp:function(){
      const {nombre, identidad, password, scope} = this.userSignin;
      this.$http.get(`http://localhost:8000/checkid/${identidad}`).then((res)=>{
        if (res.body.existe === true) {
          sweetAlert(
            'Oops...',
            'Ya existe una cuenta con esa identidad',
            'error'
          )
        }else if (res.body.existe === false) {
          sweetAlert(
            'Good job!',
            'Bienvenido!',
            'success'
          )
          if (scope==="empleado") {
            this.$router.push({name: 'empleado', params:{nombre, identidad, password, scope}})
          }else if (scope === "empleador") {
            this.$router.push({name: 'empleador', params:{nombre, identidad, password, scope}})
          }
        }
        this.userSignin.nombre = "";
        this.userSignin.identidad = "";
        this.userSignin.password = "";
        this.userSignin.scope = "empleado";
      })
    }
  }
}
</script>


<style scoped>
  .login-page{
    width: 420px;
    padding: 8% 0 0;
    margin: auto;
  }

  .form-login{
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 380px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 10px 10px 5px #888888;
  }

  .form-login input{
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

  .form-login button{
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

  .form-login button:hover,
  .form-login button:active,
  .form-login button:focus {
    background: #43A047;
  }

  .form-login .message{
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .form-login .message a {
    color: #4CAF50;
    text-decoration: none;
  }

  .form-login .register-form{
    display: none;
  }

  .wrapper-login{
    background: #76b852;
    height: 100vh;
  }

  .radiobotones-signup{
    margin: 5px auto;
  }
</style>
