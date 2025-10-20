import { useState, useEffect } from 'react';

export default function Planificador() {
  const [itinerario, setItinerario] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('itinerario_notas');
    if (saved) setItinerario(JSON.parse(saved));
  }, []);

  const guardar = (nuevo) => {
    setItinerario(nuevo);
    localStorage.setItem('itinerario_notas', JSON.stringify(nuevo));
  };

  const agregar = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    const nueva = { id: Date.now(), texto: nuevaTarea.trim(), completada: false };
    guardar([...itinerario, nueva]);
    setNuevaTarea('');
  };

  const toggle = (id) => {
    guardar(itinerario.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  return (
    <div className="card planificador-card">
      <h3>Planificador de itinerarios</h3>
      <form onSubmit={agregar}>
        <input
          type="text"
          placeholder="Agregar tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {itinerario.map(t => (
          <li
            key={t.id}
            onClick={() => toggle(t.id)}
            style={{ textDecoration: t.completada ? 'line-through' : 'none' }}
          >
            {t.texto}
          </li>
        ))}
      </ul>
      {itinerario.length > 0 && (
        <button onClick={() => guardar([])}>Limpiar itinerario</button>
      )}
    </div>
  );
}
