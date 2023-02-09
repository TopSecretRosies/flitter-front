import { MutationTree } from "vuex";
import { IPublicationState } from "./state";
import { Publications } from '../../models/Publications';
import { Users } from '../../models/users';




const  mutations: MutationTree<IPublicationState> = {
    setPublications(state: IPublicationState, publications: Publications[]) {
        state.publications = publications;
    },

    setIsLoading(state: IPublicationState, value: boolean) {
        state.isLoading = value;
    },


}

export default mutations