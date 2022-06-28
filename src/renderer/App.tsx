import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CompareForm } from './Pages/CompareForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompareForm />} />
        <Route path="/compare" element={<CompareForm />} />
      </Routes>
    </Router>
  );
}
