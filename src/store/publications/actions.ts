import { ActionTree } from 'vuex';
import { IState } from "..";
import { IPublicationState, PublicationsParams } from './state';
import flitterApi from '../../api/fittlerApi';
import { AxiosResponse } from 'axios';
import { Publications } from '@/models/Publications';

const actions: ActionTree<IPublicationState, IState> = {
    async fetchPublications({commit}, params: PublicationsParams) {
        commit("setIsLoading", true);
        const perPage = 10
        const skip = (params.page - 1) * perPage
        //const sort = (params.sort?.createdAt)
        const{ data } = await flitterApi.get<unknown, AxiosResponse<Publications[]>>(
            `/posts?skip=${skip}&limit=${perPage}`
        );
        commit('setIsLoading', false);
        commit('setPublications', data);
        //console.log(data)
    },
    async createPublications({commit}, post: Publications) {
        const{ data } = await flitterApi.post(
            '/posts', post
        );
        commit('setIsLoading', false);
        commit('setPublications', data);
        console.log(data)
    },

    // Llamamos a la API para poder buscar el producto por su nombre
    async searchPublications({ commit }, postName: string) {
    commit("setIsLoading", true);
    const { data } = await flitterApi.get<unknown, AxiosResponse<Publications>>(
      `/posts/search/${postName}`
    );
    commit("setIsLoading", false);
    commit('setPublications', data);
    console.log(data)
  },



    
};



export default actions