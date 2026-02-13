import React, { useState } from 'react';
import { Search, Plus, Filter, Bike, MoreVertical } from 'lucide-react';
// 1. IMPORTAR O MODAL AQUI
import ModalAluguel from '../components/features/ModalAluguel';

const statusConfig = {
  disponivel: { label: 'Disponível', css: 'bg-mosaico-green text-white' },
  alugada: { label: 'Alugada', css: 'bg-red-500 text-white' },
  manutencao: { label: 'Manutenção', css: 'bg-mosaico-yellow text-mosaico-dark' },
};

export default function Inventario() {
  const [busca, setBusca] = useState('');
  
  // 2. ADICIONAR ESTADOS PARA CONTROLAR O MODAL
  const [modalAberto, setModalAberto] = useState(false);
  const [bikeSelecionada, setBikeSelecionada] = useState(null);

  // 3. FUNÇÃO QUE FAZ A INTEGRAÇÃO COM O WHATSAPP
  const confirmarAluguel = (dadosDoAluguel) => {
    // Aqui futuramente você colocará o código para salvar no Firebase
    console.log("Salvando no Firebase...", dadosDoAluguel);

    // Formatação da Mensagem do WhatsApp
    const saudacao = "Olá! Segue o seu recibo da *Pedala Mosaico*:";
    const corpoMensagem = 
      `%0A%0A🚲 *Bike:* ${dadosDoAluguel.modelo}` +
      `%0A👤 *Cliente:* ${dadosDoAluguel.clienteNome}` +
      `%0A💰 *Valor:* R$ ${dadosDoAluguel.valor}` +
      `%0A🕒 *Saída:* ${dadosDoAluguel.horaSaida}` +
      `%0A⏳ *Duração:* ${dadosDoAluguel.tempoEstimado}`;
    
    const linkWhatsApp = `https://wa.me/55${dadosDoAluguel.clienteTelefone}?text=${saudacao}${corpoMensagem}`;

    // Abre o WhatsApp e fecha o modal
    window.open(linkWhatsApp, '_blank');
    setModalAberto(false);
  };

  const bikes = [
    { id: 1, codigo: 'MTB-001', modelo: 'Mountain Bike Aro 29', categoria: 'Adulto', status: 'disponivel' },
    { id: 2, codigo: 'URB-042', modelo: 'Urbana Retrô Luxo', categoria: 'Urbana', status: 'alugada' },
    { id: 3, codigo: 'KID-005', modelo: 'Infantil Cross', categoria: 'Kids', status: 'manutencao' },
  ];

  return (
    <div className="space-y-6">
      {/* Cabeçalho e Barra de Filtros (Código mantido igual) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-mosaico-dark italic uppercase">Inventário de Bikes</h1>
          <p className="text-slate-500">Gerencie e monitore toda a sua frota em um só lugar.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-mosaico-green hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
          <Plus size={20} />
          Cadastrar Nova Bike
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Buscar por código ou modelo..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mosaico-blue"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
          <Filter size={18} />
          Filtros Avançados
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 font-semibold text-mosaico-dark text-sm uppercase">Código</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm uppercase">Modelo</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm uppercase">Categoria</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm uppercase">Status</th>
              <th className="p-4 font-semibold text-mosaico-dark text-sm uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {bikes.map((bike) => (
              <tr key={bike.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer" 
                  // 4. CLICAR NA LINHA OU BOTÃO ABRE O MODAL
                  onClick={() => {
                    if(bike.status === 'disponivel') {
                      setBikeSelecionada(bike);
                      setModalAberto(true);
                    }
                  }}>
                <td className="p-4 font-mono text-xs font-bold text-slate-600">{bike.codigo}</td>
                <td className="p-4 text-slate-700 font-medium">{bike.modelo}</td>
                <td className="p-4 text-slate-500 text-sm">{bike.categoria}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${statusConfig[bike.status].css}`}>
                    {statusConfig[bike.status].label}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-mosaico-dark p-1">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5. ADICIONAR O COMPONENTE DO MODAL AQUI NO FINAL */}
      {modalAberto && (
        <ModalAluguel 
          bike={bikeSelecionada} 
          onClose={() => setModalAberto(false)} 
          onConfirmar={confirmarAluguel} 
        />
      )}
    </div>
  );
}