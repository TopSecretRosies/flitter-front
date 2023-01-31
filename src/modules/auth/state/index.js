import actions from '@/modules/auth/state/actions'
import state from '@/modules/auth/state/state'
import getters from '@/modules/auth/state/getters'
import mutations from '@/modules/auth/state/mutations'


const authModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };
  
  export default authModule;