<style>
h2 {
  font-weight: bold;
}
</style>
<template>
  <div>
    <navbar />
    <main class="" style="margin-top: 7rem; margin-bottom: 5rem">
      <div class="container mx-auto px-4">
        <div class="item-center flex flex-wrap">
          <div class="w-4/12 px-4">
            <span
              class="
                block
                my-4
                p-3
                text-blueGray-700
                rounded
                border border-solid border-blueGray-100
              "
            >
              <h2>Edit Profile</h2>
              <h3>Change Password</h3>
              <h3>Emails and SMS</h3>
              <h3>Login Activity</h3>
              <h3>Help</h3>
            </span>
          </div>
          <div class="w-8/12 px-4">
            <span
              class="
                text-sm
                block
                my-4
                p-3
                text-blueGray-700
                rounded
                border border-solid border-blueGray-100
              "
            >
              <div class="mb-3 pt-0">
                  <h2>Username</h2>
                <input
                  type="text"
                  placeholder="Zack"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-8/12
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                <h2>Name</h2>
                <input
                  type="text"
                  placeholder="Zack Tester"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                <h2>Email</h2>
                <input
                  type="text"
                  placeholder="zack@gmail.com"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                  <h2>Country</h2>
                <input
                  type="text"
                  placeholder="South Africa"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                  <h2>Phone Number</h2>
                <input
                  type="text"
                  placeholder="+2799044344"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                 <h2>Bio</h2> 
                <input
                  type="text"
                  placeholder="My rewards program all in one"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="mb-3 pt-0">
                  <h2>Website</h2>
                <input
                  type="text"
                  placeholder="www.thanx.com"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    shadow
                    outline-none
                    focus:outline-none focus:shadow-outline
                    w-full
                  "
                />
              </div>
              <div class="w-full px-4 flex-1">
                <button
                  class="
                    bg-blueGray-700
                    text-white
                    active:bg-lightBlue-600
                    font-bold
                    uppercase
                    text-base
                    px-8
                    py-3
                    rounded
                    shadow-md
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                >
                  Save
                </button>
              </div>
            </span>
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

import team2 from "@/assets/img/vue.jpg";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const user = computed(() => store.getters.getUser);
  
    return {
      user,
    };
  },

  data() {
    return {
      team2,
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
