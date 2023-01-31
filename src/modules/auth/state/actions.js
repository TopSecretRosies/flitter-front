import authApi from "@/api/authApi"


// eslint-disable-next-line no-unused-vars
export const createUser = async ({ commit }, user) => {

    // eslint-disable-next-line no-unused-vars
    const { name, email, password } = user

    try {

        const { data } = await authApi.post('el resto de la direccion de la api', { email, password, returnSecureToken: true})
        console.log(data)

        //TODO mutation: loginUser

    } catch(error) {
        console.log(error.reponse)
        return{ ok: false, message: '.....'}
    }
}
  