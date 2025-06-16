import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormLogin from './components/FormLogin';
import Dashboard from './components/Dashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;