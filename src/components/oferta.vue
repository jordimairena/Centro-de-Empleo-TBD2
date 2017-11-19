<template lang="html">
  <div class="form">
    <h1>Nueva Oferta de Trabajo</h1>
    <div class="tipo">
      <input type= "text" placeholder="Tipo de trabajo">
    </div>

    <div class="row requisitosPersonales">

      <div class="personales col s12 m4 l4 xl4">
        <p>Genero</p>
        <input type="radio" name="genero" id="m">
        <label for="m">Masculino</label>
        <input type="radio" name="genero" id="f">
        <label for="f">Femenino</label>
        <input type="radio" name="genero" id="ambos">
        <label for="ambos">Ambos</label>
      </div>

      <div class="edad col s12 m4 l4 xl4">
        <p>Edad requerida</p>
        <input type="radio" name="edad" id="uno">
        <label for="uno">25-35 años</label>
        <input type="radio" name="edad" id="dos">
        <label for="dos">36-45 años</label>
        <input type="radio" name="edad" id="tres">
        <label for="tres">46-55 años</label>
      </div>

      <div class="carro col s12 m4 l4 xl4">
        <p>¿Nesecita Carro?</p>
        <input type="radio" name="carro" id="si">
        <label for="si">Si</label>
        <input type="radio" name="carro" id="no">
        <label for="no">No</label>
      </div>
    </div>

    <div class="academicos">
      <p>Requisitos Academicos</p>
      <input type="radio" name="academico" id="primaria">
      <label for="primaria">Primaria</label>
      <input type="radio" name="academico" id="secundaria">
      <label for="secundaria">Secundaria</label>
      <input type="radio" name="academico" id="universidad">
      <label for="universidad">Universidad</label>
      <input type="radio" name="academico" id="mas">
      <label for="mas">Mas</label>
    </div>

    <div class="laborales">
      <p>Experiencia Laboral y Profesional</p>
      <table id="exp">
        <thead>
          <tr>
            <th>Experiencia Laboral</th>
            <th>Experiencia Pofesional</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(ros,index) in rows">
            <td width="50%" contenteditable="true">Inserte</td>
            <td contenteditable="true">Inserte</td>
          </tr>
          <div class="more">
            <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons" v-on:click="addRow()">+</i></a>
          </div>

        </tbody>
      </table>
    </div>

    <div class="lugar">
      <input type="text" placeholder="Ubicacion de Empleo">
    </div>

    <div class="sueldo">
      <p>Sueldo Aproximado</p>
      <input type="text" placeholder="Sueldo">
      <p>¿Es negociable?</p>
      <input type="radio" name="negocio" id="s">
      <label for="s">Si</label>
      <input type="radio" name="negocio" id="n">
      <label for="n">No</label>
    </div>

    <div class="contrato">
      <p>Tipo de Contrato</p>
      <select>
        <option value="" disabled selected>Tipo de Contrato</option>
        <option value="1">Full Time</option>
        <option value="2">Half Time</option>
        <option value="3">Remoto</option>
      </select>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      rows:[

      ],
    }
  },
  beforeMount(){
    $(document).ready(function() {
      $('select').material_select();
    });
  },
  methods:{
    addRow:function(){
      this.rows.push({});
    }
  },
}
</script>

<style lang="css">
body{
  background-color: #76b852;
}
h1{
  padding-top: 5%!important;
  font-family: 'Roboto Slab', serif;
}
.form{
  margin-left: 20%;
  margin-right:20%;
  margin-bottom: 5%;
  background-color: white;
  box-shadow: 10px 10px 5px #888888;
}

.tipo{
  margin-left: 10%;
  margin-right: 10%;
}

.requisitosPersonales{
  padding-bottom: 2%;
}

.academicos{
  padding-bottom: 2%;
}

.laborales{
  padding-left: 10%;
  padding-right: 10%;
}

.more{
  margin-top: 10%;
  margin-left: 200%;
}

.lugar{
  margin-left: 10%;
  margin-right: 10%;
}

.sueldo{
  margin-left: 10%;
  margin-right: 10%;
}

.contrato{
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 5%;
}

#exp td{
  word-wrap: break-word;
}
</style>
