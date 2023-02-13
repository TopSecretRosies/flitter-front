export interface Publications {
    _id?:       string;
    text:      string;
    createdAt?: string;
    updatedAt?: string;
    author?:   [{id: string, username: string, avatar: string}];
    image:    string;
  
}
