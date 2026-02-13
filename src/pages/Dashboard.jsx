import React from 'react';
import { Bike, Users, Wrench, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
    <div className={`p-4 rounded-lg ${colorClass}`}>
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <h3 className="text-2xl font-bold text-mosaico-dark">{value}</h3>
    </div>
  </div>
);

export default function Dashboard() {
  // Valores de exemplo (futuramente virão do Firebase)
  const stats = [
    { label: 'Bikes Disponíveis', value: '12', icon: Bike, color: 'bg-mosaico-green' },
    { label: 'Aluguéis Ativos', value: '05', icon: Clock, color: 'bg-mosaico-blue' },
    { label: 'Em Manutenção', value: '02', icon: Wrench, color: 'bg-mosaico-yellow' },
    { label: 'Clientes Totais', value: '48', icon: Users, color: 'bg-mosaico-dark' },
  ];

  return (
    <div className="space-y-8">
      {/* Cabeçalho do Dashboard */}
      <div>
        <h1 className="text-3xl font-bold text-mosaico-dark">Resumo Geral</h1>
        <p className="text-slate-500">Bem-vindo ao painel da Pedala Mosaico.</p>
      </div>

      {/* Grid de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            colorClass={stat.color}
          />
        ))}
      </div>

      {/* Seção de Atividades Recentes ou Atalhos Rápidos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-mosaico-dark mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-lg hover:bg-mosaico-blue hover:text-white transition-colors font-semibold text-mosaico-dark text-sm">
              + Nova Bike
            </button>
            <button className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-lg hover:bg-mosaico-green hover:text-white transition-colors font-semibold text-mosaico-dark text-sm">
              + Cadastrar Cliente
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
          <p className="text-slate-400 italic">Gráfico de aluguéis por semana (em breve)</p>
        </div>
      </div>
    </div>
  );
}