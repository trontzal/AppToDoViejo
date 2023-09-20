const state = {
  tasks: [
    {
      id: 1,
      name: "Go to shop",
      completed: false,
      dueDate:"12/12/2015",
      dueTime: "23:00"
    },
    {
      id: 2,
      name: "Get bananas",
      completed: false,
      dueDate:"3/1/2016",
      dueTime: "8:00"
    },
    {
      id: 3,
      name: "Go to the party",
      completed: false,
      dueDate:"24/1/2016",
      dueTime: "19:00"
    },
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) =>{
    return state.tasks
  }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
