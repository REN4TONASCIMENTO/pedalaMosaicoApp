import React, { useState } from 'react';
import { X, Bike, User, DollarSign, Clock, Send } from 'lucide-react';

export default function ModalAluguel({ bike, onClose, onConfirmar }) {
  const [form, setForm] = useState({
    clienteNome: '',
    clienteTelefone: '',
    valor: '',
    tempoEstimado: '1h',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmar({
      ...form,
      bikeId: bike.id,
      modelo: bike.modelo,
      horaSaida: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Header do Modal */}
        <div className="bg-mosaico-dark p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Bike className="text-mosaico-blue" size={24} />
            <h2 className="text-xl font-bold uppercase tracking-tight">Iniciar Aluguel</h2>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
            <p className="text-xs text-slate-500 uppercase font-bold">Bicicleta Selecionada</p>
            <p className="text-mosaico-dark font-semibold">{bike.modelo} ({bike.codigo})</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Cliente</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none"
                placeholder="Ex: João Silva"
                value={form.clienteNome}
                onChange={(e) => setForm({...form, clienteNome: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp (com DDD)</label>
            <div className="relative">
              <Send className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                type="tel"
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none"
                placeholder="11999998888"
                value={form.clienteTelefone}
                onChange={(e) => setForm({...form, clienteTelefone: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Valor (R$)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  required
                  type="number"
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none"
                  placeholder="20.00"
                  value={form.valor}
                  onChange={(e) => setForm({...form, valor: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tempo</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select 
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none bg-white appearance-none"
                  value={form.tempoEstimado}
                  onChange={(e) => setForm({...form, tempoEstimado: e.target.value})}
                >
                  <option value="1h">1 Hora</option>
                  <option value="2h">2 Horas</option>
                  <option value="Diária">Diária</option>
                </select>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-mosaico-green text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all mt-4"
          >
            Confirmar e Gerar Recibo
          </button>
        </form>
      </div>
    </div>
  );
}