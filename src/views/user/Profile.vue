<template>
	<div>
		<navbar />
		<div class="profile-page">
			<section class="relative block h-500-px">
				<div
					class="absolute top-0 w-full h-full bg-center bg-cover"
					style="
						background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
					"
				>
					<span
						id="blackOverlay"
						class="w-full h-full absolute opacity-50 bg-black"
					></span>
				</div>
				<div
					class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
					style="transform: translateZ(0)"
				>
					<svg
						class="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							class="text-blueGray-200 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
			</section>

			<section class="relative py-16 bg-blueGray-200">
				<div class="container mx-auto px-4">
					<div
						class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
					>
						<div class="px-6">
							<div
								class="flex border-b border-blueGray-200"
								style="padding-block: 2em; gap: 3em"
							>
								<div>
									<img
										alt="..."
										:src="user.photo ?? team2"
										class="shadow rounded-full max-w-150-px"
									/>
								</div>

								<div
									class="flex flex-col justify-center"
									style="gap: 0em; line-height: 1.2"
								>
									<h1 style="font-size: 2em; margin: 0">
										{{ user.name }}
									</h1>

									<div
										style="
											font-size: 1.25em;
											line-height: 1.2;
										"
									>
										@{{ user.username }}
									</div>

									<div
										class="text-sm leading-normal mt-2 text-blueGray-400 font-bold uppercase"
										v-on:click="
											goto('followers', {
												base: user.countryCode,
											})
										"
									>
										<i
											class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
										></i>
										{{ user.country }}
									</div>
								</div>

								<div
									class="flex align-center"
									style="
										padding-block: 2em;
										gap: 2em;
										margin-left: 1em;
										align-items: center;
									"
								>
									<div
										class="presence"
										v-on:click="goto('following')"
									>
										<span
											class="text-xl text-center font-bold block uppercase tracking-wide text-blueGray-600"
										>
											{{
												user.metadata.presence.following
											}}
										</span>
										<span class="text-sm text-blueGray-400">
											Following
										</span>
									</div>
									
									<div
										class="presence"
										v-on:click="goto('followers')"
									>
										<span
											class="text-xl text-center font-bold block uppercase tracking-wide text-blueGray-600"
										>
											{{
												user.metadata.presence.followers
											}}
										</span>
										<span class="text-sm text-blueGray-400">
											Followers
										</span>
									</div>
								</div>

								<div
									class="flex align-center"
									style="
										padding-block: 2em;
										gap: 2em;
										align-items: center;
										margin-left: auto;
									"
								>
									<div class="py-6 px-3 mt-32 sm:mt-0">
										<button
											class="bg-blueGray-700 active:bg-blueGray-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
											type="button"
											v-on:click="nextPage()"
											v-if="authenticated"
										>
											Edit Profile
										</button>

										<button
											class="bg-red-500 active:bg-blueGray-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
											type="button"
											v-if="authenticated"
										>
											Logout
										</button>

										<button
											class="bg-red-500 active:bg-blueGray-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
											type="button"
											v-if="!authenticated"
										>
											Follow
										</button>
									</div>
								</div>
							</div>

							<h3
								class="border-b border-blueGray-200"
								style="font-size: 2em; padding-bottom: 0.25em"
							>
								Bio
							</h3>

							<div class="my-4">
								<p class="mb-4 text-lg text-blueGray-700">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maiores reiciendis quia
									sit ipsa ut natus odio mollitia, dolor
									aperiam alias impedit necessitatibus
									laboriosam nostrum consequatur.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<footer-component />
	</div>
</template>
<style>
.presence:hover {
	cursor: pointer;
}
</style>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team2 from "@/assets/img/vue.jpg";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
	setup() {
		const store = useStore();
		const router = useRouter();

		const user = computed(() => store.getters.getUser);
		const profile = computed(() => store.getters.getProfile);

		function nextPage() {
			router.push("/edit_profile");
		}

		const current =
			user.value.username === profile.value.username ? user : profile;

		function goto(page, { base } = { base: current.value.username }) {
			router.push(`/${base}/${page}`);
		}

		return {
			goto,
			nextPage,
			authenticated: user.value.username === profile.value.username,
			user:
				user.value.username === profile.value.username ? user : profile,
		};
	},

	data() {
		return {
			team2,
			tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
		};
	},
	components: {
		Navbar,
		FooterComponent,
	},
};
</script>
