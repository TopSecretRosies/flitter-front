import { Publications } from '../../models/Publications';
 export interface IPublicationState {
    publications: Publications[]
    isLoading: boolean;

 }

 function state(): IPublicationState {
    return {
        publications: [],
        isLoading: false
    }
 }


 export default state;