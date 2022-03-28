<script>
export default {
  computed: {
    Conversions(){
      return this.$store.getters.getAllConversions;
    },
  },
    methods: {
      deleteFromList: function(index) {
      this.Conversions.splice(index, 1);
    }
  }
}
</script>

<template>
  <div class="flex flex-col sm:justify-center items-center pt-6">
    <h1 class="text-xl text-white">Previous Conversions</h1>
    <div
      class="bg-white w-full sm:max-w-xl my-6 px-6 py-4 shadow-md sm:rounded-lg"
    >

    <table class="table-auto text-xs text-center">
  <thead class="border-b bg-gray-500 text-white">
    <tr>
      <th class="p-2">Base Type</th>
        <th class="p-2">Base Amount</th>
        <th class="p-2">Rate:</th>
        <th class="p-2">Converted Amount:</th>
        <th class="p-2">Converted currency type</th>
        <th class="p-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(conversion,index) in Conversions" :key="index" class="border-b-2">
      <td class="uppercase">{{conversion.baseCurrencyType}}</td>
      <td>{{conversion.baseAmount}}</td>
      <td>{{conversion.rate}}</td>
      <td>{{conversion.Result}}</td>
      <td class="uppercase">{{conversion.secondCurrencyType}}</td>
      <td><button @click="deleteFromList(index)" class="block bg-red-500">Remove Conversion</button></td>
    </tr>
  </tbody>
</table>
 
    

    </div>
    <router-link to="/" class="text-white font-semibold">⬅️ Currency Convertor</router-link>
  </div>
</template>


