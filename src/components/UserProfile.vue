<template>
	<div class="px-6">
		<div
			class="flex border-b border-blueGray-200"
			style="padding-block: 2em; gap: 2em"
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

				<div style="font-size: 1.25em; line-height: 1.26">
					@{{ user.username }}
				</div>

				<div
					class="text-sm leading-normal mt-3 text-blueGray-400 font-bold uppercase"
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
				style="padding-block: 2em; gap: 2em; align-items: center"
			>
				<div v-on:click="goto('following')">
					<span
						class="text-xl text-center font-bold block uppercase tracking-wide text-blueGray-600"
					>
						{{ user.metadata.presence.following }}
					</span>
					<span class="text-sm text-blueGray-400"> Following </span>
				</div>
				<div v-on:click="goto('followers')">
					<span
						class="text-xl text-center font-bold block uppercase tracking-wide text-blueGray-600"
					>
						{{ user.metadata.presence.followers }}
					</span>
					<span class="text-sm text-blueGray-400">Followers</span>
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
					>
						Edit Profile
					</button>
					<button
						class="bg-red-500 active:bg-blueGray-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
						type="button"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>
