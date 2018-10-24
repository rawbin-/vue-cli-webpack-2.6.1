import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const keyUtil = {
  capitalize(str) {
    str += '';
    return str.charAt(0).toUpperCase() + str.substring(1);
  },
  getGetterName(keyName) {
    return `get${this.capitalize(keyName)}`;
  },
  getSetterName(keyName) {
    return `set${this.capitalize(keyName)}`;
  },
  getChangeName(keyName) {
    return `update${this.capitalize(keyName)}`;
  }
};

export const generageMutations = (keyList, baseObjGetter) => {
  let targetKeyList = keyList;
  let result = {};
  targetKeyList.forEach(key => {
    result[keyUtil.getChangeName(key)] = (state, payload) => {
      const baseObj = baseObjGetter(state);
      return baseObj[key] = payload;
    }
  });
  return result;
};

const config = {
  strict:true,
  modules: {
    myModule: {
      state: {
        name: '',
        email: '',
        phone: '',
        currentData:{
          infoList: [{}, {}, {}]
        }
      },
      mutations: {
        ...generageMutations(['infoList'], state => state.currentData),
        ...generageMutations(['name', 'email', 'phone'], state => state)
      }
    }
  }
}

const defaultStore = new Vuex.Store(config)


export const generateComputed = (keyList, baseObjGetter, store=defaultStore) => {
  let targetKeyList = keyList;

  let result = {};
  targetKeyList.forEach(key => {
    result[key] = {
      get() {
        const baseObj = baseObjGetter(store.state);
        return baseObj[key]
      },
      set(value) {
        store.commit(keyUtil.getChangeName(key), value);
      }
    }
  });

  return result;
};



export default defaultStore
