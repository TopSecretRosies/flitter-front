
import { Publications } from '../../models/Publications';
import { Users } from '../../models/users';
 export interface IPublicationState {
    publications: Publications[]
    isLoading: boolean;
    
  
    
 }

 function state(): IPublicationState {
    return {
        publications: [],
        isLoading: false, 
        
        
    }
 }


 export default state;