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

        <h2>画像変換さん</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://qiita.com/sivertigo" target="_blank" text>
        <span class="mr-2">作者のページ</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ImageConverter />
    </v-main>
  </v-app>
</template>

<script>
  import ImageConverter from "./components/ImageConverter.vue";

  export default {
    name: "App",

    components: {
      ImageConverter,
    },

    data: () => ({
      //
    }),
  };
</script>
