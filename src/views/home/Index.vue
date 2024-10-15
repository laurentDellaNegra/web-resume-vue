<script>
// Extensions
import View from '@/views/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'Home',

  extends: View,

  mixins: [
    LoadSections([
      'hero',
      'education',
      'techs',
      'sectors',
      'languages',
      'companies',
      'map'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'home'
    }
  }
};
</script>
