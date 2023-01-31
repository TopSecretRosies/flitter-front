import { useStore } from "vuex"


const useAuth = () => {

    const store = useStore()


    const createUser = async( user ) => {
        console.log(user)
        const resp = await store.dispatch('auth/createUser', user)
        return resp
      
    }


    return {
        store,
        createUser
    }
}

export default useAuth