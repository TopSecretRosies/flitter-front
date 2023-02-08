import { Auth } from '@/models/auth';
import { Publications } from '../../models/Publications';
 export interface IPublicationState {
    publications: Publications[]
    isLoading: boolean;
    token: Auth |null ,
 }

 function state(): IPublicationState {
    return {
        publications: [],
        isLoading: false, 
        token: null
    }
 }


 export default state;