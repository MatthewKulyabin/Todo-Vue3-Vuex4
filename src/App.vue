<template>
  <Header />
  <Notebooks />
</template>

<script>
import {mapGetters} from 'vuex';

import Header from './components/Header';
import Notebooks from './components/Notebooks';

export default {
  name: 'App',
  components: {
    Header,
    Notebooks,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
