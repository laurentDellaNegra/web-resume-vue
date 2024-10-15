<template>
  <base-section id="companies">
    <base-section-heading title="Companies" />
    <v-container>
      <div
        class="d-flex justify-space-between"
        :class="this.$vuetify.breakpoint.mdAndUp ? 'flex-row' : 'flex-column'"
      >
        <div v-for="(c, i) in companies" :key="i" class="ma-auto mb-4">
          <v-img
            :src="require(`@/assets/${c}`)"
            color="grey"
            contain
            height="40"
            width="128"
          />
        </div>
      </div>
    </v-container>
  </base-section>
</template>
<script>
export default {
  data: () => ({
    companies: [
      'airbus.png',
      'capgemini.png',
      'gfi.jpg',
      'dulux.png',
      'suez-environnement.png'
    ]
  })
};
</script>
