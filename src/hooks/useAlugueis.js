import { db } from '../config/firebase';
import { collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

export function useAlugueis() {
  
  const realizarLocacao = async (dadosAluguel) => {
    try {
      // 1. Cria o registro na coleção de aluguéis
      await addDoc(collection(db, 'alugueis'), {
        ...dadosAluguel,
        dataCriacao: serverTimestamp(),
        status: 'ativo'
      });

      // 2. Atualiza a bike selecionada para "alugada" automaticamente
      const bikeRef = doc(db, 'bikes', dadosAluguel.bikeId);
      await updateDoc(bikeRef, { status: 'alugada' });

      return { sucesso: true };
    } catch (error) {
      console.error("Erro ao locar:", error);
      return { sucesso: false, erro: error.message };
    }
  };

  return { realizarLocacao };
}