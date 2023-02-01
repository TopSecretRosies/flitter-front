import state, { IPublicationState } from "./state";
import { Module } from "vuex";
import { IState } from '..'
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const publicationModule: Module<IPublicationState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default publicationModule