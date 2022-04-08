<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import {useStore} from "vuex";
import { computed} from 'vue';
import Loader from "./components/Loader/Loader.vue";

//     import('./components/Loader/Loader.vue'),
// );
export default {
  name: 'App',
  setup() {
    const store = useStore();
    const showLoading = computed(() => store.state.showLoading)

    return{
      showLoading
    }
  },
  components: {
    Loader
  },
  created() {
        this.$store.dispatch(`autoLogin`);
    },
}
</script>
