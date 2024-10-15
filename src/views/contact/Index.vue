<script>
// Extensions
import View from '@/views/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'Contact',

  extends: View,

  mixins: [LoadSections(['hero-alt', 'infos', 'map'])],

  provide: {
    title: 'Contact Me',
    titleBackground: 'toulouse.jpg'
  },

  props: {
    id: {
      type: String,
      default: 'contact'
    }
  }
};
</script>
