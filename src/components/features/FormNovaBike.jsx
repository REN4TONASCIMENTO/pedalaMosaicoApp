import React, { useState } from 'react';
import { Bike, Hash, Tag, Info, Save, X } from 'lucide-react';

export default function FormNovaBike({ onSalvar, onCancelar }) {
  const [dados, setDados] = useState({
    codigo: '',
    modelo: '',
    categoria: 'Adulto',
    status: 'disponivel',
    observacao: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(dados);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-mosaico-dark flex items-center gap-2">
          <Plus className="text-mosaico-green" />
          Cadastrar Nova Bicicleta
        </h2>
        <button onClick={onCancelar} className="text-slate-400 hover:text-red-500 transition-colors">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Código Identificador */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Código / ID</label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none"
                placeholder="Ex: MTB-001"
                onChange={(e) => setDados({...dados, codigo: e.target.value.toUpperCase()})}
              />
            </div>
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Categoria</label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none appearance-none"
                onChange={(e) => setDados({...dados, categoria: e.target.value})}
              >
                <option value="Adulto">Adulto (MTB/Urbana)</option>
                <option value="Kids">Infantil / Kids</option>
                <option value="Eletrica">Elétrica</option>
                <option value="Premium">Premium / Carbono</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modelo */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Modelo da Bike</label>
          <div className="relative">
            <Bike className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none"
              placeholder="Ex: Caloi Explorer Expert"
              onChange={(e) => setDados({...dados, modelo: e.target.value})}
            />
          </div>
        </div>

        {/* Observações */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Observações Técnicas</label>
          <div className="relative">
            <Info className="absolute left-3 top-3 text-slate-400" size={18} />
            <textarea 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-mosaico-blue outline-none h-24 resize-none"
              placeholder="Ex: Detalhes sobre pneus, última revisão ou acessórios inclusos..."
              onChange={(e) => setDados({...dados, observacao: e.target.value})}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            type="button"
            onClick={onCancelar}
            className="flex-1 px-6 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="flex-1 bg-mosaico-dark text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:brightness-125 flex items-center justify-center gap-2 transition-all"
          >
            <Save size={20} />
            Salvar no Sistema
          </button>
        </div>
      </form>
    </div>
  );
}