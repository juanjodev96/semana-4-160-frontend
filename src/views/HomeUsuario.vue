<template >
  <v-app id="menu" >
    <v-app-bar app color="primary" dark dense font="bold">
      <h1>Mountain Gear</h1>
      <v-spacer></v-spacer>

      <v-btn style="font-size: 20px" text color=" " :to="{ name: 'HomeAdmin' }">
        <v-icon left>mdi-login-variant</v-icon>
        Login
      </v-btn>
    </v-app-bar>

    <v-main class="secondary">
      <v-carousel
        hide-delimiters
        cycle
        height="480"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item"
          reverse-transition="scroll-x-transition"
          hide-on-leave="true"
          transition="scroll-x-transition"
        >
        </v-carousel-item>
      </v-carousel>

      <v-layout>
        <v-flex ml-5 class="text-center">
          <h1 class="primary--text">Nuestro Catalogo</h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex ma-5>
          <h1 class="comple--text">Chaquetas</h1>
        </v-flex>
      </v-layout>
      <v-sheet class="mx-auto green lighten-1" elevation="8" width="1300">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="250"
              width="200"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-check-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-footer color="teal lighten-2">
        <v-container>
          <v-layout align-center justify-center row>
            <div>
              <v-icon left>mdi-account</v-icon>
              Juan José Ortega Londoño
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-icon left>mdi-email</v-icon>
              Juan_Londoño@gmail.com
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-icon left>mdi-whatsapp</v-icon>
              3158497586
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-icon left>mdi-google-maps</v-icon>
              Bogota-Colombia
            </div>
            <v-spacer></v-spacer>
          </v-layout>
        </v-container>
        <v-col class="text-center white--text" cols="12">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [
        "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
      ],
      dialog: false,
      dialog2: false,
      dialog3: false,
    };
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      let me = this;
      axios
        .get("articulo/listByCategorias")
        .then(function (response) {
          me.dataArticulos = response.data;
          me.isloading = false;
          console.log(me.dataArticulos);
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
body {
  padding-top: 0.5rem;
}
</style>