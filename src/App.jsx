import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DestinosHome from './components/DestinosHome';
import DetallesDestino from './components/DetallesDestino';
import Planificador from './components/Planificador';

const API_URL = 'https://pwa-t1-s.onrender.com/api/destinos';

function App() {
  const [destinosList, setDestinosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [selectedDestinoId, setSelectedDestinoId] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);

  // 1. Cargar destinos
  useEffect(() => {
    fetch(API_URL)
      .then(resp => {
        if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
        return resp.json();
      })
      .then(data => {
        if (data.length > 0) {
          setDestinosList(data);
          localStorage.setItem('destinos_offline', JSON.stringify(data));
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn('Usando datos offline por error:', err);
        setApiError(true);
        const stored = localStorage.getItem('destinos_offline');
        if (stored) setDestinosList(JSON.parse(stored));
        setLoading(false);
      });
  }, []);

  // 2. Notificaciones
  const solicitarNotificaciones = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(p => {
        if (p === 'granted') {
          new Notification('¡Guía de Viajes Querétaro!', {
            body: '¡Explora los mejores destinos!',
            icon: '/icons/icon-192x192.png'
          });
        } else alert('Permiso de notificaciones denegado.');
      });
    } else alert('Tu navegador no soporta notificaciones.');
  };

  // 3. Ubicación
  const obtenerUbicacion = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUbicacion({ lat: latitude, long: longitude });
          alert(`Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`);
        },
        (error) => {
          alert('Error al obtener ubicación: ' + error.message);
        }
      );
    } else {
      alert('Tu navegador no soporta geolocalización.');
    }
  };

  if (loading) return <div className="loading">Cargando destinos...</div>;

  return (
    <div className="app-container">
      <Header />

      <main>
        <div className="acciones">
          <button onClick={solicitarNotificaciones}>Notificaciones</button>
          <button onClick={obtenerUbicacion}>Mi ubicación</button>
          {ubicacion && <p>Lat: {ubicacion.lat.toFixed(4)}, Long: {ubicacion.long.toFixed(4)}</p>}
          {apiError && <p className="offline">Modo Offline</p>}
        </div>

        {selectedDestinoId ? (
          <DetallesDestino id={selectedDestinoId} volver={() => setSelectedDestinoId(null)} />
        ) : (
          <>
            <DestinosHome destinos={destinosList} verDetalles={setSelectedDestinoId} />
            <Planificador />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
