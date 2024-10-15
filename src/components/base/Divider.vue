<template>
  <div>
    <v-divider :class="classes" :style="styles" />
  </div>
</template>
<script>
export default {
  name: 'BaseDivider',
  props: {
    color: {
      type: String,
      default: 'primary darken-3'
    }
  },
  computed: {
    classes() {
      return ['inset', `${this.color}`, 'darken-3'];
    },
    styles() {
      return {
        width: '30px',
        height: '5px',
        maxHeight: '5px',
        margin: '0 auto 20px auto'
      };
    }
  }
};
</script>
