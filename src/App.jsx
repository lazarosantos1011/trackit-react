import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/FormLogin/FormLogin';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;