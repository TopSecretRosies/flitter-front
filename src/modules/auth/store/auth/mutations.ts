
import { MutationTree } from 'vuex';
import { IAuthState } from './state';
import { Users } from '@/models/users';
import { Auth } from '../../../../models/auth';


const mutations: MutationTree<IAuthState> = {
    // Añadimos el token al state
    setToken(state: IAuthState, token: Auth) {
        state.token = token;
    },

    setId(state: IAuthState, id: Users) {
        state.id = id
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