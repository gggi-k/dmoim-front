<template>
  <v-row>
    <v-col cols="12">
      <svg width="300" height="300">
        <path
          d="M25,25 25,150"
          stroke="white"
          stroke-width="15"
          stroke-linecap="round"
        />
        <path
          d="M45,25 Q100,35 105,75"
          fill="none"
          stroke="white"
          stroke-width="15"
          stroke-linecap="round"
        />
        <path
          d="M105,100 Q100,140 45,150"
          fill="none"
          stroke="white"
          stroke-width="15"
          stroke-linecap="round"
        />
      </svg>
    </v-col>
    <v-col cols="12">
      <v-layout justify-center align-center>
        <v-flex xs12 sm8 md4>
          <v-sheet
            class="pa-8"
            max-width="500"
            height="400"
            elevation="2"
            rounded
          >
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
    </v-col>
  </v-row>
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
