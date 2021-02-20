<template>
  <div>
    <section class="w-full py-10 h-2/5">
      <h1 class="text-center text-4xl font-serif mb-10 dark:text-white">Hi There!</h1>
      <img src="../assets/profil.png" class="w-3/5 mx-auto dark:hidden">
    </section>
    <section class="w-full px-6">
      <p class="text-center dark:text-white"> {{myData.description}}.
      <br> 🎉🎉🎉</p>
    </section>
    <section class="w-full px-5 mt-4 ">
      <div v-for="item in myData.links" :key="item.key" class="w-full mb-2 bg-gray-200 text-center rounded-md dark:bg-blue-600">
        <a :href="item.url" class="flex justify-between p-4  w-full text-center text-black dark:text-white">{{item.title}} <unicon :name="item.icon" /> </a>
      </div>
    </section>
    <section class="w-full px-5 py-2 mt-4 ">
      <p class="text-sm dark:text-white">Latest Video</p>
      <br>
      <iframe :src="myData.latestVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full"></iframe>
    </section>

  </div>
</template>

<script>
import data from '../data.json'
export default {
  name: 'Home',
  data(){
    return{
      myData: data
    }
  }
}
</script>
