export interface Publications {
    _id?:       string;
    text:      string;
    createdAt?: string;
    updatedAt?: string;
    author?:   [{username: string}];
    image:    string;
  
}
