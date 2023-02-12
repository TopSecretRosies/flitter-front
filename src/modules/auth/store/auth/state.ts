

import { Users } from '@/models/users';
import { Auth } from '../../../../models/auth';


export interface IAuthState {
  auth: Auth[],
  isLoading: boolean,
  token: Auth |null ,

  
}

function state(): IAuthState {

  return{
    auth: [],
    isLoading: false,
    token: null,
  
    
    
  }
}

export default state