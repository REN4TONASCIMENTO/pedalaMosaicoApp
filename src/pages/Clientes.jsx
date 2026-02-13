import React, { useState } from 'react';
import { UserPlus, Search, Phone, Fingerprint, History, MoreHorizontal } from 'lucide-react';

export default function Clientes() {
  const [filtroBusca, setFiltroBusca] = useState('');

  // Dados de exemplo para visualização (virão do Firestore)
  const clientesExemplo = [
    { id: 1, nome: 'Carlos Oliveira', cpf: '123.456.789-00', whatsapp: '11 99999-8888', totalAlugueis: 15 },
    { id: 2, nome: 'Ana Souza', cpf: '987.654.321-11', whatsapp: '11 97777-6666', totalAlugueis: 3 },
    { id: 3, nome: 'Marcos Santos', cpf: '456.123.789-55', whatsapp: '11 98888-7777', totalAlugueis: 22 },
  ];

  return (
    <div className="space-y-6">
      {/* Header com Ação de Cadastro */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-mosaico-dark uppercase italic">Gestão de Clientes</h1>
          <p className="text-slate-500">Cadastre novos clientes ou consulte o histórico de usuários antigos.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-mosaico-blue text-mosaico-dark px-6 py-3 rounded-xl font-bold hover:bg-opacity-80 transition-all shadow-md active:scale-95">
          <UserPlus size={20} />
          Novo Cliente
        </button>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Buscar por Nome ou CPF..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue focus:outline-none"
            value={filtroBusca}
            onChange={(e) => setFiltroBusca(e.target.value)}
          />
        </div>
      </div>

      {/* Tabela de Clientes */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 font-semibold text-mosaico-dark text-sm">CLIENTE</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm">CPF</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm">CONTATO</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm text-center">HISTÓRICO</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm text-right">AÇÕES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {clientesExemplo.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <span className="font-bold text-slate-700">{cliente.nome}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Fingerprint size={14} className="text-mosaico-blue" />
                    {cliente.cpf}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Phone size={14} className="text-mosaico-green" />
                    {cliente.whatsapp}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600">
                    <History size={12} />
                    {cliente.totalAlugueis} locações
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-mosaico-dark">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}