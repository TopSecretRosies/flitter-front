import { createStore } from 'vuex'
import { Publications } from '../models/Publications';
import publicationModule from './publications/index';
import authModule from '../modules/auth/store/auth/index';

export interface IState {
  publications: Publications| null;
}

export default createStore<IState>({
  state: {
    publications: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    publications: publicationModule,
    auth: authModule
   
  }
})
