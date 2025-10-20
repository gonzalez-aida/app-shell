export default function DestinosHome({ destinos, verDetalles }) {
  return (
    <div className="destinos-grid">
      {destinos.map(d => (
        <div key={d.id} className="card destino-card">
          <h3>{d.nombre}</h3>
          <button onClick={() => verDetalles(d.id)}>Ver lugares</button>
        </div>
      ))}
    </div>
  );
}
