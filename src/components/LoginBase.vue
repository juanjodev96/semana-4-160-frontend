<template>
  <div id="app">
    <v-main>
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" rounded>
            <v-card class="elevation-3" rounded>
              <v-toolbar color="primary" dark flat rounded>
                <v-btn icon right @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form >
                  <v-text-field
                    label="Email"
                    name="login"
                    type="text"
                    outlined
                    rounded
                    v-model="user"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    outlined
                    rounded
                    v-model="password"
                  ></v-text-field>
                </v-form>

                <v-card-text>
                  <v-row align="center" justify="center" >
                    <v-btn-toggle  rounded>
                      <v-btn @click="$emit('login', 'admin@gmail.com', 'admin1234')">
                        <v-icon>mdi-account-check-outline</v-icon>
                      </v-btn>
                      <v-btn @click="$emit('login', 'Almacenero@gmail.com', 'admin1234')"
                        >
                        <v-icon>mdi-account-edit-outline</v-icon>
                      </v-btn>
                      <v-btn @click="$emit('login', 'Vendedor@gmail.com', 'admin1234')"
                        >
                        <v-icon>mdi-account-key-outline</v-icon>
                      </v-btn>
                      <v-btn @click="$emit('login', user, password)"
                        > Login
                      </v-btn>
                    </v-btn-toggle>
                  </v-row>
                </v-card-text>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "LoginBase",

  data() {
    return {
      user: "admin@gmail.com",
      password: "admin1234",
    };
  },
};
</script>

<style>
</style>