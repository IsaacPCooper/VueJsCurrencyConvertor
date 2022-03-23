<script>
import CurrencyDropDown from "./currencyDropDown.vue";

export default {
  components: {
    CurrencyDropDown,
  },
  data() {
    return {
      data: [],
      baseCurrencyType: "gbp", //default values set for visualisation purposes
      secondCurrencyType: "usd",
      baseAmount: 1,
      secondAmount: 1,
      rate: "",
      filteredRate: "",
    };
  },
  watch:{
      baseAmount(watchedValue, inputtedValue) {
      if (watchedValue.includes('.')) {

        this.baseAmount = watchedValue.split('.')[0] + '.' + watchedValue.split('.')[1].slice(0, 2)
      }
    },
    
  },
  methods: {
    fetchData() {
      var secondCurrencyType = this.secondCurrencyType;

      //this could also be handled via axios, but due to the scope of this application, fetch does the job.
      fetch(`http://www.floatrates.com/daily/${this.baseCurrencyType}.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data[secondCurrencyType]);
          this.data = data;

          //shorthand validation check (if / else)
          this.baseCurrencyType != this.secondCurrencyType
            ? (this.rate = data[secondCurrencyType].rate)
            : (this.rate = 1);

          this.secondAmount = this.baseAmount * this.rate.toFixed(2);
          this.secondAmount = this.secondAmount.toFixed(2);
          this.filteredRate = this.rate.toFixed(2);
        });
    },
    inputValidate(event) {
      if (!/\d/.test(event.key) && event.key !== ".")
        return event.preventDefault();
    },
    storeConversion() {
        return this.$store.dispatch([baseAmount, secondAmount, rate])
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div class="flex flex-col sm:justify-center items-center pt-6">
    <h1 class="text-xl text-white">Vue.Js Currency Convertor</h1>
    <div
      class="bg-white w-full sm:max-w-lg my-6 px-6 py-4 shadow-md sm:rounded-lg"
    >
      <h2 class="text-xl font-semibold">Base Value</h2>
      <div class="grid grid-cols-2 my-4">
        <input
          type="text"
          name="baseCurrency"
          id="baseInput"
          class="border-gray-200 border-2"
          placeholder="Initial Value..."
          v-model="baseAmount"
          @keypress="inputValidate($event)"
        />
        <CurrencyDropDown
          selectName="Base Dropdown"
          selectID="baseCurrencyType"
          v-model="baseCurrencyType"
          @change="fetchData()"
        />
      </div>
      <h2 class="text-xl font-semibold my-4">Converted Value</h2>
      <div class="grid grid-cols-2">
        <input
          type="number"
          name="translationCurrency"
          id="translationOutput"
          class="border-gray-200 border-2"
          placeholder="Translated Value..."
          v-model="secondAmount"
          disabled
        />
        <CurrencyDropDown
          selectName="Secondary Dropdown"
          selectID="secondCurrencyType"
          v-model="secondCurrencyType"
          @change="fetchData()"
        />
      </div>
      <p class="my-4">
        1 <span class="uppercase font-bold">{{ baseCurrencyType }} </span> is
        {{ filteredRate }}
        <span class="uppercase font-bold">{{ secondCurrencyType }}</span>
      </p>

      <!-- This button is used to convert values in this case, as the recorded conversions are to be used in a table, this also makes testing easier, as less requests are made -->
      <button class="my-4 block bg-blue-700 text-white p-2 rounded shadow" @click="fetchData()">
        Convert Value
      </button>

      <router-link to="/history">Conversion History</router-link>
    </div>
  </div>
</template>


