export interface LoginRequest {
    username: string;
    password: string;
    remember: boolean;
}

export interface User {
    username: string;
    firstname: string;
    lastname: string;
    email:string;
    phoneNumber:string;
    role:string;
}