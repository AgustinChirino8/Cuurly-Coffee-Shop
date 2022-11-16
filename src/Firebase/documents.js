import { collection, query, getDocs } from "firebase/firestore";
import { useEffect } from "react";

useEffect(() => {
  (async () => {
    try {
      const q = query(collection(db, "Coffe"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      setProductos();

      if (producto) {
        setProductos(producto);
      } else {
        setProductos([]);
      }
    } catch (error) {
      console.log(error);
    }
  })();
});
