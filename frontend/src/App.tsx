import './global/global.css';
import { Rotas } from './routes/routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  )
}

export default App
