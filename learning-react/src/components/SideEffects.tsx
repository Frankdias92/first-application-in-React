import { useEffect, useMemo, useState } from "react";

export function SideEffect() {
  const sideEffects = useMemo(() => 
  [
    { id: 1, value: 'Requisições a APIs externas (por exemplo, requisições HTTP)' },
    { id: 2, value: 'Assinaturas de eventos (como o uso de addEventListener)' },
    { id: 3, value: 'Atualização de variáveis fora do estado local do componente' },
    { id: 4, value: 'Manipulação direta do DOM (por exemplo, usando o document.querySelector)' }
  ], []);

  const [products, setProducts] = useState(sideEffects);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    if (search) {
      const newList = sideEffects.filter((item) => {
        return item.value.toLowerCase().includes(search.toLowerCase());
      });
      setProducts(newList);
    } else {
      setProducts(sideEffects)
    }

  }, [search, sideEffects])

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquise aqui"
      />

    
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.value}</p>
        </div>
      ))}

    </div>
  )


}