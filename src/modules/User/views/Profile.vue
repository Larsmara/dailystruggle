<template>
  <div class="flex flex-row items-center w-full m-auto h-full">
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
        <h1 id="person-name" class="text-2xl font-bold">Fornavn Etternavn</h1>
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
  </div>
</template>

<script setup></script>

<style scoped></style>