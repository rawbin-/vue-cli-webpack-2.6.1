<template>
  <div id="app">
    Name:<input v-model="name" />
    Email:<input v-model="email" />
    Phone:<input v-model="phone" />
    <InfoList/>
  </div>
</template>

<script>
  import InfoList from "./components/InfoList";

  export default {
    name: "App",
    components: {
      InfoList
    },
    computed: {
      name: {
        get() {
          return this.$store.state.myModule.name;
        },
        set(value) {
          this.$store.commit("updateName", value);
        }
      },
      email: {
        get() {
          return this.$store.state.myModule.email;
        },
        set(value) {
          this.$store.commit("updateEmail", value);
        }
      },
      phone: {
        get() {
          return this.$store.state.myModule.name;
        },
        set(value) {
          this.$store.commit("updatePhone", value);
        }
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
