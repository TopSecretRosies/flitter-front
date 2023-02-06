import { computed } from 'vue';
import { useStore } from 'vuex';
import { Users } from '@/models/users';


const useAuth = () => {
    const store = useStore();
    
    return {
        //Getters
       auth: computed(() => store.getters['auth/getToken']),
       isLoading: computed(() => store.getters["auth/getIsLoading"]),
       getUser: computed(() => store.getters['auth/getUser']),

       //Actions 
       createUser: (data: Users) => store.dispatch('auth/createUser', data),
       fetchToken: (data: Users) => store.dispatch('auth/fectToken', data),
       fetchUser: (token: string) => store.dispatch('auth/fetchUser', token),
       deleteToken: () => store.dispatch('auth/deleteToken')
       
          
    }
}

export default useAuth;