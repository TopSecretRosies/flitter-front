import actions from '@/store/auth/actions'
import state from '@/store/auth/state'
import getters from '@/store/auth/getters'
import mutations from '@/store/auth/mutations'


const authModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };
  
  export default authModule;