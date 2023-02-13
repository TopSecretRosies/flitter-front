
import { ActionTree } from 'vuex';
import { IState } from '../../../../store/index';
import { IAuthState } from './state';
import { Users } from '../../../../models/users';
import flitterApi from '../../../../api/fittlerApi';
import router from '@/router';
import { AxiosResponse } from 'axios';


const actions: ActionTree<IAuthState, IState> = {
    // Función para loguearnos
    async fectToken({commit}, auth: Users) { 
        try {
            const { data } = await flitterApi.post('/auth/signin', auth);
            commit('setToken', data);
            localStorage.setItem('token', data.token);
            router.push({name: 'home'})
            console.log(data)
        } catch (err: any) {
            console.log(err.message);
            alert('Usuario no autorizado');
        }
    },

    // FUnción para crear un usuario 
    async createUser({commit}, auth: Users) {
        try {
            const { data } = await flitterApi.post('/auth/signup', auth);
            commit('setToken', data);
            localStorage.setItem('token', data.token);
            router.push({name: 'home'})
            console.log(data)

        } catch (err:any) {
            console.log(err.message)
            alert('Usuario no creado')
        }
    },

    //Función para mostrar el usuario con el que nos logueamos
    async fetchUser({commit}) {
        commit('setIsLoading', true);
        const { data } = await flitterApi.get(
            '/auth/profile'
        );
        commit('setIsLoading', false);
        commit('setUser', data);
        localStorage.setItem('username', data.user.username);
    },

     // Función para borrar el token
    deleteToken({ commit }) {
        commit("deleteToken");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        router.push({ name: "home" });
    },

    // Función para obtener al usuario por su Id
    async fetchUserId({commit}, postId: string) {
        commit('setIsLoading', true);
        const { data } = await flitterApi.get<unknown, AxiosResponse<Users>>(
            `/users/${postId}`
          );
        commit("setIsLoading", false);
        commit("setUser", data);

    }
}

export default actions;
  