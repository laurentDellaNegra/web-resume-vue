<template>
  <section id="hero-alt">
    <v-img
      :src="getImgUrl(titleBackground)"
      gradient="to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)"
      :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
      max-width="100%"
    >
      <v-container class="fill-height">
        <v-row align="center" class="text-center" justify="center">
          <v-col>
            <h1
              class="display-1 font-weight-bold text-uppercase mb-4 primary--text text--darken-3"
              style="font-family: 'Work Sans' !important; letter-spacing: .3rem !important;"
            >
              {{ title }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>
<script>
export default {
  name: 'SectionHeroAlt',
  inject: ['title', 'titleBackground'],
  methods: {
    getImgUrl(img) {
      return require('@/assets/' + img);
    }
  }
};
</script>
