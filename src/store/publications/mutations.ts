import { MutationTree } from "vuex";
import { IPublicationState } from "./state";
import { Publications } from '../../models/Publications';




const  mutations: MutationTree<IPublicationState> = {
    setPublications(state: IPublicationState, publication: Publications[]) {
        state.publication = publication;
    },

    setIsLoading(state: IPublicationState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations