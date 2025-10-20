import { useState, useEffect } from 'react';

export default function DetallesDestino({ id, volver }) {
  const [puntos, setPuntos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pwa-t1-s.onrender.com/api/destinos/${id}/puntos`)
      .then(resp => resp.json())
      .then(data => setPuntos(Array.isArray(data) ? data : []))
      .catch(() => setPuntos([]))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="detalle-card">
      <button onClick={volver}>← Volver</button>
      {loading ? (
        <p>Cargando puntos...</p>
      ) : (
        <ul>
          {puntos.length ? puntos.map(p => <li key={p.id}>{p.nombre}</li>) :
          <li>no se encontraron puntos de interés.</li>}
        </ul>
      )}
    </div>
  );
}
