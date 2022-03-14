<template>
  <!-- <div class="flex flex-row items-center w-full m-auto h-full">
    <ul class="menu md:place-self-start bg-base-100 w-20 md:w-56">
      <li><a>Profile</a></li>
      <li><a class="active">Budget</a></li>
      <li><a>Movies</a></li>
    </ul>
    <div class="content-container flex w-full h-full justify-center">
      <div class="w-full flex flex-col items-center border-l border-gray-500">
        <div id="profile-picture" class="w-28">
          <img
            src="https://api.lorem.space/image/face?hash=33791"
            class="rounded-full"
          />
        </div>
        <h1 id="person-name" class="text-2xl font-bold">Name</h1>
        <div
          id="profile-info"
          class="place-self-start text-sm md:text-xl mt-4 ml-5 leading-10"
        >
          <h1>Username: insert-username</h1>
          <h1>Age: age</h1>
          <h1>Email: mail@mail.no</h1>
          <h1>Date joined: 03.03.2022</h1>
        </div>
        <div id="profile-btns" class="mt-4">
          <button class="btn btn-outline btn-accent mr-3">edit profile</button>
          <button class="btn btn-outline btn-error">delete me irl</button>
        </div>
      </div>
    </div>
  </div> -->

  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="store.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="website" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button block primary"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">
        Sign Out
      </button>
    </div>
  </form>
</template>

<script>
import { supabase } from "../../../components/utils/Supabase"
import { store } from "../store/store"
import { onMounted, ref } from "vue"

export default {
  setup() {
    const loading = ref(true)
    const username = ref("")
    const website = ref("")
    const avatar_url = ref("")

    async function getProfile() {
      try {
        loading.value = true
        store.user = supabase.auth.user()

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url`)
          .eq("id", store.user.id)
          .single()

        if (error && status !== 406) throw error

        if (data) {
          username.value = data.username
          website.value = data.website
          avatar_url.value = data.avatar_url
        }
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    async function updateProfile() {
      try {
        loading.value = true
        store.user = supabase.auth.user()

        const updates = {
          id: store.user.id,
          username: username.value,
          website: website.value,
          avatar_url: avatar_url.value,
          updated_at: new Date(),
        }

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    async function signOut() {
      try {
        loading.value = true
        let { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      getProfile()
    })

    return {
      store,
      loading,
      username,
      website,
      avatar_url,

      updateProfile,
      signOut,
    }
  },
}
</script>

<style scoped></style>