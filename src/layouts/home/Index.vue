<template>
  <v-app>
    <home-app-bar />
    <v-sheet id="scrolling-anchor" class="overflow-y-auto" max-height="100vh">
      <home-view />
      <home-footer />
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',

  components: {
    HomeAppBar: () => import('@/layouts/home/AppBar'),
    HomeView: () => import('@/layouts/home/View'),
    HomeFooter: () => import('@/layouts/home/Footer')
  }
};
</script>
