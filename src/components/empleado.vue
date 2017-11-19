<template lang="html">
  <div class="form">
    <h1>Perfil de Empleado</h1>
    <div class="perfil">
      <div class="personales">
        <input v-model="empleado.name" type="text" placeholder="Nombre Completo">
        <input v-model="empleado.id" type="text" placeholder="ID">
        <input v-model="empleado.namePapa" type="text" placeholder="Nombre completo de Papa">
        <input v-model="empleado.nameMama" type="text" placeholder="Nombre completo de Mama">
      </div>

      <div class="row">

        <div class="civil col s12 m6 l6 xl6">
          <p>Estado Civil</p>
          <p class="estado">
            <input type="radio" name="civil" id="soltero">
            <label for="soltero">Soltero</label>
            <input type="radio" name="civil" id="casado">
            <label for="casado">Casado</label>
            <input type="radio" name="civil" id="viudo">
            <label for="viudo">Viudo</label>
            <input type="radio" name="civil" id="divorciado">
            <label for="divorciado">Divorciado</label>
          </p>
        </div>

        <div class="nacionalidad col s12 m6 l6 xl6">
          <div class="input-field col s12">
            <p>Nacionalidad</p>
            <select>
              <option value="" disabled selected>Escoja su Nacionalidad</option>
              <option value="1">Hondureña</option>
              <option value="2">Guatemalteca</option>
              <option value="3">Salvadoreña</option>
              <option value="4">Estadounidense</option>
              <option value="5">Otro...</option>
            </select>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="gender col s12 m6 l6 xl6">
          <p>Genero</p>
          <p class="Genero">
            <input type="radio" name="genero" id="m">
            <label for="m">Masculino</label>
            <input type="radio" name="genero" id="f">
            <label for="f">Femenino</label>
          </p>
        </div>

        <div class="antecedentes col s12 m6 l6 xl6">
          <p>Antecedentes Penales</p>
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="primaria col s12 m6 l6 xl6">
          <p>Educacion Primaria</p>
          <input type="text" placeholder="Promedio">
          <input type="text" placeholder="Centro de Estudio">
        </div>

        <div class="secundaria col s12 m6 l6 xl6">
          <p>Educacion Secundaria</p>
          <input type="text" placeholder="Promedio">
          <input type="text" placeholder="Centro de Estudios">
          <input type="text" placeholder="Carrera">
        </div>
      </div>

      <div class="row">
        <div class="universidad col s12 m6 l6 xl6">
          <p>Educacion Universitaria</p>
          <input type="text" placeholder="Promedio">
          <input type="text" placeholder="Centro de Estudios">
          <input type="text" placeholder="Carrera">
        </div>

        <div class="mas col s12 m6 l6 xl6">
          <input type="radio" id="mas">
          <label for="mas">Mas...</label>
        </div>
      </div>

      <div class="experiencia">
        <p>Experiencia Laboral</p>
        <table id="exp">
          <thead>
            <tr>
              <th>Nombre de Empresa</th>
              <th>Meses que estuvo</th>
              <th>Puesto</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(ros,index) in rows">
              <td contenteditable="true">Inserte</td>
              <td contenteditable="true">Inserte</td>
              <td contenteditable="true">Inserte</td>
            </tr>
            <div class="more">
              <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons" v-on:click="addRow()">+</i></a>
            </div>

          </tbody>
        </table>
      </div>

      <div class="requisito">
        <input type="text" placeholder="Salario aspirado">
        <div class="contrato">
          <div class="input-field col s12">
            <p>Tipo de Contrato</p>
            <select>
              <option value="" disabled selected>Tipo de Contrato</option>
              <option value="1">Full Time</option>
              <option value="2">Half Time</option>
              <option value="3">Remoto</option>
            </select>
          </div>
        </div>
        <input type="text" placeholder="Puesto a Buscar">
      </div>

      <div class="boton">
        <a class="waves-effect waves-light btn">Crear Perfil</a>
      </div>
    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert'
export default {
  data(){
    return{
      empleado:{
        name:"",
        id:"",
        namePapa:"",
        nameMama:"",
      },
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

<style>

body{
  background-color: #76b852;
}

h1{
  padding-top: 5%!important;
  padding-left: 20%;
  font-family: 'Roboto Slab', serif;
}

.form{
  margin-left: 20%;
  margin-right:20%;
  margin-bottom: 5%;
  background-color: white;
  box-shadow: 10px 10px 5px #888888;
}

.personales{
  margin-left: 5%;
  margin-right: 10%;
}

.nacionalidad p{
  margin-bottom: 0%;
}

.nacionalidad .input-field{
  margin-top: 0%;
  padding-left: 0%;
  padding-right: 20%;
}

.antecedentes{
  padding-right: 10%!important;
}

.mas{
  margin-top: 5%;
}

.primaria{
  padding-left: 5%!important;
}

.secundaria{
  padding-right: 10%!important;
}

.universidad{
  padding-left: 5%!important;
}

.experiencia{
  padding-left: 5%;
  padding-right: 10%;
}

.more{
  margin-top: 10%;
  margin-left: 220%;
}

.requisito{
  margin-left: 5%;
  margin-right: 10%;
  margin-bottom: 5%;
}

.boton{
  margin-top: 0%;
  padding-bottom: 10%;
  padding-left: 40%
}

</style>
