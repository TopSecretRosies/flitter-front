
import { MutationTree } from 'vuex';
import { IAuthState } from './state';
import { Users } from '@/models/users';


const mutations: MutationTree<IAuthState> = {
    // Añadimos el token al state
    setToken(state: IAuthState, token: Users) {
        state.token = token;
    },

    // Añadimos el usuario con permisos al state
    setUser(state: IAuthState, auth: Users) {
        state.auth = auth;
    },

    // Sabemos si está cargando  la petición
    setIsLoading(state: IAuthState, value: boolean) {
        state.isLoading = value;
    },

    deleteToken(state: IAuthState) {
        state.token = null;
      },
};

export default mutations;