<template lang="html">
  <div class="form">
    <h1>Nueva Oferta de Trabajo</h1>
    <div class="tipo">
      <input type= "text" placeholder="Tipo de trabajo" required v-model="oferta.puesto">
    </div>

    <div class="row requisitosPersonales">

      <div class="personales col s12 m4 l4 xl4">
        <p>Genero</p>
        <input type="radio" name="genero" id="m" value="masculino">
        <label for="m">Masculino</label>
        <input type="radio" name="genero" id="f" value="femenino">
        <label for="f">Femenino</label>
        <input type="radio" name="genero" id="ambos" value="ambos" checked>
        <label for="ambos">Ambos</label>
      </div>

      <div class="edad col s12 m4 l4 xl4">
        <p>Edad requerida</p>
        <input type="radio" name="edad" id="uno" value="25-35 años" checked>
        <label for="uno">25-35 años</label>
        <input type="radio" name="edad" id="dos" value="36-45 años">
        <label for="dos">36-45 años</label>
        <input type="radio" name="edad" id="tres" value="46-55 años">
        <label for="tres">46-55 años</label>
      </div>

      <div class="carro col s12 m4 l4 xl4">
        <p>¿Necesita Carro?</p>
        <input type="radio" name="carro" id="si" value="Si">
        <label for="si">Si</label>
        <input type="radio" name="carro" id="no" value="No" checked>
        <label for="no">No</label>
      </div>
    </div>

    <div class="academicos">
      <p>Requisitos Academicos</p>
      <input type="radio" name="academico" id="primaria" value="primaria" checked>
      <label for="primaria">Primaria</label>
      <input type="radio" name="academico" id="secundaria" value="secundaria">
      <label for="secundaria">Secundaria</label>
      <input type="radio" name="academico" id="universidad" value="universidad">
      <label for="universidad">Universidad</label>
      <input type="radio" name="academico" id="mas" value="mas">
      <label for="mas">Mas</label>
    </div>

    <div class="laborales">
      <p>Experiencia Laboral y Profesional</p>
      <table id="exp">
        <thead>
          <tr>
            <th>Experiencia Laboral</th>
            <th>Experiencia Profesional</th>
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
      <input type="text" placeholder="Ubicacion de Empleo" required v-model="oferta.lugar">
    </div>

    <div class="sueldo">
      <p>Sueldo Aproximado</p>
      <input type="text" placeholder="Sueldo" required v-model="oferta.sueldo">
      <p>¿Es negociable?</p>
      <input type="radio" name="negocio" id="s" value="si" checked>
      <label for="s">Si</label>
      <input type="radio" name="negocio" id="n" value="no">
      <label for="n">No</label>
    </div>

    <div class="vacante">
      <input type="text" placeholder="Vacantes" required v-model="oferta.vacantes">
    </div>

    <div class="contrato">
      <p>Tipo de Contrato</p>
      <select id="contrato">
        <option value="" disabled selected>Tipo de Contrato</option>
        <option value="1">Full Time</option>
        <option value="2">Half Time</option>
        <option value="3">Remoto</option>
      </select>
    </div>

    <div class="boton">
      <a class="waves-effect waves-light btn" v-on:click="addOferta()">Crear Oferta de Trabajo</a>
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
        puesto:'',
        personal:[],
        academicos:'',
        laborales:[],
        profesionales:[],
        lugar:'',
        sueldo:'',
        nogociable:'',
        contrato:'',
        vacantes:'',
        id_empleador:'',
      },
      rows:[

      ],
    }
  },
  beforeMount(){
    $(document).ready(function() {
      $('select').material_select();
    });
    this.id_empleador=localStorage.getItem("id");
  },
  methods:{
    addRow:function(){
      this.rows.push({});
    },

    addOferta:function(){
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
        this.oferta.contrato=$('#contrato').find(":selected").text();

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

        this.$http.post(`http://localhost:8000/ofertas/create`,this.oferta).then((response)=>{
          if(response.body.success==true){
            sweetalert({
              title: "Genial!!!",
              text: "Tu oferta de trabajo ha sido creada con exito!",
              icon: "success",
            });
            this.oferta.puesto=" ";
            this.oferta.personal=" ";
            this.oferta.academicos=" ";
            this.oferta.laborales=" ";
            this.oferta.profesionales=" ";
            this.oferta.lugar=" ";
            this.oferta.sueldo=" ";
            this.oferta.negociable=" ";
            this.oferta.contrato=" ";
            this.oferta.vacantes=" ";
            $("#exp tbody tr").remove();
            this.$router.push({path:"/home"});
          }else{
            sweetalert({
              title: "Que mal!!!",
              text: "Tu oferta de trabajo no se pudo crear con exito!",
              icon: "error",
            });
            this.oferta.puesto=" ";
            this.oferta.personal=" ";
            this.oferta.academicos=" ";
            this.oferta.laborales=" ";
            this.oferta.profesionales=" ";
            this.oferta.lugar=" ";
            this.oferta.sueldo=" ";
            this.oferta.negociable=" ";
            this.oferta.contrato=" ";
            this.oferta.vacantes=" ";
            $("#exp tbody tr").remove();
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
}

.boton{
  margin-left: 25%;
  padding-bottom: 5%;
}

#exp td{
  word-wrap: break-word;
}
</style>
