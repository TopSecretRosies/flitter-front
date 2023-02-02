import { ActionTree } from 'vuex';
import { IState } from "..";
import { IPublicationState } from './state';
import flitterApi from '../../api/fittlerApi';
import { AxiosResponse } from 'axios';
import { Publications } from '@/models/Publications';

const actions: ActionTree<IPublicationState, IState> = {
    async fetchPublications({commit}) {
        commit("setIsLoading", true);
        const{ data } = await flitterApi.get<unknown, AxiosResponse<Publications[]>>(
            '/posts'
        );
        commit('setIsLoading', false);
        commit('setPublications', data);
        console.log(data)
    }
};

export default actions