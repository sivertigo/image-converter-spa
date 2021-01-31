<template>
  <div class="signin">
    <div v-if="!signedIn">
      <amplify-authenticator
        v-bind:authConfig="authConfig"
      ></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>
<script>
  import { AmplifyEventBus } from "aws-amplify-vue";
  import { Auth } from "aws-amplify";
  export default {
    name: "SignIn",
    data() {
      return {
        signedIn: false,
        authConfig: {
          defaultCountryCode: "81",

          signInConfig: {
            header: "サインイン",
          },
          signUpConfig: {
            header: "ユーザー登録",
            hideAllDefaults: true,
            defaultCountryCode: "81",
            signUpFields: [
              {
                label: "メールアドレス",
                key: "username",
                required: true,
                displayOrder: 1,
                type: "email",
              },
              {
                label: "パスワード",
                key: "password",
                required: true,
                displayOrder: 2,
                type: "password",
              },
            ],
          },
        },
      };
    },
    async beforeCreate() {
      try {
        await Auth.currentAuthenticatedUser();
        this.signedIn = true;
      } catch (err) {
        this.signedIn = false;
      }
      AmplifyEventBus.$on("authState", (info) => {
        if (info === "signedIn") {
          this.signedIn = true;
        } else {
          this.signedIn = false;
        }
      });
    },
  };
</script>
<style>
  .signin {
    margin: 5% auto;
    text-align: center;
  }
  input {
    font-size: 16px !important;
  }
  @media screen and (max-width: 480px) {
    .signin div {
      min-width: 0;
    }
  }
</style>
