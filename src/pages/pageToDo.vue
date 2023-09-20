<template>
  <q-page class="q-pa-md">
    <p>ToDo</p>
    <q-item-label header>General</q-item-label>
    <q-list bordered separator>
    <q-item
      v-ripple
      v-for="task in tasks"
      :key="task.id"
      clickable
      @click="task.completed = !task.completed"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'">

      <q-item-section side top>
        <q-checkbox v-model="task.completed" />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{'text-strikethrough' : task.completed}">{{ task.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <div class="row">
          <div class="collum justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs"/>
          </div>
          <div class="collum">
            <q-item-label caption class="row justify-end">{{ task.dueDate }}</q-item-label>
            <q-item-label caption class="row justify-end">{{ task.dueTime }}</q-item-label>
          </div>
        </div>

      </q-item-section>
    </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      check1: true,
      check2: false,
      check3: false,
    }
  },
  computed:{
    tasks(){
      return this.$store.getters['tasks/tasks']
    }
  }
}
</script>
<style>

</style>
