<script>
// Extensions
import View from '@/views/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'Projects',

  extends: View,

  mixins: [LoadSections(['hero-alt', 'projects'])],

  provide: {
    title: 'Projects',
    titleBackground: 'projects.jpg'
  },

  props: {
    id: {
      type: String,
      default: 'projects'
    }
  }
};
</script>
