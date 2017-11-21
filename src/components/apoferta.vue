<template lang="html">
  <div class="form">
    <h1 class="center-align">Oferta de Trabajo</h1>
    <div class="id">
      <p>ID:</p>
      <label>{{this.oferta._id}}</label>
    </div>
    <div class="tipo">
      <p class="center-align">{{this.oferta.id}}</p>
    </div>

    <div class="row requisitosPersonales">

      <div class="personales col s12 m4 l4 xl4">
        <p class="center-align">Genero</p>
        <p class="center-align">{{this.oferta.personal[0]}}</p>
      </div>

      <div class="edad col s12 m4 l4 xl4">
        <p class="center-align">Edad requerida</p>
        <p class="center-align">{{this.oferta.personal[1]}}</p>
      </div>

      <div class="carro col s12 m4 l4 xl4">
        <p class="center-align">¿Nesecita Carro?</p>
        <p class="center-align">{{this.oferta.personal[2]}}</p>
      </div>
    </div>
    <div class="tipo">
      <p class="center-align">Requisitos Academicos:</p>
      <p class="center-align">{{this.oferta.academicos}}</p>
    </div>
    <br>
    <br>
    <div class="laborales">
      <table id="exp">
        <thead>
          <tr>
            <th>Experiencia Laboral</th>
            <th>Experiencia Pofesional</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(ros,index) in rows">
            <td width="50%" contenteditable="false">{{rows[index].laboral}}</td>
            <td contenteditable="false">{{rows[index].profesional}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div class="lugar">
      <p>Lugar: {{this.oferta.lugar}}</p>
    </div>

    <div class="sueldo">
      <p>Sueldo Aproximado: {{this.oferta.sueldo}}</p>
      <p>¿Es negociable?</p>
      <p class="center-align">{{this.oferta.negociable}}</p>
    </div>

    <div class="vacante">
      <p>Vacantes: {{this.oferta.vacantes}}</p>
    </div>

    <div class="contrato">
      <p>Tipo de Contrato: {{this.oferta.contrato}}</p>
    </div>

    <div class="boton">
      <p class="center-align">
      <a class="waves-effect waves-light btn">Signup</a>
      <a class="waves-effect waves-light btn red" v-on:click="cancel()">Cancelar</a>
    </p>


    </div>
  </div>

</template>

<script>
import sweetalert from 'sweetalert'
export default {
  data(){
    return{
      oferta:{
        _id:'',
        puesto:'',
        personal:'',
        academicos:'',
        laborales:'',
        profesionales:'',
        lugar:'',
        sueldo:'',
        negociable:'',
        contrato:'',
        vacantes:''
      },
      rows:[

      ],
    }
  },
  beforeMount(){
    //this.oferta._id="5a121e7dfc0cc74a94fc7741"
    this.oferta._id = this.$route.params.id;
    this.$http.get(`http://localhost:8000/ofertas/searchbyid/`+this.oferta._id).then((response)=>{
      if(response.body.success===true){

        this.oferta.puesto=response.body.oferta.tipo_puesto;
        this.oferta.personal=response.body.oferta.requisitos_personales;
        this.oferta.academicos=response.body.oferta.requisitos_academicos;
        for (var i = 0; i < response.body.oferta.requisitos_profesionales.length-1; i++) {
          this.rows.push({laboral:response.body.oferta.requisitos_laborales[i+1],profesional:response.body.oferta.requisitos_profesionales[i+1]});
        }
        this.oferta.lugar=response.body.oferta.lugar_empleo;
        this.oferta.sueldo=response.body.oferta.sueldo;
        this.oferta.vacantes = response.body.oferta.vacantes;
        this.oferta.contrato = response.body.oferta.tipo_contrato;
      }
  });
},
methods:{
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

.id{
  margin-left: 5%;
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

.vacante{
  margin-left: 10%;
  margin-right: 10%;
}

.contrato{
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 5%;
}

.boton{
  margin-left: 25%;
  padding-bottom: 5%;
}

#exp td{
  word-wrap: break-word;
}
</style>
