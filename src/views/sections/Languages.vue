<template>
  <base-section id="languages" class="grey lighten-4">
    <base-section-heading title="Languages" />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" class="text-center">
          <v-img height="100px" contain :src="require('@/assets/french.png')" />
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-img
            height="100px"
            contain
            :src="require('@/assets/english.jpg')"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>
