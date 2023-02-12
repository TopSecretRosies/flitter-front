import { computed } from 'vue';
import { useStore } from 'vuex';
import { Publications } from '../models/Publications';


const usePublications = () => {
    const store = useStore();

    return {
        //Getters
        publications: computed(()=> store.getters['publications/getPublications']),
        isLoading: computed(() => store.getters['publications/getIsLoading']),
        

        //Actions
        fetchPublications: () => store.dispatch('publications/fetchPublications'),
        createPublications: (data: Publications) => store.dispatch('publications/createPublications', data),
        searchPublications: (postName: string) => {
            store.dispatch("publications/searchPublications", postName)
        }

    }
}

export default usePublications