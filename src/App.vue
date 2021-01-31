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

      <v-btn href="https://qiita.com/sivertigo" target="_blank" text>
        <span class="mr-2">作者のページ</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />

      <v-btn @click="onClick()">Click Me</v-btn>
    </v-main>
  </v-app>
</template>

<script>
  import { API } from "aws-amplify";

  export default {
    name: "App",

    components: {},
    methods: {
      onClick() {
        console.log("a");
        // 検索ID指定
        const path = this.path + "/" + this.text;
        // オプション
        const myInit = {
          headers: {},
          response: true,
        };
        this.apiName = "api2a30ef51";
        API.get(this.apiName, path, myInit)
          .then((response) => {
            // テーブル表示
            this.items = [
              {
                id: response.data[0].id,
                name: response.data[0].name,
              },
            ];
          })
          .catch(() => {
            // テーブルリセット
            this.items = [];
          });
      },
    },
    data: () => ({
      //
    }),
  };
</script>
