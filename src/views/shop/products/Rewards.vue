<template>
	<div>
		<navbar />
		<main class="" style="margin-top: 5rem; margin-bottom: 5rem; padding: ">
			<div class="container mx-auto px-4">
				<div class="item-center flex flex-wrap">
					<div
						class="w-full md:w-5/12 px-4 flex-1"
						style="padding: 4rem"
					>
						<div
							class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8"
						>
							<i class="fas fa-wallet text-white text-3xl"></i>
							<p class="text-3xl text-white mt-4 font-semibold">
								Rewards
							</p>
						</div>

						<div>
							<p
								class="text-lg font-light mt-4 mb-4 text-blueGray-600"
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in
							</p>
						</div>

						<div>
							<h4>
								Please enter the amount of rewards you would
								like to purchase
							</h4>
							<br />
							<div class="mb-3 pt-0">
								<input
									v-model="amount"
									type="text"
									placeholder="0.00"
									class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
								/>
							</div>
						</div>

						<div>
							<h4>Please select an payment method</h4>
							<br />
							<div class="container px-4 mx-auto">
								<div class="flex flex-wrap">
									<div class="w-full px-4 flex-1">
										<form
											:action="payfast.url"
											method="post"
										>
											<input
												type="hidden"
												name="merchant_id"
												:value="payfast.id"
											/>
											<input
												type="hidden"
												name="merchant_key"
												:value="payfast.key"
											/>
											<input
												type="hidden"
												name="amount"
												:value="amount"
											/>
											<input
												type="hidden"
												name="item_name"
												value="Rewards"
											/>
											<input
												class="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="submit"
												value="PAY FAST"
											/>
										</form>
									</div>
									<div class="w-full px-4 flex-1">
										<button
											class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
										>
											PayPal
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer-component />
	</div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import { ref } from "vue";

export default {
	setup() {
		const amount = ref("");

		return {
			amount,
		};
	},
	data() {
		return {
			payfast: {
				url: process.env.VUE_APP_PAY_FAST_URL,
				id: process.env.VUE_APP_PAY_FAST_MERCH_ID,
				key: process.env.VUE_APP_PAY_FAST_MERCH_KEY,
			},
		};
	},
	components: {
		Navbar,
		FooterComponent,
	},
};
</script>
