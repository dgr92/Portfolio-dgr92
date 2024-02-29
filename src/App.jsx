import { HomePage } from './pages/HomePage';
import { FullProjectList } from './pages/FullProjectList';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<FullProjectList />} />
      </Routes>
    </div>
  );
}

export default App;
