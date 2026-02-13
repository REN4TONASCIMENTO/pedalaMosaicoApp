import React from 'react';
import { LayoutDashboard, Bike, Users, CalendarCheck, Settings, MessageSquare } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
    ${active 
      ? 'bg-mosaico-green text-white shadow-md' 
      : 'text-slate-300 hover:bg-mosaico-blue hover:text-mosaico-dark'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-mosaico-dark flex flex-col p-4 shadow-xl fixed left-0 top-0">
      {/* Logo e Nome */}
      <div className="flex flex-col items-center mb-10 mt-4">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 mb-2">
           {/* Aqui você colocará a imagem da logo futuramente */}
           <Bike className="text-mosaico-dark" size={40} />
        </div>
        <h1 className="text-white font-bold text-lg tracking-widest italic uppercase">
          Pedala <span className="text-mosaico-blue">Mosaico</span>
        </h1>
      </div>

      {/* Navegação */}
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Bike} label="Inventário / Bikes" />
        <SidebarItem icon={Users} label="Clientes" />
        <SidebarItem icon={CalendarCheck} label="Controle Staff" />
        <SidebarItem icon={MessageSquare} label="Mensagens / Recibos" />
      </nav>

      {/* Footer da Sidebar */}
      <div className="mt-auto border-t border-slate-700 pt-4">
        <SidebarItem icon={Settings} label="Configurações" />
        <p className="text-[10px] text-slate-500 text-center mt-4 uppercase">
          Painel Administrativo v1.0
        </p>
      </div>
    </aside>
  );
}