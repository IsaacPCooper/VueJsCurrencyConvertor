<script>
export default {
  computed: {
    Conversions(){
      return this.$store.getters.getAllConversions;
    }
  }
}
</script>

<template>
  <div class="flex flex-col sm:justify-center items-center pt-6">
    <h1 class="text-xl text-white">Previous Conversions</h1>
    <div
      class="bg-white w-full sm:max-w-lg my-6 px-6 py-4 shadow-md sm:rounded-lg"
    >

    {{Conversions}}

    </div>
  </div>
</template>


