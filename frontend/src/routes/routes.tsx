import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LogIn } from '../pages/LogIn';
import { SignUp } from '../pages/SignUp';
import { Chat } from '../pages/Chat';

export function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
}