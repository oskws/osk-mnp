import { create } from 'dva-core'

let app, store, dispatch

function createApp(options?: any) {
  if (process.env.NODE_ENV === 'development') {
  }
  app = create()

  // if (!global.registered) models.forEach((model) => app.model(model))
  // global.registered = true
  
  app.model({
    namespace: 'count',
    state: {name: 1},
    reducers: {
      add(state,payload){
        return {name: state.name +1 }
      },

      // preAdd(state,payload){
      //   return {name: state.name -1 }
      // }
    },
    effects: {
      *preAdd({payload}, {call, put}){
        console.log("preAdd")
        yield put({type:'add'})
      }
    }
  })
  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}