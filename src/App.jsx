// src/App.jsx
import { Lock } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="container">
        <Lock size={64} strokeWidth={1.5} color="currentColor" />
        <h1>This page is locked due to the current competition</h1>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} cypat.guide – All rights reserved.
      </footer>
    </div>
  );
}

export default App;
