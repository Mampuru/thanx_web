import { createWebHistory, createRouter } from "vue-router";
// layouts

// import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
// import Shop from "@/layouts/Shop.vue";

// views for Admin layout

// import Dashboard from "@/views/admin/Dashboard.vue";
// import Settings from "@/views/admin/Settings.vue";
// import Tables from "@/views/admin/Tables.vue";
// import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import UserArea from "@/views/shop/UserArea.vue";
import ProductDetails from "@/views/shop/ProductDetails.vue";
import Profile from "@/views/user/Profile.vue";
import ProfileNotFound from "@/views/user/ProfileNotFound.vue";
import ProfileFollowers from "@/views/user/ProfileFollowers.vue";
import ProfileFollowing from "@/views/user/ProfileFollowing.vue";
import EditProfile from "@/views/user/EditProfile.vue";
import Index from "@/views/Index.vue";

// view for products
import Subscription from "@/views/shop/products/Subscription.vue";
import Donations from "@/views/shop/products/Donations.vue";
import AddFunds from "@/views/shop/products/AddFunds.vue";
import Rewards from "@/views/shop/products/Rewards.vue";
import RewardsBundle from "@/views/shop/products/RewardsBundle.vue";
import Vouchers from "@/views/shop/products/Vouchers.vue";

import store from "@/store/store.js";

// routes

const routes = [
  // {
  //   path: "/admin",
  //   redirect: "/admin/dashboard",
  //   component: Admin,
  //   children: [
  //     {
  //       path: "/admin/dashboard",
  //       component: Dashboard,
  //     },
  //     {
  //       path: "/admin/settings",
  //       component: Settings,
  //     },
  //     {
  //       path: "/admin/tables",
  //       component: Tables,
  //     },
  //     {
  //       path: "/admin/maps",
  //       component: Maps,
  //     },
  //   ],
  // },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/shop/user_area",
    component: UserArea,
  },
  {
    path: "/shop/product_details",
    component: ProductDetails,
  },
  {
    path: "/shop/product/subscription",
    component: Subscription,
  },
  {
    path: "/shop/product/donation",
    component: Donations,
  },
  {
    path: "/shop/product/add_fund",
    component: AddFunds,
  },
  {
    path: "/shop/product/rewards",
    component: Rewards,
  },
  {
    path: "/shop/product/rewards_bundle",
    component: RewardsBundle,
  },
  {
    path: "/shop/product/voucher",
    component: Vouchers,
  },
  {
    path: "/edit_profile",
    component: EditProfile,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ProfileNotFound,
  },
  {
    path: "/:username",
    async beforeEnter(to) {
      const username = to.params.username;
      const response = await fetch(`https://api.mythanx.xyz/users/${username}`);

      if (!response.ok) {
        return { name: "NotFound" };
      } else {
        const { data } = await response.json();
        store.commit("setProfile", data);
        console.log({ store });
      }
    },
    component: Profile,
  },
  {
    path: "/:username/followers",
    async beforeEnter(to) {
      const username = to.params.username;
      const response = await fetch(`https://api.mythanx.xyz/users/${username}`);

      if (!response.ok) {
        return { name: "NotFound" };
      } else {
        const { data } = await response.json();
        store.commit("setProfile", data);
      }
    },
    component: ProfileFollowers,
  },
  {
    path: "/:username/following",
    async beforeEnter(to) {
      const username = to.params.username;
      const response = await fetch(`https://api.mythanx.xyz/users/${username}`);

      if (!response.ok) {
        return { name: "NotFound" };
      } else {
        const { data } = await response.json();
        store.commit("setProfile", data);
      }
    },
    component: ProfileFollowing,
  },
  {
    path: "/",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
