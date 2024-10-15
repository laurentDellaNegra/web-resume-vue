<template>
  <div>
    <h1
      :class="classes"
      style="font-family: 'Work Sans' !important; letter-spacing: .3rem !important;"
    >
      {{ title }}
    </h1>
    <base-divider :color="color" />
  </div>
</template>
<script>
export default {
  name: 'BaseSectionHeading',
  props: {
    title: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'center'
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    classes() {
      return [
        'text-uppercase',
        'headline',
        'font-weight-bold',
        'mb-2',
        `${this.color}--text`,
        'text--darken-3',
        `text-${this.align}`
      ];
    }
  }
};
</script>
