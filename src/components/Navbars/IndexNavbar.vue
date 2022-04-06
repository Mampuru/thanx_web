<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            <img 
            alt="ThanX Logo" 
            :src="thanx_logo"
            class="mx-auto max-w-120-px "/>
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              Docs
            </a>
          </li>
        </ul> -->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <!-- <li class="flex items-center">
            <index-dropdown />
          </li> -->
          <li class="flex items-center">
             <router-link to="/">
              <a
                class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
                href="#pablo"
              >
                About Us
              </a>
              </router-link>
          </li>
          <!-- <li class="flex items-center">
             <router-link to="/">
              <a
                class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
                href="#pablo"
              >
                Our Values
              </a>
              </router-link>
          </li> -->
          <!-- <li class="flex items-center">
             <router-link to="/">
              <a
                class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
                href="#pablo"
              >
                Services
              </a>
              </router-link>
          </li> -->
           <li class="flex items-center" v-if="name !== null">
             <IndexDropdown />
          </li>
          <li class="flex items-center">
             <router-link to="/auth/login">
              <a>
                <i class="text-blueGray-900 fas fa-right-to-bracket text-lg leading-lg" />
                <span class="inline-block ml-2 " v-if="name !== null" >Login/Register</span>
                <span class="inline-block ml-2 " v-else >{{name}}</span>
              </a>
             </router-link>
              
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import thanx_logo from "@/assets/img/thanx_logo.png";

import {useStore} from "vuex";
import {computed} from "vue"

export default {
  setup(){
    const store = useStore();

    const name = computed(() => store.getter.userData.name);

    return{
      input,
      name
    }

  },

  data() {
    return {
      navbarOpen: false,
      thanx_logo
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown
  },
};
</script>
