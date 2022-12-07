<template>
  <v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

  <v-app-bar app>
    <!-- -->
    <router-link to="/">
      <!-- <v-btn>Home</v-btn> -->
      <div data-cy="navmenu" class="h-1/5 py-8 navmenu">
        HOME
      </div>
    </router-link>
    <v-divider vertical></v-divider>
    <router-link to="/about">
      <!-- <v-btn>About</v-btn> -->
      <div data-cy="navmenu" class="h-1/5 py-8 navmenu">
        ABOUT
      </div>
    </router-link>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import NavigationHeader from './components/NavigationHeader.vue';
// import NavigationFooter from './components/NavigationFooter.vue';

// import MainContainer from './components/MainContainer.vue';

export default {
  name: 'App'
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

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}

a:visited {
  text-decoration: none;
}

.navmenu {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  /* margin: 10px 10px 10px 10px; */
  padding: 10px 20px 10px 20px;
}

.navmenu:hover {
  color:rgba(22,171,248,1.0);
  background-color: rgba(22,171,248,0.05);
}
</style>
