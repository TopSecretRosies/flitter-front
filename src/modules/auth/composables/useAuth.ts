import { computed } from 'vue';
import { useStore } from 'vuex';
import { Users } from '@/models/users';
import { Auth } from '../../../models/auth';


const useAuth = () => {
    const store = useStore();
    
    return {
        //Getters
       auth: computed(() => store.getters['auth/getToken']),
       isLoading: computed(() => store.getters["auth/getIsLoading"]),
       getUser: computed(() => store.getters['auth/getUser']),
       //Actions 
       createUser: (data: Users) => store.dispatch('auth/createUser', data),
       fetchToken: (data: Auth) => store.dispatch('auth/fectToken', data),
       fetchUser: (token: string) => store.dispatch('auth/fetchUser', token),
       deleteToken: () => store.dispatch('auth/deleteToken'),
       fetchUserId: (postId: string) => store.dispatch('auth/fetchUserId', postId)
       
          
    }
}

export default useAuth;