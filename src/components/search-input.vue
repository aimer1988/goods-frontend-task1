<template>
  <div class="search-input">
    <input type="text" :value="searchString" @input="onSearchStringInput($event.target.value)" />
    <div v-show="suggestionList.length" class="search-input__suggestions">
      <p
        v-for="suggestion in suggestionList"
        :key="suggestion.text"
        @click="selectSuggestion(suggestion)"
        class="search-input__suggestion-item"> {{ suggestion.text }} </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import debounce from 'lodash-es/debounce';
import { Suggestion } from '../services/search';

function Debounce(delay: number) {
  return (target: any, prop: string) => ({
    configurable: true,
    enumerable: false,
    value: debounce(target[prop], delay),
  });
}

@Component
export default class SearchInput extends Vue {
  @Prop() private searchFunction!: (val: string) => Suggestion[];

  searchString = '';

  suggestionList: Suggestion[] = [];

  selectSuggestion(suggestion: Suggestion) {
    this.searchString = suggestion.text;
    this.suggestionList = [];
    this.$emit('value-selected', suggestion.value);
  }

  @Debounce(500)
  async onSearchStringInput(newVal: string) {
    this.searchString = newVal;
    this.suggestionList = await this.searchFunction(newVal);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .search-input
    position relative
    width 100%
    font-size 14px
    input
      font-size 14px
      width 100%
    &__suggestions
      position absolute
      width 100%
      padding 5px
      background-color white
      box-shadow 0 2px 2px rgba(0, 0, 0, 0.2)
    &__suggestion-item
      cursor pointer
      &:hover
        background-color #eeeeee
</style>
