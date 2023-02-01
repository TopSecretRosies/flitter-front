import { Publications } from '../../models/Publications';
 export interface IPublicationState {
    publication: Publications[]
    isLoading: boolean;

 }

 function state(): IPublicationState {
    return {
        publication: [],
        isLoading: false
    }
 }


 export default state;