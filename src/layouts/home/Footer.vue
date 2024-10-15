<template>
  <v-footer id="home-footer" color="grey darken-4" dark>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div
            class="d-flex flex-wrap justify-md-start justify-center justify-md-none"
          >
            <template v-for="(s, i) in social">
              <a
                :key="s.text"
                class="white--text pa-1 pa-md-0"
                :href="s.link"
                v-text="s.text"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s.text}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="6">
          MIT Licence
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'HomeFooter',

  data: () => ({
    social: [
      {
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/laurent-della-negra-453b9b76/'
      },
      { text: 'Twitter', link: 'https://twitter.com/laurent_dn' },
      { text: 'GitHub', link: 'https://github.com/laurentDellaNegra' }
    ]
  })
};
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
</style>
