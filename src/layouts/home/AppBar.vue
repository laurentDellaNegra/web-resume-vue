<template>
  <v-app-bar
    id="home-app-bar"
    fixed
    elevate-on-scroll
    scroll-target="#scrolling-anchor"
    scroll-threshold="500"
    v-scroll:#scrolling-anchor="onScroll"
    class="transparent"
  >
    <!-- :class="[isOnTop ? 'transparent' : 'white']" -->
    <v-toolbar-title>
      <!-- {{ $vuetify.lang.t('$vuetify.app-bar.title') }} -->
      <v-avatar class="elevation-1">
        <img :src="require('@/assets/avatar.jpeg')" alt="Laurent" />
      </v-avatar>
    </v-toolbar-title>

    <v-spacer />
    <div>
      <v-tabs
        class="hidden-sm-and-down"
        background-color="transparent"
        optional
      >
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          :exact="true"
          :ripple="false"
          active-class="text--primary"
          class="font-weight-bold"
          min-width="96"
          text
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </div>

    <v-btn icon class="mr-1 transparent" @click="openPDF()">
      <v-icon>mdi-adobe-acrobat</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="hidden-md-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    isOnTop: true,
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        link: 'projects'
      },
      {
        text: 'Contact',
        link: 'contact'
      }
    ]
  }),
  methods: {
    changeLocale() {
      this.$vuetify.lang.current =
        this.$vuetify.lang.current === 'fr' ? 'en' : 'fr';
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    onScroll(e) {
      const scrollTop = e.target.scrollTop;
      if (scrollTop >= 60) {
        this.isOnTop = false;
      } else {
        this.isOnTop = true;
      }
    },
    openPDF() {
      window.open('Front-End-Developer.pdf');
    }
  }
};
</script>
<style>
#home-app-bar.v-app-bar--is-scrolled {
  background-color: white !important;
}
</style>
