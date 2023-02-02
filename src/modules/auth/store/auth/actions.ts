
import { ActionTree } from 'vuex';
import { IState } from '../../../../store/index';
import { IAuthState } from './state';
import { Users } from '../../../../models/users';
import flitterApi from '../../../../api/fittlerApi';
import router from '@/router';
import { AxiosResponse } from 'axios';
import { Auth } from '../../../../models/auth';

const actions: ActionTree<IAuthState, IState> = {
    // Función para loguearnos
    async fectToken({commit}, auth: Auth) { 
        try {
            const { data } = await flitterApi.post('/login', auth);
            commit('setToken', data);
            localStorage.setItem('token', data.access_token);
            router.push({name: 'home'})
        } catch (err: any) {
            console.log(err.message);
            alert('Usuario no autorizado');
        }
    },

    //Función para mostrar el usuario con el que nos logueamos
    async fetchUser({commit}) {
        commit('setIsLoading', true);
        const { data } = await flitterApi.get<unknown, AxiosResponse<Users>>(
            '/users/'
        );
        commit('setIsLoading', false);
        commit('setUser', data);
        localStorage.setItem('name', data.name);
    },

     // Función para borrar el token
    deleteToken({ commit }) {
        commit("deleteToken");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        router.push({ name: "auth" });
    },
}

export default actions;
  