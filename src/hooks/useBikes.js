import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';

export function useBikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Escuta em tempo real: se você mudar algo no celular, 
    // o PC atualiza sozinho sem refresh
    const unsubscribe = onSnapshot(collection(db, 'bikes'), (snapshot) => {
      const listaBikes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBikes(listaBikes);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Função para mudar status (Alugada, Disponível, Manutenção)
  const atualizarStatusBike = async (bikeId, novoStatus) => {
    const bikeRef = doc(db, 'bikes', bikeId);
    await updateDoc(bikeRef, { status: novoStatus });
  };

  return { bikes, loading, atualizarStatusBike };
}