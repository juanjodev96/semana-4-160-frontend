<template>
  <v-flex>
    <v-toolbar d-flex class="elevation-2 ">
      <v-btn
        color="primary"
        small
        v-show="derechos.add"
        class="elevation-0"
        @click="$emit('add')"
        left
        outlined
      >
        <v-icon left>mdi-plus</v-icon>
        Agregar
      </v-btn>
      <v-spacer></v-spacer>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="text-xs-center"
        v-model="buscar"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-toolbar>
 
    <v-data-table
      :headers="headers"
      :items="data"
      :search="buscar"
      :loading="isloading"
      class="bgDataTAble mt-2"
     
      
      
    >
      <template v-slot:[`item.opciones`]="{ item }">
        
        <v-btn
          v-if="item.estado"
          outlined
          :disabled="!derechos.active"
          @click="$emit('desactive', item)"
          color="error"
          small
        >
          <v-icon left> mdi-eye-off-outline </v-icon>
          Off
        </v-btn>

        <v-btn
          v-else
          outlined
          :disabled="!derechos.active"
          @click="$emit('active', item)"
          color="success"
          small
        >
          <v-icon left> mdi-eye-check-outline </v-icon>
          On
        </v-btn>
        <v-icon
          class="mr-2"
          @click="$emit('edit', item)"
          color="warning"
          :disabled="!derechos.edit"
          large
        >
          mdi-square-edit-outline</v-icon
        >
      </template>

      <template v-slot:[`item.estado`]="{ item }">
        <div v-if="item.estado">
          <span class="success--text">Activo</span>
        </div>
        <div v-else>
          <span class="error--text">Inactivo</span>
        </div>
      </template>
    </v-data-table>
    <v-btn
      color="warning"
      bottom
      small
      absolute
      outlined
      class="elevation-0 ml-4 mb-2"
      @click="$emit('reroll')"
      :loading="isloading"
      ><v-icon left>mdi-update</v-icon>Actualizar</v-btn
    >
    
  </v-flex>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array,
    headers: Array,
    isloading: Boolean,
    derechos: Object,
  },
  data() {
    return {
      buscar: "",
    };
  },
};
</script>

<style  scoped>
.bgDataTAble{
  background-color:"bg" !important;
  color:"bg";
}
</style>