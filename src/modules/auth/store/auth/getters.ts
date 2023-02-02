import { GetterTree } from 'vuex';
import { IAuthState } from './state';
import { IState } from '../../../../store/index';



const getters: GetterTree<IAuthState, IState> = {
    getToken(state) {
        return state.token;
    },

    getIsLoading(state) {
        return state.isLoading;
    },

    getAuth(state) {
        return state.auth;
    },
}


export default getters;