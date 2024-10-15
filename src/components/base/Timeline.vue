<template>
  <div>
    <v-timeline v-if="!$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(project, i) in projects"
        :key="i"
        :color="project.color"
        :icon="project.icon"
        large
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${project.color}--text`"
            v-text="project.date"
          ></span>
        </template>
        <base-card v-bind="project" />
      </v-timeline-item>
    </v-timeline>
    <div v-else>
      <base-card v-for="(project, i) in projects" :key="i" v-bind="project" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
};
</script>
