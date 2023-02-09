export interface Users {
    _id?:       string;
    avatar?: string;
    username:  string;
    email:     string;
    password:  string;
    roles?:     string[];
    createdAt?: string;
    updatedAt?: string;
}
