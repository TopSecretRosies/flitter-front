import { GetterTree } from "vuex";
import { IPublicationState } from "./state";
import { IState } from '../index';



const getters: GetterTree<IPublicationState, IState> = {
    getPublications(state){
        return state.publication
    },

    getIsLoading(state) {
        return state.isLoading
    }
}

export default getters;