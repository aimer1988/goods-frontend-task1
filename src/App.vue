<template>
  <div id="app">
    <div class="address">
      <span>Адрес:</span>
      <search-input
        :search-function="searchFunctionsList.getAddressSuggestions"
        @value-selected="address = $event"
      />

      <div v-if="address">
        <p>
          <span>Страна:</span> <span>{{ address.country }}</span>
        </p>
        <p>
          <span>Город:</span> <span>{{ address.city }}</span>
        </p>
        <p>
          <span>Улица:</span> <span>{{ address.street }}</span>
        </p>
        <p>
          <span>Дом:</span> <span>{{ address.house }}</span>
        </p>
        <p>
          <span>Квартира:</span> <span>{{ address.flat }}</span>
        </p>
      </div>
    </div>

    <div class="person">
      <span>Человек:</span>
      <search-input
        :search-function="searchFunctionsList.getPersonSuggestions"
        @value-selected="person = $event"
      />

      <div v-if="person">
        <p>
          <span>Имя:</span> <span>{{ person.name }}</span>
        </p>
        <p>
          <span>Фамилия:</span> <span>{{ person.lastName }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from './components/search-input.vue';
import {
  Address,
  Person,
  getAddressSuggestions,
  getPersonSuggestions,
} from './services/search';

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

  address: Address | null = null;

  person: Person | null = null;
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 700px
  color #2c3e50
  margin 0 auto
  display flex
  justify-content space-between
  & *
    box-sizing border-box
  .address, .person
    width 300px
    max-width 300px
</style>
