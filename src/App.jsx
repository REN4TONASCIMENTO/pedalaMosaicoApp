import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos componentes de Layout
import Sidebar from './components/layout/Sidebar';

// Importação das Páginas (Crie arquivos básicos nestas pastas para não dar erro)
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Clientes from './pages/Clientes';
import Funcionarios from './pages/Funcionarios';

function App() {
  return (
    <Router>
      <div className="flex bg-slate-50 min-h-screen">
        {/* A Sidebar fica fixa à esquerda */}
        <Sidebar />

        {/* Área de conteúdo principal à direita da Sidebar */}
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;