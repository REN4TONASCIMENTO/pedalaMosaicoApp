import React, { useState } from 'react';
import { Users, ClipboardCheck, AlertCircle, UserPlus, MoreVertical, CheckCircle2, XCircle } from 'lucide-react';

export default function Funcionarios() {
  const [dataAtual] = useState(new Date().toLocaleDateString('pt-BR'));

  // Dados de exemplo (serão integrados ao Firebase posteriormente)
  const staff = [
    { id: 1, nome: 'Ricardo Silva', cargo: 'Mecânico', status: 'presente', ultimaEntrada: '08:00' },
    { id: 2, nome: 'Beatriz Lima', cargo: 'Atendimento', status: 'falta', ultimaEntrada: '-' },
    { id: 3, nome: 'Tiago Santos', cargo: 'Logística', status: 'presente', ultimaEntrada: '08:15' },
  ];

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-mosaico-dark uppercase italic">Controle de Equipe</h1>
          <p className="text-slate-500">Gestão de presenças e observações para o dia {dataAtual}.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-mosaico-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
          <UserPlus size={20} />
          Adicionar Colaborador
        </button>
      </div>

      {/* Resumo Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-mosaico-green flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold">Presentes Hoje</p>
            <h3 className="text-3xl font-bold text-mosaico-dark">02</h3>
          </div>
          <CheckCircle2 className="text-mosaico-green" size={32} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold">Ausências</p>
            <h3 className="text-3xl font-bold text-mosaico-dark">01</h3>
          </div>
          <XCircle className="text-red-500" size={32} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-mosaico-blue flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold">Total Staff</p>
            <h3 className="text-3xl font-bold text-mosaico-dark">03</h3>
          </div>
          <Users className="text-mosaico-blue" size={32} />
        </div>
      </div>

      {/* Lista de Controle */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <h2 className="font-bold text-mosaico-dark flex items-center gap-2">
            <ClipboardCheck size={20} className="text-mosaico-green" />
            Folha de Presença Diária
          </h2>
        </div>
        
        <table className="w-full text-left">
          <thead className="bg-white border-b border-slate-100">
            <tr>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase">Funcionário</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase">Cargo</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Entrada</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Status</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Observação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {staff.map((pessoal) => (
              <tr key={pessoal.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <span className="font-bold text-slate-700">{pessoal.nome}</span>
                </td>
                <td className="p-4 text-slate-500 text-sm">{pessoal.cargo}</td>
                <td className="p-4 text-center text-slate-600 font-mono text-sm">{pessoal.ultimaEntrada}</td>
                <td className="p-4 text-center">
                  <select 
                    defaultValue={pessoal.status}
                    className={`text-[10px] font-bold uppercase px-2 py-1 rounded border-none focus:ring-0 cursor-pointer
                      ${pessoal.status === 'presente' ? 'bg-mosaico-green text-white' : 'bg-red-100 text-red-600'}`}
                  >
                    <option value="presente">Presente</option>
                    <option value="falta">Falta</option>
                    <option value="atraso">Atraso</option>
                  </select>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-300 hover:text-mosaico-yellow transition-colors">
                    <AlertCircle size={20} />
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