<template >
  <div id="app"  >
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="true"
      app
      right
      dark
      color='black'
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ nombre }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense class="py-0">
        <template>
          <v-list-item
            :to="{ name: 'HomeAdmin' }"
            dense
            v-show="permisos.articulos.list"
          >
            <v-list-item-title> Articulos </v-list-item-title>
            <v-list-item-action>
              <v-icon color="info" left>mdi-format-list-bulleted-type</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
            :to="{ name: 'Categorias' }"
            dense
            v-show="permisos.categorias.list"
          >
            <v-list-item-title> Categorias </v-list-item-title>
            <v-list-item-action>
              <v-icon color="info">mdi-group</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-list-item
            :to="{ name: 'Usuarios' }"
            dense
            v-show="permisos.usuarios.list"
          >
            <v-list-item-title> Usuarios </v-list-item-title>
            <v-list-item-action>
              <v-icon color="info">mdi-account-supervisor</v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-right="true" app color="secondary">
      <v-col cols="6">
        <v-btn tile color="error" @click="salir"  left outlined>
          <v-icon left > mdi-keyboard-backspace </v-icon>
          Salir
        </v-btn>

        <v-app-bar-nav-icon
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
          :loading="isloading"
          class="mt-9"
          fab
          top
          absolute
          right
          color="info"
         
        >
          <v-icon  x-large>mdi-menu-open</v-icon>
        </v-app-bar-nav-icon>
      </v-col>
    </v-app-bar>

    <v-main col="12" >
      <v-container col="12"
        ><!-- <v-row align="center" justify="center">
              <v-col cols="10"> </v-col>
            </v-row> -->
        <v-slide-y-transition>
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer app class="justify-center" dark color="secondary">
      <span class="px-4 text-center"
        >&copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeAdmin",

  data() {
    return {
      drawers: ["Default (no property)", "Permanent"],

      primaryDrawer: {
        model: null,
        type: "default (no property)",
      },

      isloading: false,

      rol: "",
      nombre: "",
      email: "",

      permisos: {},
    };
  },
  created() {
    let user = this.$store.state.usuario;
    this.rol = user.rol;
    this.permisos = user.permisos;
    this.nombre = user.nombre;
    this.email = user.email;
  },

  methods: {
    salir() {
      this.$store.dispatch("salirAdmin");
    },
  },
};
</script>

<style>
.bg {
  color: 'bg';
  background-color: 'bg';
}

</style>