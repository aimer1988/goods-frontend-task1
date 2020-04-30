<template>
  <div id="app">
    <span>Адрес:</span>
    <search-input :search-function="searchFunctionsList.getAddressSuggestions" />
    <span>Человек:</span>
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
  width 1024px
  color #2c3e50
  margin 0 auto
  & *
    box-sizing border-box
</style>
