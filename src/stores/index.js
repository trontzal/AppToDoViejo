import Vue from  'vue'
import Vuex from 'vuex'

import tasks from './store-tasks'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */){
  const Store = new Vuex.Store({
    modules:{
      tasks
    },
    strict: process.env.DEV
  })
  return{
    Store
  }
}
