<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src=".//assets/printer.png"
          transition="scale-transition"
          width="40"
        />

        <router-link class="white--text" to="/"
          ><h2>画像変換さん</h2></router-link
        >
      </div>
      <v-spacer></v-spacer>
      <router-link class="white--text" to="/signin">signin</router-link>
      <div>/</div>
      <router-link class="white--text" to="/memo">memo</router-link>

      <v-btn href="https://qiita.com/sivertigo" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    components: {},
    methods: {
      onClick() {
        this.$store.commit("increment");
        console.log(this.$store.state.count); // -> 1
      },
    },
    data: () => ({
      //
    }),
  };
</script>
