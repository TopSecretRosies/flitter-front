import { Publications } from '../../models/Publications';

export interface IPublicationState {
    publications: Publications[]
    isLoading: boolean;
    
}

export interface PublicationsParams {
   page: number
   //sort: Publications | undefined
   //author: string
   //text: string

}

function state(): IPublicationState {
    return {
        publications: [],
        isLoading: false,
    }
}


 export default state;