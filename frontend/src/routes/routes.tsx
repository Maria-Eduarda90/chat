import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { LogIn } from '../pages/LogIn';
import { SignUp } from '../pages/SignUp';
import { Chat } from '../pages/Chat';
import { NotFound } from '../pages/NotFound';

function RequireAuth(){
    const useAuth = () => {
        const user = localStorage.getItem('@chat:User');
        if (user) {
            return true;
        } else {
            return false
        }
    }

    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" />
}

export function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<RequireAuth/>}>
                    <Route path="/chat" element={<Chat />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}