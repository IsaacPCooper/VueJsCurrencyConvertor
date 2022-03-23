<script>
export default{
    name: 'currencyDropDown',
    props: {
        selectName: {
            type: String
        },
        selectID: {
            type: String
        },
         modelValue: {
            type: String
        },
    }
}
</script>


<template>
    <select :name="selectName" :id="selectID"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option value="gbp">GBP</option>
    <option value="eur">EUR</option>
    <option value="usd">USD</option>
    <option value="jpy">JPY</option>
    <option value="aud">AUD</option>
    <option value="cad">CAD</option>
    <option value="chf">CHF</option>
    <option value="cnh">CNH</option>
    <option value="hkd">HKD</option>
    <option value="nzd">NZD</option>
  </select>

  <!-- I have seperated this into a new component to allow ease of expansion - I have used the top 10 most used currencies in the world. -->
  <!-- modelValue allows me to use 'v-model' in the parent component -->
</template>