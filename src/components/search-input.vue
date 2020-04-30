<template>
  <div class="search-input">
    <input type="text" v-model="searchString" />
    <div class="search-input__suggestions">
      <p v-for="suggestion in suggestionList" :key="suggestion.text"> {{ suggestion.text }} </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
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

  @Watch('searchString')
  @Debounce(500)
  async onSearchStringChange(newVal: string) {
    this.suggestionList = await this.searchFunction(newVal);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
