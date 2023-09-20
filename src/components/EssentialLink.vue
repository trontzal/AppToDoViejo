<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    v-bind:class="{ 'selected-link': isActiveRoute }"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'; // Importa useRoute desde vue-router

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActiveRoute() {
      const route = useRoute()
      return this.title === route.name
    }
  }
})
</script>

<style>
.selected-link {
  color: blue;
}
</style>
