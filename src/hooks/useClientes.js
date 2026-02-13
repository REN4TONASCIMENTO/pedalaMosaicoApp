import { useState } from 'react';
import { db } from '../config/firebase';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore';

export function useClientes() {
  const [carregando, setCarregando] = useState(false);

  // Busca um cliente pelo CPF exato (ideal para o Modal de Aluguel)
  const buscarClientePorCPF = async (cpf) => {
    setCarregando(true);
    try {
      const q = query(collection(db, 'clientes'), where('cpf', '==', cpf));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() };
      }
      return null;
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      return null;
    } finally {
      setCarregando(false);
    }
  };

  // Cadastra um novo cliente no banco
  const cadastrarCliente = async (dadosCliente) => {
    try {
      const docRef = await addDoc(collection(db, 'clientes'), {
        ...dadosCliente,
        dataCadastro: serverTimestamp(),
        totalAlugueis: 0
      });
      return { sucesso: true, id: docRef.id };
    } catch (error) {
      return { sucesso: false, erro: error.message };
    }
  };

  return { buscarClientePorCPF, cadastrarCliente, carregando };
}