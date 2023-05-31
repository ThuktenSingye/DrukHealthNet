import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot } from 'firebase/firestore'

const useFetch = ({ collect }) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsPending(true);

    const unsub = onSnapshot(collection(projectFirestore, collect), (snapshot) => {
      if (!snapshot.empty) {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(docs);
        setIsPending(false);
      } else {
        setError("Could not load data");
        setIsPending(false);
      }
    }, (err) => {
      setError("Error fetching data");
      setIsPending(false);
    });

    return () => unsub();
  }, [collect]);

  return { error, isPending, data };
};

export default useFetch;