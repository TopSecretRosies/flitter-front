import { computed } from 'vue';
import { useStore } from 'vuex';


const usePublications = () => {
    const store = useStore();

    return {
        //Getters
        publications: computed(()=> store.getters['publications/getPublications']),
        isLoading: computed(() => store.getters['publications/getIsLoading']),

        //Actions
        fetchPublications: () => store.dispatch('publications/fetchPublications'),
        

    }
}

export default usePublications