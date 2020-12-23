<template>
  <login-base @login="login" @close="close"> </login-base>
</template>

<script>
import LoginBase from "../components/LoginBase.vue";
import axios from "axios";
export default {
  name: "LoginAdmin",
  administrador: {
    email: "",
    password: "",
  },
  components: {
    LoginBase,
  },
  created(){
    this.$store.dispatch("autoLogin");
  },

  methods: {
    login(user, pass) {
      axios
        .post("usuario/login", { email: user, password: pass })
        .then((respuesta) => {
          return respuesta.data;
        })
        .then((data) => {
            
          if (data.user.estado == "1") {
            this.$store.dispatch("guardarToken", data.tokenReturn);
            this.$router.push({ name: "HomeAdmin" });
          }else{
              console.log('su usuario esta inactivo')
          }
        })
        .catch((error) => {
          this.errorM = null;
          console.log(error.response.status);
          if (error.response.status == 401) {
            this.errorM = "credenciales son incorrectas.";
          } else if (error.response.status == 404) {
            this.errorM = "el usuario no existe";
          } else {
            this.errorM = "Ocurrió un error con el servidor.";
          }
        });
    },
  close(){
    console.log('close')
    this.$router.push({name:'HomeUsuario'})
  }
  },
};
</script>


<style>
</style>