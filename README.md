# 🚲 Pedala Mosaico - Gestão de Aluguéis

Sistema administrativo interno desenvolvido para a **Pedala Mosaico**, focado no controle de frota, cadastro de clientes e automação de processos para locação de bicicletas.

## 🎨 Identidade Visual (Baseada na Logo)
As cores do sistema foram extraídas diretamente da identidade visual da empresa:
* **Azul Principal (Light):** `#8CC9E0`
* **Verde Sucesso/Disponível:** `#4B8B3B`
* **Azul Petróleo (Dark):** `#0B3039`
* **Amarelo Alerta/Manutenção:** `#FFC107`

## 🚀 Funcionalidades
- **Dashboard:** Visão rápida da frota (bikes disponíveis, alugadas e em manutenção).
- **Inventário:** Controle total de estoque com filtros por categoria e status.
- **Clientes:** Cadastro de novos usuários e busca de clientes antigos por CPF.
- **Módulo de Aluguel:** Modal interativo para registro de locação.
- **Recibo WhatsApp:** Geração automática de link para envio de recibo virtual detalhado.
- **Controle de Staff:** Registro diário de presença e observações de funcionários.

## 🛠️ Stack Tecnológica
- **Framework:** React.js (via Vite)
- **Estilização:** Tailwind CSS
- **Banco de Dados:** Firebase Firestore (NoSQL)
- **Ícones:** Lucide React

## 📂 Estrutura de Pastas
```text
src/
 ├── assets/         # Imagens e logos
 ├── components/     # Componentes UI (Sidebar, Cards, Modais)
 ├── config/         # Configuração do Firebase SDK
 ├── contexts/       # Gerenciamento de estado global
 ├── hooks/          # Lógica de conexão (Bikes, Clientes, Aluguéis)
 ├── pages/          # Telas (Dashboard, Inventário, Clientes, Staff)
 ├── services/       # Chamadas de API e serviços externos
 └── utils/          # Formatadores e ajudantes
