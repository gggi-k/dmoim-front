<template>
  <v-sheet>
    <v-form @sumbit.prevent="login">
      <v-text-field
        v-model="user.userId"
        type="text"
        clearable
        autofocus
        aria-autocomplete="username"
      />
      <v-text-field
        v-model="user.password"
        type="password"
        clearable
        aria-autocomplete="current-password"
      />
      <v-checkbox label="자동 로그인" />
      <v-btn type="submit" block>로그인</v-btn>
      <v-divider />
    </v-form>
  </v-sheet>
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
  methods: {
    login() {},
  },
})
</script>
