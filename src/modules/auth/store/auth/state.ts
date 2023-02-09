

import { Users } from '@/models/users';
import { Auth } from '../../../../models/auth';


export interface IAuthState {
  auth: Auth | null,
  isLoading: boolean,
  token: Auth |null ,
  
}

function state(): IAuthState {

  return{
    auth: null,
    isLoading: false,
    token: null,
    
    
  }
}

export default state