import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/Index'
import Perfil from './pages/Perfil'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App