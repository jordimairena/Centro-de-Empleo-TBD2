<template lang="html">
  <div class="lol">
    <div class="contenido">
      <h3>Modificar Empresa</h3>
      <input name="modificarempleador.nombreEmpresa" type="text"  placeholder="Nombre">
      <input name="modificarempleador.rtn" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="13" maxlength="13" placeholder="RTN ">
      <input name="modificarempleador.ceo" type="text"  placeholder="CEO ">
      <input name="modificarempleador.Direccion" type="text" placeholder="Direccion ">
      <input name="modificarempleador.Telefono" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="8" maxlength="8" placeholder="Numero de Telefono">
      <a name="empleador.aceptar" class="waves-effect waves-light btn">  Aceptar</a>
    </div>
  </div>
</template>

<script>
export default {
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
