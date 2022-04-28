import api from '../api';

export interface SignInProps {
    email: string;
    password: string;
}

export interface SignUpProps {
    name: string;
    email: string;
    password: string;
}

export const signIn =  (data: SignInProps) => {
    return api.post("/signin", data);
}

export const profile =  () => {
    return api.get("/profile");
}

export const signUp =  (data: SignUpProps) => {
    return api.post('/signup', data);
}