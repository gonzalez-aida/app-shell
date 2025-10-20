# Explora el mundo 🌍

**Explora el mundo** es una **Progressive Web App (PWA)** diseñada para ofrecer una experiencia de guía de viajes fluida y confiable, funcionando **con o sin conexión a internet**, ideal para planificar viajes, descubrir destinos y recibir alertas de proximidad.

---

## Tabla de Contenidos
1. [Características principales](#características-principales)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Agregar a la pantalla de inicio](#agregar-a-la-pantalla-de-inicio)
5. [Dependencias](#dependencias-principales)

---

## Características principales

- **Instalable:** Añade la aplicación a la pantalla de inicio para un acceso rápido.  
- **Modo Offline:** Funciona sin conexión gracias al Service Worker que cachea archivos estáticos.  
- **Sincronización de datos:** Guarda la lista de destinos y notas del itinerario en el almacenamiento local (`localStorage`) para acceso instantáneo si la API no está disponible.  
- **Planificador de itinerario:** Crea, guarda y marca como completadas tareas y notas de viaje.  
- **Geolocalización:** Obtén tu ubicación para recibir alertas de proximidad sobre destinos cercanos.  
- **Notificaciones:** Recibe alertas y mensajes mientras la app está abierta.  

---

## Tecnologías utilizadas

- **React**: Construcción de la interfaz de usuario.  
- **Service Workers API**: Gestión de caché y funcionalidad offline.  
- **Web APIs**: `localStorage`, `Geolocation`, `Notifications`.  
- **Vite**: Herramienta de construcción y bundling de la aplicación.  

---

## Estructura del proyecto
El proyecto sigue una estructura modular estándar para aplicaciones basadas en React y PWA.

├── public/

│ ├── manifest.json # Configuración de PWA (íconos, nombre, tema)

│ ├── service-worker.js # Service Worker para caché (estrategia Cache First) y notificaciones

│   ├── icons/ # Íconos de la aplicación en varios tamaños

└── src/

├── App.jsx # Componente principal de React (Lógica de la app,estado, manejo de APIs)

├── index.jsx # Punto de entrada de React (Montaje en el DOM)

└── App.css # Estilos globales de la aplicación

## Agregar a la pantalla de inicio
Desde un navegador compatible (Chrome), selecciona la opción “Agregar a pantalla de inicio” (o similar, dependiendo del dispositivo) para instalar la PWA.
Por medio de esta url: https://pwa-t1.onrender.com

1. Explorar destinos
La página principal muestra la lista de destinos. Selecciona un destino para ver sus puntos de interés (usando una API remota).

2. Planificador de itinerario
Agrega tareas y notas de viaje en el planificador.

3. Haz click sobre las tareas existentes para marcarlas como completadas.

4. Las notas se guardan automáticamente en el localStorage, permitiendo el acceso offline.

5. Ubicación y alertas
Haz click en “Mi Ubicación” para activar la geolocalización y recibir alertas de proximidad simuladas.

6. Haz click en “Alertas” (solicitar notificaciones) para recibir notificaciones cuando la aplicación esté abierta.

7. Modo Offline
Gracias a la caché del Service Worker y el uso de localStorage, todos los destinos y notas guardadas se pueden consultar sin conexión.

## Dependencias principales

- React, Versión: ^19.1.1: Biblioteca principal para la UI.
- React DOM, Versión: ^19.1.1: Punto de entrada para el renderizado en el navegador.
- Vite, Versión: ^7.1.7: Entorno de desarrollo y bundler.