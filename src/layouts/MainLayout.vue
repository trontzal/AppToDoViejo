<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          To Do App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      :breakpoint="767"
      class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer class="bg-grey-8 text-white">
      <q-tabs class="text-teal">
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          :icon="link.icon"
          :label="link.title"
          :to="link.to"
          exact/>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    to:"/",
    title: 'ToDo',
    caption: 'Descripcion',
    icon: 'list'
  },
  {
    to:"/settings",
    title: 'Settings',
    caption: 'Descripcion',
    icon: 'settings'
  },
  {
    to:"/about",
    title: 'About',
    caption: 'Descripcion',
    icon: 'man'
  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
.q-drawer {
  .q-router-link--exact-active{
  color: white !important;
  }
}
  @media  screen and (min-width:768px) {
      .q-footer{
        display: none;
      }
  }
</style>
