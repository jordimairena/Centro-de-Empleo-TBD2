<template lang="html">
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Identidad">
        <input type="password" placeholder="Contraseña">
        <button>CREAR</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form>
      <form class="login-form">
        <input type="text" placeholder="Identidad">
        <input type="password" placeholder="Contraseña">
        <button>Iniciar Sesión</button>
        <p class="message">No estas registrado? <a href="#">Crea una cuenta</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
