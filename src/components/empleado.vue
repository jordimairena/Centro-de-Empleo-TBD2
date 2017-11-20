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
            <input v-model="empleado.civil" type="radio" name="civil" id="soltero" value="soltero">
            <label for="soltero">Soltero</label>
            <input v-model="empleado.civil" type="radio" name="civil" id="casado" value="casado">
            <label for="casado">Casado</label>
            <input v-model="empleado.civil" type="radio" name="civil" id="viudo" value="viudo">
            <label for="viudo">Viudo</label>
            <input v-model="empleado.civil" type="radio" name="civil" id="divorciado" value="divorciado">
            <label for="divorciado">Divorciado</label>
          </p>
        </div>

        <div class="nacionalidad col s12 m6 l6 xl6">
          <div class="input-field col s12">
            <p>Nacionalidad</p>
            <select v-model="empleado.nacionalidad" id="selectNacionalidad">
              <option value="" disabled>Escoja su Nacionalidad</option>
              <option value="hondureña">Hondureña</option>
              <option value="guatemalteca">Guatemalteca</option>
              <option value="salvadoreña">Salvadoreña</option>
              <option value="estadounidense">Estadounidense</option>
              <option value="Otro">Otro...</option>
            </select>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="gender col s12 m6 l6 xl6">
          <p>Genero</p>
          <p class="Genero">
            <input v-model="empleado.genero" type="radio" name="genero" id="m" value="masculino">
            <label for="m">Masculino</label>
            <input v-model="empleado.genero" type="radio" name="genero" id="f" value="femenino">
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
          <input v-model="empleado.primaria_promedio" type="text" placeholder="Promedio">
          <input v-model="empleado.primaria_centro" type="text" placeholder="Centro de Estudio">
        </div>

        <div class="secundaria col s12 m6 l6 xl6">
          <p>Educacion Secundaria</p>
          <input v-model="empleado.secundaria_promedio" type="text" placeholder="Promedio">
          <input v-model="empleado.secundaria_centro" type="text" placeholder="Centro de Estudios">
          <input v-model="empleado.secundaria_carrera" type="text" placeholder="Carrera">
        </div>
      </div>

      <div class="row">
        <div class="universidad col s12 m6 l6 xl6">
          <p>Educacion Universitaria</p>
          <input v-model="empleado.universidad_promedio" type="text" placeholder="Promedio">
          <input v-model="empleado.universidad_centro" type="text" placeholder="Centro de Estudios">
          <input v-model="empleado.universidad_carrera" type="text" placeholder="Carrera">
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
        <input type="text" placeholder="Salario aspirado" v-model="empleado.salario_aspirado">
        <div class="contrato">
          <div class="input-field col s12">
            <p>Tipo de Contrato</p>
            <select v-model="empleado.tipo_contrato" id="selectTipoContrato">
              <option value="" disabled>Tipo de Contrato</option>
              <option value="full-time">Full Time</option>
              <option value="half-time">Half Time</option>
              <option value="remoto">Remoto</option>
            </select>
          </div>
        </div>
        <input type="text" placeholder="Puesto a Buscar" v-model="empleado.puesto_a_buscar">
      </div>

      <div class="boton">
        <a class="waves-effect waves-light btn" v-on:click="save()">Crear Perfil</a>
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
        civil:"soltero",
        nacionalidad:"",
        genero: "masculino",
        primaria_promedio:"",
        primaria_centro:"",
        secundaria_promedio:"",
        secundaria_centro:"",
        secundaria_carrera:"",
        secundaria_carrera:"",
        universidad_promedio:"",
        universidad_centro:"",
        universidad_carrera:"",
        salario_aspirado:"",
        tipo_contrato:"",
        puesto_a_buscar:"",
        experiencia_laboral:[],
        scope:"",
        password:""
      },
      rows:[
      ],
    }
  },
  beforeMount(){
    $(document).ready(function() {
      $('select').material_select();
    });
  },mounted(){
    const {nombre, identidad, password, scope} = this.$route.params;
    // alert(nombre+" - "+identidad+" - "+password+" - "+scope)
    // alert(this.$route.params.nombre)
    this.empleado.name = nombre;
    this.empleado.id = identidad;
    this.empleado.password = password;
    this.empleado.scope = scope;
  },
  methods:{
    addRow:function(){
      this.rows.push({});
    }, save:function(){
      var sec_nombreEmpresa= [];
      var sec_meses=[];
      var sec_puesto=[];
      $("#exp tr").each(function(){
          sec_nombreEmpresa.push($(this).find("td:first").text());
      });

      $("#exp tr").each(function(){
          sec_meses.push($(this).find("td:nth-child(2)").text());
      });
      $("#exp tr").each(function(){
          sec_puesto.push($(this).find("td:nth-child(3)").text());
      });
      var experiencia_laboral_temp = [];
      for (var i = 0; i < sec_nombreEmpresa.length; i++) {
        if (i > 0) {
          const arreglo = {nombreEmpresa: sec_nombreEmpresa[i], meses: sec_meses[i], puesto: sec_puesto[i]}
          experiencia_laboral_temp.push(arreglo);
        }
      }
      this.experiencia_laboral = experiencia_laboral_temp;

      this.empleado.nacionalidad = $('#selectNacionalidad').find(":selected").text();
      this.empleado.tipo_contrato = $('#selectTipoContrato').find(":selected").text();


      this.$http.post('http://localhost:8000/empleados/create', this.empleado).then((res)=>{
        if (res.body.success === true) {
          sweetAlert(
            'Good job!',
            'Bienvenido!',
            'success'
          )
          localStorage.setItem("identidad", this.empleado.id);
          localStorage.setItem("scope", this.empleado.scope);
          this.$router.push({path:"/home"});
        }else if (res.body.success === false) {
          console.log(res.body.error);
          sweetAlert(
            'Oops...',
            'Lo siento. Ocurrio un error.',
            'error'
          )
        }
      });
      // this.empleado.laborales=sec_laborales;
      // this.oferta.profesionales=sec_profesionales;
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
