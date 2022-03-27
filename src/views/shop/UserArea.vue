<template>
  <div>
    <navbar />
    <main class="" style="margin-top: 5rem; margin-bottom:5rem; padding:">
      <div class="flex flex-wrap">
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Subscriptions</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
          </div>
        </div>
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Rewards</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
          </div>
        </div>
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Rewards Bundle</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
          </div>
        </div>
        <div class="w-full" ></div>
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Vouchers</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
          </div>
        </div>
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Donations</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
          </div>
        </div>
        <div class="w-full md:w-5/12 px-4 flex-1" style="padding: 5rem;">
          <div class="bg-lightBlue-700 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-wallet text-white text-3xl"></i>
            <p class="text-3xl text-white mt-4 font-semibold">Add Funds</p>
            <p class="text-3xl text-white mt-4 font-semibold">Balance: 0.0</p>
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

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>