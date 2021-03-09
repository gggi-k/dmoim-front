<template>
  <v-app class="custom-background">
    <v-main>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.custom-background {
  @include body-background-gradient;
}
</style>
