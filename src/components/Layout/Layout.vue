<template>
  <div class="h-screen drawer w-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="w-full navbar shadow-xl bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">DailyStruggle</a>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal p-0">
            <li
              v-for="route in routes"
              :key="route.name"
              :tabindex="route.subroutes.length ? '0' : ''"
            >
              <router-link v-if="!route.subroutes.length" :to="route.route">{{
                route.name
              }}</router-link>
              <template v-else>
                <a>
                  {{ route.name }}
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>
                <ul class="p-2 bg-base-100">
                  <li v-for="subRoute in route.subroutes" :key="subRoute.name">
                    <router-link :to="subRoute.route">{{
                      subRoute.name
                    }}</router-link>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </div>
        <div class="flex-none">
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="
                mt-3
                p-2
                shadow
                menu menu-compact
                dropdown-content
                bg-base-100
                rounded-box
                w-52
              "
            >
              <li>
                <a class="justify-between" href="/profile">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page content here -->
      <div class="container mx-auto my-4 h-full">
        <router-view v-if="store.user" />
        <Auth v-else />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavbarVue from "./Navbar.vue";
import routes from "../../constants/routes";
import { store } from "../../modules/User/store/store"
import { supabase } from "../utils/Supabase"
import Auth from "../Auth.vue"
import Profile from "../../modules/User/views/Profile.vue"

export default {
  components: {
    Auth,
    Profile,
  },

  setup() {
    store.user = supabase.auth.user()
    supabase.auth.onAuthStateChange((_, session) => {
      store.user = session.user
    })

    return {
      store,
    }
  },
}
</script>

<style scoped></style>
