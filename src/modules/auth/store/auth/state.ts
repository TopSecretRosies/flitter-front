
import { Users } from '../../../../models/users';


export interface IAuthState {
  auth: Users | null,
  isLoading: boolean,
  token: Users |null 
}

function state(): IAuthState {

  return{
    auth: null,
    isLoading: false,
    token: null
  }
}

export default state