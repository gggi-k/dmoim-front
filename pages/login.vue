<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <v-sheet class="pa-8" max-width="500" height="400" elevation="2" rounded>
        <div>
          <h2>
            <v-icon>mdi-monitor</v-icon>
            <b>Developer Moim</b>
          </h2>
          <v-subheader>Welcome to Hello World ~~!</v-subheader>
        </div>
        <v-form @submit.prevent="login">
          <v-text-field
            v-model="user.userId"
            type="text"
            label="id"
            prepend-icon="mdi-account"
            aria-autocomplete="username"
            clearable
            autofocus
          />
          <v-text-field
            v-model="user.password"
            type="password"
            label="password"
            prepend-icon="mdi-lock"
            aria-autocomplete="current-password"
            clearable
          />
          <v-checkbox label="자동 로그인" />
          <v-btn type="submit" color="primary" large rounded block>
            로그인
          </v-btn>
        </v-form>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
  data: () => ({
    user: {
      userId: '',
      password: '',
    },
  }),
  head() {
    const title = 'login'
    return { title }
  },
  methods: {
    login() {
      console.log('aa')
    },
  },
})
</script>
