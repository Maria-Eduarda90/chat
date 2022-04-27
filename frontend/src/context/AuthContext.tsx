import { createContext, useEffect, useState, useCallback} from 'react';
import { signIn, signUp, SignInProps, SignUpProps, profile } from '../services/resources/user';

type UserProps = {
    id: string;
    name: string;
    email: string;
    password: string;
}

type ContextData = {
    user: UserProps | null;
    userSignIn: (userData: SignInProps) => Promise<UserProps>;
    userSignUp: (userData: SignUpProps) => Promise<UserProps>;
    userSignOut: () => void;
    getCurrentUser: () => Promise<UserProps>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<UserProps | null>(() => {
        const user = localStorage.getItem('@chat:User');
        
        if(user){
            return JSON.parse(user);
        }

        return {} as UserProps;
    });
    console.log('user: ', user);

    const userSignIn = async (userData: SignInProps) => {
        localStorage.clear();
        const { data } = await signIn(userData);

        if(data.token){
            localStorage.setItem('@chat:Token', data.token);
        }

        return getCurrentUser();

    }

    const userSignOut = () => {
        setUser(null);
        localStorage.removeItem('@chat:Token');
        localStorage.removeItem('@chat:User');
        window.location.href = '/';
    }

    const getCurrentUser = async () => {
        const { data } = await profile();
        setUser(data);
        localStorage.setItem('@chat:User', JSON.stringify(user));
        return data[0];
    }

    const userSignUp = async (userData: SignUpProps) => {
        const { data } = await signUp(userData);
        if (data.token) {
            localStorage.setItem('@chat:Token', data.token);
        }

        return getCurrentUser();
    }

    return(
        <AuthContext.Provider value={{ user, userSignIn, userSignUp, userSignOut, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
}