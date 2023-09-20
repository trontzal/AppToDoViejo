  <template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
      >
        <q-list>
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

      <q-footer  class="bg-grey-8 text-white">
          <div class="q-pa-md">
            <div class="q-gutter-y-md" style="max-width: 600px">
              <q-tabs
                v-model="tab"
                class="text-teal"
              >
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="alarm" label="Alarms" />
                <q-tab name="movies" icon="movie" label="Movies" />
              </q-tabs>

              <q-tabs
                v-model="tab"
                inline-label
                class="bg-purple text-white shadow-2"
              >
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="alarm" label="Alarms" />
                <q-tab name="movies" icon="movie" label="Movies" />
              </q-tabs>

              <q-tabs
                v-model="tab"
                no-caps
                class="bg-orange text-white shadow-2"
              >
                <q-tab name="mails" label="Mails" />
                <q-tab name="alarms" label="Alarms" />
                <q-tab name="movies" label="Movies" />
              </q-tabs>

              <q-tabs
                v-model="tab"
                class="bg-teal text-yellow shadow-2"
              >
                <q-tab name="mails" icon="mail" />
                <q-tab name="alarms" icon="alarm" />
                <q-tab name="movies" icon="movie" />
              </q-tabs>

              <q-tabs
                v-model="tab"
                inline-label
                class="bg-primary text-white shadow-2"
              >
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="alarm" label="Alarms" />
                <q-tab name="movies" icon="movie" label="Movies" />
                <q-tab name="photos" icon="photo" label="Photos" />
                <q-tab name="videos" icon="slow_motion_video" label="Videos" />
                <q-tab name="addressbook" icon="people" label="Address Book" />
              </q-tabs>
            </div>
          </div>
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
      link:"#",
      title: 'ToDo',
      caption: 'Descripcion',
      icon: 'list'
    },
    {
      link:"#settings",
      title: 'Settings',
      caption: 'Descripcion',
      icon: 'settings'
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
