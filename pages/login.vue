<template>
  <div>
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto fill-width"
      flat
      max-width="640"
    >
      <v-card-title class="text-center pa-8">
        <h4 class="fill-width">Login</h4>
      </v-card-title>
      <v-divider> </v-divider>
      <div class="px-6 py-8">
        <div style="max-width:344px" class="mx-auto">
          <div class="pt-6">
            <div>
              <v-text-field
                v-model="email"
                autofocus
                dense
                height="48px"
                outlined
                placeholder="メールアドレス"
              ></v-text-field>

              <v-text-field
                v-model="password"
                type="password"
                dense
                height="48px"
                name="input-password"
                outlined
                placeholder="パスワード"
              ></v-text-field>
            </div>
            <div class="login-btn pb-8">
              <v-btn
                class="fill-width caption"
                depressed
                height="48px"
                tile
                @click="login"
              >
                ログイン
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async login() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
