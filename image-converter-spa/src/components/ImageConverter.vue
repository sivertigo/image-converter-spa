<template>
  <div class="image-converter">
    <h1>{{ msg }}</h1>

    <div class="image-put-area">
      <v-sheet class="padding-area" min-height="70vh" rounded="lg">
        <div
          class="image-input__field drop-area"
          :class="{ over: isDragOver }"
          @dragover.prevent="onDragFile('over')"
          @dragleave="onDragFile('leave')"
          @drop.stop="onDropFile"
        >
          画像をドロップしてください。
          <input type="file" title @change="onChangeInput" />
        </div>
        <div class="image-show-area"></div>
        <v-dialog
          transition="dialog-bottom-transition"
          v-model="dialog"
          scrollable
          max-width="80%"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>変換する画像</v-toolbar>
              <v-card-text>
                <div class="img-box">
                  <img class="img-show" :src="image" />
                </div>
              </v-card-text>
              <v-radio-group row v-model="radioGroup">
                <v-radio label="サイズ圧縮" value="resize"
                  >サイズを圧縮</v-radio
                >
              </v-radio-group>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
                <v-btn text pr-1 @click="onClickConvert">変換！</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-sheet>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageConverter",
    props: {
      msg: String,
      value: String,
      dialog: Boolean,
    },

    data: function() {
      return {
        isDragOver: false,
        image: null,
        resize: null,
      };
    },

    methods: {
      onDragFile(type) {
        this.isDragOver = type === "over";
      },
      isOneImage(files) {
        if (files.length !== 1 || files[0].type.indexOf("image") !== 0) {
          alert("画像以外は変換できません(｡-人-｡) ｺﾞﾒﾝﾈ");
          return;
        }
      },
      onDropFile(event) {
        this.isDragOver = false;
        const files = event.dataTransfer.files;
        this.isOneImage(files);
        this.readImage(files[0]);
      },
      readImage(file) {
        let reader = new FileReader();
        reader.onload = this.loadImage;
        reader.readAsDataURL(file);
      },

      loadImage(e) {
        this.image = e.target.result;
      },
      onChangeInput(event) {
        const files = event.target.files;
        this.isOneImage(files);
        this.readImage(files[0]);
        this.dialog = true;
      },
      onClickConvert(e) {
        console.log(e);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding-area {
    margin: 5%;
  }
  .drop-area {
    background-color: rgb(240, 240, 240);
    border: 1px dotted darkgray;
    text-align: center;
    height: 50vh;
    width: 50%;
    margin: 0 auto;
  }
  .image-input__field > input {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .image-input__field.over {
    background-color: rgb(200, 200, 200);
  }
  .image-show-area {
    margin: auto;
    width: 40%;
    height: 40%;
  }
  .img-box {
    position: relative;
    margin: 4em auto;
    width: 800px;
    height: 800px;
    max-width: 100%;
    max-height: 100%;
  }
  .img-show {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
