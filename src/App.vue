<template>
  <!-- App.vue -->

  <v-app inpire  app right>
    <v-navigation-drawer v-model="drawer"   app>
      <!-- -->
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title><router-link to="about">About</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="accent" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container class="mx-4" fluid>
         <div class="d-flex mb-6">
            <router-view></router-view>
         </div>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: true
  }),
  methods: {

  }
};
</script>
<style lang="scss" scoped>
  a{
    color : rgba(0, 0, 0, 0.54);
    text-decoration: none;
  }
</style>