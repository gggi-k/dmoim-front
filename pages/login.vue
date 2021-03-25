<template>
  <v-row>
    <v-col cols="12">
      <v-layout justify-center align-center>
        <v-flex xs12 sm8 md4>
          <div class="d-inline-block npmx-auto">
            <img src="/logo.svg" alt="dmoim logo" />
          </div>
          <v-sheet
            class="pa-8 mx-auto"
            max-width="500"
            height="330"
            elevation="2"
            rounded
          >
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="loginUser.userId"
                type="text"
                label="id"
                prepend-icon="mdi-account"
                aria-autocomplete="username"
                clearable
                autofocus
              />
              <v-text-field
                v-model="loginUser.password"
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
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

interface LoginUser {
  userId: string
  password: string
}

export default Vue.extend({
  layout: 'blank',
  data: () => ({
    loginUser: {
      userId: '',
      password: '',
    } as LoginUser,
  }),
  head: () => ({ title: 'login' }),
  methods: {
    login() {
      console.log(this)
    },
  },
})
</script>
