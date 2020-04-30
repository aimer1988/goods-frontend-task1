<template>
  <div id="app">
    <search-input :search-function="searchFunctionsList.getAddressSuggestions" />
    <search-input :search-function="searchFunctionsList.getPersonSuggestions" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from './components/search-input.vue';
import { getAddressSuggestions, getPersonSuggestions } from './services/search';

@Component({
  components: {
    SearchInput,
  },
})
export default class App extends Vue {
  searchFunctionsList = {
    getAddressSuggestions,
    getPersonSuggestions,
  };
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
