<template>
  <div>
    <v-card class="elevation-5 mb-4">
      <v-card-title
        :class="`headline font-weight-light mb-4 ${color} white--text`"
      >
        <span class="mr-2">{{ role }}</span>
        <v-spacer></v-spacer>
        <template v-if="!this.$vuetify.breakpoint.mdAndUp">
          {{ date }}
        </template>
      </v-card-title>
      <v-card-text v-if="applications">
        <p>
          <v-chip v-if="company" class="ma-1" label>
            <v-avatar v-if="company.logo" left>
              <v-img :src="getImgUrl(company.logo)"></v-img>
            </v-avatar>
            {{ company.name }}
          </v-chip>
          <v-chip v-if="client" class="ma-1" label>
            <v-avatar v-if="client.logo" left>
              <v-img :src="getImgUrl(client.logo)"></v-img>
            </v-avatar>
            {{ client.name }}
          </v-chip>
        </p>
        <p v-for="(app, i) in applications" :key="i">
          <strong>{{ app.name }} </strong>{{ app.description }}
        </p>
        <p>
          <v-chip
            v-for="(tech, i) in techs"
            :key="i"
            class="ma-1"
            :color="color"
            dark
          >
            <v-avatar v-if="tech.icon" left>
              <v-icon>{{ tech.icon }}</v-icon>
            </v-avatar>
            {{ tech.text }}</v-chip
          >
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    color: {
      type: String
    },
    role: {
      type: String,
      require: true
    },
    date: {
      type: String,
      require: true
    },
    company: {
      type: Object
    },
    client: {
      type: Object
    },
    applications: {
      type: Array
    },
    techs: {
      type: Array
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets/' + img);
    }
  }
};
</script>
