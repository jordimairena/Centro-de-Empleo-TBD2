<template lang="html">
  <div class="form">
    <h1>Actualizar Oferta de Trabajo</h1>
    <div class="id">
      <p>ID:</p>
      <label>{{this.oferta._id}}</label>
    </div>
    <div class="tipo">
      <input type= "text" placeholder="Tipo de trabajo" v-model="oferta.puesto">
    </div>

    <div class="row requisitosPersonales">

      <div class="personales col s12 m4 l4 xl4">
        <p>Genero</p>
        <input type="radio" name="genero" id="m">
        <label for="m">Masculino</label>
        <input type="radio" name="genero" id="f">
        <label for="f">Femenino</label>
        <input type="radio" name="genero" id="ambos" checked>
        <label for="ambos">Ambos</label>
      </div>

      <div class="edad col s12 m4 l4 xl4">
        <p>Edad requerida</p>
        <input type="radio" name="edad" id="uno" checked>
        <label for="uno">25-35 años</label>
        <input type="radio" name="edad" id="dos">
        <label for="dos">36-45 años</label>
        <input type="radio" name="edad" id="tres">
        <label for="tres">46-55 años</label>
      </div>

      <div class="carro col s12 m4 l4 xl4">
        <p>¿Necesita Carro?</p>
        <input type="radio" name="carro" id="si">
        <label for="si">Si</label>
        <input type="radio" name="carro" id="no" checked>
        <label for="no">No</label>
      </div>
    </div>

    <div class="academicos">
      <p>Requisitos Academicos</p>
      <input type="radio" name="academico" id="primaria" checked>
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
            <td width="50%" contenteditable="true">{{rows[index].laboral}}</td>
            <td contenteditable="true">{{rows[index].profesional}}</td>
          </tr>
          <div class="more">
            <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons" v-on:click="addRow()">+</i></a>
          </div>

        </tbody>
      </table>
    </div>

    <div class="lugar">
      <input type="text" placeholder="Ubicacion de Empleo" v-model="oferta.lugar">
    </div>

    <div class="sueldo">
      <p>Sueldo Aproximado</p>
      <input type="text" placeholder="Sueldo" v-model="oferta.sueldo">
      <p>¿Es negociable?</p>
      <input type="radio" name="negocio" id="s" checked>
      <label for="s">Si</label>
      <input type="radio" name="negocio" id="n">
      <label for="n">No</label>
    </div>

    <div class="vacante">
      <input type="text" placeholder="Vacantes" required v-model="oferta.vacantes">
    </div>

    <div class="contrato">
      <p>Tipo de Contrato</p>
      <select id="sel">
        <option value="" disabled selected>Tipo de Contrato</option>
        <option id="1" value="1">Full Time</option>
        <option id="2"value="2">Half Time</option>
        <option id="3" value="3">Remoto</option>
      </select>
    </div>

    <div class="boton">
      <a class="waves-effect waves-light btn" v-on:click="udOferta()">Actualizar Oferta de Trabajo</a>
      <a class="waves-effect waves-light btn red" v-on:click="cancel()">Cancelar</a>
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
    $(document).ready(function() {
      $('select').material_select();
    });

    this.oferta._id="5a121e7dfc0cc74a94fc7741"
    this.$http.get(`http://localhost:8000/ofertas/searchbyid/`+this.oferta._id).then((response)=>{
      if(response.body.success===true){

        this.oferta.puesto=response.body.oferta.tipo_puesto;
        if(response.body.oferta.requisitos_personales[0]==="masculino"){
          $("#m").prop("checked",true);
        }else if(response.body.oferta.requisitos_personales[0]==="femenino"){
          $("#f").prop("checked",true);
        }else if(response.body.oferta.requisitos_personales[0]==="ambos"){
          $("#ambos").prop("checked",true);
        }

        if(response.body.oferta.requisitos_personales[1]==="25-35 años"){
          $("#uno").prop("checked",true);
        }else if(response.body.oferta.requisitos_personales[1]==="36-45 años"){
          $("#dos").prop("checked",true);
        }else if(response.body.oferta.requisitos_personales[1]==="46-55 años"){
          $("#tres").prop("checked",true);
        }
        if(response.body.oferta.requisitos_personales[2]==="Si"){
          $("#si").prop("checked",true);
        }else if(response.body.oferta.requisitos_personales[2]==="No"){
          $("#no").prop("checked",true);
        }

        if(response.body.oferta.requisitos_academicos==="primaria"){
          $("#primaria").prop("checked",true);
        }else if(response.body.oferta.requisitos_academicos==="secundaria"){
          $("#secundaria").prop("checked",true);
        }else if(response.body.oferta.requisitos_academicos==="universidad"){
          $("#universidad").prop("checked",true);
        }else if(response.body.oferta.requisitos_academicos==="mas"){
          $("#mas").prop("checked",true);
        }

        for (var i = 0; i < response.body.oferta.requisitos_profesionales.length-1; i++) {
          this.rows.push({laboral:response.body.oferta.requisitos_laborales[i+1],profesional:response.body.oferta.requisitos_profesionales[i+1]});
        }

        this.oferta.lugar=response.body.oferta.lugar_empleo;
        this.oferta.sueldo=response.body.oferta.sueldo;

        if(response.body.oferta.negociable==="si"){
          $("#s").prop("checked",true);
        }else if(response.body.oferta.negociable==="no"){
          $("#n").prop("checked",true);
        }

        this.oferta.vacantes = response.body.oferta.vacantes;
        alert(response.body.oferta.tipo_contrato);
        if(response.body.oferta.tipo_contrato==="Full Time"){
          $("#sel #1").prop("selected",true);
        }else if(response.body.oferta.tipo_contrato==="Half Time"){
          $("#sel #2").prop("selected",true);
        }else if(response.body.oferta.tipo_contrato==="Remoto"){
          $("#sel #3").prop("selected",true);
        }
      }
    });
  },
  methods:{
    addRow:function(){
      this.rows.push({laboral:"Inserte",profesional:"Inserte"});
    },

    udOferta:function(){
      if(this.oferta.puesto !="" && this.oferta.lugar!="" && this.oferta.sueldo){
        if($('input[name=genero]:checked').val()==="masculino"){
          this.oferta.personal.push("masculino");
        }
        if($('input[name=genero]:checked').val()==="femenino"){
          this.oferta.personal.push("femenino");
        }
        if($('input[name=genero]:checked').val()==="ambos"){
          this.oferta.personal.push("ambos");
        }
        if($('input[name=edad]:checked').val()==="25-35 años"){
          this.oferta.personal.push("25-35 años");
        }
        if($('input[name=edad]:checked').val()==="36-45 años"){
          this.oferta.personal.push("36-45 años");
        }
        if($('input[name=edad]:checked').val()==="46-55 años"){
          this.oferta.personal.push("46-55 años");
        }
        if($('input[name=carro]:checked').val()==="Si"){
          this.oferta.personal.push("Si");
        }
        if($('input[name=carro]:checked').val()==="No"){
          this.oferta.personal.push("No");
        }
        if($('input[name=academico]:checked').val()==="primaria"){
          this.oferta.academicos="primaria";
        }
        if($('input[name=academico]:checked').val()==="secundaria"){
          this.oferta.academicos="secundaria";
        }
        if($('input[name=academico]:checked').val()==="universidad"){
          this.oferta.academicos="universidad";
        }
        if($('input[name=academico]:checked').val()==="mas"){
          this.oferta.academicos="mas";
        }
        if($('input[name=negocio]:checked').val()==="si"){
          this.oferta.negociable="si";
        }
        if($('input[name=negocio]:checked').val()==="no"){
          this.oferta.negociable="no";
        }
        this.oferta.contrato=$('#sel').find(":selected").text();
        var sec_laborales= [];
        var sec_profesionales=[];
        $("#exp tr").each(function(){
          sec_laborales.push($(this).find("td:first").text());
        });

        $("#exp tr").each(function(){
          sec_profesionales.push($(this).find("td:nth-child(2)").text());
        });

        this.oferta.laborales=sec_laborales;
        this.oferta.profesionales=sec_profesionales;

        this.$http.put(`http://localhost:8000/ofertas/update/`+this.oferta._id,this.oferta).then((response)=>{
          if(response.body.success==true){
            sweetalert({
              title: "Genial!!!",
              text: "Tu oferta de trabajo ha sido actualizada con exito!",
              icon: "success",
            });
          }else{
            sweetalert({
              title: "Que mal!!!",
              text: "Tu oferta de trabajo no se pudo actualizar con exito!",
              icon: "error",
            });
          }
        });
      }else{
        sweetalert({
          title: "Hay Problemas!!!",
          text: "Tu oferta de trabajo no tiene todos los campos completos!",
          icon: "info",
        });
      }
    },
    cancel:function(){
      sweetalert({
        title: "¿Esta seguro de cancelar esta accion?",
        text: "Una vez que le de Aceptar sus datos se eliminaran.",
        icon: "warning",
        buttons: {
          cancel: "Noo!, Quiero quedarme!",
          defeat: "Aceptar"
        },
      }).then((value)=>{
        if(value){
          this.$router.push({path:"/home"});
        }
      })
    },
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
