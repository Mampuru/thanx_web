<template>
	<div>
		<router-view />
	</div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "App",
	setup() {
		const store = useStore();
		const showLoading = computed(() => store.state.showLoading);

		return {
			showLoading,
		};
	},
	created() {
		this.$store.dispatch(`autoLogin`);
	},
};
</script>
